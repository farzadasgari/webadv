export const Team = () => {
    const teamMembers = [
        {
            name: "Farzad Asgari",
            role: "Lead Developer & Researcher",
            affiliation: "Research Associate",
            expertise: ["Signal Processing", "Data Analysis", "Algorithm Development"],
            scholar: "https://scholar.google.com/citations?user=Rhue_kkAAAAJ&hl=en",
            linkedin: "https://www.linkedin.com/in/farzad-asgari/",
        },
        {
            name: "Seyed Hossein Mohajeri",
            role: "Head of the Research",
            affiliation: "Associate Professor",
            expertise: ["Turbulence Analysis", "Statistical Methods", "Data Validation"],
            scholar: "https://scholar.google.com/citations?user=E8PFUBEAAAAJ&hl=en",
            linkedin: "https://ir.linkedin.com/in/hossein-mohajeri",
        },
        {
            name: "Mojtaba Mehraein",
            role: "Head of the Laboratory",
            affiliation: "Associate Professor",
            expertise: ["Machine Learning", "Pattern Recognition", "Data Mining"],
            email: "https://scholar.google.com/citations?user=GwT49LIAAAAJ&hl=en",
            linkedin: "https://ir.linkedin.com/in/mojtaba-mehraein-002a03238",
        }
    ];
    return (
        <section className="py-12 px-4 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        Our Research Team
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Meet the dedicated researchers and developers behind ProADV and WebADV, advancing the field of
                        acoustic Doppler velocimeter data analysis through innovative algorithms and open-source
                        collaboration.
                    </p>
                </div>
            </div>
        </section>
    )
}