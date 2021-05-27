import React  from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
    return(
        <div style={{paddingBottom: '1em'}}>
        <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MEDIAIPLUS</a>
                <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />&nbsp;
                    <button className="btn btn-outline-info" type="submit">Search</button> 
                    {/*<Link to="/login" className="btn btn-primary">LOGIN</Link> &nbsp;*/}
                </form>
            </div>
        </nav>
        </div>
    )
}

export default Top;