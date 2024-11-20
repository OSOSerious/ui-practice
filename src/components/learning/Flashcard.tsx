import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface FlashcardProps {
  cards: {
    id: number;
    question: string;
    answer: string;
    category: string;
  }[];
}

const Flashcard: React.FC<FlashcardProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setIsFlipped(false);
    setDirection(1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setDirection(-1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const flipVariants = {
    front: {
      rotateY: 0,
    },
    back: {
      rotateY: 180,
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Flashcards</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {cards.length}
          </span>
        </div>
      </div>

      <div className="relative h-[300px] perspective">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <motion.div
              className="w-full h-full relative cursor-pointer"
              animate={isFlipped ? "back" : "front"}
              variants={flipVariants}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={handleFlip}
            >
              {/* Front of card */}
              <div
                className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 flex flex-col items-center justify-center text-center ${
                  isFlipped ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="text-sm text-blue-600 font-medium mb-4">
                  {cards[currentIndex].category}
                </span>
                <h3 className="text-xl font-semibold mb-4">
                  {cards[currentIndex].question}
                </h3>
                <div className="flex items-center text-gray-500">
                  <RotateCw className="w-5 h-5 mr-2" />
                  Click to flip
                </div>
              </div>

              {/* Back of card */}
              <div
                className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 flex flex-col items-center justify-center text-center transform rotate-y-180 ${
                  isFlipped ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-lg">{cards[currentIndex].answer}</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevious}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default Flashcard;
