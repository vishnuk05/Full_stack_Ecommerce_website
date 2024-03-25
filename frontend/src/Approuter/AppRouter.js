import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Signup from '../Pages/Signin'
import Product from '../Pages/Product'
import PaymentB from '../Pages/Payment'
import Order from '../Pages/Order'
import ProfileUpdatePage from '../Pages/Profile'
import UserProfile from '../Pages/UserProfile'
function AppRouter() {
return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/payment" element={<PaymentB />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/profile' element={<ProfileUpdatePage/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/userprofile' element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default AppRouter