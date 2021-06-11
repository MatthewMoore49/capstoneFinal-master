
import React, { Component } from 'react';
import axios from 'axios';

import '../styles/NewAttraction.css';
import {BACKEND_URL} from '../config'
import { withRouter } from 'react-router-dom'

class NewAttraction extends Component {
    constructor (props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);
        // this.onChangeImageURL = this.onChangeImageURL.bind(this);
        // this.onChangeWebsite = this.Website.bind(this);
        // this.onChangeCategory = this.onChangeCategory.bind(this);
        // this.onChangeLocation = this.onChangeLocation.bind(this);
        
        this.state = {
            name: "",
           title: "",
            description: "",
            imageURL: "",
            website: "",
            category: "",
            location: ""
              
            }
          
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeImageUrl(e) {
        this.setState({
            imageURL: e.target.value
        })
    }
    onChangeWebsite(e) {
        this.setState({
            website: e.target.value    
        })
    }
    onChangeCategory(e) {
        this.setState({
                category: e.target.value  
        })
    }
    onChangeLocation(e) {
        this.setState({
           location: e.target.value
        })
    }
  
   
    onSubmit(e) {
        e.preventDefault();
        const attraction = {
            title: this.state.title,
            description: this.state.description,
            imageURL: this.state.imageURL,
            website: this.state.website,
            category: this.state.location.category,
            location: this.state.location   
        }
        console.log(BACKEND_URL + 'attractions/add', attraction)
        axios.post(BACKEND_URL + 'attractions/add', attraction)
        .then(res => console.log(res.data));
        // window.location='/viewattractions'
        this.props.history.push('/viewattractions');
        console.log(attraction)
    };
    render() {
        return(
            <div>
                <div className='containerAddPage'>
                    <h2 className='text-center' id="header-text">Add a New Attraction</h2>
                    <form className='add' onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type='text' required className='form-control inputs' 
                            value={this.state.title} onChange={this.onChangeTitle}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input type='text' required 
                            className='form-control' 
                            value={this.state.description} onChange={this.onChangeDescription}>
                            </input>
                        </div>
                         <div className="form-group">
                            <label>Image URL: </label>
                            <input type='text' required
                             className='form-control' 
                            value={this.state.imageURL} onChange={this.onChangeImageURL}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Website: </label>
                            <input type='text' required 
                            className='form-control' 
                            value={this.state.website} onChange={this.onChangeWebsite}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Category: </label>
                            <input type='text' required 
                            className='form-control' 
                            value={this.state.category} onChange={this.onChangeCategory}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Location: </label>
                            <input type='text' required 
                            className='form-control' 
                            value={this.state.location} onChange={this.onChangeLocation}>
                            </input>
                        </div>
                       
                        <div className='form-group'>
                            <input type='submit' value="Add Attraction" className="btn-add" />
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(NewAttraction)