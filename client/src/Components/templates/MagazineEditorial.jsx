import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const MagazineEditorial = ({ data, accentColor = "#B45309" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [y, m] = dateStr.split("-");
    return new Date(y, m - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
      {/* Top bar with name */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold" style={{ color: accentColor }}>{data.personal_info?.full_name || "Your Name"}</h1>
          <p className="text-sm text-gray-600 mt-1">{data.personal_info?.location}</p>
        </div>

        <div className="mt-4 md:mt-0 text-sm text-gray-700 flex flex-wrap gap-4">
          {data.personal_info?.email && <span className="flex items-center gap-2"><Mail size={14}/> {data.personal_info.email}</span>}
          {data.personal_info?.phone && <span className="flex items-center gap-2"><Phone size={14}/> {data.personal_info.phone}</span>}
          {data.personal_info?.linkedin && <span className="flex items-center gap-2 break-all"><Linkedin size={14}/> {data.personal_info.linkedin}</span>}
          {data.personal_info?.website && <span className="flex items-center gap-2 break-all"><Globe size={14}/> {data.personal_info.website}</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left column (summary + skills) */}
        <aside className="md:col-span-1">
          {data.professional_summary && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
            </section>
          )}

          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-2">Skills</h2>
              <div className="space-y-3 text-sm">
                {data.skills.map((s, i) => (
                  <div key={i}>
                    <p className="font-semibold">{s.category}</p>
                    <p className="text-gray-700 mt-1">{s.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* Right column (experience, projects, education) */}
        <main className="md:col-span-2 space-y-6">
          {/* Experience */}
          {data.experience?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>Experience</h2>
              <div className="space-y-4">
                {data.experience.map((exp, idx) => (
                  <article key={idx} className="p-4 border-l-4" style={{ borderColor: accentColor }}>
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{exp.job_title}</p>
                        <p className="text-sm text-gray-700">{exp.company}{exp.location ? ` • ${exp.location}` : ""}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                      </div>
                    </div>
                    {exp.description && <p className="mt-2 text-gray-700">{exp.description}</p>}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3">Projects</h2>
              <div className="space-y-4">
                {data.projects.map((p, i) => (
                  <div key={i} className="p-3 border rounded">
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm text-gray-600">{p.tech_stack?.join(", ")}</p>
                    <p className="mt-2 text-gray-700">{p.description}</p>
                    {p.link && <a href={p.link} className="text-sm underline" style={{ color: accentColor }}>View</a>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3">Education</h2>
              <div className="space-y-3">
                {data.education.map((edu, i) => (
                  <div key={i} className="p-2">
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
        </main>
      </div>
    </div>
  );
};

export default MagazineEditorial;
