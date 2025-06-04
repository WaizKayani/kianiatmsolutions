import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkedAlt, FaTools, FaShieldAlt, FaChartLine, FaUserShield, FaHeadset } from 'react-icons/fa'

const services = [
  {
    icon: <FaMapMarkedAlt className="w-8 h-8" />,
    title: 'Site Assessment',
    description: 'Comprehensive evaluation of optimal ATM placement locations',
    features: ['Traffic analysis', 'Security assessment', 'Revenue potential']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Installation',
    description: 'Professional setup and configuration of ATM systems',
    features: ['Expert installation', 'Network setup', 'Testing & calibration']
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: 'Security',
    description: 'Advanced security measures to protect your investment',
    features: ['Surveillance systems', 'Anti-skimming', 'Remote monitoring']
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Maintenance',
    description: 'Regular maintenance and support services',
    features: ['Preventive maintenance', '24/7 support', 'Performance optimization']
  },
  {
    icon: <FaUserShield className="w-8 h-8" />,
    title: 'Compliance',
    description: 'Ensuring regulatory compliance and security standards',
    features: ['Regulatory updates', 'Security audits', 'Documentation']
  },
  {
    icon: <FaHeadset className="w-8 h-8" />,
    title: 'Support',
    description: 'Dedicated customer support and assistance',
    features: ['24/7 helpline', 'Remote assistance', 'On-site support']
  }
]

export default function Services() {
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
    <section id="services" className="section">
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
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mr-2">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 