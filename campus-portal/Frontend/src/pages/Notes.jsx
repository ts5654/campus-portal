import { motion } from 'framer-motion';
import { NotesCard } from "../Components/NotesCard";

const notesdata = [
    {imgurl:"https://www.codewithharry.com/img/notes/python.webp", heading:"Python Handbook", Download:"/notes/pthon.pdf"},
    {imgurl:"https://www.codewithharry.com/img/notes/js.webp", heading:"JavaScript Notes", Download:"/notes/pthon.pdf"},
    {imgurl:"https://cdn.worldvectorlogo.com/logos/react-1.svg", heading:"ReactJS Guide", Download:"/notes/pthon.pdf"},
    {imgurl:"https://www.codewithharry.com/img/notes/html.webp", heading:"HTML & CSS", Download:"/notes/pthon.pdf"},
    {imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710", heading:"C++ Notes", Download:"#"},
    {imgurl:"https://www.codewithharry.com/img/notes/java.webp", heading:"Java Essentials", Download:"/notes/pthon.pdf"},
    {imgurl:"https://www.codewithharry.com/img/notes/dsa.webp", heading:"Data Structures", Download:"/notes/pthon.pdf"},
    {imgurl:"https://raw.githubusercontent.com/detain/svg-logos/master/svg/m/mongodb-icon-1-1.svg", heading:"MongoDB Basics", Download:"/notes/pthon.pdf"},
    {imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png", heading:"Nodejs", Download:"/notes/pthon.pdf"},
    {imgurl:"https://cdn.worldvectorlogo.com/logos/expressjs.svg", heading:"Express js", Download:"/notes/pthon.pdf"},
    {imgurl:"https://images.seeklogo.com/logo-png/48/1/ruby-logo-png_seeklogo-483173.png", heading:"Ruby", Download:"/notes/pthon.pdf"},
    {imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dJqj5naz-ZiOpdImECPfdXZT-dGySjE0_g&s", heading:"Perl", Download:"/notes/pthon.pdf"},
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Staggers the animation of child elements
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export const Notes = () => {
    return (
        <main className="min-h-screen bg-black py-18">
            <div className="container px-4 mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-4xl font-bold text-center text-white"
                >
                    Download Notes
                </motion.h1>
                
                <motion.div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {notesdata.map((currelem, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <NotesCard data={currelem} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
};