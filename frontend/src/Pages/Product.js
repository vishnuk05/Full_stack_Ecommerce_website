import React from 'react'
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
function Product() {
    const [products, setproducts] = useState([]);
    const [error, setError] = useState(null);
    const [categories, setcategories] =useState([]);
    const [selectedcategory, setselectedcategory] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await fetch('http://127.0.0.1:8000/api/category/');
                if (!categoryResponse.ok) {
                    throw new Error('failed to fetch');
                }
                const categoryData = await categoryResponse.json();
                setcategories(categoryData)

                const productResponse = await fetch('http://127.0.0.1:8000/api/product/');
                if (!productResponse.ok) {
                    throw new Error('failed to fetch');
                }
                const productData = await productResponse.json();
                setproducts(productData)
            }
            catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    const filteredProducts = selectedcategory? products.filter((products) => products.category === selectedcategory): products;
    return (
        <div>
            <Navbar />
            <h1>ALL PRODUCTS</h1>
            <div>
                <select name="category" id="" className='form-select' value={selectedcategory} onChange={(e) => setselectedcategory(parseInt(e.target.value))} >
                    <option value="">All category</option>
                    {categories.map(category=>(<option value={category.id} key={category.id}>{category.name}</option>))}
                </select>
            </div>
            <div className=" row d-flex  px-4 py-5" >
                {
                    filteredProducts.map((products, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <Card products={products} />
                        </div>
                    ))
                }

            </div>
            
            <div>
                <h3>Trending Products</h3>
            </div>
            <div className=" row d-flex  px-4 py-5" >
                {
                    products.map((products, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <Card products={products} />
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default Product