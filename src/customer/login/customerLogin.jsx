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

function CustomerLogin() {
  return (
    <body>
	<CustomerHeader/>
	
	<section id="form">{/*form*/}
        <div className="container">
            <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">{/*login form*/}
                <h2>Login to your account</h2>
                <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <span>
                    <input type="checkbox" className="checkbox" /> 
                    Keep me signed in
                    </span>
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
                </div>{/*/login form*/}
            </div>
            <div className="col-sm-1">
                <h2 className="or">OR</h2>
            </div>
            <div className="col-sm-4">
                <div className="signup-form">{/*sign up form*/}
                <h2>New User Signup!</h2>
                <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-default">Signup</button>
                </form>
                </div>{/*/sign up form*/}
            </div>
            </div>
        </div>
    </section>{/*/form*/}

	
	<CustomerFooter/>

</body>
  )
}

export default CustomerLogin
