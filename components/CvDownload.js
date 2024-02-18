

// next link
import Link from "next/link";

//icon
import { HiArrowDown } from 'react-icons/hi2';

const CvDownload = () => {
  return <div className="  mx-auto xl:mx-0">
    <Link a href={'https://drive.google.com/file/d/1JmPr3LvRthc4ciFN8pKFZUr-Go2HC8hm/view?usp=sharing'}
     className=" relative w-[185px] h-[185] flex  items-center  bg-no-repeat group">   
  
<button className=" px-6 py-2 ml-5 mt-10 rounded-full   bg-white hover:bg-accent text-black ">Download CV</button>

    </Link>
  </div>;
};

export default CvDownload;
//...