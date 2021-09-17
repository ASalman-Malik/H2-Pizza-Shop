import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success';
import dotenv from "dotenv";
export default function Checkout({subtotal}) {

    dotenv.config();
    //const STRIPE_KEY = process.env.STRIPE_PUBLISHABLEKEY;
    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))

    }

    return (
        <div>
            
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}

            <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            //stripeKey = {STRIPE_KEY}
            stripeKey='pk_test_51JWMiLSDZbRZcQiBcRdBMpu7bjEwKBz5WYObAcbjLacLJCc6C9hjWATQlIjkWeO5hkWuP6bn20YDlluRlwYIPmim00p212WAVi'
            currency='INR'
            >

                  
                  <button className='btn'>Pay Now</button>

            </StripeCheckout>
            
        </div>
    )
}
