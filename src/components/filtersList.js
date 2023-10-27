import { FaHouse, FaBath, FaBed, FaCarrot, FaCat, FaDesktop, FaFingerprint, FaLeaf, FaPaintRoller, FaRotateLeft, FaCarSide, FaDrum } from "react-icons/fa6";
import ScrollFiltersList from "./scrollFilterAnimation"
import { useRef } from "react";

export default function FiltersList(props) {
    //grid grid-cols-3 md:grid-cols-5 lg:flex lg:flex-row gap-x-2 justify-center font-extralight text-xs py-4

    let scrollIndicator = useRef(null)

    setTimeout(() => {
        // console.log("Hello World!", scrollIndicator.current.classList);
        if (scrollIndicator.current !== null) {
            scrollIndicator.current.classList.add("hidden")
        }
    }, 5000);

    // console.log("-- >", scrollIndicator.current.classList)

    return (
        <div>
            <ul className="flex flex-row space-x-5 justify-around font-extralight text-xs my-5 overflow-x-scroll">
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={1}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaCarrot className="text-lg" />
                        Kitchen
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={6}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaFingerprint className="text-lg" />
                        Electronics
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={7}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaBath className="text-lg" />
                        Bathroom
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={3}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaDesktop className="text-lg" />
                        HomeOffice
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={12}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaHouse className="text-lg" />
                        Home
                    </div>
                </li>

                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={5}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaDrum className="text-lg" />
                        Fun
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={11}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaPaintRoller className="text-lg" />
                        HardWare
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={8}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaCat className="text-lg" />
                        Pets
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={9}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaLeaf className="text-lg" />
                        Seasonal
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={2}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaBed className="text-lg" />
                        Bedroom
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.filterButton} id={10}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaCarSide className="text-lg" />
                        Auto
                    </div>
                </li>
                <li className="sm:min-w-[5vw] " onClick={props.clearFilter} id={10}>
                    <div className="grid justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer ">
                        <FaRotateLeft className="text-lg" />
                        Clear
                    </div>
                </li>
            </ul>
            <div ref={scrollIndicator}>
                <ScrollFiltersList />
            </div>
        </div>
    )
}