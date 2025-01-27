// import React, { useState }from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import "./index.css";
// import NewProject from "./components/pages/NewProject";
// import ExistingProject from "./components/pages/ExistingProject";
// import PendingTasks  from "./components/pages/PendingTasks";
// import Quotations from "./components/pages/Quotations";
// import FITOUT from "./components/pages/FIT-OUT";
// import HVAC from "./components/pages/HVAC";
// import Electrical from "./components/pages/Electrical";
// import Kitchen from "./components/pages/Kitchen";
// import Joinery from "./components/pages/Joinery";
// import Furniture from "./components/pages/Furniture";






// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     // if (email ==="admin" && password ==="123456"){
//     //   alert("Login successful");
//     //   navigate("/dashboard")
//     // }else{
//     //   alert("Invlid username or password");
//     // }
    
//   };
//   return (
//     <div className="main">
//       <h1>BOSIO</h1>
//     <div className = "container">
          
//       <form onSubmit={handleSubmit}>
    
//         <div className = "inside">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="username" value={email} onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className = "inside">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//         </div>
//         <button type = "submit">Login</button>
//       </form>
//     </div>
//     </div>
//   );
// }
// function Dashboard(){
//   const navigate = useNavigate();
//   const handleNavigation = (path) => {
//     navigate(path);
//   };
//   return(
//     <div >
//       <nav> </nav>
//       <div className="dash-container">
//       <ul>
//         <li>
//           <button className="dash-btn" onClick={()=>handleNavigation("/newproject")}>New Project</button>
//         </li>
//         <li>
//           <button className="dash-btn" onClick={()=>handleNavigation("/existingproject")}>Existing Project</button>
//         </li>
//         <li>
//           <button className="dash-btn" onClick={()=>handleNavigation("/pendingtasks")}>Pending Tasks</button>
//         </li>
//       </ul>
//       </div>
//     </div>

//   );
// }

// function App(){
//   return(
//     <Router>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
//         <Route path='/dashboard' element={<Dashboard/>}/>
//         <Route path='/NewProject' element={<NewProject/>}/>
//         <Route path='/ExistingProject' element={<ExistingProject/>}/>
//         <Route path='/PendingTasks' element={<PendingTasks/>}/>
//         <Route path='/quotations' element={<Quotations/>}/>
//         <Route path='/FIT-OUT' element={<FITOUT/>}/>
//         <Route path='/HVAC' element={<HVAC/>}/>
//         <Route path='/Electrical' element={<Electrical />}/>
//         <Route path='/Kitchen' element={<Kitchen/>}/>
//         <Route path='/Joinery' element={<Joinery/>}/>
//         <Route path='/Furniture' element={<Furniture/>}/>

          
//       </Routes>
//     </Router>
//   );
// }
// export default App;
// import { Box, TextField, Typography } from '@mui/material'
// import React from 'react'

// const App = () => {
//   return (
//     <>
//      <Typography variant="h4" sx={{marginTop:"2rem"}} align="center" fontStyle="rubik">Welcome to BOSIO</Typography>
//       <Typography variant="h4" sx={{marginTop:"2rem",ml:"2rem"}}  fontStyle="rubik">Qoutation </Typography>

//       <Typography sx={{marginTop:"2rem",ml:"2rem"}} fontWeight="bold">Main Task </Typography>
//       <Box sx={{marginTop:"0.5rem",ml:"2rem"}}>
//       <TextField style={{width:400}} />
//       </Box>
//       <Typography sx={{marginTop:"2rem",ml:"2rem"}} fontWeight="bold"> Sub Task </Typography>
//       <Box sx={{marginTop:"0.5rem",ml:"2rem"}}>
//         <Box>

//         </Box>
//        <TextField style={{width:400}} />
//        <Box sx={{marginTop:"1rem" ,display:"flex" , alignItems:"center",gap:"1rem",flexWrap:"wrap"}}> 
//         <Box >
//            <Typography fontSize="14px" fontWeight="bold">Unit</Typography>
//           <TextField style={{width:100}} />
//         </Box>
//         <Box >
//            <Typography fontSize="14px" fontWeight="bold">Unit Rate</Typography>
//           <TextField style={{width:100}} />
//         </Box>
//         <Box >
//            <Typography fontSize="14px" fontWeight="bold">Discount</Typography>
//           <TextField style={{width:100}} />
//         </Box>
//         <Box >
//            <Typography fontSize="14px" fontWeight="bold">Quantity</Typography>
//           <TextField style={{width:100}} />
//         </Box>
//        </Box>
//       </Box>
//     </>
//   )
// }

// export default App

import React from 'react'
import EstimateForm from './components/Estimates/Estimates'

function App() {
  return (
    <div><EstimateForm/></div>
  )
}

export default App
