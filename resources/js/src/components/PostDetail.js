import React, { useState, useEffect }  from 'react';
import {useParams } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


const PostDetail = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
        

    useEffect(() => {
        api.getOnePost(id).then(res=>{
            const result = res.data;
            const post = result.data;
            setTitle(post.title);
            setDescription(post.description)
        })
    }, []);

    return(
        <AppContainer>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                    {title}
                    </div>
                    <div className="card-body">
                      {description}
                    </div>
                </div>
            </div>
        </AppContainer>    
    )
}

export default PostDetail;