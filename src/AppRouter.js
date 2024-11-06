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
{/*import Terms from "./Components/Terms";*/}



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
     {/*<Terms/> */}
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
       {/* <Route path = {'/terms'} element = {<Terms/>}/> */}
      </Route>
    </Routes>
  </Router>
  )
}