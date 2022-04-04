import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/homePage/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import ManageCategory from "./pages/category/ManageCategory";
import ProductList from "./pages/products/ProductList";
import ModifyProduct from "./pages/products/ModifyProduct";
import PendingList from "./pages/bill/PendingList";
import PendingBill from "./pages/bill/PendingBill";
import AddProduct from "./pages/products/AddProduct";
import PaypalTest from "./pages/paypal/PaypalTest";

function App() {
  return (
    <Router classname='App'>
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;
