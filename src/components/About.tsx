import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary"
          >
            About Us
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Kiani ATM Solutions was founded in 2024 with a vision to revolutionize financial accessibility and foster community empowerment. Our mission is to provide seamless cash access, empowering individuals and businesses to thrive.
            </p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To be the leading provider of accessible financial solutions
                </p>
              </div>

              <div className="text-center p-4">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Empowering communities through innovative ATM solutions
                </p>
              </div>

              <div className="text-center p-4">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Integrity, innovation, and customer satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 