import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero.tsx';
import { Team } from '@/components/Team';
import { DataUpload } from '@/components/DataUpload';
import { Analysis } from '@/components/Analysis';
import { Visualization } from '@/components/Visualization';

const Index = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const renderSection = () => {
        switch (activeSection) {
            case 'upload':
                return <DataUpload />;
            case 'team':
                return <Team />;
            case 'analysis':
                return <Analysis />;
            case 'visualization':
                return <Visualization />;
            default:
                return (
                    <>
                        <Hero onNavigate={setActiveSection} />
                    </>
                );
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header
                activeSection={activeSection}
                onNavigate={setActiveSection}
            />
            <main className="pt-16">{renderSection()}</main>
            <Footer />
        </div>
    );
};

export default Index;
