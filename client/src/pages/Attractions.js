import React, { Component } from 'react';
import axios from 'axios';
import {BACKEND_URL} from '../config'
import '../styles/Attractions.css'


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
        axios.get(BACKEND_URL + 'Attractions/')
        .then(response => {
            this.setState({
                attractions: response.data,
                loading: false
            })
            console.log('this is the list of attractions')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    attractionsList() {
        return this.state.attractions.map((currentAttraction) => {
            return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
        })
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='attractionsHeader'>Attractions</h2>
                    <div className='attractionsInnerContainer'>
                        {this.attractionsList()}
                    </div>
                </div>
                </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading.....</h1>
                </div>
            )
        )
    }
}