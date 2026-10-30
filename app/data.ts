type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Law Depot',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'DotHealth Inc',
    title: 'Front-end Developer',
    start: '2019',
    end: '2022',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Agent Generated Triton Kernel Verification Framework using Z3 Solvers",
    description: "Validated kernel behavior against defined specifications and produced counterexamples for detected violations for AI generated kernels.",
    link: '/blog/beyond-next-token-prediction',
    uid: 'blog-1',
  },
  {
    title: "Vector database compression with Product Quantization",
    description: "Implemented product quantization (PQ) and a benchmark for memory efficiency, retrieval latency, and recall@k",
    link: '/blog/beyond-next-token-prediction',
    uid: 'blog-1',
  },
  {
    title: "Neural networks and attention as graphs",
    description: "Modeled neural networks and attention weights as graphs to investigate connectivity, centrality, information flow, and causal effects through interventions.",
    link: '/blog/beyond-next-token-prediction',
    uid: 'blog-1',
  },
  {
    title: "Mooncake paper (KV Cache & Prefill/Decoding)",
    description: "Replicated KV-cache management and disaggregated prefill/decode, benchmarked performance, profiled system bottlenecks, and compared results against the paper.",
    link: '/blog/beyond-next-token-prediction',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/has9800',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/',
  },
]

export const EMAIL = 'hasan.abdul.ahmed@gmail.com'
