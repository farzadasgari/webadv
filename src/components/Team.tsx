import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siGithub, siGooglescholar, siLogmein } from 'simple-icons';
import { ExternalLink, BookOpen, Award } from 'lucide-react';

export const Team = () => {
    const teamMembers = [
        {
            name: 'Farzad Asgari',
            role: 'Lead Developer & Researcher',
            affiliation: 'Research Associate',
            expertise: [
                'Signal Processing',
                'Data Analysis',
                'Algorithm Development',
            ],
            avatar: '/webadv/team/farzad.jpg',
            scholar:
                'https://scholar.google.com/citations?user=Rhue_kkAAAAJ&hl=en',
            linkedin: 'https://www.linkedin.com/in/farzad-asgari/',
        },
        {
            name: 'Seyed Hossein Mohajeri',
            role: 'Head of the Research',
            affiliation: 'Associate Professor',
            expertise: [
                'Turbulence Analysis',
                'Statistical Methods',
                'Data Validation',
            ],
            avatar: '/webadv/team/hossein.jpg',
            scholar:
                'https://scholar.google.com/citations?user=E8PFUBEAAAAJ&hl=en',
            linkedin: 'https://ir.linkedin.com/in/hossein-mohajeri',
        },
        {
            name: 'Mojtaba Mehraein',
            role: 'Head of the Laboratory',
            affiliation: 'Associate Professor',
            expertise: [
                'Machine Learning',
                'Pattern Recognition',
                'Data Mining',
            ],
            avatar: '/webadv/team/mojtaba.jpg',
            scholar:
                'https://scholar.google.com/citations?user=GwT49LIAAAAJ&hl=en',
            linkedin: 'https://ir.linkedin.com/in/mojtaba-mehraein-002a03238',
        },
    ];
    const contributions = [
        {
            title: 'Core Algorithm Development',
            description:
                'Development of advanced despiking algorithms including 3d-KDE and m3d-KDE.',
        },
        {
            title: 'Signal Processing Innovation',
            description:
                'Implementation of novel signal pollution rate calculation and multivariate statistical analysis techniques.',
        },
        {
            title: 'Open Source Community',
            description:
                'Maintaining an active open-source project with comprehensive documentation and community support.',
        },
        {
            title: 'Research Publications',
            description:
                'Publishing peer-reviewed research on ADV data processing and contributing to the scientific community.',
        },
    ];
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-slate-800">
                        Our Research Team
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-slate-600">
                        Meet the dedicated researchers and developers behind
                        ProADV and WebADV, advancing the field of acoustic
                        Doppler velocimeter data analysis through innovative
                        algorithms and open-source collaboration.
                    </p>
                </div>
                <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="p-6 transition-shadow hover:shadow-lg"
                        >
                            <div className="mb-4 text-center">
                                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700">
                                    <img
                                        src={member.avatar}
                                        alt=""
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="mb-1 text-xl font-bold text-slate-800">
                                    {member.name}
                                </h3>
                                <p className="mb-2 font-medium text-blue-600">
                                    {member.role}
                                </p>
                                <p className="mb-4 text-sm text-slate-600">
                                    {member.affiliation}
                                </p>
                            </div>

                            <div className="mb-4">
                                <h4 className="mb-2 text-sm font-semibold text-slate-800">
                                    Expertise
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {member.expertise.map(
                                        (skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-background hover:bg-accent flex-1 cursor-pointer"
                                    onClick={() =>
                                        window.open(member.scholar, '_blank')
                                    }
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
                                    className="bg-background hover:bg-accent flex-1 cursor-pointer"
                                    onClick={() =>
                                        window.open(member.linkedin, '_blank')
                                    }
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
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-800">
                        Our Contributions
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {contributions.map((contribution, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-800">
                                            {contribution.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {contribution.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-sm">
                    <div className="mb-8 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-800">
                            Join Our Research Community
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600">
                            We welcome contributions from researchers,
                            developers, and practitioners in the field of
                            hydrodynamics and signal processing. Together, we
                            can advance ADV data analysis capabilities.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button
                            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                            onClick={() =>
                                window.open(
                                    'https://github.com/farzadasgari/webadv/blob/main/CONTRIBUTING.md',
                                    '_blank'
                                )
                            }
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-4 w-4 fill-current"
                            >
                                <title>GitHub</title>
                                <path d={siGithub.path} />
                            </svg>
                            Contribute on GitHub
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-background hover:bg-accent"
                            onClick={() =>
                                window.open(
                                    'https://github.com/farzadasgari/webadv?tab=readme-ov-file#citation',
                                    '_blank'
                                )
                            }
                        >
                            <BookOpen className="mr-2 h-4 w-4" />
                            Read Our Papers
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-background hover:bg-accent"
                            onClick={() =>
                                window.open(
                                    'https://github.com/farzadasgari/proadv',
                                    '_blank'
                                )
                            }
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit ProADV Repository
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
