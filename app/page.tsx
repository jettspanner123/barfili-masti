"use client";
import React from "react";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import Loader from "../app/Components/Loader";
import Navbar from "../app/Components/Navbar"
import Image from "next/image";
import CenterImage from "../app/Src/ice-removebg-preview.png"
import Strawberry from "../app/Src/strawberry.png"
import Phoa from "../app/Src/product_cards/poha.jpg";
import PhoaPacked from "../app/Src/product_cards/poha_packed.webp";
import GulabJamun from "../app/Src/product_cards/gulab_jamun.jpg";

import GulabJamunPacked from "../app/Src/product_cards/gulab_jamun_packed.jpg";
import Noodle from "../app/Src/product_cards/noodle.jpg";
import NoodlePacked from "../app/Src/product_cards/noodle_packed.jpg";
import Blueberry from "../app/Src/blueberry.png";
import {MdArrowForwardIos} from "react-icons/md";
import TransImage from "@/app/Src/logo_trans.png";
import IceTeaImage from "@/app/Src/product_cards/ice_tea.jpg";
import IceTeaPacked from "@/app/Src/product_cards/ice_tea_packed.jpg";
import AlooBhujiaImage from "@/app/Src/product_cards/allo_bhujia.jpg";
import AlooBhujiaPacked from "@/app/Src/product_cards/aloo_bhujia_packed.webp";
import ChocoChips from "@/app/Src/product_cards/choco_chips.jpg";
import ChocoChipsPacked from "@/app/Src/product_cards/choco_chips_packed.jpg";
import MangoJuiceImage from "@/app/Src/product_cards/mango_juice.jpg";
import MangoJuicePacked from "@/app/Src/product_cards/mango_juice_packed.jpg";
import BannerOne from "./Src/banner_one.jpg";
import BannerTwo from "./Src/banner_two.jpg";
import BannerThree from "./Src/banner_three.jpg";

