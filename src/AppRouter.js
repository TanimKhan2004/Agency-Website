import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Cources from "./Components/Cources";
import StudyAbroad from "./Components/StudyAbroad";
import Portal from "./Components/Portal";
import Search from "./Components/Search";
import Services from "./Components/Services";
import Updates from "./Components/Updates";


export default function AppRouter(){
  return (
      
  <Router>
     <Home/>
     <About/>
     <Services/>
     <Portal/>
     <Search/>
     <StudyAbroad/>
     <Cources/>
     <Updates/>

    <Routes>
      <Route path ={'/'} element = {<App/>}>
        <Route path = {'/Home'}/> 
        <Route path = {'/About'}/>
        <Route path = {'/Cources'}/>
        <Route path = {'/StudyAbroad'}/>
        <Route path = {'/Portal'}/>
        <Route path = {'/Search'}/>
        <Route path = {'/Services'}/> 
        <Route path = {'/Updates'}/>
    
      </Route>
    </Routes>
  </Router>
  )
}