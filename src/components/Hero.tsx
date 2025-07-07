import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, BarChart3, Eye, FileText } from 'lucide-react';

interface HeroProps {
    onNavigate: (section: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
    return (
        <section className="px-4 py-20">
            <div className="container mx-auto text-center">
                <div className="mx-auto mb-16 max-w-4xl">
                    <h1 className="mb-6 text-5xl leading-tight font-bold text-slate-800">
                        Advanced ADV Data Analysis
                        <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                            Made Simple
                        </span>
                    </h1>
                    <p className="mb-8 text-xl leading-relaxed text-slate-600">
                        WebADV provides an intuitive web interface for
                        processing and analyzing acoustic Doppler velocimeter
                        data using advanced despiking, denoising, and
                        statistical analysis algorithms.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            onClick={() => onNavigate('upload')}
                            className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                        >
                            Start Analyzing Data
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="cursor-pointer"
                        >
                            View Documentation
                        </Button>
                    </div>
                </div>
                <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: Upload,
                            title: 'Upload & Manage',
                            description:
                                'Upload ADV datasets in multiple formats with validation and preview',
                            action: () => onNavigate('upload'),
                        },
                        {
                            icon: BarChart3,
                            title: 'Advanced Analysis',
                            description:
                                'Apply sophisticated despiking and denoising algorithms',
                            action: () => onNavigate('analysis'),
                        },
                        {
                            icon: Eye,
                            title: 'Visualize Results',
                            description:
                                'Interactive charts for time-series, spectral, and statistical analysis',
                            action: () => onNavigate('visualization'),
                        },
                        {
                            icon: FileText,
                            title: 'Export & Report',
                            description:
                                'Download processed data and generate comprehensive reports',
                            action: () => {},
                        },
                    ].map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="cursor-pointer p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                onClick={feature.action}
                            >
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <Icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-slate-800">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
