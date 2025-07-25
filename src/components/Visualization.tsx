import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    ScatterChart,
    Scatter,
} from 'recharts';
import { BarChart3, Download, Settings, Eye } from 'lucide-react';

export const Visualization = () => {
    const [selectedDataset, setSelectedDataset] = useState('dataset1');
    const [chartType, setChartType] = useState('timeseries');

    // Sample data for demonstration
    const timeSeriesData = Array.from({ length: 100 }, (_, i) => ({
        time: i * 0.1,
        raw: Math.sin(i * 0.1) + Math.random() * 0.5 - 0.25,
        processed: Math.sin(i * 0.1) + Math.random() * 0.1 - 0.05,
    }));

    const spectrumData = Array.from({ length: 50 }, (_, i) => ({
        frequency: i * 0.5,
        power: Math.exp(-i * 0.2) + Math.random() * 0.1,
    }));

    const statisticalData = [
        { metric: 'Mean', raw: 0.12, processed: 0.08 },
        { metric: 'Std Dev', raw: 0.85, processed: 0.45 },
        { metric: 'Skewness', raw: 0.23, processed: 0.15 },
        { metric: 'Kurtosis', raw: 2.8, processed: 2.2 },
    ];

    const scatterData = Array.from({ length: 200 }, () => ({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
        z: Math.random() * 10 - 5,
    }));

    const exportChart = (format: string) => {
        console.log(`Exporting chart as ${format}`);
        // Implementation would go here
    };

    return (
        <section className="min-h-screen px-4 py-8">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-slate-800">
                        Data Visualization
                    </h1>
                    <p className="text-lg text-slate-600">
                        Interactive charts and plots for analyzing your
                        processed ADV data
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                    <Card className="p-4 lg:p-6">
                        <h3 className="mb-4 flex items-center text-lg font-semibold text-slate-800">
                            <Settings className="mr-2 h-5 w-5" />
                            Chart Controls
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Dataset
                                </label>
                                <Select
                                    value={selectedDataset}
                                    onValueChange={setSelectedDataset}
                                >
                                    <SelectTrigger className="bg-background">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-background z-50 border shadow-lg">
                                        <SelectItem value="dataset1">
                                            ADV_001.csv
                                        </SelectItem>
                                        <SelectItem value="dataset2">
                                            ADV_002.csv
                                        </SelectItem>
                                        <SelectItem value="dataset3">
                                            ADV_003.csv
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Chart Type
                                </label>
                                <Select
                                    value={chartType}
                                    onValueChange={setChartType}
                                >
                                    <SelectTrigger className="bg-background">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-background z-50 border shadow-lg">
                                        <SelectItem value="timeseries">
                                            Time Series
                                        </SelectItem>
                                        <SelectItem value="spectrum">
                                            Power Spectrum
                                        </SelectItem>
                                        <SelectItem value="statistical">
                                            Statistical
                                        </SelectItem>
                                        <SelectItem value="scatter">
                                            3D Scatter
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <h4 className="mb-3 text-sm font-medium text-slate-700">
                                    Export Options
                                </h4>
                                <div className="space-y-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-background hover:bg-accent w-full"
                                        onClick={() => exportChart('png')}
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        PNG
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-background hover:bg-accent w-full"
                                        onClick={() => exportChart('svg')}
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        SVG
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-background hover:bg-accent w-full"
                                        onClick={() => exportChart('pdf')}
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        PDF
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="lg:col-span-3">
                        <Card className="p-4 lg:p-6">
                            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                                <h3 className="flex items-center text-lg font-semibold text-slate-800">
                                    <BarChart3 className="mr-2 h-5 w-5" />
                                    Visualization Panel
                                </h3>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-background hover:bg-accent"
                                >
                                    <Eye className="mr-2 h-4 w-4" />
                                    Full Screen
                                </Button>
                            </div>

                            <Tabs defaultValue="main" className="w-full">
                                <TabsList className="mb-6 grid w-full grid-cols-3">
                                    <TabsTrigger
                                        value="main"
                                        className="text-xs sm:text-sm"
                                    >
                                        Main View
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="comparison"
                                        className="text-xs sm:text-sm"
                                    >
                                        Raw vs Processed
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="statistics"
                                        className="text-xs sm:text-sm"
                                    >
                                        Statistics
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="main" className="space-y-6">
                                    <div className="h-64 w-full overflow-hidden sm:h-80 lg:h-96">
                                        {chartType === 'timeseries' && (
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <LineChart
                                                    data={timeSeriesData}
                                                    margin={{
                                                        top: 5,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis
                                                        dataKey="time"
                                                        label={{
                                                            value: 'Time (s)',
                                                            position:
                                                                'insideBottom',
                                                            offset: -5,
                                                        }}
                                                    />
                                                    <YAxis
                                                        label={{
                                                            value: 'Velocity (m/s)',
                                                            angle: -90,
                                                            position:
                                                                'insideLeft',
                                                        }}
                                                    />
                                                    <Tooltip />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="processed"
                                                        stroke="#2563eb"
                                                        strokeWidth={2}
                                                        dot={false}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        )}

                                        {chartType === 'spectrum' && (
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <LineChart
                                                    data={spectrumData}
                                                    margin={{
                                                        top: 5,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis
                                                        dataKey="frequency"
                                                        label={{
                                                            value: 'Frequency (Hz)',
                                                            position:
                                                                'insideBottom',
                                                            offset: -5,
                                                        }}
                                                    />
                                                    <YAxis
                                                        label={{
                                                            value: 'Power',
                                                            angle: -90,
                                                            position:
                                                                'insideLeft',
                                                        }}
                                                    />
                                                    <Tooltip />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="power"
                                                        stroke="#dc2626"
                                                        strokeWidth={2}
                                                        dot={false}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        )}

                                        {chartType === 'statistical' && (
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <BarChart
                                                    data={statisticalData}
                                                    margin={{
                                                        top: 5,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="metric" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar
                                                        dataKey="raw"
                                                        fill="#ef4444"
                                                        name="Raw Data"
                                                    />
                                                    <Bar
                                                        dataKey="processed"
                                                        fill="#22c55e"
                                                        name="Processed Data"
                                                    />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        )}

                                        {chartType === 'scatter' && (
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <ScatterChart
                                                    data={scatterData}
                                                    margin={{
                                                        top: 5,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis
                                                        dataKey="x"
                                                        label={{
                                                            value: 'X Velocity (m/s)',
                                                            position:
                                                                'insideBottom',
                                                            offset: -5,
                                                        }}
                                                    />
                                                    <YAxis
                                                        dataKey="y"
                                                        label={{
                                                            value: 'Y Velocity (m/s)',
                                                            angle: -90,
                                                            position:
                                                                'insideLeft',
                                                        }}
                                                    />
                                                    <Tooltip />
                                                    <Scatter
                                                        dataKey="z"
                                                        fill="#8884d8"
                                                    />
                                                </ScatterChart>
                                            </ResponsiveContainer>
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="comparison"
                                    className="space-y-6"
                                >
                                    <div className="h-64 w-full overflow-hidden sm:h-80 lg:h-96">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <LineChart
                                                data={timeSeriesData}
                                                margin={{
                                                    top: 5,
                                                    right: 30,
                                                    left: 20,
                                                    bottom: 5,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis
                                                    dataKey="time"
                                                    label={{
                                                        value: 'Time (s)',
                                                        position:
                                                            'insideBottom',
                                                        offset: -5,
                                                    }}
                                                />
                                                <YAxis
                                                    label={{
                                                        value: 'Velocity (m/s)',
                                                        angle: -90,
                                                        position: 'insideLeft',
                                                    }}
                                                />
                                                <Tooltip />
                                                <Line
                                                    type="monotone"
                                                    dataKey="raw"
                                                    stroke="#ef4444"
                                                    strokeWidth={1}
                                                    dot={false}
                                                    name="Raw Data"
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="processed"
                                                    stroke="#2563eb"
                                                    strokeWidth={2}
                                                    dot={false}
                                                    name="Processed Data"
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="statistics"
                                    className="space-y-6"
                                >
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Card className="p-4">
                                            <h4 className="mb-3 font-semibold text-slate-800">
                                                Data Quality Metrics
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600">
                                                        Spike Detection Rate:
                                                    </span>
                                                    <span className="font-medium">
                                                        12.3%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600">
                                                        Signal-to-Noise Ratio:
                                                    </span>
                                                    <span className="font-medium">
                                                        18.5 dB
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600">
                                                        Data Coverage:
                                                    </span>
                                                    <span className="font-medium">
                                                        97.8%
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>

                                        <Card className="p-4">
                                            <h4 className="mb-3 font-semibold text-slate-800">
                                                Processing Summary
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600">
                                                        Algorithms Applied:
                                                    </span>
                                                    <span className="font-medium">
                                                        3
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600">
                                                        Processing Time:
                                                    </span>
                                                    <span className="font-medium">
                                                        2.4s
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600">
                                                        Data Points:
                                                    </span>
                                                    <span className="font-medium">
                                                        12,586
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
