import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';
import {BACKEND_URL} from '../config'
import '../styles/Attractions.css'
import FooterHome from '../components/FooterHome'

const Attraction = (props) => {
    return (
        <div className='allAttractions'>
            <div className='attractionsCard'>
                <div className='cardImage'>
                    <img className='attractionImage'src={props.attraction.imageURL} alt='attraction picture' />
                </div>
                <div>
                    <div className='text-name'>{props.attraction.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"attractions/" + props.attraction._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.attraction.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
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
   SList() {
        return this.state.attractions.map((currentAttraction) => {
            return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
        })
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='SportsHeader'>Sports</h2>
                    <div className='SportsInnerContainer'>
                        {this.SportsList()}
                    </div>
                    <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='CasinosHeader'>Casino's</h2>
                    <div className='CasinosInnerContainer'>
                        {this.CasinosList()}
                    </div>
                    <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='Our_FavoritesHeader'>Our Favorites</h2>
                    <div className='Our_FavoritesInnerContainer'>
                        {this.Our_FavoritesList()}
                    </div>
                    <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='Music_VenuesHeader'>Music Venues</h2>
                    <div className='Music_VenuesInnerContainer'>
                        {this.Music_VenuesList()}
                    </div>
                    <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='ParksHeader'>Parks</h2>
                    <div className='ParksInnerContainer'>
                        {this.ParksList()}
                    </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}