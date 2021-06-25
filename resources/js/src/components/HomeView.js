import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { result } from 'lodash';

const HomeView = () => {
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
                <div className="card">
                <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                        <h5 className="card-title">  Loading posts...</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            )
        }

        if (posts.length === 0) {
            return (
                 <div className="card">
                 <h5 className="card-header">Featured</h5>
                     <div className="card-body">
                         <h5 className="card-title"> There is no data.</h5>
                         <p className="card-text"></p>
                         <a href="#" className="btn btn-primary">Read more</a>
                     </div>
                 </div>
            )
        }

        return posts.map((post)=>(
           <div style={{paddingBottom:"1em"}} key={post.id}> 
            <div className="card">
                <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <Link
                        className="btn btn-primary"
                        to={`/postDetail/${post.id}/`}
                        >
                     Read more
                    </Link>
                    </div>
            </div>
            </div>
        ))
    }
    return(
        <div className="table-responsive" style={{paddingTop:"1em"}}>
              { renderPosts() }
        </div> 
    )
}

export default HomeView;