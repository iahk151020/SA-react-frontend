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
function CartItem() {
    return (
        

            <div>
            <section id="cart_items">
                <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">Shopping Cart</li>
                    </ol>
                </div>
                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                    <thead>
                        <tr className="cart_menu">
                        <td className="image">Item</td>
                        <td className="description" />
                        <td className="price">Price</td>
                        <td className="quantity">Quantity</td>
                        <td className="total">Total</td>
                        <td />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="cart_product">
                            <a href><img src="images/cart/one.png" alt /></a>
                        </td>
                        <td className="cart_description">
                            <h4><a href>Colorblock Scuba</a></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>$59</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                            <a className="cart_quantity_up" href> + </a>
                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                            <a className="cart_quantity_down" href> - </a>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">$59</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                        </td>
                        </tr>
                        <tr>
                        <td className="cart_product">
                            <a href><img src="images/cart/two.png" alt /></a>
                        </td>
                        <td className="cart_description">
                            <h4><a href>Colorblock Scuba</a></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>$59</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                            <a className="cart_quantity_up" href> + </a>
                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                            <a className="cart_quantity_down" href> - </a>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">$59</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                        </td>
                        </tr>
                        <tr>
                        <td className="cart_product">
                            <a href><img src="images/cart/three.png" alt /></a>
                        </td>
                        <td className="cart_description">
                            <h4><a href>Colorblock Scuba</a></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>$59</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                            <a className="cart_quantity_up" href> + </a>
                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                            <a className="cart_quantity_down" href> - </a>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">$59</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </section> {/*/#cart_items*/}
            </div>
  
    )
}

export default CartItem