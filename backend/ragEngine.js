/**
 * RAG Engine — TF-IDF Embeddings + Cosine Similarity Retrieval
 *
 * Precomputes TF-IDF vectors for all knowledge-base documents at startup.
 * At query time, only the query vector is computed and compared.
 */

const documents = require("./knowledgeBase");

// ── Internal State ──
let vocabulary = {};   // term → index
let vocabSize = 0;
let idfValues = {};    // term → idf
let docVectors = [];   // [{ id, vector, content, metadata }]

// ── Text Pre-processing ──
function tokenize(text) {
    const cleaned = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ");

    const tokens = cleaned.split(/\s+/).filter((t) => t.length > 1);

    // Extra step: break long campus names like vnrvjiet into subparts
    const expanded = [];

    tokens.forEach((token) => {
        expanded.push(token);

        // Split if token contains known substrings
        if (token.includes("vnr")) expanded.push("vnr");
        if (token.includes("vjiet")) expanded.push("vjiet");
    });

    return expanded;
}

// ── Build Vocabulary + IDF from corpus ──
function buildVocabulary(docs) {
    const docFreq = {};  // term → number of docs containing term
    const allTerms = new Set();

    docs.forEach((doc) => {
        const terms = new Set(tokenize(doc.content));
        terms.forEach((term) => {
            allTerms.add(term);
            docFreq[term] = (docFreq[term] || 0) + 1;
        });
    });

    let idx = 0;
    allTerms.forEach((term) => {
        vocabulary[term] = idx++;
    });
    vocabSize = idx;

    // IDF = log(N / df)  where N = total docs
    const N = docs.length;
    for (const term in docFreq) {
        idfValues[term] = Math.log(N / docFreq[term]);
    }
}

// ── Compute TF-IDF vector for a text string ──
function computeTfIdfVector(text) {
    const tokens = tokenize(text);
    const tf = {};
    tokens.forEach((t) => {
        tf[t] = (tf[t] || 0) + 1;
    });

    // Normalize TF by total tokens
    const totalTokens = tokens.length || 1;

    const vector = {};
    for (const term in tf) {
        if (vocabulary[term] !== undefined && idfValues[term] !== undefined) {
            vector[vocabulary[term]] = (tf[term] / totalTokens) * idfValues[term];
        }
    }
    return vector;
}

// ── Cosine Similarity (sparse vectors) ──
function cosineSimilarity(vecA, vecB) {
    let dot = 0;
    let magA = 0;
    let magB = 0;

    for (const key in vecA) {
        magA += vecA[key] * vecA[key];
        if (vecB[key] !== undefined) {
            dot += vecA[key] * vecB[key];
        }
    }
    for (const key in vecB) {
        magB += vecB[key] * vecB[key];
    }

    magA = Math.sqrt(magA);
    magB = Math.sqrt(magB);

    if (magA === 0 || magB === 0) return 0;
    return dot / (magA * magB);
}

// ── Initialize: build vocab + precompute all doc vectors ──
function initializeEmbeddings() {
    buildVocabulary(documents);

    docVectors = documents.map((doc) => ({
        id: doc.id,
        content: doc.content,
        metadata: doc.metadata,
        vector: computeTfIdfVector(doc.content),
    }));

    console.log(
        `RAG Engine initialized — vocabulary: ${vocabSize} terms, documents: ${docVectors.length}`
    );
}

// ── Retrieve Top-K documents for a query ──
function retrieveTopK(query, k = 5) {
    const queryVector = computeTfIdfVector(query);

    const scored = docVectors.map((doc) => ({
        id: doc.id,
        content: doc.content,
        metadata: doc.metadata,
        score: cosineSimilarity(queryVector, doc.vector),
    }));

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, k).filter((d) => d.score > 0);
}

module.exports = { initializeEmbeddings, retrieveTopK };
