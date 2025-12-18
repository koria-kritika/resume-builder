import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const NeumorphismSoftUI = ({ data, accentColor = "#0EA5A4" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [y, m] = dateStr.split("-");
    return new Date(y, m - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-gray-50 rounded-xl">
      <div className="bg-white rounded-xl p-8 shadow-neu">
        {/* small inline style for neumorphic shadow (Tailwind doesn't include by default) */}
        <style>{`
          .shadow-neu {
            box-shadow: 8px 8px 20px rgba(15,23,42,0.06), -8px -8px 20px rgba(255,255,255,0.9);
          }
        `}</style>

        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-semibold" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <div className="mt-3 text-sm text-gray-600 flex justify-center gap-4 flex-wrap">
            {data.personal_info?.email && <span className="flex items-center gap-2"><Mail size={14}/> {data.personal_info.email}</span>}
            {data.personal_info?.phone && <span className="flex items-center gap-2"><Phone size={14}/> {data.personal_info.phone}</span>}
            {data.personal_info?.location && <span className="flex items-center gap-2"><MapPin size={14}/> {data.personal_info.location}</span>}
          </div>
        </header>

        <main className="space-y-6">
          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h2 className="font-semibold text-lg mb-2">Summary</h2>
              <p className="text-gray-700">{data.professional_summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <section>
              <h2 className="font-semibold text-lg mb-3">Experience</h2>
              <div className="space-y-4">
                {data.experience.map((exp, i) => (
                  <div key={i} className="p-4 rounded-lg" style={{ background: "linear-gradient(180deg, #ffffff, #f8fafc)" }}>
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{exp.job_title}</p>
                        <p className="text-sm text-gray-700">{exp.company}{exp.location ? ` • ${exp.location}` : ""}</p>
                      </div>
                      <p className="text-sm text-gray-600">{formatDate(exp.start_date)} - {formatDate(exp.end_date)}</p>
                    </div>
                    {exp.description && <p className="mt-2 text-gray-700">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects?.length > 0 && (
            <section>
              <h2 className="font-semibold text-lg mb-3">Projects</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {data.projects.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{p.tech_stack?.join(", ")}</p>
                    <p className="mt-2 text-gray-700">{p.description}</p>
                    {p.link && <a href={p.link} className="text-sm underline" style={{ color: accentColor }}>Open</a>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="font-semibold text-lg mb-3">Education</h2>
              <div className="space-y-3">
                {data.education.map((edu, i) => (
                  <div key={i} className="p-3 rounded-md border">
                    <div className="flex justify-between">
                      <p className="font-semibold">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{formatDate(edu.start_date)} - {formatDate(edu.end_date)}</p>
                    </div>
                    <p className="text-gray-700">{edu.school}{edu.location ? ` • ${edu.location}` : ""}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
        {data.skills?.length > 0 && (
  <section>
    <h2 className="font-semibold text-lg mb-3">Skills</h2>
    <div className="flex flex-wrap gap-2">
      {data.skills.map((s, i) => (
        <div key={i} className="w-full md:w-1/2">
          <p className="font-semibold">{s.category}</p>
          <p className="text-sm text-gray-700">
            {Array.isArray(s.items) ? s.items.join(", ") : ""}
          </p>
        </div>
      ))}
    </div>
  </section>
)}

        </main>
      </div>
    </div>
  );
};

export default NeumorphismSoftUI;
