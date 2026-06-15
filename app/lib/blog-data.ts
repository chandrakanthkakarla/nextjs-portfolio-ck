export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "bgp-convergence-deep-dive",
    title: "Understanding BGP Convergence: A Deep Dive",
    slug: "bgp-convergence-deep-dive",
    excerpt:
      "BGP convergence times can make or break network stability. In this article, we explore the factors affecting convergence and practical optimization techniques.",
    date: "2025-12-10",
    readTime: "8 min read",
    tags: ["BGP", "Routing", "Performance", "Advanced"],
    author: "Chandrakanth Kakarla",
  },
  {
    id: "zero-trust-implementation",
    title: "Implementing Zero Trust in Enterprise Networks",
    slug: "zero-trust-implementation",
    excerpt:
      "Zero trust isn't just a buzzword. Here's how we implemented zero trust architecture in a 500-person enterprise and lessons learned.",
    date: "2025-11-15",
    readTime: "12 min read",
    tags: ["Security", "Zero Trust", "Architecture", "Case Study"],
    author: "Chandrakanth Kakarla",
  },
  {
    id: "network-automation-ansible",
    title: "Network Automation with Ansible: Best Practices",
    slug: "network-automation-ansible",
    excerpt:
      "Ansible has revolutionized how we manage network devices. Learn best practices, common pitfalls, and production-ready patterns.",
    date: "2025-10-20",
    readTime: "10 min read",
    tags: ["Automation", "Ansible", "Python", "DevOps"],
    author: "Chandrakanth Kakarla",
  },
  {
    id: "hybrid-cloud-networking",
    title: "Navigating Hybrid Cloud Networking Complexity",
    slug: "hybrid-cloud-networking",
    excerpt:
      "Multi-cloud deployments introduce unique networking challenges. We discuss hybrid cloud connectivity, latency optimization, and cost management.",
    date: "2025-09-05",
    readTime: "11 min read",
    tags: ["Cloud", "AWS", "Azure", "Networking"],
    author: "Chandrakanth Kakarla",
  },
  {
    id: "monitoring-and-alerting",
    title: "Building Effective Network Monitoring & Alerting",
    slug: "monitoring-and-alerting",
    excerpt:
      "Alert fatigue is real. We break down how to build intelligent monitoring with Prometheus and Grafana that actually tells you what's wrong.",
    date: "2025-08-12",
    readTime: "9 min read",
    tags: ["Monitoring", "Prometheus", "Operations", "SRE"],
    author: "Chandrakanth Kakarla",
  },
  {
    id: "incident-response-playbook",
    title: "Network Incident Response Playbook",
    slug: "incident-response-playbook",
    excerpt:
      "When the network goes down, every second counts. This guide outlines our incident response framework from detection to post-mortem.",
    date: "2025-07-18",
    readTime: "13 min read",
    tags: ["Incident Response", "Operations", "Best Practices"],
    author: "Chandrakanth Kakarla",
  },
];
