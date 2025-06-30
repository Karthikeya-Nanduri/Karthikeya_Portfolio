import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Code, 
  Monitor, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronDown,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Lock,
  Server,
  Database,
  Network,
  Bug,
  Eye,
  AlertTriangle,
  FileText,
  Search,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Star,
  CheckCircle,
  Activity,
  Zap,
  ArrowLeft
} from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('file'); // 'file', 'accessing', or 'portfolio'
  const [isFileOpening, setIsFileOpening] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    'Green Hat',
    'Cybersecurity Student',
    'Vulnerability Assessment Specialist',
    'Threat Analysis Expert',
    'Security Researcher'
  ];

  // Typing animation for agent status
  useEffect(() => {
    if (currentView === 'portfolio') {
      const currentText = texts[currentTextIndex];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setTypedText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              if (charIndex > 0) {
                setTypedText(currentText.slice(0, charIndex - 1));
                charIndex--;
              } else {
                clearInterval(deleteInterval);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [currentTextIndex, currentView]);

  // Scrollspy effect: update activeSection on scroll
  useEffect(() => {
    if (currentView !== 'portfolio') return;
    const sectionIds = ['overview', 'skills', 'missions', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for sticky nav
      let current = 'overview';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const openFile = () => {
    setIsFileOpening(true);
    
    // Show accessing screen after file starts opening
    setTimeout(() => {
      setCurrentView('accessing');
      setIsFileOpening(false);
    }, 1200);
    
    // Show portfolio after accessing screen
    setTimeout(() => {
      setCurrentView('portfolio');
    }, 3200); // 1200ms file opening + 2000ms accessing screen
  };

  const goBackToFile = () => {
    setCurrentView('file');
    setActiveSection('overview');
    setShowPortfolio(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const skills = [
    { 
      name: 'Vulnerability Assessment', 
      icon: Bug, 
      description: 'Systematic evaluation of security weaknesses in systems and networks using automated tools and manual techniques to identify potential attack vectors.'
    },
    { 
      name: 'Network Security', 
      icon: Network, 
      description: 'Implementation and management of security measures to protect network infrastructure, including firewalls, intrusion detection, and traffic analysis.'
    },
    { 
      name: 'Threat Analysis', 
      icon: AlertTriangle, 
      description: 'Comprehensive examination of potential security threats, attack patterns, and risk assessment to develop effective defensive strategies.'
    },
    { 
      name: 'C/C++', 
      icon: Code, 
      description: 'Low-level programming languages for system development, security tool creation, and understanding of memory management and system vulnerabilities.'
    },
    { 
      name: 'Java (Basics)', 
      icon: Code, 
      description: 'Object-oriented programming language used for enterprise applications, security tools development, and cross-platform software solutions.'
    },
    { 
      name: 'Python (Basics)', 
      icon: Code, 
      description: 'Versatile programming language for automation, security scripting, data analysis, and rapid development of cybersecurity tools and applications.'
    },
    { 
      name: 'SQL', 
      icon: Database, 
      description: 'Database query language essential for data management, security auditing, and identifying SQL injection vulnerabilities in applications.'
    },
    { 
      name: 'Bash Scripting', 
      icon: Terminal, 
      description: 'Command-line scripting for automation of security tasks, system administration, and creating efficient workflows in Linux environments.'
    },
    { 
      name: 'Secure Coding', 
      icon: Lock, 
      description: 'Development practices that prevent security vulnerabilities by implementing proper input validation, authentication, and secure design principles.'
    },
    { 
      name: 'SIEM', 
      icon: Monitor, 
      description: 'Security Information and Event Management systems for real-time monitoring, log analysis, and correlation of security events across networks.'
    },
    { 
      name: 'Threat Modeling (Basics)', 
      icon: Eye, 
      description: 'Structured approach to identifying, quantifying, and addressing security threats during the design phase of systems and applications.'
    }
  ];

  const missions = [
    {
      codename: 'OPERATION VULN-SCAN',
      title: 'Vulnerability Assessment & Penetration Testing',
      status: 'COMPLETED',
      classification: 'CONFIDENTIAL',
      description: 'Performed vulnerability scanning on multiple Windows and Linux systems using OpenVAS and Nessus to identify security flaws and misconfigurations.',
      technologies: ['OpenVAS', 'Nessus', 'Windows', 'Linux', 'Security Analysis'],
      outcome: 'Analyzed scan results to assess severity levels and prioritize remediation efforts. Created detailed vulnerability assessment reports outlining identified issues, their potential impact, and recommendations for mitigation.',
      period: 'Q3 2024',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      codename: 'PROJECT NUTRITION-TRACK',
      title: 'Full-Stack AI Application',
      status: 'COMPLETED',
      classification: 'RESTRICTED',
      description: 'Engineered a full-stack health application with Node.js and PostgreSQL backend, featuring secure user authentication and data storage.',
      technologies: ['Node.js', 'PostgreSQL', 'React.js', 'Chart.js', 'AI Integration'],
      outcome: 'Integrated an AI-powered feature for personalized nutrition recommendation and deployed the application in a containerized environment. Developed a dynamic React.js frontend with Chart.js for real-time data visualization and nutritional intake analysis.',
      period: 'Q1 2025',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      codename: 'OPERATION CRYPTO-ANALYSIS',
      title: 'Crypto Analysis Platform',
      status: 'COMPLETED',
      classification: 'SECRET',
      description: 'Built a responsive, real-time cryptocurrency analysis platform using React.js, integrating with multiple public APIs for live market data.',
      technologies: ['React.js', 'Chart.js', 'Public APIs', 'Real-time Data', 'Frontend Architecture'],
      outcome: 'Implemented interactive and dynamic charting features with Chart.js to visualize historical and current price trends. Focused on component-based architecture for scalability and maintainability of the frontend codebase.',
      period: 'Q2 2024',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      codename: 'PROJECT READING-CLUB',
      title: 'Web Development Platform',
      status: 'COMPLETED',
      classification: 'RESTRICTED',
      description: 'Designed and developed a book discovery platform using vanilla HTML, CSS, and JavaScript, emphasizing responsive and accessible design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Accessibility'],
      outcome: 'Implemented a recommendation engine based on user-selected genres and reading history to enhance user engagement.',
      period: 'Q1 2024',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const assignments = [
    {
      position: 'Cybersecurity Student',
      organization: 'SRM Institute of Science and Technology',
      period: 'Expected Graduation: 2027',
      clearance: 'ACADEMIC',
      duties: 'B.Tech Computer Science (Cyber Security) - CGPA: 9.2 / 10.0',
      achievements: 'Specialized in vulnerability assessment, threat analysis, and implementing defensive security strategies'
    }
  ];

  const certifications = [
    { name: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat', year: '2024', status: 'ACTIVE' },
    { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google', year: '2024', status: 'ACTIVE' },
    { name: 'NPTEL - Programming in Java', issuer: 'NPTEL', year: '2024', status: 'ACTIVE' },
    { name: 'Object Oriented Programming in C++', issuer: 'NPTEL', year: '2024', status: 'ACTIVE' }
  ];

  const frameworks = [
    { name: 'Git', category: 'Version Control' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Nmap', category: 'Security Tools' },
    { name: 'Wireshark', category: 'Network Analysis' },
    { name: 'openVAS', category: 'Vulnerability Assessment' },
    { name: 'Burp Suite', category: 'Penetration Testing' },
    { name: 'Windows', category: 'Operating System' }
  ];

  const linuxDistributions = [
    { name: 'Kali Linux' },
    { name: 'Ubuntu' },
    { name: 'RHEL' }
  ];

  // Accessing Screen
  if (currentView === 'accessing') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <style>{`
          @keyframes zoomIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(0.7);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes scanLine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100vw);
            }
          }

          @keyframes glitch {
            0%, 100% {
              transform: translateX(0);
            }
            20% {
              transform: translateX(-2px);
            }
            40% {
              transform: translateX(2px);
            }
            60% {
              transform: translateX(-1px);
            }
            80% {
              transform: translateX(1px);
            }
          }

          .accessing-container {
            animation: zoomIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .pulse-animation {
            animation: pulse 1.5s ease-in-out infinite;
          }

          .scan-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 100vh;
            background: linear-gradient(to bottom, transparent, #00ff00, transparent);
            animation: scanLine 3s linear infinite;
            box-shadow: 0 0 10px #00ff00;
          }

          .glitch-text {
            animation: glitch 0.3s ease-in-out infinite alternate;
          }

          .matrix-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0, 0, 255, 0.1) 0%, transparent 50%);
            opacity: 0.3;
          }
        `}</style>

        {/* Matrix-style background */}
        <div className="matrix-bg"></div>
        
        {/* Scanning line effect */}
        <div className="scan-line"></div>

        {/* Main accessing content */}
        <div className="accessing-container text-center z-10">
          {/* Main shield icon */}
          <div className="mb-8">
            <Shield className="h-32 w-32 text-red-500 mx-auto pulse-animation" />
          </div>

          {/* Accessing text */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-white mb-4 glitch-text">
              ACCESSING
            </h1>
            <div className="text-2xl text-green-400 font-mono mb-2">
              CLASSIFIED PORTFOLIO
            </div>
            <div className="text-lg text-gray-400 font-mono">
              AGENT: KARTHIKEYA NANDURI
            </div>
          </div>

          {/* Loading progress */}
          <div className="w-96 mx-auto mb-8">
            <div className="bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-green-500 h-full rounded-full animate-pulse" 
                   style={{ 
                     width: '100%',
                     animation: 'pulse 1s ease-in-out infinite, loadProgress 2s ease-out forwards'
                   }}>
              </div>
            </div>
            <div className="text-green-400 text-sm font-mono">
              DECRYPTING SECURITY CLEARANCE...
            </div>
          </div>

          {/* Status indicators */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-gray-900 border border-green-500 p-3 rounded">
              <div className="text-green-400 text-xs mb-1">AUTHENTICATION</div>
              <div className="text-white text-sm font-bold">VERIFIED</div>
            </div>
            <div className="bg-gray-900 border border-yellow-500 p-3 rounded">
              <div className="text-yellow-400 text-xs mb-1">CLEARANCE</div>
              <div className="text-white text-sm font-bold">SECRET</div>
            </div>
            <div className="bg-gray-900 border border-red-500 p-3 rounded">
              <div className="text-red-400 text-xs mb-1">ACCESS</div>
              <div className="text-white text-sm font-bold">GRANTED</div>
            </div>
          </div>

          {/* Warning message */}
          <div className="mt-8 bg-red-900 border border-red-500 p-4 rounded-lg max-w-lg mx-auto">
            <div className="text-red-400 text-sm font-bold mb-1">⚠️ SECURITY NOTICE</div>
            <div className="text-red-200 text-xs">
              This session is being monitored and recorded for security purposes.
            </div>
          </div>
        </div>

        <style>{`
          @keyframes loadProgress {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }

  if (currentView === 'file') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-4 relative overflow-hidden">
        <style>{`
          .file-container {
            perspective: 1200px;
          }
          
          .file-cover {
            transform-origin: left center;
            transform-style: preserve-3d;
            transition: transform 1.2s cubic-bezier(0.4, 0.0, 0.2, 1);
          }
          
          .file-cover.opening {
            transform: rotateY(-160deg);
          }
          
          .file-base {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          .background-item {
            position: absolute;
            opacity: 0.3;
            pointer-events: none;
            z-index: 1;
          }

          .floating {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(var(--rotation));
            }
            50% {
              transform: translateY(-10px) rotate(var(--rotation));
            }
          }
        `}</style>

        {/* Background scattered items */}
        {/* Top left area */}
        <div className="background-item top-16 left-8 floating" style={{transform: 'rotate(-15deg)'}}>
          <div className="bg-gradient-to-b from-blue-200 to-blue-300 p-4 rounded shadow-lg border border-blue-400 w-32 h-40 transform rotate-12">
            <div className="text-xs text-blue-800 font-bold mb-2">INCIDENT REPORT</div>
            <div className="w-full h-0.5 bg-blue-400 mb-2"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-blue-300 rounded"></div>
              <div className="w-3/4 h-1 bg-blue-300 rounded"></div>
              <div className="w-full h-1 bg-blue-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Top right area */}
        <div className="background-item top-20 right-12 floating" style={{transform: 'rotate(25deg)'}}>
          <div className="bg-gradient-to-b from-green-200 to-green-300 p-3 rounded shadow-lg border border-green-400 w-28 h-36 transform -rotate-12">
            <div className="text-xs text-green-800 font-bold mb-2">SECURITY BRIEF</div>
            <div className="w-full h-0.5 bg-green-400 mb-2"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-green-300 rounded"></div>
              <div className="w-2/3 h-1 bg-green-300 rounded"></div>
              <div className="w-full h-1 bg-green-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Left side */}
        <div className="background-item top-1/3 left-4 floating" style={{transform: 'rotate(-8deg)'}}>
          <div className="bg-gradient-to-b from-red-200 to-red-300 p-3 rounded shadow-lg border border-red-400 w-24 h-32 transform rotate-6">
            <div className="text-xs text-red-800 font-bold mb-1">CLASSIFIED</div>
            <div className="w-full h-0.5 bg-red-400 mb-2"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-red-300 rounded"></div>
              <div className="w-1/2 h-1 bg-red-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="background-item top-1/2 right-8 floating" style={{transform: 'rotate(18deg)'}}>
          <div className="bg-gradient-to-b from-purple-200 to-purple-300 p-4 rounded shadow-lg border border-purple-400 w-36 h-44 transform -rotate-20">
            <div className="text-xs text-purple-800 font-bold mb-2">THREAT ANALYSIS</div>
            <div className="w-full h-0.5 bg-purple-400 mb-2"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-purple-300 rounded"></div>
              <div className="w-4/5 h-1 bg-purple-300 rounded"></div>
              <div className="w-full h-1 bg-purple-300 rounded"></div>
              <div className="w-2/3 h-1 bg-purple-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Bottom left */}
        <div className="background-item bottom-24 left-16 floating" style={{transform: 'rotate(12deg)'}}>
          <div className="bg-gradient-to-b from-yellow-200 to-yellow-300 p-3 rounded shadow-lg border border-yellow-400 w-30 h-38 transform rotate-15">
            <div className="text-xs text-yellow-800 font-bold mb-2">MISSION LOG</div>
            <div className="w-full h-0.5 bg-yellow-400 mb-2"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-yellow-300 rounded"></div>
              <div className="w-3/4 h-1 bg-yellow-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Bottom right */}
        <div className="background-item bottom-16 right-20 floating" style={{transform: 'rotate(-22deg)'}}>
          <div className="bg-gradient-to-b from-gray-200 to-gray-300 p-3 rounded shadow-lg border border-gray-400 w-28 h-36 transform -rotate-8">
            <div className="text-xs text-gray-800 font-bold mb-2">PERSONNEL</div>
            <div className="w-full h-0.5 bg-gray-400 mb-2"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-gray-300 rounded"></div>
              <div className="w-2/3 h-1 bg-gray-300 rounded"></div>
              <div className="w-full h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Additional scattered papers */}
        <div className="background-item top-2/3 left-1/4 floating" style={{transform: 'rotate(-5deg)'}}>
          <div className="bg-gradient-to-b from-orange-200 to-orange-300 p-2 rounded shadow-lg border border-orange-400 w-20 h-28 transform rotate-3">
            <div className="text-xs text-orange-800 font-bold mb-1">MEMO</div>
            <div className="w-full h-0.5 bg-orange-400 mb-1"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-orange-300 rounded"></div>
              <div className="w-1/2 h-1 bg-orange-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="background-item top-1/4 right-1/3 floating" style={{transform: 'rotate(30deg)'}}>
          <div className="bg-gradient-to-b from-teal-200 to-teal-300 p-2 rounded shadow-lg border border-teal-400 w-22 h-30 transform -rotate-25">
            <div className="text-xs text-teal-800 font-bold mb-1">ALERT</div>
            <div className="w-full h-0.5 bg-teal-400 mb-1"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-teal-300 rounded"></div>
              <div className="w-3/4 h-1 bg-teal-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Office supplies */}
        <div className="background-item top-12 left-1/3">
          <div className="w-6 h-20 bg-yellow-400 rounded-sm shadow-lg transform rotate-45"></div>
        </div>

        <div className="background-item bottom-32 right-1/4">
          <div className="w-8 h-8 bg-gray-600 rounded-full shadow-lg"></div>
        </div>

        <div className="background-item top-1/2 left-12">
          <div className="w-4 h-16 bg-blue-500 rounded-sm shadow-lg transform -rotate-12"></div>
        </div>

        {/* Simple Red Pen - Light and dim, positioned on the left side */}
        <div className="absolute top-40 left-20 z-5 opacity-40">
          <div className="relative transform rotate-45">
            {/* Pen body - simple red cylinder with reduced opacity */}
            <div className="w-3 h-28 bg-gradient-to-b from-red-300 to-red-500 rounded-full shadow-md relative opacity-70">
              {/* Pen cap - slightly darker red */}
              <div className="absolute top-0 left-0 w-3 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-t-full opacity-80"></div>
              
              {/* Simple metal clip */}
              <div className="absolute top-1 -right-0.5 w-1 h-6 bg-gray-300 rounded-full shadow-sm opacity-60"></div>
              
              {/* Pen tip - black */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-700 rounded-b-full opacity-70"></div>
            </div>
            
            {/* Flowing ink line - curved like in the image, very light */}
            <div className="absolute -bottom-8 -left-6">
              <svg width="120" height="60" viewBox="0 0 120 60" className="overflow-visible">
                <path 
                  d="M 10 10 Q 30 5 50 15 T 90 20 Q 100 25 110 30" 
                  stroke="#ef4444" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round"
                  className="opacity-30"
                />
                {/* Small ink drops along the line - very subtle */}
                <circle cx="25" cy="8" r="0.8" fill="#ef4444" className="opacity-20" />
                <circle cx="45" cy="16" r="0.4" fill="#ef4444" className="opacity-25" />
                <circle cx="75" cy="18" r="0.8" fill="#ef4444" className="opacity-15" />
                <circle cx="95" cy="22" r="0.4" fill="#ef4444" className="opacity-20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Desk Surface */}
        <div className="relative file-container z-10">
          {/* Desk texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg transform rotate-1 shadow-2xl"></div>
          
          {/* File Base (what's underneath) */}
          <div className="file-base bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border-2 border-gray-600" style={{ width: '400px', height: '500px' }}>
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white">
                <Shield className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
                <h1 className="text-2xl font-bold mb-2">ACCESSING...</h1>
                <div className="text-red-400 font-mono text-sm">PORTFOLIO LOADING</div>
              </div>
            </div>
          </div>
          
          {/* File Cover (what opens) */}
          <div 
            className={`file-cover bg-gradient-to-b from-amber-200 to-amber-300 p-8 rounded-lg shadow-xl border-2 border-amber-400 cursor-pointer hover:shadow-2xl ${isFileOpening ? 'opening' : ''}`}
            onClick={openFile}
            style={{ width: '400px', height: '500px' }}
          >
            {/* File Tab */}
            <div className="absolute -top-6 left-8 bg-amber-300 px-4 py-2 rounded-t-lg border-2 border-amber-400 border-b-0">
              <span className="text-amber-800 font-bold text-sm">CLASSIFIED</span>
            </div>

            {/* Classification Stamp */}
            <div className="absolute top-4 right-4 transform rotate-12">
              <div className="border-4 border-green-600 rounded-lg px-3 py-1 bg-green-100">
                <span className="text-green-600 font-bold text-xs">AUTHORIZED VIEW</span>
              </div>
            </div>

            {/* File Content */}
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="text-center mb-6 pt-8">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-gray-400 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-600" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">AGENT FILE</h1>
                <div className="w-full h-0.5 bg-gray-400 mb-4"></div>
              </div>

              {/* Agent Name - Prominent Display */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-red-600 mb-2">KARTHIKEYA NANDURI</h2>
              </div>

              {/* Agent Details */}
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">SPECIALIZATION:</span>
                  <span className="text-gray-800 font-mono">CYBERSECURITY</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">STATUS:</span>
                  <span className="text-green-600 font-mono font-bold">ACTIVE</span>
                </div>

                <div className="w-full h-0.5 bg-gray-300 my-4"></div>

                <div className="text-center">
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-4">
                    <p className="text-yellow-700 text-xs font-semibold">
                      ⚠️ NO ROOM FOR BLACKHATS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* File rings/holes */}
            <div className="absolute left-2 top-1/4 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="absolute left-2 top-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="absolute left-2 top-3/4 w-4 h-4 bg-gray-400 rounded-full"></div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* Back Button */}
              <button
                onClick={goBackToFile}
                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded transition-all duration-300"
                title="Return to File View"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">BACK TO FILE</span>
              </button>
              
              <div className="h-6 w-px bg-gray-600"></div>
              
              <Shield className="h-8 w-8 text-red-500" />
              <div>
                <span className="text-lg font-bold text-white">AGENT KARTHIKEYA NANDURI</span>
                <div className="text-xs text-gray-400">CYBERSECURITY STUDENT</div>
              </div>
            </div>
            
            <div className="flex space-x-6">
              {['overview', 'skills', 'missions', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 capitalize px-3 py-2 rounded ${
                    activeSection === section 
                      ? 'bg-red-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Agent Overview */}
      <section id="overview" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mb-4 inline-block">
                AGENT PROFILE
              </div>
              <h1 className="text-5xl font-bold mb-4 text-white">
                KARTHIKEYA NANDURI
              </h1>
              <div className="text-xl text-red-400 mb-6 h-8 font-mono">
                STATUS: {typedText}<span className="animate-pulse">|</span>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">PROFESSIONAL SUMMARY</h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate and fast-learning Cybersecurity student with a strong foundation in Vulnerability Assessment, Threat 
                  Analysis, and implementing defensive security strategies to protect digital assets. Proficient in Network Security, 
                  Incident Response, and familiar with Linux tools. Committed to continuous learning and staying current with 
                  emerging cyber threats. Eager to apply technical skills in a challenging role to contribute to a robust security 
                  posture, risk management, and the development of innovative software solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-gray-700 p-4 rounded">
                  <div className="text-red-400 font-semibold mb-2">CLEARANCE LEVEL</div>
                  <div className="text-white font-mono">ACADEMIC</div>
                </div>
                <div className="bg-gray-800 border border-gray-700 p-4 rounded">
                  <div className="text-red-400 font-semibold mb-2">OPERATIONAL STATUS</div>
                  <div className="text-green-400 font-mono">ACTIVE</div>
                </div>
              </div>

              {/* Resume Section */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/Karthik_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200 text-center"
                >
                  View My Resume
                </a>
                <a
                  href="/Karthik_Resume.pdf"
                  download
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded border border-gray-600 transition-colors duration-200 text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 border-2 border-red-500 p-4 rounded-lg">
                <div className="text-red-400 text-sm mb-2">AGENT PHOTOGRAPH</div>
                <img
                  src="/IMG-20240305-WA0008.jpg"
                  alt="Agent Profile"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="absolute top-8 right-8 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  CLASSIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Assessment */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mb-4 inline-block">
              SKILLS ASSESSMENT
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              TECHNICAL CAPABILITIES
            </h2>
            <p className="text-gray-400">Comprehensive technical skill evaluation and expertise areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <skill.icon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Frameworks & Tools */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">FRAMEWORKS & TOOLS</h3>
            
            {/* Linux Section */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-red-400 mb-6 text-center">LINUX</h4>
              <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Terminal className="h-8 w-8 text-blue-400 mr-3" />
                  <h5 className="font-semibold text-white text-lg">Linux Distributions</h5>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {linuxDistributions.map((dist, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-center">
                      <span className="text-gray-200 text-sm font-medium">{dist.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Tools */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {frameworks.map((framework, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center">
                  <Server className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">{framework.name}</h4>
                  <div className="text-gray-400 text-sm">{framework.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Reports */}
      <section id="missions" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mb-4 inline-block">
              MISSION REPORTS
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              CLASSIFIED PROJECTS
            </h2>
            <p className="text-gray-400">Completed cybersecurity and development missions</p>
          </div>
          
          <div className="space-y-8">
            {missions.map((mission, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={mission.image}
                      alt={mission.codename}
                      className="w-full h-64 md:h-full object-cover filter grayscale"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-red-400 font-mono text-sm mb-1">{mission.codename}</div>
                        <h3 className="text-xl font-bold text-white">{mission.title}</h3>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded text-xs font-bold ${
                          mission.status === 'ACTIVE' ? 'bg-green-600 text-white' :
                          mission.status === 'COMPLETED' ? 'bg-blue-600 text-white' :
                          'bg-yellow-600 text-white'
                        }`}>
                          {mission.status}
                        </span>
                        <div className="text-xs text-gray-400 mt-1">{mission.classification}</div>
                        <div className="text-xs text-gray-400">{mission.period}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{mission.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-red-400 text-sm font-semibold mb-2">TECHNOLOGIES DEPLOYED:</div>
                      <div className="flex flex-wrap gap-2">
                        {mission.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 border border-gray-600 p-3 rounded">
                      <div className="text-green-400 text-sm font-semibold mb-1">MISSION OUTCOME:</div>
                      <div className="text-gray-300 text-sm">{mission.outcome}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Assignment History */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mb-4 inline-block">
              SERVICE RECORD
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              EDUCATION
            </h2>
            <p className="text-gray-400">Academic achievements and professional development</p>
          </div>
          
          <div className="space-y-8">
            {assignments.map((assignment, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{assignment.position}</h3>
                    <div className="text-red-400 font-semibold">{assignment.organization}</div>
                    <div className="text-gray-400 text-sm">{assignment.period}</div>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                      {assignment.clearance}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-red-400 text-sm font-semibold mb-2">PROGRAM DETAILS:</div>
                    <p className="text-gray-300 text-sm">{assignment.duties}</p>
                  </div>
                  <div>
                    <div className="text-green-400 text-sm font-semibold mb-2">SPECIALIZATION:</div>
                    <p className="text-gray-300 text-sm">{assignment.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">SECURITY CLEARANCES & CERTIFICATIONS</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center">
                  <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">{cert.name}</h4>
                  <div className="text-gray-400 text-sm mb-2">{cert.issuer}</div>
                  <div className="text-gray-400 text-sm mb-2">{cert.year}</div>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mb-4 inline-block">
              SECURE COMMUNICATION
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              FEEL FREE TO CONTACT
            </h2>
            <p className="text-gray-400">Authorized communication channels</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">CONTACT PROTOCOLS</h3>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-3 text-gray-300 p-3 rounded">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span>karthikeyananduri409@gmail.com</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/karthikeya-nanduri-158613319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-3 rounded transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-red-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/Karthikeya-Nanduri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-3 rounded transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-red-400" />
                  <span>GitHub</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <div className="mt-8 bg-yellow-900 border border-yellow-600 p-4 rounded">
                <div className="text-yellow-400 font-semibold mb-2">⚠️ SECURITY NOTICE</div>
                <p className="text-yellow-200 text-sm">
                  All communications are monitored and encrypted. 
                  Use secure channels for sensitive information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-600 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Shield className="h-5 w-5 text-red-500" />
            <span className="text-white font-bold">AGENT KARTHIKEYA NANDURI</span>
          </div>
          <p className="text-gray-400 text-sm">
            CLASSIFIED DOCUMENT © 2024 | CYBERSECURITY OPERATIONS DIVISION
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;