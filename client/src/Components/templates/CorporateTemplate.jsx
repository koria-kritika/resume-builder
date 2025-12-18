import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const CorporateTemplate = ({ data, accentColor }) => {
    
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [y, m] = dateStr.split("-");
        return new Date(y, m - 1).toLocaleDateString("en-US", { year: "numeric", month: "short" });
    };

    return (
        <div className="max-w-4xl mx-auto p-10 bg-white text-gray-900 tracking-wide">
            
            {/* Header */}
            <header
                className="p-8 rounded-xl text-center text-white mb-10"
                style={{ background: `linear-gradient(120deg, ${accentColor}, #000)` }}
            >
                <h1 className="text-4xl font-extrabold uppercase tracking-wide">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                
                <div className="flex flex-wrap gap-5 justify-center mt-5 text-sm opacity-90">
                    {data.personal_info?.email && <span className="flex gap-1 items-center"><Mail size={14}/> {data.personal_info.email}</span>}
                    {data.personal_info?.phone && <span className="flex gap-1 items-center"><Phone size={14}/> {data.personal_info.phone}</span>}
                    {data.personal_info?.location && <span className="flex gap-1 items-center"><MapPin size={14}/> {data.personal_info.location}</span>}
                    {data.personal_info?.linkedin && <span className="flex gap-1 items-center"><Linkedin size={14}/> {data.personal_info.linkedin}</span>}
                    {data.personal_info?.website && <span className="flex gap-1 items-center"><Globe size={14}/> {data.personal_info.website}</span>}
                </div>
            </header>

            {/* Summary */}
            {data.professional_summary && (
                <section className="mb-10">
                    <h2 className="font-bold text-xl uppercase border-l-8 pl-4 mb-3"
                        style={{ borderColor: accentColor }}>
                        Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience?.length > 0 && (
                <section className="mb-10">
                    <h2 className="font-bold text-xl uppercase border-l-8 pl-4 mb-4"
                        style={{ borderColor: accentColor }}>
                        Experience
                    </h2>

                    {data.experience.map((exp, i) => (
                        <div key={i} className="mb-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{exp.role}</h3>
                                <span className="text-sm font-medium text-gray-600">
                                    {formatDate(exp.start_date)} - {exp.current ? "Present" : formatDate(exp.end_date)}
                                </span>
                            </div>
                            <p className="text-md font-medium mt-1">{exp.company}</p>
                            <p className="text-sm text-gray-600 italic">{exp.location}</p>

                            {exp.description && (
                                <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
                                    {exp.description.split(".").map((line, idx) =>
                                        line.trim() ? <li key={idx}>{line.trim()}</li> : null
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Projects */}
            {data.projects?.length > 0 && (
                <section className="mb-10">
                    <h2 className="font-bold text-xl uppercase border-l-8 pl-4 mb-4"
                        style={{ borderColor: accentColor }}>
                        Projects
                    </h2>

                    {data.projects.map((project, i) => (
                        <div key={i} className="mb-6 p-4 border rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.technologies?.join(" • ")}</p>
                            <p className="mt-2 text-gray-700">{project.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* Education */}
            {data.education?.length > 0 && (
                <section className="mb-10">
                    <h2 className="font-bold text-xl uppercase border-l-8 pl-4 mb-4"
                        style={{ borderColor: accentColor }}>
                        Education
                    </h2>

                    {data.education.map((edu, i) => (
                        <div key={i} className="mb-6 p-4 border rounded-lg shadow-sm">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                <span className="text-sm text-gray-600">
                                    {formatDate(edu.start_date)} - {edu.current ? "Present" : formatDate(edu.end_date)}
                                </span>
                            </div>
                            <p className="text-md">{edu.institution}</p>
                            <p className="text-sm text-gray-600 italic">{edu.location}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* Skills */}
            {data.skills?.length > 0 && (
                <section>
                    <h2 className="font-bold text-xl uppercase border-l-8 pl-4 mb-4"
                        style={{ borderColor: accentColor }}>
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {data.skills.map((skill, i) => (
                            <span key={i} className="px-4 py-1 text-sm rounded-full border font-medium"
                                  style={{ borderColor: accentColor, color: accentColor }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};




export default CorporateTemplate;