export default function Home() {
    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const [LoaderTimeout, SetLoaderTimeout] = React.useState(true);
    setTimeout(() => {
        SetLoaderTimeout(false)
    }, 2500);


    const {scrollYProgress} = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 0.9], ["0deg", "360deg"]);
    const upWards = useTransform(scrollYProgress, [0, 0.25], ["0", "20rem"])
    const x = useTransform(scrollYProgress, [0.68, 0.95], ["0%", "-50%"]);
    const backgroundColor = useTransform(scrollYProgress, [0, 0.3], ["#fff", "#d04848"]);
    const width = useTransform(scrollYProgress, [0, 0.3], ["30vw", "31vw"]);
    const height = useTransform(scrollYProgress, [0, 0.3], ["30vw", "31vw"]);

    const secondUpWards = useTransform(scrollYProgress, [0, 0.2], ["0", "30rem"])
    const thirdUpWards = useTransform(scrollYProgress, [0, 0.25], ["0", "20rem"])

    const ImageSliderDiv = React.useRef<HTMLDivElement | null>(null);
    const [currInt, setCurrentInt] = React.useState(0);

    const [pageTransition, setPageTransition] = React.useState(false);
    const lastThing = useTransform(scrollYProgress, [0.75, 1], ["0rem", "-10rem"]);
    const lastThingTwo = useTransform(scrollYProgress, [0.75, 1], ["0rem", "-40rem"]);
    return (
        <React.Fragment>
            {/*this is the transition div*/}
            <motion.div
                style={{top: pageTransition ? `0vh` : `-100vh`}}
                className={`bg-white flex justify-center items-center  transition-all duration-300 ease-out w-screen fixed z-[10000] h-screen`}>
                <div className={`w-[50vw] h-[50vw] flex justify-center items-center rounded-[100%] `}>
                    <Image src={TransImage} alt={''} className={`w-[50%] h-[50%] object-cover`}/>
                </div>
            </motion.div>
            <Navbar setFunction={setPageTransition}/>
            {LoaderTimeout && <Loader/>}

            <motion.main
                style={{backgroundColor}}
                className={`relative min-h-[500vh] min-w-screen bg-white`}>
                <motion.div
                    animate={{y: 0}}
                    initial={{y: "-100vh"}}
                    transition={{duration: 1.5, delay: 1.3, ease: [0.85, 0, 0.15, 1]}}
                    className={`absolute flex justify-center items-end  pb-[10rem] top-[-15vh] w-screen bg-[#D04848]  h-[75vh] rounded-b-[100%]`}>
                </motion.div>


                <motion.div
                    style={{y: secondUpWards}}
                    className={` flex justify-center border-8 border-[#d04848] bg-white p-4 overflow-hidden items-center rounded-[100%] absolute right-[19rem] top-[22rem] h-[10rem] w-[10rem]`}>
                    <Image src={Strawberry} alt={""}
                           className={`w-full h-full object-cover`}/>
                </motion.div>


                <motion.div
                    style={{y: thirdUpWards}}
                    className={`flex border-8 border-[#d04848] justify-center bg-white p-4  overflow-hidden items-center rounded-[100%] absolute left-[19rem] top-[22rem] h-[10rem] w-[10rem]`}>
                    <Image src={Blueberry} alt={""}
                           className={`w-[90%] h-[90%] object-cover`}/>
                </motion.div>


                <motion.div
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    transition={{duration: 1.5, delay: 1.3, ease: [0.85, 0, 0.15, 1]}}
                    className={`flex w-screen text-white absolute top-[10rem] text-[7rem] font-bold justify-center`}>
                    BARFILI <span className={`text-black ml-3`}>  MASTI</span>
                </motion.div>


                <motion.div className={`absolute top-[19rem] flex justify-center  items-center  w-screen`}>
                    <motion.div
                        style={{rotate, y: upWards, width, height}}
                        className={`overflow-hidden rounded-[100%] bg-red-300 border-8 border-white p-4`}>
                        <Image src={CenterImage} alt={''} className={`w-full  scale-110 h-full object-cover`}/>
                    </motion.div>
                </motion.div>
            </motion.main>

            <div className={`w-screen h-[100vh]  top-[135vh] p-[4rem] absolute`}>
                <h1 className={`relative mx-[3rem] inline-block text-[4rem] text-white`}>What do we serve?
                    <div className={`w-full bg-white h-[10px] absolute bottom-0 rounded-xl`}/>
                </h1>

                <div
                    className={`grid pt-[8rem] w-full min-h-[50vh] gap-x-[2rem] gap-y-[4rem] place-items-center grid-cols-3`}>
                    <ProductCards mainImage={GulabJamun} flipImage={GulabJamunPacked}
                                  mainHeading={'Bengali Gulab Ja-moon'}
                                  mainPrice={'400/kg'}/>
                    <ProductCards mainImage={Phoa} flipImage={PhoaPacked} mainHeading={'Bihari Poha'}
                                  mainPrice={'100/kg'}/>
                    <ProductCards mainImage={AlooBhujiaImage} flipImage={AlooBhujiaPacked} mainHeading={'Aloo Bhujia'}
                                  mainPrice={'90/kg'}/>
                    <ProductCards mainImage={IceTeaImage} flipImage={IceTeaPacked} mainHeading={'Lemon Ice Tea'}
                                  mainPrice={'250'}/>
                    <ProductCards mainImage={ChocoChips} flipImage={ChocoChipsPacked} mainHeading={'Chocolate Cookies'}
                                  mainPrice={'350/kg'}/>
                    <ProductCards mainImage={MangoJuiceImage} flipImage={MangoJuicePacked} mainHeading={'Mango Juice'}
                                  mainPrice={'50'}/>
                    <ProductCards mainImage={Noodle} flipImage={NoodlePacked} mainHeading={'Noodles'}
                                  mainPrice={'100'}/>
                </div>
            </div>

            <div className={`bg-white w-screen absolute h-[100vh] top-[370vh]`}>
                <motion.div
                    style={{left: x}}
                    className={`text-[#d04848] flex  relative font-bold text-[4rem] p-4 w-[200vw] uppercase`}>
                    SALE! 30% OFF <span className={`text-white mx-4`}>.</span> sale! 30% off
                    <span className={`text-white mx-4`}>.</span>
                    sale! 30% off <span className={`text-white mx-4`}>.</span> sale! 30% off
                    <span className={`text-white mx-4`}>.</span>
                    sale! 30% off <span className={`text-white mx-4`}>.</span> sale! 30% off
                    <span className={`text-white mx-4`}>.</span>
                    sale! 30% off <span className={`text-white mx-4`}>.</span> sale! 30% off
                </motion.div>

                {/*this is the banner */}
                <motion.div
                    ref={ImageSliderDiv}
                    style={{
                        transform: `translate(-${window.innerWidth * currInt}px)`,
                        transition: `transform 1s cubic-bezier(0.85, 0, 0.15, 1)`
                    }}
                    className={` w-[300vw] h-[60vh] relative flex `}>
                    {
                        useInView(ImageSliderDiv) && <button
                            onClick={() => {
                                if (currInt === 2) setCurrentInt(0);
                                else setCurrentInt(currInt + 1);
                            }}
                            style={{
                                transform: `translate(0, -50%)`,
                                right: `${(2 - currInt) * window.innerWidth}px`,
                            }}
                            className={`bg-white hover:bg-red-500 hover:text-white text-red-500 transition-all duration-300 p-4 text-[2rem] top-1/2 -translate-y-1/2 fixed right-[] h-full`}>
                            <MdArrowForwardIos/></button>
                    }
                    <div className={`h-full w-screen  flex justify-center items-center`}>
                        <Image src={BannerOne} alt={''} className={`w-full  h-full object-cover`}/>
                    </div>
                    <div className={`h-full w-screen  flex justify-center items-center`}>
                        <Image src={BannerTwo} alt={''} className={`w-full  h-full object-cover`}/>
                    </div>
                    <div className={`h-full w-screen  flex justify-center items-center`}>
                        <Image src={BannerThree} alt={''} className={`w-full  h-full object-cover`}/>
                    </div>
                </motion.div>

            </div>


            <motion.div
                style={{y: lastThing}}
                className={`bg-white flex justify-center items-center shadow-2xl shadow-gray-500 border-t-8 border-red-500 text-white w-screen h-screen z-[300] rounded-t-[2rem] absolute top-[450vh]`}>
            </motion.div>

            <motion.div
                style={{y: lastThingTwo}}
                className={`bg-red-500 flex justify-center items-center shadow-2xl shadow-gray-500 border-t-8 border-red-500 text-white w-screen h-[40rem] z-[300] rounded-t-[2rem] absolute top-[450vh]`}>
                <Image src={TransImage} alt={''} className={`w-[50vw] h-[50vw] object-cover`}/>
            </motion.div>
        </React.Fragment>
    );
}


