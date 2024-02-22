import {motion} from "framer-motion";
import Image from "next/image";
import TransImage from "../Src/logo_trans.png";

const Loader = () => {
    return <motion.div
        animate={{height: "0vh"}}
        transition={{duration: 1, ease: [0.85, 0, 0.15, 1], delay: 1}}
        className={`fixed  flex flex-col font-bold uppercase text-[3rem] justify-center items-center bg-[#f1ce8a] w-screen h-screen overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[100]`}>
        <div className={``}>
            <Image src={TransImage} alt={''} />
        </div>
    </motion.div>
}

export default Loader;