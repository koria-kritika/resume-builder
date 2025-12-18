import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const SidebarTemplate = ({ data, accentColor = "#DB2777" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg flex font-sans">
      {/* Sidebar */}
      <aside className="w-1/3 p-6 bg-gray-100 flex flex-col gap-4">
        <h1 className="text-2xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <div className="flex flex-col gap-2 text-gray-700 text-sm">
          {data.personal_info?.email && <span className="flex items-center gap-1"><Mail size={14}/> {data.personal_info.email}</span>}
          {data.personal_info?.phone && <span className="flex items-center gap-1"><Phone size={14}/> {data.personal_info.phone}</span>}
          {data.personal_info?.location && <span className="flex items-center gap-1"><MapPin size={14}/> {data.personal_info.location}</span>}
          {data.personal_info?.linkedin && <span className="flex items-center gap-1"><Linkedin size={14}/> {data.personal_info.linkedin}</span>}
          {data.personal_info?.website && <span className="flex items-center gap-1"><Globe size={14}/> {data.personal_info.website}</span>}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-6 flex flex-col gap-6">
        {data.professional_summary && (
          <section>
            <h2 className="font-semibold text-lg" style={{ color: accentColor }}>Summary</h2>
            <p className="text-gray-700">{data.professional_summary}</p>
          </section>
        )}

        {data.experience?.length > 0 && (
          <section>
            <h2 className="font-semibold text-lg" style={{ color: accentColor }}>Experience</h2>
            <div className="space-y-3">
              {data.experience.map((exp,i) => (
                <div key={i}>
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-sm text-gray-500">{formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                  <p className="text-gray-700">{exp.company}</p>
                  {exp.description && <p className="text-gray-700">{exp.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.project?.length > 0 && (
          <section>
            <h2 className="font-semibold text-lg" style={{ color: accentColor }}>Projects</h2>
            <ul className="list-disc pl-5 space-y-1">
              {data.project.map((proj,i) => <li key={i}>{proj.name}: {proj.description}</li>)}
            </ul>
          </section>
        )}

        {data.education?.length > 0 && (
          <section>
            <h2 className="font-semibold text-lg" style={{ color: accentColor }}>Education</h2>
            {data.education.map((edu,i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <p className="font-semibold">{edu.degree}{edu.field && ` in ${edu.field}`}</p>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                </div>
                <p className="text-sm text-gray-500">{formatDate(edu.graduation_date)}</p>
              </div>
            ))}
          </section>
        )}

        {data.skills?.length > 0 && (
          <section>
            <h2 className="font-semibold text-lg" style={{ color: accentColor }}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill,i) => <span key={i} className="px-2 py-1 border rounded-full text-sm" style={{ borderColor: accentColor }}>{skill}</span>)}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default SidebarTemplate;
