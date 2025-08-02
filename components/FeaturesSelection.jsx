"use client";
import React, { useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { Calendar, RefreshCw, Brain, Download, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const FeaturesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: Calendar,
            title: "Creates Annual Plans",
            description: "Not some recycled templates, but actual syllabus mapped to your school calendar.",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335"
        },
        {
            icon: RefreshCw,
            title: "Adapts to Real-life Schedules",
            description: "Missed a few classes? Had a holiday? It adjusts. You don't have to start over.",
            image: "https://images.pexels.com/photos/7692504/pexels-photo-7692504.jpeg"
        },
        {
            icon: Brain,
            title: "Learns from Your Edits",
            description: "Tweak a plan once, and it remembers next time.",
            image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea"
        },
        {
            icon: Download,
            title: "Download in Your School's Letterpad",
            description: "Yes, including your table formats, fonts, and even that logo you had to fight the printer for.",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335"
        },
        {
            icon: Users,
            title: "Handles Multiple Classes and Subjects",
            description: "Because we know you wear more hats than your timetable suggests.",
            image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.2, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 right-20 w-40 h-40 border-2 border-primary rounded-full"
                ></motion.div>
            </div>

            <div ref={ref} className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Features That Actually Matter
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every feature designed with real teaching scenarios in mind
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <Card className="group hover:shadow-xl transition-all duration-500 border-border bg-background/80 backdrop-blur-sm overflow-hidden h-full">
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        variants={imageVariants}
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="p-2 bg-primary/90 rounded-lg backdrop-blur-sm"
                                        >
                                            <feature.icon className="h-6 w-6 text-primary-foreground" />
                                        </motion.div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <motion.h3
                                        className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                                    >
                                        {feature.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-muted-foreground leading-relaxed"
                                    >
                                        {feature.description}
                                    </motion.p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;