import { FaChair, FaBaby, FaHouse, FaBath, FaBed, FaCarrot, FaCat, FaDesktop, FaFingerprint, FaGlasses, FaLeaf, FaPaintRoller, FaRotateLeft } from "react-icons/fa6";

export default function FiltersList(props) {

    return (
        <ul className="grid grid-cols-3 md:grid-cols-5 lg:flex lg:flex-row gap-x-2 justify-center font-extralight text-xs p-5">

            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={1}>
                <div className="grid justify-items-center text-slate-800">
                    <FaCarrot className="text-lg" />
                    Kitchen
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={6}>
                <div className="grid justify-items-center text-slate-800">
                    <FaFingerprint className="text-lg" />
                    Electronics
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={7}>
                <div className="grid justify-items-center text-slate-800">
                    <FaBath className="text-lg" />
                    Bathroom
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={3}>
                <div className="grid justify-items-center text-slate-800">
                    <FaDesktop className="text-lg" />
                    HomeOffice
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={12}>
                <div className="grid justify-items-center text-slate-800">
                    <FaHouse className="text-lg" />
                    Home
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={4}>
                <div className="grid justify-items-center text-slate-800">
                    <FaChair className="text-lg" />
                    Furniture
                </div>

            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={5}>
                <div className="grid justify-items-center text-slate-800">
                    <FaBaby className="text-lg" />
                    Kids
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={11}>
                <div className="grid justify-items-center text-slate-800">
                    <FaPaintRoller className="text-lg" />
                    HardWare
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={8}>
                <div className="grid justify-items-center text-slate-800">
                    <FaCat className="text-lg" />
                    Pets
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={9}>
                <div className="grid justify-items-center text-slate-800">
                    <FaLeaf className="text-lg" />
                    Seasonal
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={2}>
                <div className="grid justify-items-center text-slate-800">
                    <FaBed className="text-lg" />
                    Bedroom
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.filterButton} id={10}>
                <div className="grid justify-items-center text-slate-800">
                    <FaGlasses className="text-lg" />
                    Accessories
                </div>
            </li>
            <li className="hover:shadow-md sm:min-w-[5vw]" onClick={props.clearFilter} id={10}>
                <div className="grid justify-items-center text-slate-800">
                    <FaRotateLeft className="text-lg" />
                    Clear Filter
                </div>
            </li>
        </ul>

    )
}