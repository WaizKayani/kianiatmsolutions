import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const navItems = [
  { href: '#home', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About Us', icon: 'ℹ️' },
  { href: '#services', label: 'Services', icon: '⚙️' },
  { href: '#why-choose-us', label: 'Why Choose Us', icon: '⭐' },
  { href: '#testimonials', label: 'Testimonials', icon: '💬' },
  { href: '#contact', label: 'Contact', icon: '📧' },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kiani ATM Solutions
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? <FaSun className="text-primary" /> : <FaMoon className="text-primary" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes className="text-primary" /> : <FaBars className="text-primary" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2">🌓</span>
                  Toggle Theme
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 