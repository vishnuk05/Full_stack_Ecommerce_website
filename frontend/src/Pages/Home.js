import React, { useEffect,useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import HeroSection from "../Components/Herosection";

function Home() {
  const[products, setproducts]=useState([]);
  const [error,setError]=useState(null);
  
  useEffect(() => {
    const fetchData=async()=>{
      try{
        const response = await fetch('http://127.0.0.1:8000/api/product/');
        if (!response.ok)
        {
          throw new Error('failed to fetch');
        }
        const data =await response.json();
        setproducts(data)
      }
      catch(error){
        setError(error.message);
      }
    };
    fetchData();
  },[]);
  return (
    <div>
    <Navbar />
    <HeroSection/>
    <div className=" row mt-2 mb-3" >
    {
      products.map((products,index)=>(
        <div className="col-md-4 px-4 pb-4 " key={index}>
          <Card products={products}/>
        </div>
      ))
    }
    </div>
    <div className="container mt-5">
      <h2>Subscribe to Our Newsletter</h2>
      <form >
        <div className="form-group">
          <input type="email" className="form-control" id="email" placeholder="Your Email Address" required />
        </div>
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
