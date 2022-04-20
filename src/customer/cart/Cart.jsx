import React from 'react'
import '../components/css/animate.css';
import '../components/css/bootstrap.min.css';
import '../components/css/font-awesome.min.css';
import '../components/css/main.css';

import '../components/css/price-range.css';
import '../components/css/responsive.css';
// import './prettyPhoto.css';
import CustomerHeader from '../components/customerHeader/customerHeader';
import CustomerFooter from '../components/customerFooter/customerFooter';
import CartItem from './CartItem';
import DoBuyingAction from './DoBuyingAction';
function Cart() {
    return (
        <body>
            <CustomerHeader />
            <CartItem/>
            <DoBuyingAction/>
            <CustomerFooter />
        </body>
    )
}

export default Cart