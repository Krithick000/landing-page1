"use client";
import React, { useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { DollarSign, Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const PricingCallout = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        "No hidden fees",
        "Start completely free",
        "Upgrade when you're ready",
        "Fair pricing for educators"
    ];

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

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-2xl"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [1, 0.5, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-20 right-20 w-24 h-24 bg-primary/60 rounded-full blur-2xl"
                ></motion.div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 hover:shadow-2xl transition-all duration-700 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-8 md:p-12 text-center relative">
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <motion.div
                                    animate={{
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-primary rounded-full"
                                ></motion.div>
                            </div>

                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-6 relative z-10"
                            >
                                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10"
                            >
                                Free to Start. Easy to Upgrade.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg md:text-xl text-muted-foreground mb-6 relative z-10"
                            >
                                We're not here to drain your wallet.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 relative z-10"
                            >
                                Just enough options to get serious work done, and more if you want to go pro — without breaking the bank.
                            </motion.p>

                            {/* Feature List */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto relative z-10"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center space-x-2 text-left"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center"
                                        >
                                            <Check className="h-3 w-3 text-primary" />
                                        </motion.div>
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingCallout;