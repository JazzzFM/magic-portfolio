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
        timeframe: "2025-09 - Present",
        role: "Forward Deployed Engineer",
        achievements: [
          <>
            Led deployments of mission-critical AI across regulated industries
            (banking/defense/government) in LatAm.
          </>,
          <>
            Standardized delivery with Docker + CI/CD + runbooks to reduce prototype→production
            friction.
          </>,
        ],
        images: [],
      },
      {
        company: "Banamex / Citibanamex",
        timeframe: "2023-01 - 2025-09",
        role: "Senior ML Engineer & Tech Lead",
        achievements: [
          <>
            Deployed credit-risk, CX and fraud models scoring ~3M tx/day; improved approval accuracy
            and reduced false positives.
          </>,
          <>
            Integrated Spark-based feature pipelines; deployed to AWS SageMaker; reduced latency and
            operational costs.
          </>,
          <>
            Co-authored Python/Shell + CI/CD deployment framework; shortened release cycles and
            reduced Spark cluster spend.
          </>,
        ],
        images: [],
      },
      {
        company: "NTT DATA",
        timeframe: "2021-01 - 2022-12",
        role: "Lead ML Engineer",
        achievements: [
          <>Automated Spark ETL pipelines on Hadoop clusters feeding downstream ML workflows.</>,
          <>Built production evaluation pipeline (Airflow + MLflow + Pytest) for A/B testing.</>,
          <>Mentored 7 juniors; delivered internal workshop on MLOps.</>,
        ],
        images: [],
      },
      {
        company: "Gerencia del Poder / Morant Consultores",
        timeframe: "2019-07 - 2021-11",
        role: "Data Scientist & R Developer",
        achievements: [
          <>Deployed election-forecasting ML API (Flask) consumed by 3 major media outlets.</>,
          <>Migrated ~300GB polling data to AWS Athena; reduced query latency minutes→seconds.</>,
          <>Built Shiny dashboards integrating ML predictions and business KPIs.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Research",
    institutions: [
      {
        name: "Instituto Politécnico Nacional (IPN)",
        description: <>B.Sc. Physics & Mathematics (ESFM) (2016 - 2021)</>,
      },
      {
        name: "CIC-IPN Cybersecurity Laboratory",
        description: <>Research Stay: Post-quantum cryptography & Lattices (2019)</>,
      },
      {
        name: "CINVESTAV-IPN",
        description: <>Research Stay: Algebraic topology & Motion planning (2020-2021)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Skills",
    skills: [
      {
        title: "Languages & Backend",
        description: <>Python, SQL, Bash, Go, R, FastAPI, Flask</>,
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Javascript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Data Engineering",
        description: <>PySpark, Hadoop, Airflow, Kafka, Flink</>,
        tags: [
          {
            name: "Spark",
            icon: "spark",
          },
          {
            name: "Hadoop",
            icon: "hadoop",
          },
          {
            name: "Airflow",
            icon: "airflow",
          },
        ],
        images: [],
      },
      {
        title: "MLOps & Cloud",
        description: <>AWS (S3, EMR, Lambda, Athena, SageMaker), Docker, Kubernetes, Terraform</>,
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
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        images: [],
      },
      {
        title: "ML & AI",
        description: <>scikit-learn, PyTorch, TensorFlow, GAMs, SHAP, Feature Engineering</>,
        tags: [
          {
            name: "Analysis",
            icon: "chart",
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
