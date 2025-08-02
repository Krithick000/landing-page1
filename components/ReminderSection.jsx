"use client";
import React, { useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { MessageCircle, Smartphone, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ReminderSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-10 left-1/4 w-6 h-6 bg-green-500 rounded-full"
                ></motion.div>
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-10 right-1/4 w-4 h-4 bg-green-400 rounded-full"
                ></motion.div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Card className="bg-gradient-to-br from-green-50 via-green-50/80 to-green-100/60 dark:from-green-900/20 dark:via-green-900/30 dark:to-green-800/20 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-700 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-8 md:p-12 text-center relative">
                            {/* Animated Icons */}
                            <div className="flex justify-center items-center mb-6 relative">
                                <motion.div
                                    variants={iconVariants}
                                    className="relative"
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="bg-green-500/20 p-4 rounded-full"
                                    >
                                        <MessageCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                                    </motion.div>

                                    {/* Floating Mini Icons */}
                                    <motion.div
                                        animate={{
                                            y: [0, -20, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <Smartphone className="h-4 w-4 text-green-500" />
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                        className="absolute -bottom-2 -left-2"
                                    >
                                        <Zap className="h-4 w-4 text-green-500" />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                            >
                                WhatsApp Reminders? Of Course
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-muted-foreground"
                            >
                                Because email's still on vacation.
                            </motion.p>

                            {/* Pulse Animation */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-green-500/20 to-green-400/10 rounded-lg"
                            ></motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ReminderSection;