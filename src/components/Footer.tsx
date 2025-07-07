import {Button} from "@/components/ui/button";
import {siGithub} from "simple-icons";
import {BookOpen, Activity, ExternalLink, Mail} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Activity className="mb-4 h-5 w-5 text-white text-xl"/>
                            <h3 className="text-xl font-bold mb-4">WebADV</h3>
                        </div>
                        <p className="text-slate-300 mb-4">
                            Advanced acoustic Doppler velocimeter data analysis platform built on
                            peer-reviewed algorithms and research.
                        </p>
                        <div className="flex space-x-3">
                            <a href="https://github.com/farzadasgari/webadv" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm"
                                    className="cursor-pointer border-slate-600 hover:border-slate-50 text-slate-600 hover:bg-slate-600 hover:text-slate-50">
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mr-2 fill-current"
                                    >
                                        <title>GitHub</title>
                                        <path d={siGithub.path}/>
                                    </svg>
                                    GitHub

                            </Button>
                            </a>
                            <Button variant="outline" size="sm"
                                    className="cursor-wait border-slate-600 hover:border-slate-50 text-slate-600 hover:bg-slate-600 hover:text-slate-50">
                                <BookOpen className="w-4 h-4 mr-2"/>
                                Docs
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Research Foundation</h4>
                        <div className="space-y-3">
                            <a href="https://github.com/farzadasgari/proadv" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Original ProADV Repository
                            </a>
                            <a href="https://doi.org/10.1016/j.softx.2024.101868" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                ProADV: A toolkit for enhancing water dynamics Research
                            </a>
                            <a href="https://doi.org/10.1016/j.measurement.2023.114053" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                3d Kernel Density Estimation Filtering Research
                            </a>
                            <a href="https://doi.org/10.1016/j.flowmeasinst.2023.102485" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Signal Pollution Rate Research
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Research Team</h4>
                        <div className="space-y-2 text-slate-300">
                            <a href="https://scholar.google.com/citations?hl=en&user=Rhue_kkAAAAJ" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Farzad Asgari
                            </a>
                            <a href="https://scholar.google.com/citations?hl=en&user=E8PFUBEAAAAJ" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Seyed Hossein Mohajeri
                            </a>
                            <a href="https://scholar.google.com/citations?hl=en&user=GwT49LIAAAAJ" target="_blank" className="flex items-center text-slate-300 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Mojtaba Mehraein
                            </a>
                        </div>
                        <a href="mailto:khufarzadasgari@gmail.com">
                        <Button variant="outline" size="sm" className="mt-4 cursor-pointer border-slate-600 hover:border-slate-50 text-slate-600 hover:bg-slate-600 hover:text-slate-50">
                            <Mail className="w-4 h-4 mr-2" />
                            Contact Team
                        </Button>
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8">
                    2
                </div>
            </div>
        </footer>
    )
}