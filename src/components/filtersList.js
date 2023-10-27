import { FaHouse, FaBath, FaBed, FaCarrot, FaCat, FaDesktop, FaFingerprint, FaLeaf, FaPaintRoller, FaRotateLeft, FaCarSide, FaDrum } from "react-icons/fa6";
import ScrollFiltersList from "./scrollFilterAnimation"
import { useRef } from "react";

export default function FiltersList(props) {

    let scrollIndicator = useRef(null)

    setTimeout(() => {
        if (scrollIndicator.current !== null) {
            scrollIndicator.current.classList.add("hidden")
        }
    }, 2500);

    return (
        <div className="">
            <ul className="grid grid-flow-col grid-cols-12 grid-rows-2 gap-y-4 md:grid-cols-min md:grid-rows-none justify-around font-extralight text-xs my-5 no-scrollbar">
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto" onClick={props.filterButton} id={1}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaCarrot className="text-lg" />
                        <p className="hidden md:grid">
                            Kitchen
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={6}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaFingerprint className="text-lg" />
                        <p className="hidden md:grid">
                            Electronics
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={7}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaBath className="text-lg" />
                        <p className="hidden md:grid">
                            Bathroom
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={3}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaDesktop className="text-lg" />
                        <p className="hidden md:grid">
                            HomeOffice
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={12}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaHouse className="text-lg" />
                        <p className="hidden md:grid">
                            Home
                        </p>
                    </div>
                </li>

                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={5}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaDrum className="text-lg" />
                        <p className="hidden md:grid">
                            Fun
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={11}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaPaintRoller className="text-lg" />
                        <p className="hidden md:grid">
                            HardWare
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={8}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaCat className="text-lg" />
                        <p className="hidden md:grid">
                            Pets
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={9}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaLeaf className="text-lg" />
                        <p className="hidden md:grid">
                            Seasonal
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={2}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaBed className="text-lg" />
                        <p className="hidden md:grid">
                            Bedroom
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.filterButton} id={10}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer">
                        <FaCarSide className="text-lg" />
                        <p className="hidden md:grid">
                            Auto
                        </p>
                    </div>
                </li>
                <li className="sm:min-w-[5vw] col-span-2 md:col-auto " onClick={props.clearFilter} id={10}>
                    <div className="grid  justify-items-center text-slate-500 hover:text-slate-950 cursor-pointer ">
                        <FaRotateLeft className="text-lg" />
                        <p className="hidden md:grid">
                            Clear
                        </p>
                    </div>
                </li>
            </ul>
            <div ref={scrollIndicator} className="absolute">
                <ScrollFiltersList />
            </div>
        </div>
    )
}