import {Activity} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export const Analysis = () => {
    return (
        <section className="py-12 px-4 min-h-screen">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center">
                        <Activity className="w-8 h-8 mr-3"/>
                        Data Analysis & Processing
                    </h1>
                    <p className="text-lg text-slate-600">
                        Configure and apply advanced algorithms for cleaning and analyzing your ADV data
                    </p>
                </div>
                <Tabs defaultValue="pre" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8 h-12">
                        <TabsTrigger value="pre" className="text-sm font-medium">Pre-Process</TabsTrigger>
                        <TabsTrigger value="pro" className="text-sm font-medium">Despiking</TabsTrigger>
                        <TabsTrigger value="pos" className="text-sm font-medium">Post-Process</TabsTrigger>
                    </TabsList>

                    <TabsContent value="pre" className="w-full">

                    </TabsContent>

                    <TabsContent value="pro" className="w-full">

                    </TabsContent>

                    <TabsContent value="pos" className="w-full">

                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};
