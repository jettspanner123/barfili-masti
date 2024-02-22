"use client";
import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Loader from "../app/Components/Loader";
import Navbar from "../app/Components/Navbar"
import Image from "next/image";
import CenterImage from "../app/Src/ice-removebg-preview.png"
import Strawberry from "../app/Src/strawberry.png"
import PedaImage from "../app/Src/product_cards/peda.jpg";
import PedaPackaged from "../app/Src/product_cards/peda_box.jpg";

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
    const rightWards = useTransform(scrollYProgress, [0, 25], ["0", "35rem"])
    const backgroundColor = useTransform(scrollYProgress, [0, 0.3], ["#fff", "#d04848"]);
    const width = useTransform(scrollYProgress, [0, 0.3], ["30vw", "31vw"]);
    const height = useTransform(scrollYProgress, [0, 0.3], ["30vw", "31vw"]);

    const secondUpWards = useTransform(scrollYProgress, [0, 0.2], ["0", "30rem"])
    const thirdUpWards = useTransform(scrollYProgress, [0, 0.25], ["0", "20rem"])


    return (
        <React.Fragment>
            <Navbar/>
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
                    className={` flex justify-center overflow-hidden items-center rounded-[100%] absolute right-[19rem] top-[22rem] h-[10rem] w-[10rem]`}>
                    <Image src={Strawberry} alt={""}
                           className={`w-full h-full object-cover`}/>
                </motion.div>


                <motion.div
                    style={{y: thirdUpWards}}
                    className={`flex justify-center overflow-hidden items-center rounded-[100%] absolute left-[19rem] top-[22rem] h-[10rem] w-[10rem]`}>
                    <Image src={Strawberry} alt={""}
                           className={`w-full h-full object-cover`}/>
                </motion.div>


                <motion.div
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    transition={{duration: 1.5, delay: 1.3, ease: [0.85, 0, 0.15, 1]}}
                    className={`flex w-screen text-white absolute top-[10rem] text-[7rem] font-bold justify-center`}>
                    BARFILI <span className={`text-black ml-3`}>  MASTI</span>
                </motion.div>


                <motion.div className={`absolute top-[19rem] flex justify-center items-center  w-screen`}>
                    <motion.div
                        style={{rotate, y: upWards, width, height}}
                        className={`overflow-hidden rounded-[100%] bg-red-300`}>
                        <Image src={CenterImage} alt={''} className={`w-full scale-110 h-full object-cover`}/>
                    </motion.div>
                </motion.div>
            </motion.main>

            <div className={`w-screen h-[150vh]  top-[135vh] p-[4rem] absolute`}>
                <h1 className={`relative mx-[3rem] inline-block text-[4rem] text-white`}>What do we serve?
                    <div className={`w-full bg-white h-[10px] absolute bottom-0 rounded-xl`}/>
                </h1>


                <div
                    className={`grid pt-[8rem] w-full min-h-[50vh] gap-x-[2rem] gap-y-[4rem] place-items-center grid-cols-3`}>
                    <ProductCards mainImage={PedaImage} flipImage={PedaPackaged} mainHeading={'0'} mainPrice={'123'}/>
                </div>
            </div>

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
            <Image src={mainImage} alt={''} className={`${IsHovered ? `w-full` : `w-0`} top-0 z-[11] h-full object-cover`} />
            <Image src={mainImage} alt={''} className={`${IsHovered ? `w-0` : `w-full`} top-0 z-[11] h-full object-cover`} />
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
