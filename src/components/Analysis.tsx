import {Activity} from "lucide-react";

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
            </div>
        </section>
    );
};
