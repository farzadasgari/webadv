import { useState } from 'react';
import { Header } from '@/components/Header';

const Index = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header
                activeSection={activeSection}
                onNavigate={setActiveSection}
            />
            <main className="pt-16">{/* render section*/}</main>
            {/*footer*/}
        </div>
    );
};

export default Index;
