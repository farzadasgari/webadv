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
                <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
                    <h2 className="mb-4 text-2xl font-bold text-slate-800">
                        Powered by ProADV
                    </h2>
                    <p className="mb-6 text-slate-700">
                        Built on the foundation of peer-reviewed algorithms and
                        research from the original
                        <a
                            href="https://github.com/farzadasgari/proadv"
                            target="_blank"
                            className="mr-1 ml-1 font-semibold underline transition-colors hover:text-slate-400"
                        >
                            ProADV
                        </a>
                        toolkit, ensuring scientific accuracy and reliability in
                        your acoustic Doppler velocimeter data analysis.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                        <span>
                            • Kernel Density Estimation (KDE/3d-KDE/m3d-KDE)
                        </span>
                        <span>
                            • Phase-Space Thresholding (PST/mPST/3d-PST)
                        </span>
                        <span>• Velocity Correlation (VC)</span>
                        <span>• Acceleration Thresholding (ACC)</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                        <span>• Power Spectra Density (PSD)</span>
                        <span>• Singular Spectrum Analysis (SSA)</span>
                        <span>• Kalman</span>
                        <span>• Moving Averages</span>
                    </div>
                </Card>
            </div>
        </section>
    );
};
