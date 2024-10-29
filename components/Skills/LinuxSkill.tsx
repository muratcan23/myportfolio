import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function LinuxSkill({ directionLeft }: Props) { 
  return (
    <a target="_blank" rel="noopener noreferrer" href="https://www.linux.org/"> 
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: directionLeft ? -20 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
            src="https://static-00.iconduck.com/assets.00/linux-icon-2048x2048-sy06t4un.png"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div
          className="absolute opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-center">Linux</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default LinuxSkill;
