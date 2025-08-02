import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users } from 'lucide-react';

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const stats = [
        { icon: BookOpen, value: "10K+", label: "Plans Created" },
        { icon: Users, value: "500+", label: "Teachers" },
        { icon: Heart, value: "100%", label: "Teacher-Made" }
    ];

    return (
        <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <motion.div
                    animate={{
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-primary rounded-full"
                ></motion.div>
            </div>

            <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto relative z-10"
            >
                {/* Stats Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center items-center space-x-8 mb-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                y: -2
                            }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.5,
                                    ease: "easeInOut"
                                }}
                                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2"
                            >
                                <stat.icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div className="font-bold text-foreground text-lg">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Footer Content */}
                <motion.div
                    variants={itemVariants}
                    className="text-center"
                >
                    <motion.h3
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold text-foreground mb-4 cursor-pointer"
                    >
                        TeachPlan
                    </motion.h3>

                    <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground mb-6 max-w-md mx-auto"
                    >
                        Built for teachers. Not techies. Making lesson planning as simple as it should be.
                    </motion.p>

                    {/* Animated Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 max-w-md mx-auto"
                    ></motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="text-sm text-muted-foreground"
                    >
                        <motion.span
                            whileHover={{ color: "hsl(var(--primary))" }}
                            className="transition-colors duration-200"
                        >
                            © 2025 TeachPlan. All rights reserved.
                        </motion.span>

                        <motion.div
                            animate={{
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            className="inline-block mx-2"
                        >
                            •
                        </motion.div>

                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="inline-flex items-center space-x-1 cursor-pointer"
                        >
                            <span>Made with</span>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    color: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Heart className="h-3 w-3" />
                            </motion.div>
                            <span>for teachers</span>
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-4 left-1/4 w-2 h-2 bg-primary rounded-full"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-4 right-1/4 w-3 h-3 bg-primary/60 rounded-full"
                ></motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;