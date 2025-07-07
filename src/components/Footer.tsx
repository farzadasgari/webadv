import {Button} from "@/components/ui/button";
import {siGithub} from "simple-icons";
import {BookOpen, Activity} from "lucide-react";

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
                </div>

                <div className="border-t border-slate-700 pt-8">
                    2
                </div>
            </div>
        </footer>
    )
}