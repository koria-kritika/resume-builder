import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernCardTemplate = ({ data, accentColor = "#2563EB" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 font-sans text-gray-800 rounded-lg shadow-lg">
      {/* HEADER */}
      <div
        className="p-6 rounded-lg text-white mb-8"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-3xl font-bold">{data.personal_info?.full_name || "Your Name"}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          {data.personal_info?.email && <span className="flex items-center gap-1"><Mail size={14} />{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span className="flex items-center gap-1"><Phone size={14} />{data.personal_info.phone}</span>}
          {data.personal_info?.location && <span className="flex items-center gap-1"><MapPin size={14} />{data.personal_info.location}</span>}
          {data.personal_info?.linkedin && <span className="flex items-center gap-1"><Linkedin size={14} />{data.personal_info.linkedin}</span>}
          {data.personal_info?.website && <span className="flex items-center gap-1"><Globe size={14} />{data.personal_info.website}</span>}
        </div>
      </div>

      {/* SUMMARY */}
      {data.professional_summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>Summary</h2>
          <p className="text-gray-700">{data.professional_summary}</p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp, i) => (
              <div key={i} className="p-4 border-l-4 border-gray-300 bg-white rounded shadow-sm">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600">{exp.company}</p>
                {exp.description && <p className="mt-2 text-gray-700">{exp.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.project?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>Projects</h2>
          <ul className="space-y-3">
            {data.project.map((proj, i) => (
              <li key={i} className="p-3 bg-white rounded shadow-sm">
                <p className="font-semibold">{proj.name}</p>
                <p className="text-gray-600">{proj.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* EDUCATION */}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>Education</h2>
          <div className="space-y-3">
            {data.education.map((edu, i) => (
              <div key={i} className="p-3 bg-white rounded shadow-sm flex justify-between">
                <div>
                  <p className="font-semibold">{edu.degree}{edu.field && ` in ${edu.field}`}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                </div>
                <p className="text-sm text-gray-500">{formatDate(edu.graduation_date)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {data.skills?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 rounded-full border text-sm" style={{ borderColor: accentColor }}>{skill}</span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ModernCardTemplate;

