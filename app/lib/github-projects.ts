export interface GitHubProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  status: "active" | "complete" | "maintenance";
  highlights: string[];
}

export const githubProjects: GitHubProject[] = [
  {
    id: "network-device-backup",
    name: "Network Device Auto-Backup",
    description:
      "Automated backup solution for network devices using Netmiko. Backs up configs from 100+ routers/switches hourly, version controls in Git, and alerts on config changes.",
    technologies: ["Python", "Netmiko", "Git", "Paramiko", "Logging"],
    github: "https://github.com/chandrakanthkakarla/network-device-backup",
    status: "active",
    highlights: [
      "Automated backups for 100+ devices",
      "Git version control with change tracking",
      "Email alerts for config deviations",
      "3-year retention policy",
    ],
  },
  {
    id: "ansible-network-automation",
    name: "Ansible Network Automation Playbooks",
    description:
      "Collection of reusable Ansible playbooks for network device configuration, backup, and remediation across Cisco IOS, IOS-XE, and Juniper platforms.",
    technologies: ["Ansible", "Python", "Jinja2", "YAML"],
    github: "https://github.com/chandrakanthkakarla/ansible-network-automation",
    status: "active",
    highlights: [
      "Multi-vendor support (Cisco, Juniper)",
      "Configuration templating with Jinja2",
      "Automated compliance checking",
      "Used in production for 500+ device configs",
    ],
  },
  {
    id: "network-monitoring-dashboard",
    name: "Network Monitoring Dashboard",
    description:
      "Real-time network monitoring dashboard using Prometheus, Grafana, and custom Python exporters. Displays device health, bandwidth utilization, and SLA metrics.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Python",
      "SNMP",
      "InfluxDB",
    ],
    github: "https://github.com/chandrakanthkakarla/network-monitoring-dashboard",
    status: "active",
    highlights: [
      "Real-time alerting on thresholds",
      "Custom SNMP exporters for network devices",
      "99%+ uptime SLA tracking",
      "5-minute metric granularity",
    ],
  },
  {
    id: "network-compliance-auditor",
    name: "Network Compliance Audit Tool",
    description:
      "Automated tool to audit network device configurations against compliance policies. Scans 200+ configuration standards and generates compliance reports.",
    technologies: ["Python", "Netmiko", "Regex", "Jinja2", "ReportLab"],
    github: "https://github.com/chandrakanthkakarla/network-compliance-auditor",
    status: "active",
    highlights: [
      "Audits 200+ compliance standards",
      "Automated PDF report generation",
      "Policy-as-code framework",
      "Tracks compliance trends over time",
    ],
  },
  {
    id: "bgp-simulator",
    name: "BGP Simulation & Testing Lab",
    description:
      "GNS3-based BGP simulation environment with Docker containers for learning and testing BGP convergence, failover, and policy scenarios.",
    technologies: ["GNS3", "Docker", "Cisco IOS", "Linux", "Python"],
    github: "https://github.com/chandrakanthkakarla/bgp-simulator-lab",
    status: "maintenance",
    highlights: [
      "Full BGP convergence simulation",
      "6-router topology with realistic configs",
      "Failover testing scenarios",
      "Used for CCNA preparation",
    ],
  },
];
