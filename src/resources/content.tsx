import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jaziel David",
  lastName: "Flores Rodríguez",
  name: "Jaziel David Flores Rodríguez",
  role: "Forward Deployed Engineer",
  avatar: "/images/avatar.jpg",
  email: "jazzesfm@gmail.com",
  location: "America/Mexico_City",
  languages: ["English", "Spanish"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on MLOps, LLMOps, and Production Engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JazzzFM",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/jazieldavidfloresrodriguez",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/jazielflo",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Forward Deployed Engineer (LLMOps/MLOps)</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Latest Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Coyoacán Data Analysis
        </Text>
      </Row>
    ),
    href: "/work/coyoacan-data-analysis",
  },
  subline: (
    <>
      Physics-mathematician delivering ML systems from research to production.
      <br />
      Specialized in PySpark, FastAPI, AWS, and production-grade MLOps/LLMOps.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:jazzesfm@gmail.com",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
        Physics-mathematician with 5+ years delivering ML systems from research to production. Built
        and deployed models processing 20TB+ of financial data and ~3M transactions/day. Strong in
        PySpark, FastAPI, MLflow, AWS, and production-grade MLOps/LLMOps.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Saptiva AI",
        timeframe: "Sep 2025 - Present",
        role: "Forward Deployed Engineer",
        achievements: [
          <>
            Led deployments of mission-critical AI across regulated industries
            (banking/defense/government) in LatAm, integrating data pipelines + RAG/agents with
            traceability and operational security.
          </>,
          <>
            Designed runbooks and delivery standards (Docker/CI/CD/observability) to reduce
            prototype→production friction and ensure reproducibility in client environments.
          </>,
          <>
            Coordinated technical discovery with stakeholders and translated ambiguous requirements
            into verifiable deliverables (demos, SLAs, p95 metrics, incident taxonomy).
          </>,
        ],
        images: [],
      },
      {
        company: "Banamex / Citibanamex",
        timeframe: "Jan 2023 - Sep 2025",
        role: "Senior ML Engineer & Tech Lead",
        achievements: [
          <>
            Deployed credit risk, CX, and fraud models at scale (~3M daily transactions) with Spark
            feature pipelines and AWS SageMaker serving, improving approval accuracy and reducing
            false positives.
          </>,
          <>
            Co-created a Python/Shell + CI/CD deployment framework that shortened release cycles and
            reduced operational costs on Spark clusters.
          </>,
          <>
            Operated ML in production with a focus on time-to-production (months → weeks) and model
            governance discipline (tracking, reproducibility, explainability).
          </>,
        ],
        images: [],
      },
      {
        company: "NTT DATA",
        timeframe: "Nov 2021 - Dec 2022",
        role: "Lead ML Engineer",
        achievements: [
          <>
            Automated ML/ETL pipelines in Spark on Hadoop, reducing time-to-deploy and technical
            debt with MLOps practices.
          </>,
          <>
            Designed a production evaluation pipeline (Airflow + MLflow + Pytest) for A/B testing
            and experiment traceability.
          </>,
          <>
            Mentored/onboarded up to 7 junior engineers and led a team (up to 6) to scale
            performance and operations.
          </>,
        ],
        images: [],
      },
      {
        company: "Gerencia del Poder / Morant Consultores",
        timeframe: "Sep 2020 - Nov 2021",
        role: "Data Scientist & R Developer",
        achievements: [
          <>
            Deployed an election-forecasting ML API (Flask) consumed by 3 major media outlets;
            integrated dashboards (R Shiny) with KPIs and predictions.
          </>,
          <>
            Migrated ~300GB of data to AWS Athena, lowering query latencies (minutes → seconds) and
            improving accessibility for analysts/business.
          </>,
        ],
        images: [],
      },
      {
        company: "CINVESTAV-IPN",
        timeframe: "2020 - 2021",
        role: "Research Stay / Software Developer",
        achievements: [
          <>
            Implemented C++ algorithms to describe random processes applied to motion planning
            (algebraic topology), collaborating on applied research.
          </>,
        ],
        images: [],
      },
      {
        company: "IBM México",
        timeframe: "2020",
        role: "Students Advocate / Training Program",
        achievements: [
          <>
            Trained by IBM in Watson Cognitive Services to prototype solutions and rapidly deploy
            websites (product orientation).
          </>,
        ],
        images: [],
      },
      {
        company: "CIC-IPN Cybersecurity Laboratory",
        timeframe: "2019",
        role: "Research Stay / Software Developer",
        achievements: [
          <>
            Built a Python library (atop a mathematical animation engine) to visualize fundamental
            lattice problems in post-quantum cryptography; focused on scientific communication +
            reproducible tooling.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Instituto Politécnico Nacional (IPN)",
        description: <>B.Sc. Physics & Mathematics (ESFM) (2016 - 2021)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Skills",
    skills: [
      {
        title: "Engineering & Backend",
        description: <>Python (Expert), Go, SQL, FastAPI, Clean Architecture, gRPC</>,
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Go",
            icon: "golang",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
      {
        title: "Data & MLOps Platform",
        description: <>PySpark (Optimization), Airflow, MLflow, Kafka, Delta Lake</>,
        tags: [
          {
            name: "Spark",
            icon: "spark",
          },
          {
            name: "Airflow",
            icon: "airflow",
          },
          {
            name: "Kafka",
            icon: "kafka", // Ensure this icon exists or use a generic one if not
          },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: <>AWS (SageMaker, EMR, Lambda), Docker, Kubernetes, Terraform (IaC)</>,
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "K8s",
            icon: "kubernetes",
          },
        ],
        images: [],
      },
      {
        title: "AI & Multi-Agent Systems",
        description: <>LLMs, AutoGen Core/Studio, MCP (Playwright, Tidewave), RAG, GAMs</>,
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
        ],
        images: [],
      },
      {
        title: "Processes & Culture",
        description: <>CI/CD (GitHub Actions), TDD, RFC-driven Design, Agile, GitOps</>,
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Engineering Logs",
  description: `Read what ${person.name} has been working on`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
