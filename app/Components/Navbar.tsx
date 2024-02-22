import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {GiStrawberry} from "react-icons/gi";
import {CiViewList} from "react-icons/ci";
import {IoCart} from "react-icons/io5";

const Navbar = () => {

    const NavbarOptions: { Name: string, link: string }[] = [
        {Name: "Variations", link: "/variations"},
        {Name: "Something", link: "/something"}
    ]
    const {scrollYProgress} = useScroll();
    const paddingInline = useTransform(scrollYProgress, [0, 0.3], ["15rem", "4rem"]);
    const fontSize = useTransform(scrollYProgress, [0, 0.3], ["1.5rem", "2rem"]);
    const fontSizeTwo = useTransform(scrollYProgress, [0, 0.3], ["1.2rem", "1.5rem"]);
    const backgroundImage = useTransform(scrollYProgress, [0, 0.3], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
    const color = useTransform(scrollYProgress, [0, 0.3], ["rgba(255,255,255,1)", "rgba(0, 0, 0, 1)"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);


    const VariationRef = React.useRef<HTMLDivElement | null>(null);
    const SomethingRef = React.useRef<HTMLDivElement | null>(null);

    return <motion.nav
        style={{paddingInline, fontSize, backgroundColor: backgroundImage, color}}
        animate={{y: 0}}
        initial={{y: -200}}
        transition={{duration: 1.5, delay: 1.3, ease: [0.85, 0, 0.15, 1]}}
        className={`fixed z-[200] flex justify-between blur_it100 items-center p-4 text-[1.5rem] top-0 w-full text-white tracking-wide`}>
        <h1 className={`flex gap-[0.5rem] items-center`}>
            <motion.div style={{opacity}}><GiStrawberry className={`text-red-500`}/></motion.div>
            <span>BARFILI MASTI</span>
        </h1>
        <motion.ul style={{fontSize: fontSizeTwo}} className={`flex gap-[1.5rem] text-[1.2rem] rounded-xl`}>
            <motion.li
                className={`hover:bg-white p-4 rounded-xl flex items-center  gap-[0.5rem]`}>
                <motion.div style={{opacity}} className={`text-red-500`}>
                    <CiViewList/>
                </motion.div>
                Variation
            </motion.li>

            <motion.li
                className={`hover:bg-white p-4 rounded-xl flex items-center gap-[0.5rem]`}>
                <motion.div style={{opacity}} className={`text-red-500`}>
                    <IoCart/>
                </motion.div>
                Cart
            </motion.li>
        </motion.ul>
    </motion.nav>
}

export default Navbar;