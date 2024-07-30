// import React from 'react';
// import { motion } from 'framer-motion';
// import myPic from '../assets/my_pic.jpg'

// const textVariant = () => ({
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// });

// const fadeIn = (direction = '', type = '', duration = 0.1, delay = 1) => ({
//   hidden: { opacity: 0, [direction]: 50 },
//   visible: { opacity: 1, [direction]: 0, transition: { type, duration, delay } },
// });

// const About = () => {
//   return (
//     <section className='w-full h-screen relative bg-gray-100'>
//       <div className='flex flex-col justify-center items-center pt-24'>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={textVariant()}
//           className="text-center"
//         >
//           <p className="text-secondary text-lg">Introductions</p>
//           <h2 className="text-2xl font-bold">Overview</h2>
//         </motion.div>
//         <img src={myPic} className="mt-4 w-48 h-auto max-w-sm"  />
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn("", "easeInOut", 0.1, 1)}
//           className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
//         >
//           I am a good software developer.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myPic from '../assets/my_pic.jpg';

const textVariant = () => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
});

const fadeIn = (direction = '', type = '', duration = 1, delay = 0.5) => ({
  hidden: { opacity: 0, [direction]: 50 },
  visible: { opacity: 1, [direction]: 0, transition: { type, duration, delay } },
});

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="about" className="w-full py-24 bg-yellow-100 relative"> 
      <Tilt options={{ scale: 1.05, speed: 400 }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant()}
          className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 max-w-5xl mx-auto bg-white p-8 rounded-lg"
        >
          <div className="lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
            <p className="text-secondary text-lg mb-2 retro-style">Introductions</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 retro-style">Overview</h2>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={fadeIn('', 'easeInOut', 1, 0.5)}
              className="text-secondary text-[17px] leading-[30px] mb-8" 
            >
              Hello! I'm Anas Ahmed, a passionate software developer with a knack for creating innovative solutions.
              I enjoy exploring the latest technologies and applying them to solve real-world problems. With a strong
              foundation in both front-end and back-end development, I strive to build applications that are not only
              functional but also elegant and user-friendly. My journey in software development has been driven by 
              curiosity and a relentless desire to learn and grow.
            </motion.p>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
            <div className="w-full h-96 border-4 border-gray-300 rounded-lg overflow-hidden mb-8"> {/* Increased bottom margin */}
              <img src={myPic} alt="Anas Ahmed" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </Tilt>
      <div className="flex justify-center mt-8">
        <div className="w-80 h-80 grid grid-cols-3 gap-8"> {/* Increased gap between icons */}
          <img src='https://img.icons8.com/?size=100&id=8g6WJkjf0vaP&format=png&color=000000' alt='React' className="w-20 h-20 transition-transform transform hover:scale-110" />
          <img src='https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000' alt='Tailwind CSS' className="w-20 h-20 transition-transform transform hover:scale-110" />
          <img src='https://img.icons8.com/?size=100&id=pIJdjOoL6KfU&format=png&color=000000' alt='Python' className="w-20 h-20 transition-transform transform hover:scale-110" />
          <img src='https://img.icons8.com/?size=100&id=lrs3iOG232k5&format=png&color=000000' alt='Swift' className="w-20 h-20 transition-transform transform hover:scale-110" />
          <img src='https://img.icons8.com/?size=100&id=nBKHe4Tn9k59&format=png&color=000000' alt='C' className="w-20 h-20 transition-transform transform hover:scale-110" />
          <img src='https://img.icons8.com/?size=100&id=RwtOBojoLS2N&format=png&color=000000' alt='JavaScript' className="w-20 h-20 transition-transform transform hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default About;









