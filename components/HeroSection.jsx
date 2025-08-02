import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = ({ onJoinWaitlist }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden" id='main'>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 z-10"></div>
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1489486501123-5c1af10d0be6"
                    alt="Modern workspace"
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 max-w-4xl mx-auto text-center"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                >
                    Finally, a Planning Tool <br />
                    <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        That Gets You
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    Built for teachers. Not techies.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        onClick={onJoinWaitlist}
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transform transition-all duration-300 text-lg px-8 py-4 group shadow-lg hover:shadow-xl cursor-pointer"
                    >
                        Join the Waitlist
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            ></motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
            ></motion.div>
        </section>
    );
};

export default HeroSection;