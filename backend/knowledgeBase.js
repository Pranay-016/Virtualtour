/**
 * Campus Knowledge Base
 * Structured documents for RAG retrieval.
 */

const documents = [
    // ── College General Info ──
    // ── VNR VJIET Official Information ──
    {
        id: "vnrvjiet_overview",
        content: "VNRVJIET (also written as VNR VJIET or Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology) is a private engineering college located in Bachupally, Nizampet Road, Hyderabad, Telangana, India. The college was established in 1995 and is affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH). It is accredited with NAAC A+ grade and NBA accredited programs.",
        metadata: { type: "general" }
    },
    {
        id: "vnrvjiet_overview",
        content: "VNR VJIET stands for Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology. It is a private engineering college located in Bachupally, Nizampet Road, Hyderabad, Telangana, India. The college was established in 1995 and is affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH). It is accredited with NAAC A+ grade and NBA accredited programs.",
        metadata: { type: "general" }
    },
    {
        id: "vnrvjiet_location",
        content: "VNR VJIET is located at Bachupally, Nizampet Road, Hyderabad - 500090, Telangana, India. It is situated in a well-developed area and is easily accessible by road transport. The campus is approximately 25 kilometers from Hyderabad city center.",
        metadata: { type: "location" }
    },
    {
        id: "vnrvjiet_departments",
        content: "VNR VJIET offers undergraduate and postgraduate programs in departments including Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Electrical and Electronics Engineering (EEE), Mechanical Engineering, Civil Engineering, and Information Technology (IT).",
        metadata: { type: "general" }
    },
    {
        id: "vnrvjiet_placements",
        content: "VNR VJIET has a strong placement record with top companies like TCS, Infosys, Wipro, Cognizant, Amazon, and Microsoft visiting the campus. The Training and Placement Cell actively supports students in internships and full-time placements.",
        metadata: { type: "general" }
    },
    {
        id: "vnrvjiet_campus",
        content: "The VNR VJIET campus includes academic blocks, central library, auditorium, sports complex, hostels, cafeteria, and administrative block. The campus is spread across a large green area with modern infrastructure and laboratory facilities.",
        metadata: { type: "general" }
    },
    {
        id: "college_overview",
        content:
            "Our college is a premier engineering institution established in 2000. It is affiliated with the state university and approved by AICTE. The campus spans over 50 acres of lush green land with modern infrastructure, smart classrooms, well-equipped laboratories, and a vibrant student community of over 5,000 students.",
        metadata: { type: "general" },
    },
    {
        id: "college_vision",
        content:
            "The vision of the college is to be a center of excellence in technical education and research. The mission is to produce competent engineers and professionals who contribute to society through innovation and ethical practices. The college values academic integrity, inclusivity, and continuous improvement.",
        metadata: { type: "general" },
    },
    {
        id: "college_timings",
        content:
            "College working hours are from 9:00 AM to 4:30 PM, Monday through Saturday. The administrative office is open from 9:30 AM to 5:00 PM on weekdays. The library is open from 8:00 AM to 8:00 PM on all working days. Sunday is a holiday.",
        metadata: { type: "general" },
    },

    // ── Departments (VNR VJIET) ──
    {
        id: "dept_cse",
        content:
            "The Computer Science and Engineering (CSE) department at VNR VJIET is located on the 1st floor of E Block. HOD: Dr. V. Baby. To navigate to the CSE department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → E Block (E Block is present opposite to B Block).",
        metadata: { type: "department" },
    },
    {
        id: "dept_csbs",
        content:
            "The Computer Science and Business Systems (CSBS) department at VNR VJIET is located on the 1st floor of E Block. HOD: Dr. V. Baby. To navigate to the CSBS department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → E Block (E Block is present opposite to B Block).",
        metadata: { type: "department" },
    },
    {
        id: "dept_aiml",
        content:
            "The Artificial Intelligence and Machine Learning (AIML) department at VNR VJIET is located on the 2nd floor of E Block. HOD: Dr. Sagar Yeruva. To navigate to the AIML department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → E Block (E Block is present opposite to B Block).",
        metadata: { type: "department" },
    },
    {
        id: "dept_iot",
        content:
            "The Internet of Things (IoT) department at VNR VJIET is located on the 2nd floor of E Block. HOD: Dr. Sagar Yeruva. To navigate to the IoT department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → E Block (E Block is present opposite to B Block).",
        metadata: { type: "department" },
    },
    {
        id: "dept_ds",
        content:
            "The Data Science department at VNR VJIET is located on the 4th floor of E Block. HOD: Dr. T. Sunil Kumar. To navigate to the Data Science department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → E Block (E Block is present opposite to B Block).",
        metadata: { type: "department" },
    },
    {
        id: "dept_cyber",
        content:
            "The Cyber Security department at VNR VJIET is located on the 5th floor of E Block. HOD: Dr. T. Sunil Kumar. To navigate to the Cyber Security department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → E Block (E Block is present opposite to B Block).",
        metadata: { type: "department" },
    },
    {
        id: "dept_it",
        content:
            "The Information Technology (IT) department at VNR VJIET is located on the 1st floor of B Block. HOD: Dr. N. Mangathayaru. To navigate to the IT department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block.",
        metadata: { type: "department" },
    },
    {
        id: "dept_ece",
        content:
            "The Electronics and Communication Engineering (ECE) department at VNR VJIET is located on the 2nd floor of B Block. HOD: Dr. L. Padma Sree. To navigate to the ECE department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block.",
        metadata: { type: "department" },
    },
    {
        id: "dept_eee",
        content:
            "The Electrical and Electronics Engineering (EEE) department at VNR VJIET is located on the 3rd floor of B Block. HOD: Dr. V. Ramesh Babu. To navigate to the EEE department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block.",
        metadata: { type: "department" },
    },
    {
        id: "dept_civil",
        content:
            "The Civil Engineering department at VNR VJIET is located in D Block. HOD: Dr. K. Ramujee. To navigate to the Civil department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → A Block → JSK Greens → D Block.",
        metadata: { type: "department" },
    },
    {
        id: "dept_mech",
        content:
            "The Mechanical Engineering department at VNR VJIET is located in D Block. HOD: Dr. B.V.R. Ravi Kumar. To navigate to the Mechanical department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → A Block → JSK Greens → D Block.",
        metadata: { type: "department" },
    },
    {
        id: "dept_auto",
        content:
            "The Automobile Engineering department at VNR VJIET is located in D Block. HOD: Dr. Shaik Amjad. To navigate to the Automobile department from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → A Block → JSK Greens → D Block.",
        metadata: { type: "department" },
    },

    // ── Navigation (VNR VJIET Campus) ──
    {
        id: "nav_to_eblock",
        content:
            "To reach E Block from the entrance: Walk from the Entrance to the Circle, then head towards the Ganesh Statue, pass C Block, reach B Block, and E Block is directly opposite to B Block. E Block houses CSE (1st floor), CSBS (1st floor), AIML (2nd floor), IoT (2nd floor), Data Science (4th floor), and Cyber Security (5th floor).",
        metadata: { type: "navigation" },
    },
    {
        id: "nav_to_bblock",
        content:
            "To reach B Block from the entrance: Walk from the Entrance to the Circle, then head towards the Ganesh Statue, pass C Block, and B Block is right ahead. B Block houses IT (1st floor), ECE (2nd floor), and EEE (3rd floor).",
        metadata: { type: "navigation" },
    },
    {
        id: "nav_to_dblock",
        content:
            "To reach D Block from the entrance: Walk from the Entrance to the Circle, then head towards the Ganesh Statue, pass C Block, pass B Block, then pass A Block, go through JSK Greens, and D Block is ahead. D Block houses Civil Engineering, Mechanical Engineering, and Automobile Engineering departments.",
        metadata: { type: "navigation" },
    },
    {
        id: "nav_to_cblock",
        content:
            "To reach C Block from the entrance: Walk from the Entrance to the Circle, then head towards the Ganesh Statue, and C Block is right there. C Block houses the Library (1st floor) and the KS Auditorium (ground floor).",
        metadata: { type: "navigation" },
    },
    {
        id: "nav_to_sports",
        content:
            "To reach the Sports Complex from the entrance: From the Entrance, go right towards the PEB Block, then take a right near the MBA Canteen, and you will reach the Sports Complex.",
        metadata: { type: "navigation" },
    },

    // ── Facilities ──
    {
        id: "library",
        content:
            "The central library at VNR VJIET is located on the 1st floor of C Block. You can take the stairs near the KS Auditorium to reach the library directly. To navigate to C Block from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block. The library houses a large collection of books, journals, and digital resources.",
        metadata: { type: "facility" },
    },
    {
        id: "hostel_boys",
        content:
            "The boys' hostel is located behind the sports complex on the east side of campus. It has 4 blocks (H1–H4) with a total capacity of 1,500 students. Each room is shared by 2-3 students and comes with attached bathrooms, Wi-Fi, and a study table. The hostel has a common mess hall, recreation room with TV and indoor games, laundry service, and 24/7 security. Warden: Mr. Rajesh Gupta. Contact: boyshostel@college.edu.",
        metadata: { type: "facility" },
    },
    {
        id: "hostel_girls",
        content:
            "The girls' hostel is located on the west side of campus near the main gate. It has 2 blocks (GH1–GH2) with a capacity of 800 students. Facilities include attached bathrooms, Wi-Fi, a dedicated mess hall, a common room, gym, and 24/7 security with CCTV surveillance. Warden: Mrs. Sunita Reddy. Contact: girlshostel@college.edu.",
        metadata: { type: "facility" },
    },
    {
        id: "cafeteria",
        content:
            "The campus cafeteria is centrally located between Block A and Block B. It can seat 200 students at a time. It serves breakfast, lunch, snacks, and beverages from 7:30 AM to 7:00 PM. Popular items include South Indian meals, North Indian thali, sandwiches, juice, and coffee. There is also a separate juice bar and a bakery counter.",
        metadata: { type: "facility" },
    },
    {
        id: "ks_auditorium",
        content:
            "The KS Auditorium (KS Audi) at VNR VJIET is located on the ground floor of C Block. It is used for seminars, cultural events, convocations, guest lectures, and conferences. To navigate to the KS Auditorium from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block. The auditorium is on the ground floor of C Block.",
        metadata: { type: "facility" },
    },
    {
        id: "sports_complex",
        content:
            "The sports complex at VNR VJIET includes facilities for cricket, football, basketball, tennis, badminton, volleyball, and indoor games. To navigate to the Sports Complex from the entrance: From the Entrance, go right towards the PEB Block, then take a right near the MBA Canteen, and you will reach the Sports Complex.",
        metadata: { type: "facility" },
    },
    {
        id: "principal_office",
        content:
            "The Principal's office at VNR VJIET is located on the 1st floor of B Block. The current Principal is Dr. B. Chennakesava Rao. To navigate to the Principal's office from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block, then take the stairs to the 1st floor.",
        metadata: { type: "facility" },
    },
    {
        id: "admission_section",
        content:
            "The Admission Section at VNR VJIET is located on the 5th floor of D Block. To navigate to the Admission Section from the entrance, follow this path: Entrance → Circle → Ganesh Statue → C Block → B Block → A Block → JSK Greens (take left) → D Block, then take the elevator or stairs to the 5th floor.",
        metadata: { type: "facility" },
    },
    {
        id: "main_gate",
        content:
            "The main gate is the primary entry and exit point of the campus, located on the south side facing the highway. It has a security checkpoint with 24/7 guards, a visitor registration desk, and boom barriers. Students must carry ID cards. Visitors must register at the security desk. There is a smaller side gate on the north side for staff parking entry.",
        metadata: { type: "facility" },
    },
    {
        id: "parking",
        content:
            "The student parking area is located near the side gate on the north side of campus. There is a separate covered parking zone for faculty near the administrative block. Two-wheeler and four-wheeler parking slots are marked separately. Parking stickers are mandatory and can be obtained from the admin office. Bicycle parking is available near each academic block.",
        metadata: { type: "facility" },
    },
    {
        id: "computer_center",
        content:
            "The central computer center is in Block A, ground floor. It has 200 workstations with high-speed internet, licensed software including MATLAB, AutoCAD, Visual Studio, and Eclipse. It is open to all students for project work, online courses, and research. Timings: 8:30 AM to 6:00 PM. Lab in-charge: Mr. Naveen Kumar.",
        metadata: { type: "facility" },
    },
    {
        id: "medical_center",
        content:
            "The campus medical center is located near the girls' hostel. It has a qualified doctor available from 9:00 AM to 4:00 PM on weekdays, a nurse available full time, and basic first aid and pharmacy services. For emergencies outside hours, an ambulance service is available by calling the campus security. Contact: medical@college.edu.",
        metadata: { type: "facility" },
    },
    {
        id: "placement_cell",
        content:
            "The Training and Placement Cell is on the first floor of the administrative block. It coordinates campus recruitment, internships, and industry training programs. Over 100 companies visit the campus annually, including TCS, Infosys, Wipro, Cognizant, and Amazon. Average package: 5.5 LPA. Highest package: 24 LPA. Placement Officer: Dr. Meena Joshi. Contact: placement@college.edu.",
        metadata: { type: "facility" },
    },
];

module.exports = documents;
