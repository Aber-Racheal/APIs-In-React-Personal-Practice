// import Login from "./Login";
// import Users from "./Users";


// export const Introduction = () =>{
// return <h2>What is React?</h2>;
// }
// const App = ()=>{
// return(
// <div>
// {/* <Login/> */}
// <Users/>
// </div>
// )
// }
// export default App;

import { Routes , Route, Link} from 'react-router-dom'
import Login from "./Login"
import Users from "./Users";
// import {login } from './Login/utils';
export function Introduction(){
  return(
    <h1>
      {/* We are SWEs */}
    </h1>
  )
}
function App(){
  return (
    <div>
      <h1>My app</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />}/>
      {/* <Login/> */}
      {/* </Route> */}
      <Route path='/users' element={<Users/>}/>
      {/* <Users/> */}
      {/* </Route> */}
      </Routes>
    </div>
  )
}
export default App;