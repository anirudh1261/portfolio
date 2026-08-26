import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import InternshipSection from '@/components/InternshipSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import Terminal from '@/components/Terminal';
import Finale from '@/components/Finale';
import MatrixRain from '@/components/MatrixRain';

import { Helmet } from 'react-helmet-async';

const Index = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ganji-anirudh.vercel.app/#person",
        "name": "Ganji Anirudh",
        "givenName": "Anirudh",
        "familyName": "Ganji",
        "jobTitle": [
          "Full Stack Developer",
          "AI/ML Engineer",
          "Software Engineer",
          "React Developer",
          "Python Developer"
        ],
        "url": "https://ganji-anirudh.vercel.app/",
        "image": {
          "@type": "ImageObject",
          "url": "https://ganji-anirudh.vercel.app/og-image.png",
          "width": 1200,
          "height": 630
        },
        "sameAs": [
          "https://github.com/anirudh1261",
          "https://www.linkedin.com/in/ganji-anirudh-8897133b0",
          "https://leetcode.com/u/GANJI_ANIRUDH/",
          "https://codeforces.com/profile/anirudh.ganji15",
          "https://www.codechef.com/users/anirudh_0334",
          "https://instagram.com/anddyyyy_08",
          "https://ganji-anirudh.vercel.app/"
        ],
        "email": "anirudh.ganji15@gmail.com",
        "telephone": "+919550533315",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Warangal",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        },
        "description": "Ganji Anirudh is a Full Stack Developer and AI/ML Engineer — a B.Tech Computer Science student at SR University, Warangal, Telangana. He specializes in React, Node.js, Python, FastAPI, LangChain, and Machine Learning.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "SR University",
          "url": "https://sru.edu.in/",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Warangal",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          }
        },
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "SR University",
          "url": "https://sru.edu.in/"
        },
        "knowsAbout": [
          "Full Stack Web Development",
          "React",
          "Node.js",
          "Express.js",
          "Python",
          "FastAPI",
          "TypeScript",
          "JavaScript",
          "Machine Learning",
          "Artificial Intelligence",
          "LangChain",
          "Retrieval-Augmented Generation",
          "MongoDB",
          "SQL",
          "Tailwind CSS",
          "Git",
          "GitHub",
          "Docker",
          "AWS",
          "TensorFlow",
          "scikit-learn",
          "Computer Vision",
          "YOLOv8"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "AWS Academy Graduate – Cloud Foundations",
            "credentialCategory": "certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Amazon Web Services"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Introduction to Git and GitHub",
            "credentialCategory": "certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Google"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Introduction to Generative AI",
            "credentialCategory": "certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Google Cloud"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "AI Skills Fest 2026",
            "credentialCategory": "certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Microsoft"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ganji-anirudh.vercel.app/#website",
        "url": "https://ganji-anirudh.vercel.app/",
        "name": "Ganji Anirudh — Full Stack Developer & AI/ML Engineer",
        "description": "Official portfolio of Ganji Anirudh, Full Stack Developer and AI/ML Engineer from SR University, Warangal. Projects in React, Node.js, Python, LangChain, and Machine Learning.",
        "publisher": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ganji-anirudh.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://ganji-anirudh.vercel.app/#profile",
        "url": "https://ganji-anirudh.vercel.app/",
        "name": "Ganji Anirudh Profile Page",
        "description": "Official profile page of Ganji Anirudh, showcasing academic credentials, skills, competitive programming stats, and projects.",
        "datePublished": "2024-08-01",
        "dateModified": "2026-08-26",
        "mainEntity": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "isPartOf": {
          "@id": "https://ganji-anirudh.vercel.app/#website"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://ganji-anirudh.vercel.app/#webpage",
        "url": "https://ganji-anirudh.vercel.app/",
        "name": "Ganji Anirudh | Full Stack Developer & AI/ML Engineer",
        "isPartOf": {
          "@id": "https://ganji-anirudh.vercel.app/#website"
        },
        "about": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "description": "Portfolio homepage of Ganji Anirudh — Full Stack Developer and AI/ML Engineer. Explore projects, certifications, skills, and open-source work.",
        "breadcrumb": {
          "@id": "https://ganji-anirudh.vercel.app/#breadcrumb"
        },
        "inLanguage": "en-IN",
        "datePublished": "2024-08-01",
        "dateModified": "2026-08-26"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ganji-anirudh.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ganji-anirudh.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Ganji Anirudh",
            "item": "https://ganji-anirudh.vercel.app/about"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://ganji-anirudh.vercel.app/#projects-page",
        "url": "https://ganji-anirudh.vercel.app/#projects",
        "name": "Projects by Ganji Anirudh",
        "description": "Software projects built by Ganji Anirudh — including AI/ML systems, RAG applications, real-time web apps, and open-source tools built with React, Python, Node.js, and LangChain.",
        "isPartOf": {
          "@id": "https://ganji-anirudh.vercel.app/#website"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://ganji-anirudh.vercel.app/#project-rag",
        "name": "RAG Projects Master",
        "description": "A comprehensive collection of Retrieval-Augmented Generation (RAG) applications built with LangChain and Python. Covers conversational AI agents, intelligent document search, and vector database integration.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261/RAG_projects_master",
        "programmingLanguage": ["Python", "LangChain"],
        "about": "Retrieval-Augmented Generation, LangChain, AI Agents, Vector Databases"
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://ganji-anirudh.vercel.app/#project-traffic",
        "name": "Real-Time Traffic Intelligence & Analysis System",
        "description": "Transforms live camera feeds into actionable traffic insights using YOLOv8, OpenCV, and Flask. Monitors vehicle behavior, estimates speed, and detects violations in real-time.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261/Real-time-traffic-analysis",
        "programmingLanguage": ["Python", "Flask", "OpenCV"]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://ganji-anirudh.vercel.app/#project-orbitguard",
        "name": "OrbitGuard — Space Situational Awareness System",
        "description": "Tracks real satellites in real-time using live TLE data and Skyfield. Predicts orbital positions, detects potential collisions, and visualises everything on an interactive 3D globe.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261/OrbitGuard",
        "url": "https://orbit-guard-five.vercel.app/",
        "programmingLanguage": ["Python", "Flask", "JavaScript"]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://ganji-anirudh.vercel.app/#project-ayulink",
        "name": "AyuLink — Unified Healthcare Infrastructure Platform",
        "description": "A healthcare platform using mesh-based hardware that works without internet. Enables real-time patient monitoring connecting patients, doctors, and families across rural and urban areas. Built during a hackathon.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261",
        "url": "https://fight-club-ht-01.vercel.app/",
        "programmingLanguage": ["TypeScript", "C"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Helmet>
        <title>Ganji Anirudh | Full Stack Developer &amp; AI/ML Engineer | React · Node.js · Python</title>
        <meta name="description" content="Ganji Anirudh — Full Stack Developer &amp; AI/ML Engineer at SR University, Warangal. React, Node.js, Python, LangChain. Open to internships." />
        <link rel="canonical" href="https://ganji-anirudh.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ganji-anirudh.vercel.app/" />
        <meta property="og:title" content="Ganji Anirudh | Full Stack Developer & AI/ML Engineer" />
        <meta property="og:description" content="Portfolio of Ganji Anirudh — Full Stack Developer & AI/ML Engineer specializing in React, Node.js, Python and Machine Learning. B.Tech CS student at SR University, Warangal." />
        <meta property="og:image" content="https://ganji-anirudh.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ganji Anirudh — Full Stack Developer & AI/ML Engineer" />
        <meta property="og:site_name" content="Ganji Anirudh Portfolio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="profile:first_name" content="Anirudh" />
        <meta property="profile:last_name" content="Ganji" />
        <meta property="profile:username" content="anirudh1261" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ganji-anirudh.vercel.app/" />
        <meta name="twitter:title" content="Ganji Anirudh | Full Stack Developer & AI/ML Engineer" />
        <meta name="twitter:description" content="Portfolio of Ganji Anirudh — Full Stack Developer & AI/ML Engineer. React, Node.js, Python, LangChain. B.Tech CS at SR University, Warangal." />
        <meta name="twitter:image" content="https://ganji-anirudh.vercel.app/og-image.png" />
        <meta name="twitter:image:alt" content="Ganji Anirudh — Full Stack Developer & AI/ML Engineer" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Global matrix rain — sits behind every section */}
      <MatrixRain />
      <Navbar />
      <ScrollToTop />
      <Terminal />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <InternshipSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Finale />
    </div>
  );
};

export default Index;
