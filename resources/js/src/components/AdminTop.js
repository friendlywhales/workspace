import React  from 'react';
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
         <form className="form-inline ml-auto" action="">
            <Link to="/login" className="btn btn-success">LOGIN</Link> &nbsp;
          </form> 
          </nav>
    )
}

export default AdminTop;