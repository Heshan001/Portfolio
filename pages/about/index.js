import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

// components 
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter 
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className=" hidden xl:flex absolute bottom-0 -left-[300px]">
        <Avatar />
      </motion.div >
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* text */}
        <div className=" flex-1 flex flex-col justify-center">
          <motion.h2
          variants={fadeIn('right', 0.2)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
          > 
          Creative  <span className=" text-accent ">WEB-SITE</span> Developing </motion.h2>
          <motion.p 
           variants={fadeIn('right', 0.4)} 
           initial="hidden"
           animate="show"
           exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 years ago, I startups as a developer. Since then, I have
            done work for companies, consulted for startups & developed business and personal web sites.
          </motion.p>
          {/* counters */}
          <motion.div 
           variants={fadeIn('right', 0.6)} 
           initial="hidden"
           animate="show"
           exit="hidden"
          className=" md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className=" flex flex-1 xl:gap-x-6">
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full text-2xl
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                  <CountUp start={0} end={9} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  My All Projects
                </div>
              </div>
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full text-2xl
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                  <CountUp start={0} end={2} duration={10} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* finished pro */}
              <div className="relative flex-1 after:w-[1px] after:h-full text-2xl
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                  <CountUp start={0} end={6} duration={10} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* ongoing pro */}
              <div className="relative flex-1">
                <div className=" text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Ongoing Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div 
         variants={fadeIn('left', 0.4)} 
         initial="hidden"
         animate="show"
         exit="hidden"
        className=" flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/*  title */}
                  <div>{item.title}</div>
                  <div className="hidden md:flex" >-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icon */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
