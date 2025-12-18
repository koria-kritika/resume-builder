import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const NeoAtsTemplate = ({ data, accentColor }) => {

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-10 bg-white text-gray-900 font-serif">

            {/* Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-semibold tracking-wide" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex gap-5 flex-wrap text-sm mt-3 text-gray-600">
                    {data.personal_info?.email && <p><Mail size={14} className="inline mr-1" />{data.personal_info.email}</p>}
                    {data.personal_info?.phone && <p><Phone size={14} className="inline mr-1" />{data.personal_info.phone}</p>}
                    {data.personal_info?.location && <p><MapPin size={14} className="inline mr-1" />{data.personal_info.location}</p>}
                    {data.personal_info?.linkedin && <p><Linkedin size={14} className="inline mr-1" />{data.personal_info.linkedin}</p>}
                    {data.personal_info?.website && <p><Globe size={14} className="inline mr-1" />{data.personal_info.website}</p>}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-8">
                    <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider" style={{ color: accentColor }}>
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience?.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider" style={{ color: accentColor }}>
                        Experience
                    </h2>

                    {data.experience.map((exp, i) => (
                        <div key={i} className="mb-5">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold text-lg">{exp.position}</p>
                                    <p className="text-gray-700">{exp.company}</p>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                </p>
                            </div>

                            {exp.description && (
                                <p className="text-gray-700 mt-2 whitespace-pre-line leading-relaxed">
                                    {exp.description}
                                </p>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Projects */}
            {data.project?.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    {data.project.map((proj, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{proj.name}</p>
                            <p className="text-gray-600">{proj.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* Education */}
            {data.education?.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-semibold mb-3 uppercase tracking-wider" style={{ color: accentColor }}>
                        Education
                    </h2>

                    {data.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between">
                                <p className="font-semibold">
                                    {edu.degree} {edu.field && `in ${edu.field}`}
                                </p>
                                <p className="text-sm text-gray-600">{formatDate(edu.graduation_date)}</p>
                            </div>
                            <p className="text-gray-700">{edu.institution}</p>
                            {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                        </div>
                    ))}
                </section>
            )}

            {/* Skills */}
            {data.skills?.length > 0 && (
                <section>
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider" style={{ color: accentColor }}>
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-3 text-gray-700">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="border px-3 py-1 rounded-full text-sm" style={{ borderColor: accentColor }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default NeoAtsTemplate;
