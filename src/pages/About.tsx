import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Mail, MapPin, GraduationCap, Code2, Trophy, Briefcase } from 'lucide-react';

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ganji-anirudh.vercel.app/#person",
      "name": "Ganji Anirudh",
      "givenName": "Anirudh",
      "familyName": "Ganji",
      "url": "https://ganji-anirudh.vercel.app/",
      "jobTitle": ["Full Stack Developer", "AI/ML Engineer", "Software Engineer"],
      "description": "Ganji Anirudh is a Full Stack Developer and AI/ML Engineer — a B.Tech Computer Science student at SR University, Warangal, Telangana.",
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
        "https://instagram.com/anddyyyy_08"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "SR University",
        "url": "https://sru.edu.in/"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ganji-anirudh.vercel.app/about#webpage",
      "url": "https://ganji-anirudh.vercel.app/about",
      "name": "About Ganji Anirudh — Full Stack Developer & AI/ML Engineer",
      "description": "Learn about Ganji Anirudh — B.Tech Computer Science student at SR University, Warangal. Full Stack Developer and AI/ML Engineer specializing in React, Node.js, Python, and LangChain.",
      "isPartOf": {
        "@id": "https://ganji-anirudh.vercel.app/#website"
      },
      "about": {
        "@id": "https://ganji-anirudh.vercel.app/#person"
      },
      "inLanguage": "en-IN",
      "datePublished": "2026-07-01",
      "dateModified": "2026-08-26",
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
      }
    }
  ]
};

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Ganji Anirudh | Full Stack Developer & AI/ML Engineer — SR University, Warangal</title>
        <meta
          name="description"
          content="About Ganji Anirudh — Full Stack Developer & AI/ML Engineer, B.Tech CS student at SR University, Warangal. React, Node.js, Python, LangChain, hackathons, open source."
        />
        <link rel="canonical" href="https://ganji-anirudh.vercel.app/about" />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ganji-anirudh.vercel.app/about" />
        <meta property="og:title" content="About Ganji Anirudh | Full Stack Developer & AI/ML Engineer" />
        <meta property="og:description" content="Learn about Ganji Anirudh — B.Tech CS student at SR University, Warangal. Full Stack Developer and AI/ML Engineer building real-world applications with React, Node.js, Python, and LangChain." />
        <meta property="og:image" content="https://ganji-anirudh.vercel.app/og-image.png" />
        <meta property="og:image:alt" content="Ganji Anirudh — Full Stack Developer & AI/ML Engineer" />
        <meta property="og:site_name" content="Ganji Anirudh Portfolio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="profile:first_name" content="Anirudh" />
        <meta property="profile:last_name" content="Ganji" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Ganji Anirudh | Full Stack Developer & AI/ML Engineer" />
        <meta name="twitter:description" content="Learn about Ganji Anirudh — B.Tech CS student at SR University, Warangal. Full Stack Developer and AI/ML Engineer." />
        <meta name="twitter:image" content="https://ganji-anirudh.vercel.app/og-image.png" />
        <meta name="twitter:image:alt" content="Ganji Anirudh — Full Stack Developer & AI/ML Engineer" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-foreground/60 hover:text-foreground transition-colors mb-12 group"
          aria-label="Back to Ganji Anirudh's homepage"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Page heading */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
            About<br />
            <span className="text-foreground/20">Ganji Anirudh.</span>
          </h1>
          <p className="flex items-center gap-2 font-mono text-sm text-foreground/50 uppercase tracking-widest mt-6">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Warangal, Telangana, India
          </p>
        </header>

        <article aria-label="Full biography of Ganji Anirudh" className="space-y-16">

          {/* Who I Am */}
          <section aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8">
              Who I Am
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm <strong>Ganji Anirudh</strong> — a Full Stack Developer and AI/ML Engineer
                currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at{' '}
                <strong>SR University, Warangal, Telangana</strong> (Class of 2028). I build
                full-stack web applications and intelligent AI-powered systems, with a focus on
                clean code, solid architecture, and meaningful user experiences.
              </p>
              <p>
                My engineering philosophy is simple: build things that actually work, scale them
                thoughtfully, and make them accessible to real users. Whether it's a{' '}
                <strong>React</strong> dashboard, a <strong>FastAPI</strong> microservice, or a{' '}
                <strong>LangChain</strong>-powered RAG system, I approach every problem with
                curiosity and rigour.
              </p>
              <p>
                Beyond code, I'm deeply interested in how technology — particularly{' '}
                <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong> — can
                solve real-world problems at scale: smarter cities, better healthcare, more
                accessible information. That interest is reflected in the projects I choose to build.
              </p>
            </div>
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" aria-hidden="true" />
              Education
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6 py-1">
                <h3 className="text-lg font-bold">Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering</h3>
                <p className="text-foreground/70 font-medium mt-1">SR University, Warangal, Telangana</p>
                <p className="font-mono text-sm text-foreground/50 mt-1">2024 – 2028</p>
                <p className="text-foreground/70 mt-3 leading-relaxed">
                  Studying core computer science subjects including data structures, algorithms,
                  operating systems, databases, and software engineering — supplemented by
                  self-directed study in AI/ML, cloud computing, and modern web frameworks.
                </p>
              </div>
              <div className="border-l-4 border-black/20 pl-6 py-1">
                <h3 className="text-lg font-bold">Intermediate (12th Grade) — MPC</h3>
                <p className="text-foreground/70 font-medium mt-1">SR Junior College, Warangal, Telangana</p>
                <p className="font-mono text-sm text-foreground/50 mt-1">2022 – 2024</p>
              </div>
              <div className="border-l-4 border-black/20 pl-6 py-1">
                <h3 className="text-lg font-bold">High School (10th Grade)</h3>
                <p className="text-foreground/70 font-medium mt-1">St. Peter's High School, Warangal, Telangana</p>
                <p className="font-mono text-sm text-foreground/50 mt-1">Completed 2022</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6" aria-hidden="true" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4 font-bold">
                  Frontend Development
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>React</strong> — component architecture, hooks, React Router</li>
                  <li><strong>TypeScript</strong> — type-safe application development</li>
                  <li><strong>JavaScript (ES2022+)</strong> — async patterns, DOM manipulation</li>
                  <li><strong>Tailwind CSS</strong>, HTML5, CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4 font-bold">
                  Backend &amp; APIs
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>Node.js</strong> &amp; <strong>Express.js</strong> — RESTful APIs</li>
                  <li><strong>FastAPI</strong> — high-performance Python APIs</li>
                  <li><strong>MongoDB</strong> &amp; <strong>SQL</strong> — data modelling</li>
                  <li><strong>WebSockets</strong> — real-time communication</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4 font-bold">
                  AI / Machine Learning
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>Python</strong> — primary ML development language</li>
                  <li><strong>LangChain</strong> — RAG pipelines, AI agents</li>
                  <li><strong>TensorFlow</strong> &amp; <strong>Keras</strong> — deep learning</li>
                  <li><strong>scikit-learn</strong>, <strong>Pandas</strong>, <strong>NumPy</strong></li>
                  <li><strong>YOLOv8</strong>, <strong>OpenCV</strong> — computer vision</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4 font-bold">
                  Cloud &amp; Tools
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>AWS</strong> — Cloud Foundations, Cloud Developing certified</li>
                  <li><strong>Docker</strong> — containerisation</li>
                  <li><strong>Git</strong> &amp; <strong>GitHub</strong> — version control</li>
                  <li><strong>Postman</strong>, <strong>Figma</strong>, <strong>Power BI</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hackathons & Projects */}
          <section aria-labelledby="hackathons-heading">
            <h2 id="hackathons-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6" aria-hidden="true" />
              Hackathons &amp; Open Source
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Hackathons are where I sharpen my skills fastest. I've participated in{' '}
                <strong>INNO-VA-THON 2.0</strong> at VNR VJIET, <strong>HackOS</strong>,{' '}
                <strong>VIVITSU '26</strong> at GRIET, <strong>EFOS Hackathon</strong>,{' '}
                <strong>AzureDevCon 2025</strong> at SR University, and several others — each time
                building fully functional prototypes within tight deadlines.
              </p>
              <p>
                One notable hackathon project is <strong>AyuLink</strong> — a unified healthcare
                platform that operates over mesh networks <em>without internet connectivity</em>,
                enabling real-time patient monitoring in rural and urban India. This project reflects
                my belief that technology should reach everyone, not just those with reliable
                infrastructure.
              </p>
              <p>
                My open-source work lives primarily on{' '}
                <a
                  href="https://github.com/anirudh1261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 hover:text-black"
                  aria-label="Ganji Anirudh's GitHub profile"
                >
                  GitHub (@anirudh1261)
                </a>
                , where I've built and published projects ranging from AI RAG systems and traffic
                analysis pipelines to real-time location trackers and space awareness platforms.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section aria-labelledby="certs-heading">
            <h2 id="certs-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8">
              Certifications &amp; Learning
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              I hold <strong>50+ certifications</strong> from industry leaders including{' '}
              <strong>Amazon Web Services (AWS)</strong>, <strong>Google</strong>,{' '}
              <strong>IBM</strong>, <strong>Microsoft</strong>, <strong>Cisco</strong>,{' '}
              <strong>Coursera</strong>, <strong>HackerRank</strong>, and more. Key credentials include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />AWS Academy Graduate — Cloud Foundations</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />AWS Academy Graduate — Cloud Developing</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />AWS AI Practitioner Learning Plan</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />Introduction to Generative AI — Google Cloud</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />Introduction to Git and GitHub — Google</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />AI Skills Fest 2026 — Microsoft</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />Cyber Security with Generative AI — IBM</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />Data Analyst Virtual Experience — Deloitte</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />JP Morgan Software Engineering — Forage</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />SQL Advanced — HackerRank</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />CCNA: Introduction to Networks — Cisco</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-black shrink-0 rounded-full" />Prompt Engineering for Everyone — IBM</li>
            </ul>
          </section>

          {/* Career Goals */}
          <section aria-labelledby="goals-heading">
            <h2 id="goals-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6" aria-hidden="true" />
              Career Goals
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                My goal is to become a <strong>senior software engineer</strong> or{' '}
                <strong>AI engineer</strong> working on products that solve meaningful problems at
                scale. I'm particularly excited about the intersection of{' '}
                <strong>large language models</strong>, <strong>full-stack development</strong>, and
                <strong> real-time systems</strong> — areas where I believe the most impactful work
                of the next decade will happen.
              </p>
              <p>
                Right now, I'm actively looking for <strong>software engineering internships</strong>{' '}
                and <strong>part-time collaborations</strong> where I can contribute meaningfully,
                learn from experienced engineers, and ship real product. If you're building something
                that could use a dedicated, fast-learning developer — let's talk.
              </p>
            </div>
          </section>

          {/* Connect */}
          <section aria-labelledby="connect-heading">
            <h2 id="connect-heading" className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-8">
              Connect with Me
            </h2>
            <nav aria-label="Ganji Anirudh social and contact links" className="flex flex-wrap gap-4">
              <a
                href="https://github.com/anirudh1261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                aria-label="View Ganji Anirudh's GitHub profile"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ganji-anirudh-8897133b0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                aria-label="Connect with Ganji Anirudh on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/GANJI_ANIRUDH/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                aria-label="View Ganji Anirudh's LeetCode profile"
              >
                <Trophy className="w-4 h-4" />
                LeetCode
              </a>
              <a
                href="https://codeforces.com/profile/anirudh.ganji15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                aria-label="View Ganji Anirudh's Codeforces profile"
              >
                <Code2 className="w-4 h-4" />
                Codeforces
              </a>
              <a
                href="https://www.codechef.com/users/anirudh_0334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                aria-label="View Ganji Anirudh's CodeChef profile"
              >
                <Code2 className="w-4 h-4" />
                CodeChef
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anirudh.ganji15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black bg-black text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black"
                aria-label="Send an email to Ganji Anirudh"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </nav>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
