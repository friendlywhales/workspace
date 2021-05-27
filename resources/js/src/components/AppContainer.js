import React from 'react';
import ReactDOM from 'react-dom';
import Top from './Top';
import Footer from './Footer';

const AppContainer = ({title, children}) => {
    return(
        <div>
            <Top />
            <div className="container">
                <div className="card">
                    {/* <div className="card-header">
                    {title}
                    </div> */}
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>    
    )
}

export default AppContainer;