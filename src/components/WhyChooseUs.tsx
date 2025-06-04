import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheckCircle, FaDollarSign, FaCogs, FaClock, FaUserFriends, FaChartBar } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: 'Reliable Service',
    description: '99.9% uptime guarantee with 24/7 monitoring and support',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FaDollarSign className="w-8 h-8" />,
    title: 'Competitive Pricing',
    description: 'Best rates in the market with transparent fee structure',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Customizable Solutions',
    description: 'Tailored ATM solutions to meet your specific needs',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: 'Quick Deployment',
    description: 'Fast installation and setup process',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: <FaUserFriends className="w-8 h-8" />,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: 'Proven Results',
    description: 'Track record of successful ATM deployments',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="why-choose-us" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3 rounded-full bg-gradient-to-r ${reason.color} text-white mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <motion.a
              href="#contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 