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
import CustomerSideBar from '../components/customerSidebar/customerSidebar';
import ProductInfo from './ProductInfo';
import { Container } from 'react-bootstrap';
import Review from './Review';

function ProductDetail() {
  return (
    <body>
	<CustomerHeader/>
	
	<section id="advertisement">
		<div class="container">
			<img src= { require ("../images/shop/advertisement.jpg")} alt="" />
		</div>
	</section>
	
	<section>
		<div class="container">
			<div class="row">
				
				<CustomerSideBar/>
				
				<div className="col-sm-9 padding-right">
                    <ProductInfo/>
                    <Review/>
                </div>

			</div>
		</div>
	</section>
	
	<CustomerFooter/>

</body>
  )
}

export default ProductDetail
