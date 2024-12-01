import { BrowserRouter,Routes,Route } from "react-router-dom"
import Landing from "./Components/Landing"
import AdminLogin from "./Components/AdminLogin"
import UserLogin from "./Components/UserLogin"
import UserSignup from "./Components/UserSignup"
import AdminSignUp from "./Components/AdminSignUp"
import AdminHomePage from "./Components/AdminHomePage"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserHomepage from "./Components/UserHomepage"
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/AdminLogin' element={<AdminLogin/>}/>
          <Route path='/UserLogin' element={<UserLogin/>}/>
          <Route path='/AdminSignUp' element={<AdminSignUp/>}/>
          <Route path='/AdminHomePage/*' element={<AdminHomePage/>}/>
          <Route path='/Usersignup' element={<UserSignup/>}/>
          <Route path='/UserHomepage//*' element={<UserHomepage/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>

    </div>
  )
}
export default App;
