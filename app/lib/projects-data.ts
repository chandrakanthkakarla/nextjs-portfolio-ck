export interface ProjectMetrics {
  metric: string;
  value: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  role: string;
  period: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: ProjectMetrics[];
  outcome: string;
  keyLearnings: string[];
  imageUrl?: string;
}

export const caseStudies: ProjectCaseStudy[] = [
  {
    id: "enterprise-network-redesign",
    title: "Enterprise Network Redesign & Migration",
    role: "Network Engineer L2",
    period: "2024 - Present",
    challenge:
      "Legacy network infrastructure supporting 500+ employees across 10 sites was experiencing bottlenecks, frequent outages (99.2% uptime), inconsistent configurations, and inability to scale for growth. Network experienced multiple daily incidents affecting productivity.",
    solution:
      "Designed and implemented a modern hierarchical network architecture using spine-leaf topology with dual-redundancy at each site. Implemented standardized configuration management with Ansible, deployed real-time monitoring using Prometheus + Grafana stack, automated device provisioning, and established zero-touch deployment pipeline. Migrated from legacy VLAN design to segment-based micro-segmentation with 802.1X authentication.",
    technologies: [
      "Cisco IOS",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Python",
      "BGP",
      "OSPF",
      "Netflow",
    ],
    metrics: [
      {
        metric: "Network Uptime",
        value: "99.99% (from 99.2%)",
      },
      {
        metric: "Mean Time to Resolution",
        value: "15 min (from 90 min)",
      },
      {
        metric: "Configuration Consistency",
        value: "100% (from 65%)",
      },
      {
        metric: "Device Provisioning Time",
        value: "15 min (from 2 hours)",
      },
      {
        metric: "Bandwidth Utilization",
        value: "40% reduction via QoS",
      },
    ],
    outcome:
      "Successfully migrated 500+ employees with zero downtime. Infrastructure now scales to support 2000+ users without redesign. Automated 200+ routine tasks saving 20 hours/week. Reduced operational costs by 30%.",
    keyLearnings: [
      "Design for scale from the start",
      "Automation is critical for consistency",
      "Real-time monitoring prevents incidents",
      "Microservice architecture principles apply to networks too",
    ],
  },
  {
    id: "24-7-incident-response",
    title: "24/7 NOC Operations & Incident Management",
    role: "Network Engineer L2",
    period: "2023 - Present",
    challenge:
      "Monitoring and maintaining 99.9% SLA for enterprise infrastructure serving 100+ applications. Had to respond to incidents across multiple layers (BGP flaps, interface errors, application connectivity issues) often without complete context, leading to delayed resolutions.",
    solution:
      "Implemented comprehensive monitoring stack using SolarWinds for network device monitoring, deployed Netflow analysis for traffic visibility, created intelligent alerting with threshold-based triggers, built correlation engine to detect root causes, and established escalation procedures. Created runbooks for 50+ common scenarios with step-by-step troubleshooting. Established war room protocols for critical incidents.",
    technologies: [
      "SolarWinds",
      "Netflow",
      "Syslog",
      "SNMP",
      "ServiceNow",
      "Wireshark",
      "Linux",
    ],
    metrics: [
      {
        metric: "Average Response Time",
        value: "5 min (from 15 min)",
      },
      {
        metric: "SLA Achievement",
        value: "99.95% (target 99.9%)",
      },
      {
        metric: "Incidents Resolved L1",
        value: "85% (from 60%)",
      },
      {
        metric: "Root Cause Analysis Rate",
        value: "100% of P1 incidents",
      },
      {
        metric: "False Alert Reduction",
        value: "60% fewer noise alerts",
      },
    ],
    outcome:
      "Exceeded SLA targets consistently. Reduced escalations to L2/L3 by 40%. Created knowledge base that brought new team members to productivity in 2 weeks instead of 2 months.",
    keyLearnings: [
      "Context is king in incident response",
      "Automation catches issues before humans can",
      "Documentation saves response time",
    ],
  },
  {
    id: "network-security-hardening",
    title: "Network Security Hardening & Zero Trust Implementation",
    role: "Network Engineer L2",
    period: "2024",
    challenge:
      "Organization needed to move from traditional perimeter-based security to modern zero-trust architecture. Existing network had open VLANs, weak access controls, and poor visibility into east-west traffic.",
    solution:
      "Implemented segmentation strategy: created dedicated VLANs for IoT, guest, BYOD, and production. Deployed 802.1X authentication for wired network access. Configured access control lists (ACLs) based on least-privilege principle. Implemented micro-segmentation using security policies. Set up VPN with MFA for remote access. Deployed IDS/IPS monitoring. Achieved Google IT Support & Zero Trust ZTCA certifications.",
    technologies: [
      "Cisco IOS",
      "802.1X",
      "VLANs",
      "ACLs",
      "VPN",
      "Firewalls",
      "IDS/IPS",
      "MFA",
    ],
    metrics: [
      {
        metric: "Rogue Device Detection",
        value: "100% visibility via 802.1X",
      },
      {
        metric: "Unauthorized Access Attempts",
        value: "Zero successful breaches",
      },
      {
        metric: "Network Compliance",
        value: "100% policy adherence",
      },
      {
        metric: "Admin Access Control",
        value: "Full audit trail maintained",
      },
    ],
    outcome:
      "Zero security incidents over past 2 years. Network passed third-party security audit with flying colors. Reduced risk surface area by 70%.",
    keyLearnings: [
      "Trust nothing, verify everything",
      "Visibility is prerequisite to security",
      "User experience and security must coexist",
    ],
  },
  {
    id: "hybrid-cloud-connectivity",
    title: "Hybrid Cloud Architecture & Multi-Cloud Connectivity",
    role: "Network Engineer L2",
    period: "2024 - Present",
    challenge:
      "Organization adopting multi-cloud strategy (AWS + Azure) while maintaining on-premises infrastructure. Needed seamless connectivity with low latency, high availability, and cost optimization.",
    solution:
      "Designed hybrid cloud architecture with dedicated AWS Direct Connect and Azure ExpressRoute. Implemented site-to-site VPN as failover. Set up BGP for dynamic routing between on-prem and cloud. Deployed cloud load balancers with health checks. Created disaster recovery automation. Implemented cost monitoring and optimization.",
    technologies: [
      "AWS",
      "Azure",
      "Direct Connect",
      "ExpressRoute",
      "BGP",
      "VPN",
      "Terraform",
      "Python",
    ],
    metrics: [
      {
        metric: "Cloud Connectivity Uptime",
        value: "99.99%",
      },
      {
        metric: "Latency to Cloud",
        value: "5-10ms (via DX/ER)",
      },
      {
        metric: "Data Transfer Cost",
        value: "45% reduction",
      },
      {
        metric: "Failover Time",
        value: "30 seconds automatic",
      },
    ],
    outcome:
      "Successfully migrated 50+ applications to cloud with zero downtime. Enabled organization to leverage cloud services while maintaining control. Reduced egress costs by 45%.",
    keyLearnings: [
      "Cloud is not set-and-forget",
      "Network is the foundation for cloud success",
      "Cost optimization requires continuous tuning",
    ],
  },
];
