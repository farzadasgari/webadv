import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { siGithub, siGooglescholar, siLogmein} from "simple-icons";
import { ExternalLink, Users, BookOpen, Award } from "lucide-react";

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
    const contributions = [
        {
            title: "Core Algorithm Development",
            description: "Development of advanced despiking algorithms including 3d-KDE and m3d-KDE."
        },
        {
            title: "Signal Processing Innovation",
            description: "Implementation of novel signal pollution rate calculation and multivariate statistical analysis techniques."
        },
        {
            title: "Open Source Community",
            description: "Maintaining an active open-source project with comprehensive documentation and community support."
        },
        {
            title: "Research Publications",
            description: "Publishing peer-reviewed research on ADV data processing and contributing to the scientific community."
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
                                    onClick={() => window.open(member.scholar, "_blank")}
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
                                    onClick={() => window.open(member.linkedin, "_blank")}
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
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
                        Our Contributions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {contributions.map((contribution, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{contribution.title}</h3>
                                        <p className="text-slate-600">{contribution.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-sm">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Join Our Research Community
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We welcome contributions from researchers, developers, and practitioners in the field of
                            hydrodynamics and signal processing. Together, we can advance ADV data analysis capabilities.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                                onClick={() => window.open("https://github.com/farzadasgari/webadv/blob/main/CONTRIBUTING.md", "_blank")}>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2 fill-current"
                            >
                                <title>GitHub</title>
                                <path d={siGithub.path} />
                            </svg>
                            Contribute on GitHub
                        </Button>
                        <Button variant="outline" className="bg-background hover:bg-accent"
                                onClick={() => window.open("https://github.com/farzadasgari/webadv?tab=readme-ov-file#citation", "_blank")}>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read Our Papers
                        </Button>
                        <Button variant="outline" className="bg-background hover:bg-accent"
                                onClick={() => window.open("https://github.com/farzadasgari/proadv", "_blank")}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit ProADV Repository
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}