"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface InitialLoadProps {
  onLoadingComplete?: () => void;
}

export default function InitialLoad({ onLoadingComplete }: InitialLoadProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const progressRef = useRef(0);
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000;
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);

      // Ease-out function for more natural progression
      const easeOut = 1 - Math.pow(1 - linearProgress, 2);
      const currentProgress = easeOut * 100;

      progressRef.current = currentProgress;
      setProgress(Math.floor(currentProgress));

      if (linearProgress < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        // Brief pause at 100% before exiting

        if (!hasCalledComplete.current && onLoadingComplete) {
          hasCalledComplete.current = true;
          onLoadingComplete();
        }

        setTimeout(() => {
          setIsVisible(false);
        }, 600);
      }
    };

    requestAnimationFrame(animateProgress);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          <div className="text-center">
            {/* Main Percentage Display */}
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <motion.span
                key={progress}
                className="text-8xl md:text-9xl lg:text-[10rem] font-light text-gray-900 tracking-tighter block"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {progress}
              </motion.span>

              {/* Percentage Symbol */}
              <motion.span
                className="text-6xl md:text-7xl lg:text-8xl text-gray-600 font-light absolute -top-2 -right-8 md:-right-12"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                %
              </motion.span>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div
              className="mt-12 w-64 md:w-80 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-0.5 bg-gray-100 w-full overflow-hidden rounded-full">
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                />
              </div>

              {/* Progress Dots */}
              <div className="flex justify-between mt-2 px-2">
                {[0, 25, 50, 75, 100].map((marker) => (
                  <motion.div
                    key={marker}
                    className={`w-1 h-1 rounded-full ${
                      progress >= marker ? "bg-gray-900" : "bg-gray-300"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + (marker / 100) * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Animated Status Text */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.p
                className="text-sm text-gray-500 tracking-widest font-light uppercase mb-2"
                key={progress < 100 ? "loading" : "ready"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {progress < 100 ? "Loading Experience" : "Experience Ready"}
              </motion.p>

              {/* Animated Dots */}
              {progress < 100 && (
                <motion.div className="flex justify-center space-x-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-1 h-1 bg-gray-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              className="absolute inset-0 -z-10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-50 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-50 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Percentage Trail Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-7xl md:text-8xl font-light text-gray-100 pointer-events-none"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {progress}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
