export type ProficiencyLevel = "expert" | "proficient" | "learning";

export interface Skill {
  name: string;
  proficiency: ProficiencyLevel;
  yearsOfExperience?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
  icon?: string;
}

export const skillsMatrix: SkillCategory[] = [
  {
    category: "Routing & Switching",
    skills: [
      { name: "BGP", proficiency: "expert", yearsOfExperience: 2 },
      { name: "OSPF", proficiency: "expert", yearsOfExperience: 2.5 },
      { name: "EIGRP", proficiency: "proficient", yearsOfExperience: 1.5 },
      { name: "VLANs & Spanning Tree", proficiency: "expert", yearsOfExperience: 2.5 },
      { name: "QoS & Traffic Engineering", proficiency: "proficient", yearsOfExperience: 1.5 },
      { name: "HSRP/VRRP", proficiency: "expert", yearsOfExperience: 2 },
    ],
  },
  {
    category: "Network Security",
    skills: [
      { name: "Access Control Lists (ACLs)", proficiency: "expert", yearsOfExperience: 2 },
      { name: "Firewalls & NAT", proficiency: "expert", yearsOfExperience: 2 },
      { name: "VPN (IPsec, SSL)", proficiency: "proficient", yearsOfExperience: 1.5 },
      { name: "802.1X Authentication", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Zero Trust Architecture", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Network Segmentation", proficiency: "expert", yearsOfExperience: 2 },
    ],
  },
  {
    category: "Network Monitoring & Operations",
    skills: [
      { name: "SolarWinds", proficiency: "expert", yearsOfExperience: 2.5 },
      { name: "Prometheus & Grafana", proficiency: "expert", yearsOfExperience: 1.5 },
      { name: "Netflow Analysis", proficiency: "expert", yearsOfExperience: 2 },
      { name: "SNMP & Syslog", proficiency: "expert", yearsOfExperience: 2.5 },
      { name: "ServiceNow", proficiency: "proficient", yearsOfExperience: 2 },
      { name: "Wireshark & tcpdump", proficiency: "expert", yearsOfExperience: 2 },
    ],
  },
  {
    category: "Network Automation",
    skills: [
      { name: "Ansible", proficiency: "expert", yearsOfExperience: 1.5 },
      { name: "Python (Netmiko, NAPALM)", proficiency: "proficient", yearsOfExperience: 1.5 },
      { name: "Terraform", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Git & CI/CD", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Scripting (Bash, PowerShell)", proficiency: "expert", yearsOfExperience: 2 },
    ],
  },
  {
    category: "Cloud Networking",
    skills: [
      { name: "AWS Networking (VPC, EC2)", proficiency: "expert", yearsOfExperience: 1.5 },
      { name: "AWS Direct Connect", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Azure Networking", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Azure ExpressRoute", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "Hybrid Cloud Architecture", proficiency: "expert", yearsOfExperience: 1 },
      { name: "Kubernetes Networking", proficiency: "learning", yearsOfExperience: 0.5 },
    ],
  },
  {
    category: "Wireless Networking",
    skills: [
      { name: "802.11ac/ax (Wi-Fi 6)", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "WLAN Design & Deployment", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "RF Coverage & Optimization", proficiency: "learning", yearsOfExperience: 0.5 },
      { name: "Mobility & Roaming", proficiency: "proficient", yearsOfExperience: 1 },
    ],
  },
  {
    category: "Certifications & Credentials",
    skills: [
      { name: "CompTIA Network+", proficiency: "expert", yearsOfExperience: 2.5 },
      { name: "Google IT Support Professional", proficiency: "expert", yearsOfExperience: 2 },
      { name: "Zero Trust ZTCA Certified", proficiency: "expert", yearsOfExperience: 1 },
      { name: "AWS Cloud Practitioner", proficiency: "proficient", yearsOfExperience: 1 },
      { name: "CCNA (In Progress)", proficiency: "learning", yearsOfExperience: 0 },
    ],
  },
];
