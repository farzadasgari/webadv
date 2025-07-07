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
                </div>
            </div>
        </section>
    );
};
