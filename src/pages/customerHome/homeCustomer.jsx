import React from 'react'
import '../../components/css/animate.css';
import '../../components/css/bootstrap.min.css';
import '../../components/css/font-awesome.min.css';
import '../../components/css/main.css';
import '../../components/css/price-range.css';
import '../../components/css/responsive.css';
// import './prettyPhoto.css';
import CustomerHeader from '../../components/customerHeader/customerHeader';
import CustomerFooter from '../../components/customerFooter/customerFooter';
import CustomerSideBar from '../../components/customerSidebar/customerSidebar';
import CustomerProduct from '../../components/customerProduct/customerProduct';
function HomeCustomer() {
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
				
				<div class="col-sm-9 padding-right">
					<div class="features_items">
						<h2 class="title text-center">Features Items</h2>
						<CustomerProduct/>
						<ul class="pagination">
							<li class="active"><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">&raquo;</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<CustomerFooter/>

</body>
  )
}

export default HomeCustomer
