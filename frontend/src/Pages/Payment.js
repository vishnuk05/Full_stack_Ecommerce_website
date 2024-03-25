import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DropIn from "braintree-web-drop-in-react"
import { AuthContext } from '../AuthContext.js';
import { useContext } from 'react';
import { processPayment } from './helper/Paymenthelper.js';
import { useEffect } from 'react';
import { getproducttoken } from './helper/Paymenthelper.js';
import { cartEmpty } from './helper/Carthelper.js';
import { createOrder } from './helper/Orderhelper.js';

const PaymentB = ({cartItems}) => {
    const navigate=useNavigate()
    // const [forceRender, setForceRender] = useState(false);
    const [succes,setSucces]=useState(false)
    const [instance, setInstance] = useState(null);
    const token = sessionStorage.getItem('token');
    const { isAuthenticated,userId} = useContext(AuthContext);
    const [info,setInfo]=useState({
        loading:false,
        success:false,
        clientToken:null,
        error:"",
        instance:{}
    });
    console.log("payment token",token);
    console.log("payment auth",isAuthenticated);
    console.log("payment userid",userId);
    const getToken = (userId, token)=>{
        getproducttoken(userId,token)
        .then(info=>{
            if(info.error){
                setInfo({
                    ...info,error:info.error
                });
                
            }
            else{
                const clientToken = info.clientToken;
                setInfo({clientToken})
            }
        })
    }
    useEffect(()=>{
        getToken(userId,token);
    },[])

    useEffect(() => {
        
        if(succes){
                    
            navigate('/cart')
        }

    }, [succes]);


    

    const getAmount=()=>{
        let amount = 0;
        cartItems.map(p=>{
            amount= amount + parseInt(p.price)
        })
        return amount;
    }
    const showbtnDropIn = ()=>{
        return(
            <>
            {
                info.clientToken!== null && cartItems.length >0 ?(
                    <div>
                        <DropIn options={{authorization:info.clientToken}} onInstance={setInstance}>
                            
                        </DropIn>
                        <button onClick={onPurchase} className='btn btn-block btn-dark'>Pay Now</button>
                    </div>
                ):
            (
                <div>Please login first or add something cart</div>

            )}
            </>
        )
    }

    const onPurchase = () => {
        setInfo({ loading: true });
        let nonce;
        if (instance) {
            instance.requestPaymentMethod()
                .then(data => {
                    nonce = data.nonce;
                    const paymentData = {
                        paymentMethodNonce: nonce,
                        amount: getAmount()
                        
                    };
                    
                    processPayment(userId, token, paymentData)
                        .then(response => {
                            if (!response.error) {
                                if (response.code === "1") {
                                    console.log("Payment failed");
                                } else {
                                    console.log("Payment success");
                                    let product_name = "";
                                    cartItems.forEach(function (item) {
                                        product_name += item.name + ",";
                                    });

                                    const orderData = {
                                        products: product_name,
                                        transaction_id: response.transaction.id,
                                        amount: getAmount()
                                    };
                                    console.log("orderdata",orderData);
                                    createOrder(userId, token, orderData)
                                        .then(response => {
                                            if (response.error) {
                                                if (response.code === "1") {
                                                    console.log("Order failed");
                                                        navigate('/cart')
                                                }
                                            } else {
                                                if (response.success === true) {
                                                    console.log("Order placed");
                                                    
                                                    navigate('/')  
                                                }
                                            }
                                        })
                                        .catch(err => {
                                            console.log("Error creating order:", err);
                                        });
                                        navigate('/')
                                        cartEmpty(() => {
                                            console.log("Cart is empty now");
                                            sessionStorage.removeItem('cartItemCount');
                                            // window.location.reload();
                                        });

                                }
                            } else {
                                console.log("Payment process error:", response.error);
                            }
                        })
                        .catch(err => {
                            console.log("Error processing payment:", err);
                        })
                        .finally(() => {
                            cartEmpty(() => {
                                console.log("Cart is empty now");
                            });
                        });
                })
                .catch(err => {
                    setInfo({ loading: false, success: false });
                    console.log("Error in requesting payment method:", err);
                });
        } else {
            console.log("Error: DropIn instance is not available.");
            setInfo({ loading: false, success: false });
        }
    };
    
    return (
        <>
        <div>
            <h3 className='text-muted px-5'>your total amount is <b>RS.{getAmount()}</b></h3>
            <div className='px-5 pb-5'>
            {showbtnDropIn()}
            </div>
        </div>
        </>
    );
};

export default PaymentB;