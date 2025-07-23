import { Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnalysisTabContent } from '@/components/AnalysisTabContent';

export const Analysis = () => {
    const preAlgorithms = [
        {
            name: 'Acceleration Thresholding (ACC)',
            description:
                'Identifies spikes based on acceleration thresholds in velocity data.',
            parameters: [
                {
                    name: 'Acceleration Threshold',
                    type: 'slider' as const,
                    min: 0,
                    max: 10,
                    default: 5,
                },
                {
                    name: 'Window Size',
                    type: 'select' as const,
                    options: ['5', '10', '15', '20'],
                    default: '10',
                },
            ],
        },
        {
            name: 'Phase-Space Thresholding (PST)',
            description:
                'Uses phase-space representation to detect velocity spikes.',
            parameters: [
                {
                    name: 'Lambda Threshold',
                    type: 'slider' as const,
                    min: 0.1,
                    max: 2.0,
                    default: 1.0,
                },
                {
                    name: 'Enable mPST',
                    type: 'switch' as const,
                    default: false,
                },
            ],
        },
        {
            name: '3d Kernel Density Estimation',
            description:
                'Advanced machine learning approach for spike detection in 3D velocity space.',
            parameters: [
                {
                    name: 'Bandwidth',
                    type: 'slider' as const,
                    min: 0.01,
                    max: 1.0,
                    default: 0.1,
                },
                {
                    name: 'Threshold Percentile',
                    type: 'slider' as const,
                    min: 90,
                    max: 99,
                    default: 95,
                },
            ],
        },
    ];

    const proAlgorithms = [
        {
            name: 'Moving Average Filter',
            description:
                'Applies moving average smoothing to reduce high-frequency noise.',
            parameters: [
                {
                    name: 'Window Size',
                    type: 'slider' as const,
                    min: 3,
                    max: 21,
                    default: 5,
                },
                {
                    name: 'Filter Type',
                    type: 'select' as const,
                    options: ['Simple', 'Exponential', 'Weighted'],
                    default: 'Simple',
                },
            ],
        },
        {
            name: 'Kalman Filter',
            description: 'Optimal state estimation filter for noise reduction.',
            parameters: [
                {
                    name: 'Process Noise',
                    type: 'slider' as const,
                    min: 0.001,
                    max: 0.1,
                    default: 0.01,
                },
                {
                    name: 'Measurement Noise',
                    type: 'slider' as const,
                    min: 0.001,
                    max: 0.1,
                    default: 0.01,
                },
            ],
        },
        {
            name: 'Singular Spectrum Analysis',
            description:
                'Decomposes signal into trend, periodic, and noise components.',
            parameters: [
                {
                    name: 'Embedding Dimension',
                    type: 'slider' as const,
                    min: 10,
                    max: 100,
                    default: 50,
                },
                {
                    name: 'Components to Keep',
                    type: 'slider' as const,
                    min: 1,
                    max: 20,
                    default: 5,
                },
            ],
        },
    ];

    const posAlgorithms = [
        {
            name: 'Butterworth Filter',
            description:
                'Digital filter with maximally flat frequency response in the passband.',
            parameters: [
                {
                    name: 'Filter Order',
                    type: 'slider' as const,
                    min: 1,
                    max: 10,
                    default: 4,
                },
                {
                    name: 'Cutoff Frequency',
                    type: 'slider' as const,
                    min: 0.1,
                    max: 25,
                    default: 10,
                },
                {
                    name: 'Filter Type',
                    type: 'select' as const,
                    options: ['Low-pass', 'High-pass', 'Band-pass'],
                    default: 'Low-pass',
                },
            ],
        },
        {
            name: 'Wavelet Denoising',
            description:
                'Uses wavelet transform for multi-resolution noise reduction.',
            parameters: [
                {
                    name: 'Wavelet Type',
                    type: 'select' as const,
                    options: ['Daubechies', 'Biorthogonal', 'Coiflets'],
                    default: 'Daubechies',
                },
                {
                    name: 'Decomposition Levels',
                    type: 'slider' as const,
                    min: 1,
                    max: 8,
                    default: 4,
                },
            ],
        },
    ];
    return (
        <section className="min-h-screen px-4 py-12">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h1 className="mb-4 flex items-center justify-center text-3xl font-bold text-slate-800">
                        <Activity className="mr-3 h-8 w-8" />
                        Data Analysis & Processing
                    </h1>
                    <p className="text-lg text-slate-600">
                        Configure and apply advanced algorithms for cleaning and
                        analyzing your ADV data
                    </p>
                </div>
                <Tabs defaultValue="pre" className="w-full">
                    <TabsList className="mb-8 grid h-12 w-full grid-cols-3">
                        <TabsTrigger
                            value="pre"
                            className="text-sm font-medium"
                        >
                            Pre-Process
                        </TabsTrigger>
                        <TabsTrigger
                            value="pro"
                            className="text-sm font-medium"
                        >
                            Despiking
                        </TabsTrigger>
                        <TabsTrigger
                            value="pos"
                            className="text-sm font-medium"
                        >
                            Post-Process
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="pre" className="w-full">
                        <AnalysisTabContent
                            title="Pre-Processing"
                            description="Remove velocity spikes and outliers using proven statistical and machine learning methods."
                            algorithms={preAlgorithms}
                        />
                    </TabsContent>
                    <TabsContent value="pro" className="w-full">
                        <AnalysisTabContent
                            title="Despiking"
                            description="Reduce noise while preserving important signal characteristics in your velocity data."
                            algorithms={proAlgorithms}
                        />
                    </TabsContent>

                    <TabsContent value="pos" className="w-full">
                        <AnalysisTabContent
                            title="Post-Processing"
                            description="Apply frequency-domain filtering techniques to enhance signal quality."
                            algorithms={posAlgorithms}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};
