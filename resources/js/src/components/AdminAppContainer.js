import React from 'react';
import ReactDOM from 'react-dom';
import AdminTop from './AdminTop';
import Footer from './Footer';
import PostList from './PostList';

const AppContainerAdmin = ({title, children}) => {
    return(
        <div>
            <AdminTop />
            <PostList />    
            <Footer />
        </div>    
    )
}

export default AppContainerAdmin;