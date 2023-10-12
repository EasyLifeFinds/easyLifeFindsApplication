import './App.css';
import ProductList from './components/prodctList';
import { FireBaseDataContextProvider } from './context/fireBaseDataContext';
import AppHeader from './components/appHeader';
import { LocalStorageDataContextProvider } from './context/localStorageDataContext';
import { Route, Routes } from 'react-router-dom';
import UserWishList from './components/userWishList'
import ListerProductList from "./components/listerProductList"

function App() {
  return (
    <FireBaseDataContextProvider>
      <LocalStorageDataContextProvider>
        <AppHeader />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='wishlist' element={<UserWishList />} />
          <Route path='listerProducts' element={ <ListerProductList/> } />
        </Routes>
      </LocalStorageDataContextProvider>
    </FireBaseDataContextProvider>
  )
}

export default App;
