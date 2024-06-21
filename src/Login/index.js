// import './index.css';
// import { useState } from 'react';
// import { login } from './utils';
// const Login = () =>{
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState ('');
//     const handleSubmit = async(event) => {
//         event.preventDefault();
//         const results = await login({username, password});
//         console.log({results});
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <input placeholder="Enter username" type="text" onChange={(event)=>setUsername(event.target.value)}/>
//             <br/>
//             <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
//             <br/>
//             <button type="submit">Login</button>
//         </form>
//     )
// }
// export default Login;



import './index.css';
import { useState } from 'react';
import { login } from './utils';
import { Link, useNavigate} from 'react-router-dom'
function Login(){
const navigate = useNavigate();
const [ username, setUserName] = useState('');
const [password , setPassword] = useState('');

const handleLogin = async(event) => {
    event.preventDefault();
    const result = await login ({username, password});
    navigate('./users')
    console.log({ result});
};
    return(
        <div >
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input placeholder="Enter user name" type="text" onChange={(event)=>setUserName(event.target.value)}/>
                <br/>
                <input placeholder="Enter password" type="password" onChange={(event)=> setPassword(event.target.value)}/>
                <br/>
                {/* <button type="submit"><Link to='/'>Login</></button> */}
                <Link to="/users"><button type='submit'>Login</button></Link>
            </form>
            {/* <p>
                <Link to="./login"></Link>
            </p> */}
        </div>
    )
}
export default Login;