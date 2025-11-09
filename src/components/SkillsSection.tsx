import { Code, Database, Cloud, Smartphone, Zap, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vue.js",
        "Redux",
      ],
    },
    {
      icon: Code,
      title: "Web & Mobile",
      skills: [
        "NoSQL",
        "SQL",
        "Amazon Web Services (AWS)",
        "docker",
        "Postman API",
        "Azure DevOps Server",
        "Angular",
        "TypeScript",
        "Kendo UI",
        "Kotlin",
        "REST APIs",
        "Jira",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        "Ruby on Rails",
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
    },
    {
      icon: Zap,
      title: "Performance",
      skills: [
        "Optimization",
        "Caching",
        "CDN",
        "Load Balancing",
        "Microservices",
      ],
    },
    {
      icon: Shield,
      title: "Security",
      skills: [
        "XSS Prevention",
        "Password Policies",
        "DevOps Security",
        "OWASP",
        "Compliance",
      ],
    },
    {
      icon: Cloud,
      title: "IT & Support",
      skills: [
        "Jira Service Desk",
        "Zendesk",
        "Microsoft Entra ID",
        "Microsoft Intune",
        "Active Directory",
        "Technical Support",
        "Technical Writing",
        "User Assistance",
        "Data Analysis",
        "IT Service Management",
        "Mobile Device Management",
        "Computer Networking",
        "Computer Hardware",
        "Remote Device Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/50 p-6 rounded border border-border hover:border-muted-foreground/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
