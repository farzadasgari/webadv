import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Play, Settings, Info } from 'lucide-react';

interface AnalysisTabContentProps {
    title: string;
    description: string;
    algorithms: Array<{
        name: string;
        description: string;
        parameters?: Array<{
            name: string;
            type: 'slider' | 'select' | 'switch';
            options?: string[];
            min?: number;
            max?: number;
            default?: any;
        }>;
    }>;
}

export const AnalysisTabContent = ({
    title,
    description,
    algorithms,
}: AnalysisTabContentProps) => {
    return (
        <div className="w-full space-y-6">
            <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-slate-800">
                    {title}
                </h3>
                <p className="text-slate-600">{description}</p>
            </div>

            <div className="grid gap-6">
                {algorithms.map((algorithm, index) => (
                    <Card key={index} className="w-full p-6">
                        <div className="mb-4 flex items-start justify-between">
                            <div>
                                <h4 className="mb-2 text-lg font-semibold text-slate-800">
                                    {algorithm.name}
                                </h4>
                                <p className="text-sm text-slate-600">
                                    {algorithm.description}
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-background hover:bg-accent cursor-pointer"
                            >
                                <Info className="h-4 w-4" />
                            </Button>
                        </div>

                        {algorithm.parameters && (
                            <div className="mb-4 grid gap-4 md:grid-cols-2">
                                {algorithm.parameters.map(
                                    (param, paramIndex) => (
                                        <div
                                            key={paramIndex}
                                            className="space-y-2"
                                        >
                                            <Label className="text-sm font-medium">
                                                {param.name}
                                            </Label>
                                            {param.type === 'slider' && (
                                                <div className="space-y-2">
                                                    <Slider
                                                        defaultValue={[
                                                            param.default ||
                                                                param.min ||
                                                                0,
                                                        ]}
                                                        min={param.min || 0}
                                                        max={param.max || 100}
                                                        step={1}
                                                        className="w-full"
                                                    />
                                                    <div className="flex justify-between text-xs text-slate-500">
                                                        <span>{param.min}</span>
                                                        <span>{param.max}</span>
                                                    </div>
                                                </div>
                                            )}
                                            {param.type === 'select' && (
                                                <Select
                                                    defaultValue={param.default}
                                                >
                                                    <SelectTrigger className="bg-background">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-background z-50 border shadow-lg">
                                                        {param.options?.map(
                                                            (
                                                                option,
                                                                optionIndex
                                                            ) => (
                                                                <SelectItem
                                                                    key={
                                                                        optionIndex
                                                                    }
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                            {param.type === 'switch' && (
                                                <div className="flex items-center space-x-2">
                                                    <Switch
                                                        defaultChecked={
                                                            param.default
                                                        }
                                                    />
                                                    <span className="text-sm text-slate-600">
                                                        Enable
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        <div className="flex justify-end space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-background hover:bg-accent cursor-pointer"
                            >
                                <Settings className="mr-2 h-4 w-4" />
                                Configure
                            </Button>
                            <Button
                                size="sm"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                            >
                                <Play className="mr-2 h-4 w-4" />
                                Run Algorithm
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
