import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import { result } from 'lodash';

const Home = () => {
    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
        api.getAllPosts().then(res=>{
            const result = res.data;
            setPosts(result.data)
        });
    }, []);

    const renderPosts = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading posts...
                    </td>
                </tr>
            )
        }

        if (posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There is no data.
                    </td>
                </tr>
            )
        }

        return posts.map((post)=>(
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link
                        className="btn btn-warning"
                        to={`/posts/${post.id}`}
                        >
                     EDIT
                    </Link>
                    <button type="button" className="btn btn-danger">
                     DELETE
                    </button>
                </td>
            </tr>
        ))
    }

    return(
        <AppContainer
            title = "Laravel ReactJS - CRUD"
        >
         
        <Link to="/add" className="btn btn-primary">ADD</Link>
            <div className="table-responsive">
                <table className="table table-striped mt-1">
                    <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Title</th>
                            <th>Description</th> 
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                      { renderPosts() }
                    </tbody>
                </table>
            </div>
        </AppContainer>

               
    )
}

export default Home;