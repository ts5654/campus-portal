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
    about: "I have found new clubs and activities through the portal's recommendations. It's a game-changer for campus engagement.",
  },
  {
    imageSrc: student3,
    name: "Aman",
    department: "Pharma",
    about: "The lecture notes and study resources available on the portal have been invaluable for my research and projects.",
  },
];

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.4 }
  }
};

export const Testimonials = () => {
  return (
    <div className="w-full px-6 py-20 overflow-hidden text-white bg-black">
      <h1 className="mb-16 text-3xl font-black tracking-tight text-center sm:text-5xl lg:text-6xl">
        What <span className="text-blue-500">Students</span> Say
      </h1>
      
      {/* Mobile: Vertical stack with padding 
         Laptop: Horizontal row with gap 
      */}
      <div className="flex flex-col items-center gap-10 mx-auto md:flex-row md:justify-center md:items-stretch max-w-7xl">
        <AnimatePresence mode="wait">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex w-full max-w-sm md:w-1/3" // Flex added to keep card heights equal
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Changed once to true for better mobile performance
              transition={{ 
                delay: index * 0.15 
              }}
            >
              <div className="w-full transition-transform duration-300 hover:scale-[1.02]">
                <TestCards
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  department={testimonial.department}
                  about={testimonial.about}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};