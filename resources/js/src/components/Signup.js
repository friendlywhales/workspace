import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


const Signup = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [department, setDepartment ] = useState('');
    const [position, setPosition ] = useState('');
    const [hp, setHp ] = useState('');

    
    const onAddSubmit = async() => {
        setLoading(true);
        try {
            await api.addUser({
                name, email, password, department, position, hp
            })
            history.push('/');
            
        } catch (error) {
            alert('fail!!!')
        } finally {
            setLoading(false);
        }
    }

    return(
        <AppContainer
            title = "Sing Up"
        >
       <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" 
                           className="form-control" 
                           placeholder="name" required 
                           value={name}
                           onChange={e=>setName(e.target.value)}
                           />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                           className="form-control" 
                           placeholder="Enter email" required
                           value={email}
                           onChange={e=>setEmail(e.target.value)}
                           />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                           className="form-control" 
                           placeholder="Enter password" required
                           value={password}
                           onChange={e=>setPassword(e.target.value)}
                           />
                </div>

                <div className="form-group">
                    <label>Department</label>
                    <input type="text" 
                           className="form-control" 
                           placeholder="Department" 
                           value={department}
                           onChange={e=>setDepartment(e.target.value)}
                           />
                </div>

                <div className="form-group">
                    <label>Position</label>
                    <input type="text" 
                           className="form-control" 
                           placeholder="Position" 
                           value={position}
                           onChange={e=>setPosition(e.target.value)}
                           />
                </div>

                <div className="form-group">
                    <label>H.P</label>
                    <input type="text" 
                           className="form-control" 
                           placeholder="H.P(010-XXXX-XXXX)" 
                           value={hp}
                           onChange={e=>setHp(e.target.value)}
                           />
                </div>

                <button type="submit" 
                        className="btn btn-primary btn-block"
                        onClick={onAddSubmit}
                        disabled={loading}
                        >
                     {loading ? 'LOADING...' : 'Sign Up'}
                </button>
                <p className="forgot-password text-right">
                    Already registered  <Link to="/login">sign in?</Link>
                </p>
            </form>
        </AppContainer>    
    )
}

export default Signup;