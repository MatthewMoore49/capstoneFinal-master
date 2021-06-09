import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { Route } from 'react-router-dom';
 import { Router } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {BACKEND_URL} from '../config'
import '../styles/Attractions.css'
import { Db } from 'mongodb';
import Breweries from 'Breweries'


const Attraction = (props) => {
    return (
        <div className='allAttractions'>
            <div className='attractionsCard'>
                <div className='cardImage'>
                    <img className='attractionImage' src={props.attraction.imageURL} alt='attraction' />
                </div>
                <div>
                    <div className='attractionTitle'>{props.attraction.title}</div>
                    <div className='attractionDescription'>{props.attraction.description}</div>
                    <div className='attractionLocation'>{props.attraction.location}</div>
                    <a className='attractionWeb' href={props.attraction.website} target="_blank" rel="noreferrer">Visit</a>
                </div>
            </div>
        </div>
    )
}

     
export default class Attractions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attractions:[],
         
         
            
            loading: true
        };
    }
    componentDidMount() {
        axios.get(BACKEND_URL + 'attractions/')
        // axios.get(BACKEND_URL + 'restaurants/')
       // axios.get(BACKEND_URL + 'breweries/')
    //    axios.get(BACKEND_URL + 'casinos/')
       // axios.get(BACKEND_URL + 'music/')
        // axios.get(BACKEND_URL + 'sports/')
      //  axios.get(BACKEND_URL + 'parks/')
      //  axios.get(BACKEND_URL + 'favorites/')
       // axios.get(BACKEND_URL + 'downtown/')
       // axios.get(BACKEND_URL + 'liberty/')
      //  axios.get(BACKEND_URL + 'newport/')
      //  axios.get(BACKEND_URL + 'otr/')










        .then(response => {
            this.setState({
                attractions: response.data,
                restaurants:response.data,
                casinos:response.data,
                sports:response.data,
                loading: false
            })
            console.log('this is the list of attractions')
        })
        .catch((error) => {
            console.log(error)
        });
    }



<<<<<<< HEAD
  
=======
    AttractionsList() {
        return this.state.attractions.map((currentAttraction) => {
           return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
        })
   }

>>>>>>> 7717123fe3fd5b39c239bf43cf87046a6d096123

    render() {
        return (
        
            this.state.loading === false ? (
                <div className='row'>
                <div className="jumbotron jumbotron-fluid attracthover">
          <div className="attractcontainer">
              <h1>Explore Cincinnati</h1>
          </div>
      </div>
      <div className='attractheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
<<<<<<< HEAD
   
=======
                <div className='AttractionsContainer'>
                    <h2 className='AttractionsHeader'></h2>
                    <div className='AttractionsInnerContainer'>
                        {this.AttractionsList()}
                    </div>  </div>
                   
                    </div>
>>>>>>> 7717123fe3fd5b39c239bf43cf87046a6d096123
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div></div>
            );
