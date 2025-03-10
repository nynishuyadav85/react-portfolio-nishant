import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 p-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl text-black-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial='initial'
                    animate='animate'

                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJavascript className='text-7xl text-yellow-300' />
                </motion.div>
                <motion.div variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGithub className='text-7xl text-black-500' />
                </motion.div>
                <motion.div variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostman className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJest className='text-7xl text-red-700' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies