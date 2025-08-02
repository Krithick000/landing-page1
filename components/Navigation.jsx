"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeSelector';
import Link from 'next/link';

const Navigation = ({ onJoinWaitlist }) => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button onClick={() => scrollToSection('main')} className="text-xl font-bold text-foreground cursor-pointer">TeachPlan</button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('coming-soon')}
                                className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                            >
                                Coming Soon
                            </button>
                            <button
                                onClick={onJoinWaitlist}
                                className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </div>

                    {/* Theme Toggle & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Moon className="h-5 w-5 text-foreground" />
                            ) : (
                                <Sun className="h-5 w-5 text-foreground" />
                            )}
                        </button>
                        <Button
                            onClick={onJoinWaitlist}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                            Join the Waitlist
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Moon className="h-5 w-5 text-foreground" />
                            ) : (
                                <Sun className="h-5 w-5 text-foreground" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-foreground" />
                            ) : (
                                <Menu className="h-6 w-6 text-foreground" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground w-full text-left transition-colors duration-200"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('coming-soon')}
                                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground w-full text-left transition-colors duration-200"
                            >
                                Coming Soon
                            </button>
                            <button
                                onClick={onJoinWaitlist}
                                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground w-full text-left transition-colors duration-200"
                            >
                                Join Waitlist
                            </button>
                            <div className="pt-2">
                                <Button
                                    onClick={onJoinWaitlist}
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                                >
                                    Join the Waitlist
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;