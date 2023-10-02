import AppHeader from "./appHeader";
import ProductList from "./prodctList";

export default function MainComponent() {
    return (
        <>
            <AppHeader />
            <ProductList />
            <button className="text-slate-800 " onClick={() => { navigate('wishlist') }}>Wish List</button>

        </>
    )
}