"use client";

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const words = ["Hello", "Bonjour", "Hola", "やあ", "नमस्ते", "Hallo", "Ciao", "Salam"]

const opacity = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
}

const slideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.2 },
  },
}

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => {
          onComplete?.()
        }, 1000)
      }, 1000)
      return
    }

    const delay = index === 0 ? 1000 : 250
    const timeout = setTimeout(() => setIndex(index + 1), delay)
    return () => clearTimeout(timeout)
  }, [index, onComplete])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

  const curve = {
    initial: { d: initialPath },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        delay: 0.4,
      },
    },
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[999999]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-primary text-4xl md:text-8xl font-medium absolute z-10"
          >
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 w-full h-screen">
            <motion.path
              variants={curve}
              initial="initial"
              animate={isExiting ? "exit" : "initial"}
              className="fill-background"
            />
          </svg>
        </>
      )}
    </motion.div>
  )
}