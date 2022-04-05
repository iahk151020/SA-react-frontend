import React from 'react'
import "./paypalTest.css";
import { PayPalButton } from "react-paypal-button-v2";

function PaypalTest() {
    return (
        <div className='paypal-test'>
            <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    console.log(data);
                    console.log(details);
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        
                        method: "post",
                        body: JSON.stringify({
                        orderID: data.orderID
                        })
                    });
                }}
                createOrder = {(data, actions) => {
                    actions.order.create()
                }}
            />
        </div>
    )
}

export default PaypalTest