import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Users} from "lucide-react";
import {siGooglescholar, siLogmein} from 'simple-icons';

export const Team = () => {
    const teamMembers = [
        {
            name: "Farzad Asgari",
            role: "Lead Developer & Researcher",
            affiliation: "Research Associate",
            expertise: ["Signal Processing", "Data Analysis", "Algorithm Development"],
            scholar: "https://scholar.google.com/citations?user=Rhue_kkAAAAJ&hl=en",
            linkedin: "https://www.linkedin.com/in/farzad-asgari/",
        },
        {
            name: "Seyed Hossein Mohajeri",
            role: "Head of the Research",
            affiliation: "Associate Professor",
            expertise: ["Turbulence Analysis", "Statistical Methods", "Data Validation"],
            scholar: "https://scholar.google.com/citations?user=E8PFUBEAAAAJ&hl=en",
            linkedin: "https://ir.linkedin.com/in/hossein-mohajeri",
        },
        {
            name: "Mojtaba Mehraein",
            role: "Head of the Laboratory",
            affiliation: "Associate Professor",
            expertise: ["Machine Learning", "Pattern Recognition", "Data Mining"],
            scholar: "https://scholar.google.com/citations?user=GwT49LIAAAAJ&hl=en",
            linkedin: "https://ir.linkedin.com/in/mojtaba-mehraein-002a03238",
        }
    ];
    return (
        <section className="py-12 px-4 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        Our Research Team
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Meet the dedicated researchers and developers behind ProADV and WebADV, advancing the field of
                        acoustic Doppler velocimeter data analysis through innovative algorithms and open-source
                        collaboration.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="text-center mb-4">
                                <div
                                    className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-10 h-10 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                <p className="text-sm text-slate-600 mb-4">{member.affiliation}</p>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-slate-800 mb-2">Expertise</h4>
                                <div className="flex flex-wrap gap-1">
                                    {member.expertise.map((skill, skillIndex) => (
                                        <span key={skillIndex}
                                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer flex-1 bg-background hover:bg-accent"
                                    onClick={() => window.open(member.scholar, '_blank')}
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-4 w-4 fill-current"
                                    >
                                        <title>Google Scholar</title>
                                        <path d={siGooglescholar.path} />
                                    </svg>
                                    Scholar
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer flex-1 bg-background hover:bg-accent"
                                    onClick={() => window.open(member.linkedin, '_blank')}
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-4 w-4 fill-current"
                                    >
                                        <title>LinkedIn</title>
                                        <path d={siLogmein.path} />
                                    </svg>
                                    LinkedIn
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}