interface ProductCardProps {
    mainImage: any,
    mainHeading: string,
    mainPrice: string,
    flipImage: any
}


const ProductCards = ({mainImage, mainHeading, mainPrice, flipImage}: ProductCardProps) => {


    const [IsHovered, SetIsHovered] = React.useState(false);
    return <div
        onMouseOver={() => SetIsHovered(true)}
        onMouseOut={() => SetIsHovered(false)}
        className={`w-[22vw] p-[1rem] rounded-2xl flex flex-col justify-evenly h-[55vh] bg-white`}>
        <div className={`w-full relative h-[70%]`}>

            <Image src={mainImage} alt={''}
                   className={`w-full transition-all duration-300 ease-out z-[11] ${IsHovered ? `h-[0%]` : `h-[100%]`}  rounded-[1rem] top-0 absolute left-0 object-cover`}/>

            <Image src={flipImage} alt={''}
                   className={`w-full h-full z-[10] rounded-[1rem] top-0 absolute left-0 object-cover`}/>
        </div>
        <h1 className={`w-full text-center py-2 text-black text-[1.5rem]`}>{mainHeading}</h1>
        <button
            className={`bg-red-600 border-2 font-bold text-[1.25rem] tracking-wide border-red-600 hover:bg-white hover:text-red-600 text-white w-full rounded-xl p-3 `}>
            {mainPrice}
            <span className={`mx-2`}>-</span>
            Buy
        </button>
    </div>
}
