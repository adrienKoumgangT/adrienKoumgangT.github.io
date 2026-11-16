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
    { id: "distriqueue", title: "DistriQueue", tags: ["Distributed systems", "Backend"], status: "Open source",
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
    { y: "2018–2022", t: "BSc in Computer Science, University of Pisa", p: "Programming, algorithms, operating systems, networks and languages such as OCaml and C." },
    { y: "2021–2022", t: "Licence 3 in Computer Science, Sorbonne University, Paris", p: "Studied in French and worked on a doctoral research project in graph algorithms." },
    { y: "Feb–Jul 2022", t: "Computer programmer, Sorbonne University", p: "Converted scientific code from Python to Rust and built its testing and benchmarking environment." },
    { y: "Sept 2022-Now", t: "Software engineer, ID Next (Newton)", p: "Client web and mobile products, from requirements to cloud deployment, back ends, databases and integrations." },
    { y: "Mar 2025", t: "MSc in Artificial Intelligence and Data Engineering, University of Pisa", p: "Machine learning and data-intensive systems, on top of years of engineering practice." },
    { y: "Next", t: "AI Engineer or AI/Software Architect", p: "Owning ML systems end to end, from data pipeline to a monitored production service." }
  ]
};
