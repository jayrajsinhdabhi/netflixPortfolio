import { Briefcase, Calendar, MapPin } from "lucide-react";

const ProfessionalSection = () => {
  const experiences = [
    {
      title: "Computer Engineering Technology",
      company: "Sheridan",
      location: "On-Site",
      period: "2023 - present",
      achievements: [
        "Currently enrolled in the Computer Engineering Technology program at Sheridan.",
      ],
    },
    {
      title: "Web/Mobile Developer",
      company: "Flynn Group of Companies · Co-op",
      location: "Toronto, Ontario, Canada · On-site",
      period: "Sep 2025 - Present · 3 mos",
      achievements: [
        "Working on mobile and web app development projects using modern frontend frameworks and native tooling.",
        "Assist in design, build and maintain SQL (MySQL) and NoSQL (MongoDB, DynamoDB) data layers.",
        "Assist in design, build and maintain RESTful APIs to support web and mobile clients.",
        "Support building CI/CD pipelines and automation to streamline deployments and testing.",
        "Participate in building and maintaining front-end web applications to interact with internal APIs.",
        "Take responsibility for quality, security, and building testable software through code reviews and automated tests.",
      ],
    },
    {
      title: "IT Service Technician",
      company: "Flynn Group of Companies",
      location: "Toronto · On-site",
      period: "Jan 2025 - Apr 2025",
      achievements: [
        "Provided technical support to end-users using Jira Service Desk and Zendesk, managing and resolving tickets efficiently.",
        "Onboarded and managed devices with Microsoft Entra ID and Microsoft Intune, including mobile device management and remote provisioning.",
        "Performed Active Directory administration and remote device management to maintain user accounts and secure access.",
        "Troubleshot computer hardware and networking issues on-site, improving system reliability and user productivity.",
        "Authored technical documentation and user assistance guides to streamline support and reduce repeat incidents.",
        "Applied IT service management practices and performed basic data analysis to track incident trends and improve response workflows.",
      ],
    },
  ];

  return (
    <section id="professional" className="py-16 px-8 bg-card/30">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
