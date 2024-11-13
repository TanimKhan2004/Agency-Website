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
        <Route path = {'/Home'} element = {<Home/>}/> 
        <Route path = {'/About'} element = {<About/>}/>
        <Route path = {'/Cources'} element = {<Cources/>}/>
        <Route path = {'/StudyAbroad'} element = {<StudyAbroad/>}/>
        <Route path = {'/Portal'} element = {<Portal/>}/>
        <Route path = {'/Search'} element = {<Search/>}/>
        <Route path = {'/Services'} element = {<Services/>}/> 
        <Route path = {'/Updates'} element = {<Updates/>}/>
    
      </Route>
    </Routes>
  </Router>
  )
}