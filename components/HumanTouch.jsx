"use client";
import React, { useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { Heart, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const HumanTouchSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <motion.div
                    animate={{
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-primary rounded-full"
                ></motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-6xl mx-auto relative z-10"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        variants={imageVariants}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            <motion.img
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6"
                                alt="Professional teacher at work"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                        >
                            <Heart className="h-8 w-8 text-primary" />
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div variants={cardVariants}>
                        <Card className="bg-background/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-500">
                            <CardContent className="p-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="mb-6"
                                >
                                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center"
                                >
                                    Built With Teachers, For Teachers
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="text-lg md:text-xl text-muted-foreground mb-6 text-center"
                                >
                                    No fluff. No crash course required.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="flex items-center justify-center space-x-4 text-base md:text-lg text-foreground mb-4"
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1 bg-primary/10 rounded-full"
                                    >
                                        Log in
                                    </motion.span>
                                    <motion.div
                                        animate={{ x: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <ArrowRight className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1 bg-primary/10 rounded-full"
                                    >
                                        Choose subject
                                    </motion.span>
                                    <motion.div
                                        animate={{ x: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    >
                                        <ArrowRight className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1 bg-primary/10 rounded-full"
                                    >
                                        Get plans
                                    </motion.span>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="text-base md:text-lg text-primary font-medium text-center"
                                >
                                    It's that smooth.
                                </motion.p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HumanTouchSection;
