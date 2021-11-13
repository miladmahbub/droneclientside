import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/login/Login';
import Regester from './Pages/Login/Regester/Regester';
import Authprovider from './Context/Authprovider/Authprovider';
import PrivateRoute from './Pages/Login/Privateroute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddService from './Pages/AddService/AddService';
import AddReview from './Pages/AddReview/AddReview';
import Manageallorder from './Pages/Manageorder/Manageallorder';
import Singleorder from './Pages/Singleorder/Singleorder';
import Orderremove from './Pages/Orderremove/Orderremove';
import Footer from './Pages/footer/Footer'
import Contact from './Pages/contact/Contactus'
import Navigation from './Pages/Shared/Navigation/Navigation';
import Services from './Pages/Home/Services/Services';
import Addproducts from './Pages/Addproducts/Addproducts';
import Bookingorders from './Pages/Bookingorders/Bookingorders';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Authprovider>
      <Router>
      <Route path="/navigation">
            <Navigation></Navigation>
          </Route>

        <Switch>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/addproducts">
            <Addproducts></Addproducts>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <Bookingorders></Bookingorders>
          </PrivateRoute>
          <PrivateRoute path="/singleorder/:serviceId">
              <Singleorder></Singleorder>
            </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orderremove">
            <Orderremove></Orderremove>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addreview">
            <AddReview></AddReview>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/manageallordrs">
            <Manageallorder></Manageallorder>
          </Route>
          <Route path="/register">
            <Regester></Regester>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
        <Route path="/footer">
            <Footer></Footer>
          </Route>
      </Router>
      </Authprovider>
    </div>
  );
}

export default App;