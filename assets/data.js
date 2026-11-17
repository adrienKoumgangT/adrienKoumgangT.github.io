// Case-study pages: a project with featured: true gets its own page at projects/<id>.html.
// Optional fields shown on that page when filled: role, highlights[], diagram ("assets/img/x.svg"), diagramAlt, decisions[], result, lessons.
// Edit this file to update the whole site. Fill the empty "result" fields when you have real numbers.
const SITE = {
  short: "Adrien K. T.",
  email: "adrientkoumgang@gmail.com",
  links: [
    ["GitHub", "https://github.com/adrienKoumgangT"],
    ["LinkedIn", "https://www.linkedin.com/in/adrien-koumgang-tegantchouang/"]
  ],
  skills: [
    { g: "AI and data", i: ["Machine Learning", "scikit-learn", "Spark", "Hadoop", "Recommender systems", "Data mining"] },
    { g: "Architecture", i: ["Microservices", "Clean architecture", "Distributed systems", "REST", "GraphQL", "RabbitMQ"] },
    { g: "Languages", i: ["Python", "Java", "Rust", "TypeScript", "C", "Erlang", "OCaml"] },
    { g: "Frameworks", i: ["Django", "Flask", "Spring Boot", "React", "Angular"] },
    { g: "Cloud and DevOps", i: ["AWS (Lambda, DynamoDB)", "Docker", "Kubernetes", "Linux", "Git", "Prometheus", "Grafana"] },
    { g: "Databases", i: ["MySQL", "MongoDB", "Redis", "DynamoDB", "Neo4j"] }
  ],
  now: [
    "Working as a software engineer at ID Next (Newton).",
    "Studying for an MSc in Artificial Intelligence and Data Engineering at the University of Pisa.",
    "Preparing my first public AI projects. They will appear on the projects page."
  ],
  projects: [
    { id: "github-events", featured: true, highlights: ["The same ranking implemented with Hadoop MapReduce, Apache Spark and non-parallel Python", "A REST API server for submitting jobs", "A React web client for job submission and cluster monitoring"], title: "GitHub event aggregation and ranking", tags: ["Data engineering", "Distributed systems"], status: "Open source",
      summary: "A distributed analytics system that processes and ranks GitHub Archive events with Hadoop MapReduce, Apache Spark and plain Python.",
      stack: ["Hadoop MapReduce", "Apache Spark", "Python", "REST API", "React"], repo: "https://github.com/adrienKoumgangT/github-event-aggregation-ranking",
      problem: "Ranking events from the GitHub Archive means aggregating a very large dataset.",
      approach: "The same ranking is built three ways (MapReduce, Spark and non-parallel Python) so the approaches can be compared. A REST API server and a React web client handle job submission and cluster monitoring.",
      result: "" },
    { id: "trec-search-engine", featured: true, highlights: ["Text pipeline: lower-casing, tokenisation, optional NLTK stop-word removal and Snowball stemming", "Streams the passage collection and skips malformed lines", "Automated tests and a notebook that runs on Google Colab"], title: "Search engine for MS MARCO passages", tags: ["Information retrieval", "Machine learning"], status: "TREC 2020 Deep Learning Track",
      summary: "A search engine for the MS MARCO passage collection, built for the TREC 2020 Deep Learning Track.",
      stack: ["Python", "NLTK"], repo: "https://github.com/adrienKoumgangT/search-engine-trec-2020-deep-learning-track",
      problem: "Finding relevant passages in the large MS MARCO passage collection.",
      approach: "A text-processing pipeline (lower-casing, tokenisation, optional stop-word removal and stemming) that streams the collection, with tests and a notebook that runs on Google Colab.",
      result: "" },
    { id: "student-dropout", featured: true, title: "Student dropout classifier", tags: ["Machine learning"], status: "Open source",
      summary: "A machine learning system that predicts student dropout risk in higher education, so schools can step in early and improve retention.",
      stack: ["Machine learning"], repo: "https://github.com/adrienKoumgangT/student-dropout-classifier",
      problem: "Students at risk of dropping out are often identified too late.",
      approach: "A classifier that predicts dropout risk, enabling early intervention.",
      result: "" },
    { id: "distriqueue", featured: true, highlights: ["Fault-tolerant task orchestration on Erlang/OTP", "RabbitMQ as the message broker", "Designed for high availability"], title: "DistriQueue", tags: ["Distributed systems", "Backend"], status: "Open source",
      summary: "A high-availability distributed job scheduler with fault-tolerant task orchestration.",
      stack: ["Erlang/OTP", "RabbitMQ", "Java"], repo: "https://github.com/adrienKoumgangT/distriqueue",
      problem: "A job queue must not lose work when a node fails.",
      approach: "Task orchestration built on Erlang/OTP, with RabbitMQ as the message broker.",
      result: "" },
    { id: "finlife", title: "FinLife API", tags: ["Backend"], status: "Open source",
      summary: "The back end of an app that manages finances, projects and planning.",
      stack: ["Rust"], repo: "https://github.com/adrienKoumgangT/finlife-api-rust",
      problem: "People track money, projects and plans in separate tools.",
      approach: "One API that brings finance, projects and planning together.",
      result: "" },
    { id: "camer", title: "Camer Platform", tags: ["Backend", "Product"], status: "In progress",
      summary: "A multi-module social platform for education, commerce and more.",
      stack: ["Modular architecture"], repo: "",
      problem: "", approach: "", result: "" },
    { id: "life", title: "Life Management App", tags: ["Product"], status: "In progress",
      summary: "One app for finances, goals, projects and productivity.",
      stack: ["Web and mobile"], repo: "", problem: "", approach: "", result: "" },
    { id: "rust-graphs", title: "Modular decomposition of graphs", tags: ["Research", "Algorithms"], status: "Sorbonne University, 2022",
      summary: "Rewrote research code from Python to Rust for a doctoral project, with a test and benchmark setup.",
      stack: ["Rust", "Python"], repo: "",
      problem: "Scientific code in Python needed better speed and memory use.",
      approach: "Full conversion to Rust, integrated into the thesis framework with the researchers.",
      result: "" },
    { id: "mini-caml", title: "Mini-Caml interpreter", tags: ["Languages"], status: "University of Pisa",
      summary: "An interpreter written in OCaml for the Programming 2 course.",
      stack: ["OCaml"], repo: "https://github.com/adrienKoumgangT/Mini-Caml_Project-OCaml-PR2-University_of_Pisa",
      problem: "", approach: "", result: "" },
    { id: "packets", title: "Offline internet packet analyzer", tags: ["Networks"], status: "Sorbonne University, 2021/22",
      summary: "End-of-semester project for the networks course.",
      stack: ["Python"], repo: "https://github.com/adrienKoumgangT/offline-internet-packet-analyzer-University_of_Sorbonne",
      problem: "", approach: "", result: "" }
  ],
  journey: [
    { y: "2017", t: "High-school diploma", p: "I finished high school in Cameroon." },
    { y: "2017–2018", t: "First year of mathematics, and Italian", p: "I did Licence 1 in mathematics and learned Italian, which opened the way to studying in Italy." },
    { y: "Aug 2018", t: "Travel to Italy", p: "I get my student visa to continue my studies in Italy and I'm going to enroll in Computer Science at the University of Pisa." },
    { y: "2018–2022", href: "education.html#bachelor", t: "BSc in Computer Science, University of Pisa", p: "Programming, algorithms, operating systems, networks and languages such as OCaml and C." },
    { y: "2021–2022", href: "education.html#sorbonne", t: "Licence 3 in Computer Science, Sorbonne University, Paris", p: "Studied in French and worked on a doctoral research project in graph algorithms." },
    { y: "Feb–Jul 2022", t: "Computer programmer, Sorbonne University", p: "Converted scientific code from Python to Rust and built its testing and benchmarking environment." },
    { y: "Sept 2022", href: "experience.html", t: "Software engineer, ID Next (Newton)", p: "Client web and mobile products, from requirements to cloud deployment, back ends, databases and integrations." },
    { y: "Mar 2025", href: "education.html#master", t: "MSc in Artificial Intelligence and Data Engineering, University of Pisa", p: "Machine learning and data-intensive systems, on top of years of engineering practice." },
    { y: "Next", t: "AI Engineer or AI/Software Architect", p: "Owning ML systems end to end, from data pipeline to a monitored production service." }
  ]
  ,
  experience: {
    org: "ID Next (Newton)", role: "Software Engineer", period: "September 2022 to present",
    intro: "I work as a software engineer at ID Next, part of the Newton group. I take client projects from the first conversation about needs to production, and I keep them running afterwards.",
    note: "Client projects are covered by confidentiality, so this page describes the type of work, not named clients.",
    scope: [
      "Analyse customer needs and help define the technical and functional specifications.",
      "Design and build web and mobile applications to client requirements.",
      "Design modular, scalable and secure software architectures.",
      "Design, develop and manage relational and non-relational databases.",
      "Integrate third-party APIs, external services and cloud services.",
      "Maintain existing software, fixing defects and evolving features.",
      "Write technical documentation and apply development best practices.",
      "Optimise application performance and security.",
      "Work with design and project-management teams so the interface, the customer experience and the application logic stay consistent.",
      "Take part in technical reviews and progress meetings with clients and the internal team."
    ],
    skills: [
      ["Architecture and back end", "REST APIs, microservices and modular design, with Python (Django, Flask) and Java (Tomcat)."],
      ["Data", "Relational and non-relational stores: MySQL, Oracle, Redis and DynamoDB."],
      ["Cloud and delivery", "AWS (including Lambda), Docker, Kubernetes and Git, with monitoring through AWS CloudWatch and Internal logging services."],
      ["Client and team work", "Requirements analysis, technical reviews, documentation, and working with designers and project managers."]
    ],
    lessons: [
      "Production thinking: a system must be secure, documented and maintainable, not only correct.",
      "Turning vague needs into specifications that a team can build.",
      "Trade-offs: performance, security, cost and delivery time pull in different directions.",
      "A base for AI work: I know what it takes to put a service into production, which is the part of machine-learning work that is often underestimated."
    ]
  },
  education: {
    master: { id: "master", school: "University of Pisa", degree: "MSc in Artificial Intelligence and Data Engineering", period: "March 2025 to present",
      intro: "A two-year programme (120 credits) in the engineering of AI and data-intensive systems. The courses below come from the programme and group naturally into four themes.",
      themes: [
        ["AI and machine learning", [
          ["Data Mining and Machine Learning", "12 credits", "Core course on extracting knowledge from data and building predictive models."],
          ["Deep Learning and vision", "6 credits", "Neural and computational-intelligence methods and computer vision."],
          ["Symbolic and Evolutionary Artificial Intelligence", "6 credits", "Symbolic AI and evolutionary methods, practised in small lab projects."],
          ["Information Retrieval and Language Technologies", "9 credits", "Search engines (inverted indexes, text processing) and language models."]
        ]],
        ["Data engineering", [
          ["Large-Scale and Multi-Structured Databases", "9 credits", "Designing non-relational databases to store, update and retrieve large, complex data."],
          ["Process Mining and Intelligence", "6 credits", "Modelling business processes in BPMN, simulating them and discovering them from event logs, with a group lab project."]
        ]],
        ["Systems, cloud and security", [
          ["Cloud Computing", "9 credits", "Cloud infrastructure and platforms, and programming models for cloud systems."],
          ["Distributed Systems and Middleware Technologies", "6 credits", "Models, paradigms and algorithms of distributed software, and the middleware that supports it."],
          ["Internet of Things", "9 credits", "The IoT paradigm, its enabling technologies, and how to build IoT systems."],
          ["Performance Evaluation of Computer Systems and Networks", "9 credits", "Simulation with OMNeT++, queueing models and capacity planning, with a group project."],
          ["Foundations of Cybersecurity", "9 credits", "Applied cryptography, secure coding and web security, to design a secure distributed application."]
        ]],
        ["Optimisation and management", [
          ["Optimization Methods and Game Theory", "6 credits", "Nonlinear optimisation and game theory, solved with MATLAB."],
          ["Business and Project Management", "9 credits", "Strategy, financial management and a project-management module."]
        ]]
      ] },
    bachelor: { id: "bachelor", school: "University of Pisa", degree: "BSc in Computer Science", period: "2018 to 2022",
      intro: "A broad foundation in programming, algorithms, systems and mathematics.",
      themes: [
        ["Programming and software", [
          ["Programming I and Laboratory"], ["Programming II"], ["Programming of Interfaces"], ["Software Engineering"], ["Logic for Programming"]
        ]],
        ["Algorithms and theory", [
          ["Algorithmics and Laboratory"], ["Computability and Complexity"], ["Discrete Mathematics and Linear Algebra"]
        ]],
        ["Systems, networks and data", [
          ["Computer Architecture"], ["Operating Systems and Laboratory"], ["Computer Networks and Laboratory"], ["Databases"], ["Cryptography"]
        ]],
        ["Mathematics and sciences", [
          ["Mathematical Analysis"], ["Probability and Statistics"], ["Numerical Calculus"], ["Operations Research"], ["Physics"]
        ]],
        ["Artificial intelligence", [["Introduction to Artificial Intelligence"]]]
      ] },
    sorbonne: { id: "sorbonne", school: "Sorbonne University, Paris", degree: "Licence 3 in Computer Science", period: "September 2021 to July 2022",
      intro: "A year in Paris, studying in French. From February to July 2022 I worked as a programmer on a doctoral research project on the modular decomposition of graphs: I converted the scientific code from Python to Rust, built a testing and benchmarking environment, and integrated the result into the thesis framework with the researchers.",
      themes: [] }
  }
};
