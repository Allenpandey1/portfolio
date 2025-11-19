export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12 max-w-4xl mx-auto print:p-4">
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
            size: letter;
          }
          body {
            background: white;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        @media screen {
          body {
            background: #f5f5f5;
          }
        }
      `}</style>

      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-gray-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">ALLEN PANDEY</h1>
        <p className="text-xl text-gray-700 font-medium mb-2">Computer Science Student & Full-Stack Developer</p>
        <p className="text-base text-gray-600">Arlington, Texas | Open to Internship & Full-Time Opportunities</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>Email: allenpandeyofficial@gmail.com</p>
          <p>GitHub: https://github.com/Allenpandey1</p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#00d4ff] mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">SUMMARY</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Computer Science student at The University of Texas at Arlington with expertise in full-stack development. 
          Proficient in Python, TypeScript, React, and Next.js. Passionate about building scalable web applications and 
          solving complex problems with modern technologies. Seeking internship and full-time opportunities to contribute 
          to impactful products and grow as a developer.
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#00d4ff] mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">EDUCATION</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
              <p className="text-base text-[#00d4ff] font-semibold">The University of Texas at Arlington (UTA)</p>
              <p className="text-sm text-gray-600">Arlington, Texas</p>
            </div>
            <span className="text-sm text-gray-600 font-medium">Expected: May 2027</span>
          </div>
          <p className="text-sm text-gray-700 mt-2 font-semibold">Relevant Coursework:</p>
          <p className="text-sm text-gray-600">
            Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, 
            Operating Systems, Computer Networks, Object-Oriented Design, Systems Programming
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Associate in Science</h3>
              <p className="text-base text-[#00d4ff] font-semibold">Dallas College</p>
              <p className="text-sm text-gray-600">Dallas, Texas</p>
            </div>
            <span className="text-sm text-gray-600 font-medium">2022 - 2024</span>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#00d4ff] mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">TECHNICAL SKILLS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Programming Languages</h3>
            <p className="text-sm text-gray-700">Python, JavaScript / TypeScript, C, SQL, HTML / CSS</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Frameworks & Libraries</h3>
            <p className="text-sm text-gray-700">React, Next.js, Node.js, Express.js, Tailwind CSS, Expo / React Native</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Databases & Tools</h3>
            <p className="text-sm text-gray-700">PostgreSQL, MongoDB, Git & GitHub, Docker, REST API Design</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Cloud & Deployment</h3>
            <p className="text-sm text-gray-700">Vercel, Netlify, Render, AWS (Basics), CI/CD</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#00d4ff] mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">EXPERIENCE</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Software Developer — AccessAid Project</h3>
              <p className="text-base text-[#00d4ff] font-semibold">Capstone Project</p>
            </div>
            <span className="text-sm text-gray-600 font-medium">2024 - Present</span>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
            <li>Implemented OCR-based text recognition</li>
            <li>Added dark mode and accessibility settings</li>
            <li>Built API integration to read text from camera and uploaded images</li>
            <li>Improved navigation and UI flow</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Computer Science Student</h3>
              <p className="text-base text-[#00d4ff] font-semibold">University of North Texas (UNT)</p>
            </div>
            <span className="text-sm text-gray-600 font-medium">2024 - Present</span>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
            <li>Coursework: Systems Programming, Assembly (CSE 2312), Linear Programming, Technical Communication</li>
            <li>Experience with C, Python, React, Next.js, Linux development</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#00d4ff] mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">PROJECTS</h2>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">AccessAid</h3>
          <p className="text-sm text-gray-700 mb-2">
            Accessibility-focused mobile app built using React Native and AI. Includes OCR, text reader, dark mode, and API pipeline to read text from camera images and uploaded files.
          </p>
          <p className="text-sm text-gray-600"><strong>Technologies:</strong> React Native, Expo, TypeScript, OCR API, Flask</p>
        </div>
      </div>
    </div>
  );
}

