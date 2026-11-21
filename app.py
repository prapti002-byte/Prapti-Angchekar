import streamlit as st

st.set_page_config(
    page_title="Prapti Pradip Angchekar | HR Portfolio",
    page_icon="💼",
    layout="wide"
)

st.markdown("""
<style>
.main {
    padding-top: 1rem;
}
.hero {
    text-align: center;
    padding: 40px;
}
.skill {
    background-color: #e8f0fe;
    padding: 8px 15px;
    border-radius: 20px;
    margin: 5px;
    display: inline-block;
}
.card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    border-left: 5px solid #1e3a8a;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 15px;
}
</style>
""", unsafe_allow_html=True)

# HERO SECTION
st.markdown("""
<div class="hero">
<h1>Prapti Pradip Angchekar</h1>
<h3>HR Professional | PGDM-HR Candidate | HR Operations & Recruitment Enthusiast</h3>

<p>
Passionate about talent acquisition, employee engagement, and HR operations,
dedicated to creating positive workplace experiences.
</p>
</div>
""", unsafe_allow_html=True)

st.download_button(
    "📄 Download Resume",
    data="Upload your PDF resume here",
    file_name="Prapti_Angchekar_Resume.pdf"
)

st.divider()

# ABOUT
st.header("👩 About Me")

st.write("""
Currently pursuing PGDM in Human Resources from Sasmira's Business School, Mumbai (2025–2027).

BMS-HR Graduate with an excellent CGPA of 9.03.

Strong communication, interpersonal, organizational, and problem-solving abilities with a passion for HR Operations, Recruitment, Employee Relations, and Organizational Development.
""")

c1, c2, c3, c4 = st.columns(4)

c1.metric("CGPA", "9.03")
c2.metric("HR Roles", "5+")
c3.metric("Projects", "2")
c4.metric("Certifications", "6+")

st.divider()

# EXPERIENCE
st.header("💼 Professional Experience")

experience = [
    (
        "HR Operations Intern",
        "The People Mosaic",
        "Aug 2026",
        [
            "Candidate coordination",
            "Follow-ups and communication",
            "Record management",
            "Candidate engagement"
        ]
    ),
    (
        "HR Intern",
        "Upskill Tech Solutions Pvt. Ltd.",
        "Apr 2026 – May 2026",
        [
            "Resume screening",
            "Interview scheduling",
            "Recruitment support",
            "Onboarding documentation"
        ]
    ),
    (
        "Assistant Teacher",
        "Shining Star Tutorial",
        "Oct 2024 – Jan 2025",
        []
    ),
    (
        "HR Intern",
        "WillPower Consultancy",
        "Jul 2024 – Aug 2024",
        [
            "Candidate outreach",
            "Interview scheduling",
            "Recruitment coordination"
        ]
    ),
    (
        "Class Teacher",
        "Euphoria Tutorial",
        "Aug 2022 – Aug 2024",
        []
    )
]

for title, company, period, duties in experience:
    st.markdown(f"""
<div class="card">
<h4>{title}</h4>
<b>{company}</b><br>
{period}
</div>
""", unsafe_allow_html=True)

    for d in duties:
        st.write("•", d)

st.divider()

# EDUCATION
st.header("🎓 Education")

st.write("**PGDM (HR)** - Sasmira's Business School, Mumbai (2025–2027)")
st.write("**Bachelor of Management Studies (HR)** - VIVA College (CGPA: 9.03)")
st.write("**HSC:** 65.17%")
st.write("**SSC:** 81.40%")

st.divider()

# SKILLS
st.header("🛠 Skills")

skills = [
    "Recruitment & Selection",
    "Talent Acquisition",
    "Employee Engagement",
    "HR Operations",
    "Interview Coordination",
    "Candidate Screening",
    "Onboarding",
    "HR Documentation",
    "Communication",
    "Leadership",
    "Time Management",
    "Teamwork",
    "Problem Solving",
    "Organizational Skills",
    "Advanced Excel",
    "AI in Business",
    "Digital Marketing"
]

for skill in skills:
    st.markdown(f'<span class="skill">{skill}</span>',
                unsafe_allow_html=True)

st.divider()

# PROJECTS
st.header("📊 Projects")

st.subheader("Employee Stress & Mental Health Study")
st.write("Deenanath Mangeshkar Hospital")
st.write(
    "Research on workplace stress and employee well-being."
)

st.subheader("Recruitment & Selection Effectiveness Study")
st.write("Upskill Tech Solutions")
st.write(
    "Analysis of hiring efficiency and candidate experience."
)

st.divider()

# CERTIFICATIONS
st.header("📜 Certifications")

certifications = [
    "Advanced Excel",
    "AI in Business",
    "Design Thinking",
    "Digital Marketing",
    "NPTEL Basics of Spanish Language",
    "Business Model & Entrepreneurship (NPTEL)"
]

for cert in certifications:
    st.write("✅", cert)

st.divider()

# ACHIEVEMENTS
st.header("🏆 Achievements")

st.write("🥈 Secured 2nd Place in BMS-HR")
st.write("🥈 2nd Prize in Dance Competition")
st.write("🤝 Active participation in CSR initiatives and social welfare activities")

st.divider()

# CONTACT
st.header("📞 Contact")

st.write("📧 Email: praptiangchekar@gmail.com")
st.write("📱 Phone: 8380803963")
st.write("📍 Virar East, Maharashtra, India")
st.write("🔗 LinkedIn: linkedin.com/in/praptiangchekar-b21992360")

st.divider()

st.markdown(
    """
    <center>
    © 2026 Prapti Pradip Angchekar | HR Portfolio
    </center>
    """,
    unsafe_allow_html=True
)