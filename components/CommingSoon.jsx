"use client";
import React, { useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { CalendarDays, Palette, Wifi, Settings, Layers } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ComingSoonSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const comingSoonFeatures = [
        {
            icon: CalendarDays,
            title: "Monthly & Weekly Plans",
            description: "Detailed planning at every level"
        },
        {
            icon: Palette,
            title: "Smart Formatting with Adaptive Calendars",
            description: "Beautiful layouts that adjust automatically"
        },
        {
            icon: Wifi,
            title: "Offline + Local Usage",
            description: "With your own API key for complete privacy"
        },
        {
            icon: Settings,
            title: "Fully Customizable Planning Structures",
            description: "Adapt to any teaching methodology"
        },
        {
            icon: Layers,
            title: "Theme Support",
            description: "For multiple boards or curriculums"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateY: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="coming-soon" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
            {/* Background Illustrations */}
            <div className="absolute inset-0 opacity-5">
                <motion.img
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1680264341897-6c4f620627bd"
                    alt="Modern classroom"
                    className="absolute top-0 right-0 w-1/3 h-1/2 object-cover rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        Coming Soon
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        More powerful features to make your teaching life even easier
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {comingSoonFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <Card className="group hover:shadow-lg transition-all duration-500 border-border bg-background/50 backdrop-blur-sm relative overflow-hidden h-full">
                                {/* Shimmer Effect */}
                                <motion.div
                                    animate={{
                                        x: [-100, 300]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                ></motion.div>

                                <CardContent className="p-6 relative">
                                    <motion.div
                                        className="mb-4"
                                        whileHover={{
                                            rotate: [0, -10, 10, 0],
                                            scale: 1.1
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <feature.icon className="h-7 w-7 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                                    </motion.div>

                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Coming Soon Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                        className="absolute top-2 right-2"
                                    >
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/20 text-primary border border-primary/30">
                                            Soon
                                        </span>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating Call-to-Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <motion.p
                        className="text-muted-foreground mb-4"
                        animate={{
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Want to be notified when these features launch?
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default ComingSoonSection;