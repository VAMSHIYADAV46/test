import { useTheme } from '@/contexts/ThemeProvider';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-background/80 border border-border shadow-sm hover:shadow-md transition-all duration-300"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 text-amber-500 w-6 h-6 transition-all"
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90,
            scale: theme === 'dark' ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" />
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" />
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" />
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 text-indigo-500 w-6 h-6 transition-all"
          animate={{
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90,
            scale: theme === 'light' ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" />
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;