"use client";
import React from "react";
import Image from "next/image";
import TransImage from "@/app/Src/logo_trans.png";

import {motion} from "framer-motion";


const Page = () => {
    return <React.Fragment>
        <motion.div
            animate={{y: "-100vh"}}
            transition={{delay: 1, ease: [0.85, 0, 0.15, 1]}}
            className={`bg-white transition-all duration-300 flex justify-center items-center  transition-all duration-300 ease-out w-screen fixed z-[10000] h-screen`}>
            <div className={`w-[50vw] h-[50vw] flex justify-center items-center rounded-[100%] `}>
                <Image src={TransImage} alt={''} className={`w-[50%] h-[50%] object-cover`}/>
            </div>
        </motion.div>


        <main className={`bg-red-500 pt-[8rem] p-[2rem] flex justify-center items-center min-w-screen min-h-screen`}>
            <motion.div className={`bg-white w-full relative min-h-[100vh] rounded-t-[1.5rem]`}>
                <h1 className={`text-white absolute left-0 -top-[7rem] text-[5rem] inline-block`}>Cart:
                </h1>

                <div className={`flex p-7 gap-[1rem]`}>
                    <button className={`text-[1.5rem] p-2 rounded-xl text-white bg-red-500`}>Retailer</button>
                    <button className={`text-[1.5rem] p-2 rounded-xl text-black bg-gray-400`}>Retailer</button>
                </div>


                <h1 className={`text-[1.2rem] text-gray-500 p-7`}>This feature will be available soon.</h1>
            </motion.div>
        </main>
    </React.Fragment>

}

export default Page;