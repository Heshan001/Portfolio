//next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import CvDownload from '../components/CvDownload'

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (


    <div className="h-full bg-primary/60 ">

      {/* particles */}
      <ParticlesContainer />

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1">
            Transforming Ideas <br /> Into {''}
            <span className="text-accent"> Digital Reality </span>
          </motion.h1>
          {/* subtitle*/}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.

             
          </motion.p>
          
          {/* btn */}
          <div className="flex justify-center xl:hidden">
            <ProjectsBtn />                        
          </div>

          
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden xl:flex">
            <ProjectsBtn />

            <div >
          <Link a href={'https://drive.google.com/file/d/1JmPr3LvRthc4ciFN8pKFZUr-Go2HC8hm/view?usp=sharing'}
     className=" relative w-[185px] h-[185] flex  items-center  ">   
  
<button className=" px-6 py-2 ml-5 mt-10 rounded-full   bg-white hover:bg-accent text-black ">Download CV</button>

    </Link>
          </div>
            {/*  */}
         {/* <div> <CvDownload /></div> */}
          </motion.div>
          
        </div>
        
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 " >

        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"> </div>

        {/* particles commented to full screen
       <ParticlesContainer /> */}

        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678] absolute -bottom-32 lg:bottom-[-22%] lg:right-[-0%] ">
          <Avatar />
        </motion.div>
      </div>
      

    </div>
  );
};

export default Home;
