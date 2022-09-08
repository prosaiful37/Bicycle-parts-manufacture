import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blog/Blogs';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Contact from './Components/Contact us/Contact';
import NotFound from './Components/Shared/NotFound/NotFound';
import Purchase from './Components/Purchase/Purchase';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard/Dashboard';
import Dahboards from './Components/Dashboard/MyDashboard/Dahboards';
import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
import MyReveiw from './Components/Dashboard/MyReview/MyReveiw';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import Payment from './Components/Dashboard/Payment/Payment';
import AllUsers from "./Components/Dashboard/Users/AllUsers";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/purchase/:partId' element={
        <RequireAuth>
            <Purchase></Purchase>
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
            <Dashboard></Dashboard>
        </RequireAuth>
        }>
        <Route index element={<Dahboards></Dahboards>}></Route>
        <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
        <Route path="review" element={<MyReveiw></MyReveiw>}></Route>
        <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        <Route path="users" element={<AllUsers></AllUsers>}></Route>
        <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
