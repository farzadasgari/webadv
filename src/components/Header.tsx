import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Activity, Upload, BarChart3, Eye, Users } from 'lucide-react';

interface HeaderProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: Activity },
        { id: 'upload', label: 'Data Upload', icon: Upload },
        { id: 'analysis', label: 'Analysis', icon: BarChart3 },
        { id: 'visualization', label: 'Visualization', icon: Eye },
        { id: 'team', label: 'Team', icon: Users },
    ];

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700">
                            <Activity className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-800">
                                WebADV
                            </h1>
                            <p className="text-xs text-slate-600">
                                ADV Data Analysis Platform
                            </p>
                        </div>
                    </div>

                    <nav className="hidden items-center space-x-1 md:flex">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Button
                                    key={item.id}
                                    variant={
                                        activeSection === item.id
                                            ? 'default'
                                            : 'ghost'
                                    }
                                    onClick={() => onNavigate(item.id)}
                                    className={`flex items-center space-x-2 ${
                                        activeSection === item.id
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </Button>
                            );
                        })}
                    </nav>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-accent bg-transparent md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {isMenuOpen && (
                    <div className="border-t border-slate-200 py-4 md:hidden">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Button
                                        key={item.id}
                                        variant={
                                            activeSection === item.id
                                                ? 'default'
                                                : 'ghost'
                                        }
                                        onClick={() => {
                                            onNavigate(item.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`flex items-center justify-start space-x-2 ${
                                            activeSection === item.id
                                                ? 'bg-primary text-primary-foreground'
                                                : 'text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent'
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Button>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
