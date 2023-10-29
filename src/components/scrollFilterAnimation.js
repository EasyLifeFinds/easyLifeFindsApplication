import { FaChevronRight } from "react-icons/fa6";

export default function ScrollFiltersList() {

    return (
        <div className="flex text-[rgb(57,107,49)] bg-[#fff] drop-shadow-lg p-3 font-semibold lg:hidden">
            <FaChevronRight className="animate-wiggleOne"/>
            <FaChevronRight className="animate-wiggleOne"/>
            <FaChevronRight className="animate-wiggleOne"/>
            <FaChevronRight className="animate-wiggleOne"/>
        </div>
    )
}