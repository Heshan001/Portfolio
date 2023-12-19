//next image
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
          {/* title */}
          <h1 className="h1">
            Transforming Ideas <br /> Into {''}
            <span className="text-accent"> Digital Reality </span>
          </h1>
          {/* subtitle*/}
          <p className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>

        </div>
      </div>

      {/* image */}
      <div>image</div>

    </div>
  );
};

export default Home;
