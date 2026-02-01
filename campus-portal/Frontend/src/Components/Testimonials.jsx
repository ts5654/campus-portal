import { motion, AnimatePresence } from "framer-motion";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import { TestCards } from "./TestCards";

const testimonialsData = [
  {
    imageSrc: student1,
    name: "Harshit",
    department: "Business",
    about: "This portal has made managing my campus life so much easier! From class schedules to clubs, everything is in one place.",
  },
  {
    imageSrc: student2,
    name: "Nisha",
    department: "Computer Science",
    about: "I have found new clubs and activities through the portals recommendations. Its a game-changer for campus engagement",
  },
  {
    imageSrc: student3,
    name: "Aman",
    department: "Pharma",
    about: "The lecture notes and study resources available on the portal have been invaluable for my research and projects.",
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 }, // Cards start small, low, and transparent
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  },
  exit: { 
    y: -50, 
    opacity: 0, 
    scale: 0.8,
    transition: { 
      duration: 0.6, 
      ease: "easeIn" 
    }
  } // New exit animation
};

export const Testimonials = () => {
  return (
    <div className="w-full px-4 py-16 text-white bg-black">
      <h1 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
        What Students Say
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
        <AnimatePresence>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              transition={{ 
                ...cardVariants.visible.transition, 
                delay: index * 0.1
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <TestCards
                imageSrc={testimonial.imageSrc}
                name={testimonial.name}
                department={testimonial.department}
                about={testimonial.about}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};