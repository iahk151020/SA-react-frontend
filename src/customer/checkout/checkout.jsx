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

function Checkout() {
  return (
    <body>
      <CustomerHeader />
   
        <div className="container">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4 ">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
            </div>
  
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder=""  required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className=" mb-3">
                  <label htmlFor="Phone">Phone number</label>
                  <input type="tel" className="form-control" id="Phone" name="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                  <div className="invalid-feedback">
                    Please enter your phone number.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="row">
                  
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="save-info" />
                  <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                </div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                  </div>
                </div>
                <hr className="mb-4" />
                <button class="btnsubmit" role="button"  type="submit">Continue to checkout</button>
              </form>
            </div>
          </div>
        </div>
        <br>
        </br>
      <CustomerFooter />
    </body>
  )
}
export default Checkout