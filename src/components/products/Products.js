import './Products.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
const Products = () => {
    const [storeproducts, setStoreproducts] = useState([])
    const [productcategory, setProductcategory] = useState([])
    const [storecategory, setStorecategory] = useState([])

    useEffect(() => {
        getProductData();
        getCategoryData();
        getStoreproducts();
    }, []);
    useEffect(() => {
        console.log("storepro", storeproducts)
    }, [storeproducts]);
    const getProductData = async () => {
        await axios({
            url: `http://yellowstore.hexeam.org/api/customer/store-products/external`,
            method: 'GET',

            data: {
                StoreID: "23"
            }

        }).then(res => {

            if (res.data.status) {
                setStoreproducts(res.data.storeProducts)

            }


        })
            .catch(err => {

            })

        // axios.get(`http://yellowstore.hexeam.org/api/customer/store-products/external`)
        //     .then(res => {
        //         console.log("data", res);
        //         setStoreproducts(res.data.storeProducts)
        //     })


    }
    const getCategoryData = async () => {
        await axios({
            url: `http://yellowstore.hexeam.org/api/customer/store-products-by-categories/external`,
            method: 'GET',

            data: {
                StoreID: "23",
                CategoryID: "1"
            }

        }).then(res => {
            console.log("category", res)

            if (res.data.status) {
                setProductcategory(res.data.storeProducts)

            }


        })
            .catch(err => {

            })


    }
    const getStoreproducts = async () => {
        await axios({
            url: `http://yellowstore.hexeam.org/api/customer/store-categories/external`,
            method: 'GET',

            data: {
                StoreID: "23",

            }

        }).then(res => {
            console.log("category", res)

            if (res.data.status) {
                setStorecategory(res.data.storeProducts)

            }


        })
            .catch(err => {

            })
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className='allproduct-container'>
            <div className='row'>
                <div className='col-md-7'>
                    <h2 className='mb-3'>All Products</h2>
                    <div className='row'>
                        {storeproducts.map((items, index) => (
                            <div className='col-md-4 mb-4' key={index}>
                                <div className="cart-wrapper">
                                    <div className="img-wrapper-item">
                                        {/* <img src={items. product_base_image} alt=""/> */}
                                        <img src="./assets/pdt-img1.jpg" alt="" />
                                    </div>
                                    <div className='textcontainer mt-3 px-3 '>
                                        <div className='texts '>
                                            <h4 className='texth4'>{items.product_name}</h4>
                                            <span>$ {items.product_varient_price}</span>
                                        </div>
                                    </div>


                                    <div className="btn-wrapper-item px-3 d-flex  align-items-center mb-3">
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={12}
                                            activeColor="#ffd700"

                                        />
                                        <span>4.5</span>
                                        <span>(413)</span>
                                        <input type="number" />
                                        <button>
                                            ADD</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='col-md-5 border-left'>
                    <h2 className='mb-3'>Recent Products</h2>
                    <div className='row'>

                        <div className='col-md-6 mb-4'>
                            <div className="cart-wrapper">
                                <div className="img-wrapper-item">

                                    <img src="./assets/pdt-img4.jpg" alt="" />
                                </div>
                                <div className='textcontainer mt-3 px-3 '>
                                    <div className='texts '>
                                        <h4 className='texth4'>Thalassery Biriyani</h4>
                                        <span>$ 250</span>
                                    </div>
                                </div>


                                <div className="btn-wrapper-item px-3 d-flex  align-items-center mb-3">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={12}
                                        activeColor="#ffd700"


                                    />
                                    <span>4.5</span>
                                    <span>(413)</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className="cart-wrapper">
                                <div className="img-wrapper-item">

                                    <img src="./assets/pdt-img1.jpg" alt="" />
                                </div>
                                <div className='textcontainer mt-3 px-3 '>
                                    <div className='texts '>
                                        <h4 className='texth4'>Belgian Chocolate</h4>
                                        <span>$ 250</span>
                                    </div>
                                </div>

                                <div className="btn-wrapper-item px-3 d-flex  align-items-center mb-3">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={12}
                                        activeColor="#ffd700"

                                    />
                                    <span>4.5</span>
                                    <span>(413)</span>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className="cart-wrapper">
                                <div className="img-wrapper-item">

                                    <img src="./assets/pdt-img2.jpg" alt="" />
                                </div>
                                <div className='textcontainer mt-3 px-3 '>
                                    <div className='texts '>
                                        <h4 className='texth4'>Fruit Punch Falooda</h4>
                                        <span>$ 250</span>
                                    </div>
                                </div>


                                <div className="btn-wrapper-item px-3 d-flex  align-items-center mb-3">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={12}
                                        activeColor="#ffd700"


                                    />
                                    <span>4.5</span>
                                    <span>(413)</span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products