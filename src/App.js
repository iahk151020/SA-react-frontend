import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './admin/login/Login';
import Home from './admin/homePage/Home';
import Topbar from './customer/components/topbar/Topbar';
import Sidebar from './customer/components/sidebar/Sidebar';
import './App.css';
import ManageCategory from "./admin/category/ManageCategory";
import ProductList from "./admin/products/ProductList";
import ModifyProduct from "./admin/products/ModifyProduct";
import PendingList from "./admin/bill/PendingList";
import PendingBill from "./admin/bill/PendingBill";
import AddProduct from "./admin/products/AddProduct";
import PaypalTest from "./admin/paypal/PaypalTest";
import HomeCustomer from "./customer/customerHome/homeCustomer"
import Cart from "./customer/cart/Cart"
import ProductDetail from "./customer/productDetail/ProductDetail";
import CustomerLogin from "./customer/login/customerLogin";
import Checkout from "./customer/checkout/checkout";

function App() {
  return (
    <Router classname='App'>
      <Switch>
        {/* ADMIN */}
        <Route exact path="/admin/login">
          <Login/>
        </Route>
        <Route exact path="/admin">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <Home/>
            </div>
          </Route>
          <Route exact path="/admin/manage-category">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <ManageCategory/>
            </div>
          </Route>
          <Route exact path="/admin/products">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <ProductList/>
            </div>
          </Route>
          <Route exact path="/admin/products/:id">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <ModifyProduct/>
            </div>
          </Route>
          <Route exact path="/admin/bills/pending">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <PendingList/>
            </div>
          </Route>
          <Route exact path="/admin/bills/pending/:id">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <PendingBill/>
            </div>
          </Route>
          <Route exact path="/admin/add_product">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <AddProduct/>
            </div>
          </Route>
          <Route exact path="/admin/paypal">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <PaypalTest/>
            </div>
          </Route>

          <Route exact path = "/customer/home">
            <HomeCustomer/>
          </Route>

    {/* CUSTOMER */}
          <Route exact path = "/customer/cart">
            <Cart/>
          </Route>

          <Route exact path = "/customer/cart">
            <Cart/>
          </Route>

          <Route exact path = "/customer/productdetail">
            <ProductDetail/>
          </Route>

          <Route exact path = "/customer/login">
            <CustomerLogin/>
          </Route>

          <Route exact path = "/customer/checkout">
            <Checkout/>
          </Route>

        

      </Switch>
    </Router>
  );
}

export default App;
