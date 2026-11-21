"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Mail, Phone, MapPin, Linkedin, Award, GraduationCap, Briefcase } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const experiences = [
    { title: 'HR Operations Intern', company: 'The People Mosaic', period: 'Aug 2026', points:['Candidate coordination','Follow-ups and communication','Record management','Candidate engagement']},
    { title: 'HR Intern', company: 'Upskill Tech Solutions Pvt. Ltd.', period: 'Apr 2026 - May 2026', points:['Resume screening','Interview scheduling','Recruitment support','Onboarding documentation']},
    { title: 'Assistant Teacher', company: 'Shining Star Tutorial', period: 'Oct 2024 - Jan 2025', points:['Academic support and mentoring']},
    { title: 'HR Intern', company: 'WillPower Consultancy', period: 'Jul 2024 - Aug 2024', points:['Candidate outreach','Interview scheduling','Recruitment coordination']},
    { title: 'Class Teacher', company: 'Euphoria Tutorial', period: 'Aug 2022 - Aug 2024', points:['Classroom management and engagement']}
  ];

  const skills = ['Recruitment & Selection','Talent Acquisition','Employee Engagement','HR Operations','Interview Coordination','Candidate Screening','Onboarding','HR Documentation','Communication','Leadership','Time Management','Teamwork','Problem Solving','Organizational Skills','Advanced Excel','AI in Business','Digital Marketing'];

  return (
    <main className={dark ? 'dark bg-slate-950 text-white min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      <button onClick={()=>setDark(!dark)} className='fixed top-5 right-5 z-50 p-3 rounded-full bg-blue-600 text-white'>
        {dark ? <Sun /> : <Moon />}
      </button>

      <section className='min-h-screen flex flex-col justify-center items-center text-center px-6'>
        <div className='w-40 h-40 rounded-full bg-gray-300 mb-6 flex items-center justify-center'>Profile</div>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='text-5xl font-bold'>Prapti Pradip Angchekar</motion.h1>
        <p className='text-xl mt-4 text-blue-600'>HR Professional | PGDM-HR Candidate | HR Operations & Recruitment Enthusiast</p>
        <p className='max-w-3xl mt-6'>Passionate about talent acquisition, employee engagement, and HR operations, dedicated to creating positive workplace experiences.</p>
        <div className='flex gap-4 mt-8'>
          <a href='/Prapti-Angchekar-Resume.pdf' className='px-6 py-3 bg-blue-600 text-white rounded-xl'>Download Resume</a>
          <a href='#contact' className='px-6 py-3 border rounded-xl'>Contact Me</a>
        </div>
      </section>

      <section className='max-w-6xl mx-auto p-8'>
        <h2 className='text-3xl font-bold mb-5'>About Me</h2>
        <p>Pursuing PGDM in Human Resources from Sasmira's Business School, Mumbai (2025-2027). BMS-HR Graduate with 9.03 CGPA. Skilled in communication, interpersonal relations, organization, and problem solving with strong interest in HR Operations, Recruitment, Employee Relations, and Organizational Development.</p>
      </section>

      <section className='max-w-6xl mx-auto p-8'>
        <h2 className='text-3xl font-bold mb-6'>Professional Experience</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {experiences.map((e,i)=>(<div key={i} className='p-6 bg-white dark:bg-slate-900 rounded-2xl shadow'><h3 className='font-bold'>{e.title}</h3><p>{e.company}</p><p className='text-sm'>{e.period}</p><ul className='list-disc ml-5 mt-3'>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div>))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto p-8'>
        <h2 className='text-3xl font-bold mb-6'>Education</h2>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='p-5 rounded-xl shadow bg-white dark:bg-slate-900'>PGDM (HR) - Sasmira's Business School (2025-2027)</div>
          <div className='p-5 rounded-xl shadow bg-white dark:bg-slate-900'>BMS (HR) - VIVA College (CGPA 9.03)</div>
          <div className='p-5 rounded-xl shadow bg-white dark:bg-slate-900'>HSC - 65.17%</div>
          <div className='p-5 rounded-xl shadow bg-white dark:bg-slate-900'>SSC - 81.40%</div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto p-8'>
        <h2 className='text-3xl font-bold mb-6'>Skills</h2>
        <div className='flex flex-wrap gap-3'>{skills.map(s=><span key={s} className='px-4 py-2 rounded-full bg-blue-100 text-blue-800'>{s}</span>)}</div>
      </section>

      <section className='max-w-6xl mx-auto p-8'>
        <h2 className='text-3xl font-bold mb-6'>Projects</h2>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='p-6 rounded-xl shadow bg-white dark:bg-slate-900'><h3 className='font-bold'>Employee Stress & Mental Health Study</h3><p>Deenanath Mangeshkar Hospital</p></div>
          <div className='p-6 rounded-xl shadow bg-white dark:bg-slate-900'><h3 className='font-bold'>Recruitment & Selection Effectiveness Study</h3><p>Upskill Tech Solutions</p></div>
        </div>
      </section>

      <section id='contact' className='max-w-6xl mx-auto p-8'>
        <h2 className='text-3xl font-bold mb-6'>Contact</h2>
        <div className='space-y-3'>
          <p>Email: praptiangchekar@gmail.com</p>
          <p>Phone: 8380803963</p>
          <p>Location: Virar East, Maharashtra, India</p>
          <p>LinkedIn: linkedin.com/in/praptiangchekar-b21992360</p>
        </div>
      </section>
    </main>
  );
}
