import { LiaBookmark } from "react-icons/lia";
import { useNavigate } from "react-router-dom"

export default function WishListNavButton() {
    const navigate = useNavigate()

    return (
            <div className="fixed flex justify-center sm:hidden bg-[#396B31] min-w-[4rem] py-1 rounded-lg hover:-translate-y-1 bottom-5 left-auto right-5">
                <button onClick={() => { navigate('wishlist') }}>
                    <LiaBookmark className="text-xl text-white" />
                </button>
            </div>
    )
}