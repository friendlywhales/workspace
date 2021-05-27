import React, { useEffect, useState }  from 'react';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(()=> {
        if (localStorage.getItem("user-info")) {
            history.push("/add")
        } 
    },[])
    return(
        <AppContainer
            title = "Login"
        >
        <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                           className="form-control" 
                           placeholder="Enter email" 
                           onChange={(e)=>setEmail(e.target.value)}
                           />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                           className="form-control" 
                           placeholder="Enter password"
                           onChange={(e)=>setPassword(e.target.value)} 
                           />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </AppContainer>    
    )
}

export default Login;