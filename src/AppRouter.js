import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Abroad from "./Components/Abroad";
import Courses from "./Components/Courses";
import Portal from "./Components/Portal";
import Search from "./Components/Search";
import Services from "./Components/Services";
import Updates from "./Components/Updates";
import Terms from "./Components/Terms";



export default function AppRouter(){
  return (
      
  <Router>
     <Home/>
     <About/>
    {/* <Abroad/>
     <Courses/>
     <Portal/>*/}
     <Search/>
     <Services/>
     <Updates/>
     {/*<Terms/> */}
    <Routes>
      <Route path ={'/'} element = {<App/>}>
        <Route path = {'/Home'} element = {<Home/>}/> 
        <Route path = {'/About'} element = {<About/>}/>
        <Route path = {'/Abroad'} element = {<Abroad/>}/>
        <Route path = {'/Courses'} element = {<Courses/>}/>
        <Route path = {'/Portal'} element = {<Portal/>}/>
        <Route path = {'/Search'} element = {<Search/>}/>
        <Route path = {'/Services'} element = {<Services/>}/> 
        <Route path = {'/Updates'} element = {<Updates/>}/>
        <Route path = {'/terms'} element = {<Terms/>}/>
      </Route>
    </Routes>
  </Router>
  )
}