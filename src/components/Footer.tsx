import { Button } from '@/components/ui/button';
import {
    siGithub,
    siGooglescholar,
    siResearchgate,
    siX,
    siLogmein,
    siOrcid,
} from 'simple-icons';
import { BookOpen, Activity, ExternalLink, Mail } from 'lucide-react';

export const Footer = () => {
    const socialLinks = [
        {
            name: 'Google Scholar',
            icon: siGooglescholar,
            url: 'https://scholar.google.com/citations?hl=en&user=Rhue_kkAAAAJ',
        },
        {
            name: 'ResearchGate',
            icon: siResearchgate,
            url: 'https://www.researchgate.net/profile/Farzad-Asgari',
        },
        {
            name: 'X',
            icon: siX,
            url: 'https://x.com/farzad_asg',
        },
        {
            name: 'LinkedIn',
            icon: siLogmein,
            url: 'https://www.linkedin.com/in/farzad-asgari/',
        },
        {
            name: 'ORCID',
            icon: siOrcid,
            url: 'https://orcid.org/0009-0008-3800-0408',
        },
        {
            name: 'GitHub',
            icon: siGithub,
            url: 'https://github.com/farzadasgari',
        },
    ];
    return (
        <footer className="bg-slate-800 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-8 grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Activity className="mb-4 h-5 w-5 text-xl text-white" />
                            <h3 className="mb-4 text-xl font-bold">WebADV</h3>
                        </div>
                        <p className="mb-4 text-slate-300">
                            Advanced acoustic Doppler velocimeter data analysis
                            platform built on peer-reviewed algorithms and
                            research.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/farzadasgari/webadv"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer border-slate-600 text-slate-600 hover:border-slate-50 hover:bg-slate-600 hover:text-slate-50"
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
                                    GitHub
                                </Button>
                            </a>
                            <Button
                                variant="outline"
                                size="sm"
                                className="cursor-wait border-slate-600 text-slate-600 hover:border-slate-50 hover:bg-slate-600 hover:text-slate-50"
                            >
                                <BookOpen className="mr-2 h-4 w-4" />
                                Docs
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">
                            Research Foundation
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="https://github.com/farzadasgari/proadv"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Original ProADV Repository
                            </a>
                            <a
                                href="https://doi.org/10.1016/j.softx.2024.101868"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                ProADV: A toolkit for enhancing water dynamics
                                Research
                            </a>
                            <a
                                href="https://doi.org/10.1016/j.measurement.2023.114053"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                3d Kernel Density Estimation Filtering Research
                            </a>
                            <a
                                href="https://doi.org/10.1016/j.flowmeasinst.2023.102485"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Signal Pollution Rate Research
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">
                            Research Team
                        </h4>
                        <div className="space-y-2 text-slate-300">
                            <a
                                href="https://scholar.google.com/citations?hl=en&user=Rhue_kkAAAAJ"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Farzad Asgari
                            </a>
                            <a
                                href="https://scholar.google.com/citations?hl=en&user=E8PFUBEAAAAJ"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Seyed Hossein Mohajeri
                            </a>
                            <a
                                href="https://scholar.google.com/citations?hl=en&user=GwT49LIAAAAJ"
                                target="_blank"
                                className="flex items-center text-slate-300 transition-colors hover:text-white"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Mojtaba Mehraein
                            </a>
                        </div>
                        <a href="mailto:khufarzadasgari@gmail.com">
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 cursor-pointer border-slate-600 text-slate-600 hover:border-slate-50 hover:bg-slate-600 hover:text-slate-50"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Contact Team
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="text-sm text-slate-400">
                            <a
                                className="text-sm text-slate-400 underline transition-colors hover:text-white"
                                href="https://github.com/farzadasgari"
                            >
                                Farzad Asgari
                            </a>{' '}
                            © 2025{' '}
                            <a
                                className="text-sm text-slate-400 underline transition-colors hover:text-white"
                                href="https://github.com/farzadasgari/webadv"
                            >
                                WebADV
                            </a>
                            . Open source under{' '}
                            <a
                                href="https://github.com/farzadasgari/webadv/blob/main/LICENSE"
                                className="text-sm text-slate-400 underline transition-colors hover:text-white"
                            >
                                MIT
                            </a>{' '}
                            License.
                        </p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 transition-colors hover:text-white"
                                    title={link.name}
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 fill-current"
                                    >
                                        <title>{link.name}</title>
                                        <path d={link.icon.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
