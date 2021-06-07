import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';
import {BACKEND_URL} from '../config'
import '../styles/Attractions.css'

const Destination = (props) => {
    return (
        <div className='allDestinations'>
            <div className='destinationsCard'>
                <div className='cardImage'>
                    <img className='destinationImage'src={props.destination.imageURL} alt='destination picture' />
                </div>
                <div>
                    <div className='text-name'>{props.destination.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"destinations/" + props.destination._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.destination.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class Destinations extends Component {
    constructor(props) {
        super(props)
        this.state = {
           destinations:[],
            loading: true
        };
    }
    componentDidMount() {
        axios.get(BACKEND_URL + 'destinations/')
        .then(response => {
            this.setState({
                destinations: response.data,
                loading: false
            })
            console.log('this is the list of destinations')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    VisitOtrList() {
         return this.state.destinations.map((currentDestination) => {
             return <Destination destination = {currentDestination} key={currentDestination._id} />
         })
     }
     VisitDowntownList() {
         return this.state.destinations.map((currentDestination) => {
             return <Destination destination = {currentDestination} key={currentDestination._id} />
         })
     }
     VisitNewportKyList() {
         return this.state.destinations.map((currentDestination) => {
             return <Destination destination = {currentDestination} key={currentDestination._id} />
         })
     }
     VisitLibertyCenterList() {
         return this.state.destinations.map((currentDestination) => {
             return <Destination destination = {currentDestination} key={currentDestination._id} />
         })
     }
    
    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                <div className='OTRContainer' id='OTR'>
                    <h2 className='VisitOtrHeader'>Visit OTR</h2>
                    <div className='VisitOtrInnerContainer'>
                        {this.VisitOtrList()}
                    </div>  </div>
                   
                    <div className='DowntownContainer' id='Downtown'>
                    <h2 className='VisitDowntownHeader'>Visit Downtown</h2>
                    <div className='VisitDowntownInnerContainer'>
                        {this.VisitDowntownList()}
                    </div>  </div>

                    <div className='NewportContainer' id='Newport'>
                    <h2 className='VisitNewportKyHeader'>Visit Newport</h2>
                    <div className='VisitNewportKyInnerContainer'>
                        {this.VisitNewportKyList()}
                    </div>  </div>
             
                    <div className='LibertyContainer' id='Liberty'>
                    <h2 className='VisitLibertyCenterHeader'>Visit Liberty Center </h2>
                    <div className='VisitLibertyCenterInnerContainer'>
                        {this.VisitLibertyCenterList()}
                    </div>  </div>
                    </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}