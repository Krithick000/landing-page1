"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const IntroSection = () => {
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

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
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
                <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-primary/60 rounded-full blur-2xl"></div>
            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                <motion.p
                    variants={textVariants}
                    className="text-xl md:text-2xl text-foreground mb-4 leading-relaxed"
                >
                    You don't need another bloated app with 97 features you'll never touch.
                </motion.p>
                <motion.p
                    variants={textVariants}
                    className="text-xl md:text-2xl text-primary font-medium leading-relaxed bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                >
                    You need one tool that just gets the job done.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default IntroSection;