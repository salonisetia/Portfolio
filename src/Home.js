import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: description,
    };

    emailjs.send(
      'service_i1yzzce',    // Your confirmed Service ID
      'template_vu6o42g',   // Your current Template ID
      templateParams,
      'Eoa4QKt_vpOgDZKGh'   // Your confirmed Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      setName('');
      setEmail('');
      setDescription('');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Failed to send message.");
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* --- SECTION 1: NAVIGATION BAR --- */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-black tracking-tighter uppercase">Saloni Setia</h1>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#home" className="text-yellow-500 border-b border-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#education" className="hover:text-yellow-500 transition">Education</a>
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </div>
      </nav>

      {/* --- SECTION 2: HERO SECTION --- */}
      <header id="home" className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 min-h-[80vh]">
        <div className="md:w-1/2 space-y-6 text-left">
          <p className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm">Hello!</p>
          <h2 className="text-6xl md:text-8xl font-black leading-tight">
            I'm <span className="text-yellow-500">Saloni<br/>Setia</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-gray-400">Full Stack Web Developer</h3>
          <div className="flex space-x-4 pt-6">
            <a href="/Uploads/Saloni_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition uppercase text-xs tracking-widest">
              Resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-900 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)]">
            <img src="/Uploads/picture.png" alt="Saloni Profile" className="w-full h-full object-cover hover:grayscale-0 transition duration-500" />
          </div>
        </div>
      </header>

      {/* --- SECTION 3: ABOUT ME --- */}
      <section id="about" className="py-20 px-10 md:px-20 bg-black relative border-t border-gray-900">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 space-y-8">
            <div className="relative">
              <img src="/Uploads/picture.png" alt="Profile Thumbnail" className="w-32 h-32 rounded-full border-4 border-yellow-500 object-cover" />
              <div className="mt-6 space-y-3 text-sm">
                <p><span className="text-gray-500 font-bold uppercase tracking-tighter mr-2">Name:</span> Saloni Setia</p>
                <p><span className="text-gray-500 font-bold uppercase tracking-tighter mr-2">Job Role:</span> Full Stack Developer</p>
                <p><span className="text-gray-500 font-bold uppercase tracking-tighter mr-2">Address:</span> India</p>
              </div>
            </div>
            <div className="space-y-5 pt-4">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-600">My Skills</h4>
              {[{ name: 'React', level: '90%' }, { name: 'Node.js', level: '85%' }, { name: 'MongoDB', level: '80%' }, { name: 'Tailwind CSS', level: '95%' }].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>{skill.name}</span>
                    <span className="text-yellow-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full transition-all duration-1000" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-2/3 relative">
            <h2 className="text-7xl md:text-9xl font-black text-white/[0.03] absolute -top-10 -left-4 pointer-events-none uppercase tracking-widest">About</h2>
            <h3 className="text-4xl font-black mb-8 relative z-10">About Me</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-10">I am a dedicated Full Stack Web Developer focused on building clean, scalable, and user-centric applications. Using the MERN stack, I transform creative designs into functional code.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: EDUCATION --- */}
      <section id="education" className="py-20 px-10 md:px-20 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-16 relative">
          <h2 className="text-6xl md:text-8xl font-black text-white/[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none uppercase tracking-widest">Resume</h2>
          <h3 className="text-4xl font-black relative z-10">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[{ year: '2023-2027', degree: 'Bachelor of Technology', school: 'Seth Jai Parkash Mukand Lal Institute' }, { year: '2021-2023', degree: 'Higher Secondary', school: 'DAV Centenary Public School' }].map((edu, index) => (
              <div key={index} className="bg-[#111111] p-8 rounded-xl border border-gray-900 hover:border-yellow-500 text-left group">
                <span className="text-yellow-500 font-black text-xl mb-4 block">{edu.year}</span>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{edu.degree}</h4>
                <p className="text-gray-500 uppercase text-xs font-black tracking-widest">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: PROJECTS --- */}
      <section id="projects" className="py-20 px-10 md:px-20 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-6xl md:text-8xl font-black text-white/[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none uppercase tracking-widest">PROJECTS</h2>
            <h3 className="text-4xl font-black relative z-10">My Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: 'Portfolio Website', 
                img: '/Uploads/portfolio.png', 
                tech: ['React', 'Tailwind'], 
                link: 'https://portfolio-delta-nine-28.vercel.app',
                description: 'A Portfolio website to showcase my skills and projects using react.js.' 
              },
              { 
                title: 'Zoogle', 
                img: '/Uploads/zoogle.png', 
                tech: ['MongoDB', 'Node.js'], 
                link: 'https://github.com/salonisetia/Zoogle-',
                description: 'A Versatile platform designed for businesses and users to explore profiles.' 
              }
            ].map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl bg-[#0a0a0a] border border-gray-900 hover:border-yellow-500 block">
                <img src={project.img} alt={project.title} className="w-full aspect-video object-contain" />
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-yellow-500">{project.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-gray-900 text-yellow-500 px-3 py-1.5 rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CONTACT --- */}
      <section id="contact" className="py-20 px-10 md:px-20 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-6xl md:text-8xl font-black text-white/[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none uppercase tracking-widest">CONTACT</h2>
            <h3 className="text-4xl font-black relative z-10">Contact Me</h3>
          </div>
          <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-gray-900 rounded-3xl p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-4 text-white focus:border-yellow-500 outline-none" required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-4 text-white focus:border-yellow-500 outline-none" required />
              <textarea rows={3} placeholder="Message" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-4 text-white focus:border-yellow-500 outline-none resize-none" required></textarea>
              <button type="submit" className="w-full bg-yellow-500 text-black font-black py-5 rounded-full hover:bg-yellow-400 transition-all uppercase text-xs tracking-[0.3em]">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;