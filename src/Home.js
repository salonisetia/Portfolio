import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mapping your state to the EmailJS template variables
    // These MUST match the {{variable_names}} in your EmailJS dashboard
    const templateParams = {
      from_name: name,     // matches {{from_name}} in dashboard
      from_email: email,   // matches {{from_email}} in dashboard
      message: description, // matches {{message}} in dashboard
    };

    // Sending the email directly from the frontend
    emailjs.send(
      'service_i1yzzce',    // Your confirmed Service ID
      'template_vu6o42g',   // Your current Template ID
      templateParams,
      'Eoa4QKt_vpOgDZKGh'   // Your confirmed Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      // Reset form fields
      setName('');
      setEmail('');
      setDescription('');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Failed to send message. Please ensure you checked the 'Send email on your behalf' box when connecting Gmail in EmailJS.");
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
          <h3 className="text-2xl md:text-3xl font-light text-gray-400">
            Full Stack Web Developer
          </h3>
          <div className="flex space-x-4 pt-6">
            <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition uppercase text-xs tracking-widest">
              Resume
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-900 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)]">
            <img
              src="/Uploads/picture.png"
              alt="Saloni Profile"
              className="w-full h-full object-cover hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </header>

      {/* --- SECTION 3: ABOUT ME --- */}
      <section id="about" className="py-20 px-10 md:px-20 bg-black relative border-t border-gray-900">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 space-y-8">
            <div className="relative">
              <img
                src="/Uploads/picture.png"
                alt="Profile Thumbnail"
                className="w-32 h-32 rounded-full border-4 border-yellow-500 object-cover"
              />
              <div className="mt-6 space-y-3 text-sm">
                <p><span className="text-gray-500 font-bold uppercase tracking-tighter mr-2">Name:</span> Saloni Setia</p>
                <p><span className="text-gray-500 font-bold uppercase tracking-tighter mr-2">Job Role:</span> Full Stack Developer</p>
                <p><span className="text-gray-500 font-bold uppercase tracking-tighter mr-2">Address:</span> India</p>
              </div>
            </div>

            <div className="space-y-5 pt-4">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-600">My Skills</h4>
              {[
                { name: 'React', level: '90%' },
                { name: 'Node.js', level: '85%' },
                { name: 'MongoDB', level: '80%' },
                { name: 'Tailwind CSS', level: '95%' }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>{skill.name}</span>
                    <span className="text-yellow-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-yellow-500 h-full transition-all duration-1000" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 relative">
            <h2 className="text-7xl md:text-9xl font-black text-white/[0.03] absolute -top-10 -left-4 pointer-events-none uppercase tracking-widest">About</h2>
            <h3 className="text-4xl font-black mb-8 relative z-10">About Me</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-10">
              I am a dedicated Full Stack Web Developer focused on building clean, scalable, and user-centric applications. Using the MERN stack, I transform creative designs into functional code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 border-t border-gray-900 pt-10">
              <div><p className="text-gray-600 text-[10px] uppercase font-black tracking-widest mb-1">Profile</p><p className="font-bold text-lg">Web Development</p></div>
              <div><p className="text-gray-600 text-[10px] uppercase font-black tracking-widest mb-1">Education</p><p className="font-bold text-lg">Bachelor of Technology</p></div>
              <div><p className="text-gray-600 text-[10px] uppercase font-black tracking-widest mb-1">Language</p><p className="font-bold text-lg">English, Hindi</p></div>
              <div><p className="text-gray-600 text-[10px] uppercase font-black tracking-widest mb-1">Interest</p><p className="font-bold text-lg">Coding & Learning</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: EDUCATION SECTION --- */}
      <section id="education" className="py-20 px-10 md:px-20 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-6xl md:text-8xl font-black text-white/[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none uppercase tracking-widest">Resume</h2>
            <h3 className="text-4xl font-black relative z-10">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: '2023-2027',
                degree: 'Bachelor of Technology',
                school: 'Seth Jai Parkash Mukand Lal Institute of Engineering and Technology, Radaur',
                description: 'Specializing in Computer Science and Engineering with a focus on Full Stack Development.'
              },
              {
                year: '2021-2023',
                degree: 'Higher Secondary School',
                school: 'DAV Centenary Public School, Radaur',
                description: 'Completed secondary education with a focus on Science and Mathematics.'
              }
            ].map((edu, index) => (
              <div key={index} className="bg-[#111111] p-8 rounded-xl border border-gray-900 hover:border-yellow-500 transition-all duration-500 group">
                <span className="text-yellow-500 font-black text-xl mb-4 block">{edu.year}</span>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{edu.degree}</h4>
                <p className="text-gray-500 uppercase text-xs font-black tracking-widest mb-4">{edu.school}</p>
                <p className="text-gray-400 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-10 md:px-20 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-6xl md:text-8xl font-black text-white/[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none uppercase tracking-widest">
              PROJECTS
            </h2>
            <h3 className="text-4xl font-black relative z-10">My Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Portfolio Website',
                description: 'A Portfolio website to showcase my skills and projects.',
                image: '/Uploads/portfolio.png',
                tech: ['React', 'Tailwind', 'JS', 'HTML']
              },
              {
                title: 'Zoogle',
                description: 'A Versatile platform designed for businesses and users to create, manage, and explore profiles- complete with contact details , bio and links , supported by a responsive user interface and a secure backend infrastructure.',
                image: '/Uploads/zoogle.png',
                tech: ['MongoDB', 'Node.js', 'Express.js', 'HTML'],
                github: 'https://github.com/salonisetia/Zoogle-'
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-gray-900 hover:border-yellow-500 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">{project.title}</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-gray-900 text-yellow-500/80 px-3 py-1.5 rounded-md border border-gray-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CONTACT SECTION --- */}
      <section id="contact" className="py-20 px-10 md:px-20 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-6xl md:text-8xl font-black text-white/[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none uppercase tracking-widest">
              CONTACT
            </h2>
            <h3 className="text-4xl font-black relative z-10">Contact Me</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { label: 'Address', value: 'Radaur, India', icon: '📍' },
              { label: 'Contact Number', value: '+91 81685 54030', icon: '📞' },
              { label: 'Email Address', value: 'salonisetia2005@gmail.com', icon: '✉️' },
              { label: 'LinkedIn', value: 'linkedin.com/in/saloni', icon: '🌐' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{item.label}</p>
                <p className="font-bold text-sm text-gray-300">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-gray-900 rounded-3xl p-12 relative overflow-hidden">
            <h4 className="text-center text-2xl font-black uppercase tracking-widest mb-10 text-yellow-500">Contact Form</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all"
                  required
                />
                <em className="text-[10px] text-gray-600 italic">We'll never share your email with anyone else.</em>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Description</label>
                <textarea
                  rows={3}
                  placeholder="How can I help you?"
                  name="message"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black font-black py-5 rounded-full hover:bg-yellow-400 transition-all uppercase text-xs tracking-[0.3em] shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-[10px] uppercase tracking-widest">
            <p>© 2026 Saloni Setia | Built with React & Tailwind</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home; 