import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    quote: "Love the service, keep providing convenience. The ATM placement was perfect and the support team is always helpful.",
    author: "Mo",
    role: "Business Owner"
  },
  {
    quote: "Keep up the good work. The revenue sharing model is excellent and the service is reliable.",
    author: "Harry",
    role: "Store Manager"
  },
  {
    quote: "Professional service from start to finish. The team was knowledgeable and made the process smooth.",
    author: "Sarah",
    role: "Restaurant Owner"
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="testimonials" className="section">
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
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                className="card relative group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20">
                  <FaQuoteLeft />
                </div>
                
                <div className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.author[0]}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
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
              Join Our Happy Clients
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 