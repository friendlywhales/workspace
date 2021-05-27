import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import { result } from 'lodash';
import headImg from '../../../img/head_image.jpeg';
import HomeView from './HomeView'

const Home = () => {

    return(
        <AppContainer>
            <div style={{textAlign:'center'}}>
               <img src={headImg} alt="Mediaiplus" style={{width:'500px', paddingBottom:'1em'}}></img><br/>
               <Link to="/surveyCommon" className="btn btn-primary">견적요청</Link>
            </div> 
        <HomeView />      
        </AppContainer>
    )
}

export default Home;