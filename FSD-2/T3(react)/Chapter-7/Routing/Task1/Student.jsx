/* Create a React application for a Student Portfolio Website using functional components and React Router.
Components
•	Main.jsx – Configure routes 
•	Home.jsx – Display student details 
•	Projects.jsx – Display projects 
•	Nopage.jsx- Page not found.
   Requirements :-
•	Create navigation for Home and Projects pages. 
•	Home page should display: Welcome to My Portfolio also show student Name, Course, and Education. 
•	Add a link to the Projects page. 
•	Projects page should display 3 projects using props: 
o	Project Name 
o	Description 
o	Image 
•	Use functional components and basic CSS styling.  */

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Shome from "./Shome";
import Sproject from "./Sproject";
import Snopage from "./Snopage";
import railway from "../assets/railway.jfif";
import stego from "../assets/stego.jfif";
import air from "../assets/air.jfif";
function Student(){
   const s=[
      {name:"Railway Reservation System",
      desc:"A Railway Reservation System (RRS) is a comprehensive software platform that automates train scheduling, pricing, ticket booking, and seat inventory management. It allows users to search routes, check availability, purchase tickets, and track PNR statuses, while empowering administrators to manage routes, generate fares, and monitor system operations.",
      image:railway},
      {name:"StegoSafe",
      desc:"StegoSafe is a privacy-first, military-grade steganography tool available on the App Store. It allows you to transform ordinary images into covert vaults for your most sensitive data by using advanced Least Significant Bit (LSB) steganography and cryptography.",
      image:stego},
      {name:"Airline Reservation System",
      desc:"An airline reservation refers to a digital booking that secures a seat on a specific flight. It involves a Passenger Name Record (PNR) that holds all critical details of the journey, including flight schedules, passenger information, seating class, and ticket status.",
      image:air
      }
   ]
   return (
      <div>
         <Router>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/projects">Projects</Link></li>
            </ul>
            <Routes>
               <Route path="/" element={<Shome/>} />
               <Route path="/projects" element={<Sproject data={s}/>} />
               <Route path="/*" element={<Snopage/>} />
            </Routes>

         </Router>
      </div>
   )
}
export default Student;