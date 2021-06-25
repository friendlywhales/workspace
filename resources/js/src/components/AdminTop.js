import React  from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminTop = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> 
            <ul className="navbar-nav navbar-dark"> 
                <a class="navbar-brand" href="/admin">MEDIAIPLUS ADMIN</a>
                <li className="nav-item active"> 
                    <a className="nav-link" href="#">Post</a> 
                </li> 
                <li className="nav-item"> 
                    <a className="nav-link" href="#">Category</a> 
                </li> 
                <li className="nav-item"> 
                    <a className="nav-link" href="#">Users</a> 
                </li> 
            </ul>
            {isLoggedIn ?
                <form method="POST" action="/logout">
                    <Button type="submit" className="btn-success">LOGOUT</Button>
                </form>
            :
                <Link to="/login" className="btn btn-success">LOGIN</Link>
            }
        </nav>
    )
}

export default AdminTop;