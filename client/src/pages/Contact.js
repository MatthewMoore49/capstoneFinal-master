import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Contact.css'

export default class contact extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        comment: " ",
      }
    }

  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangeQuestion(e){
    this.setState({
      comment: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment,
    }
    console.log(contact)
    axios.post('http://localhost:5000/contact/add', contact)
    .then(res=>console.log(res.data));
    // window.location="/"
    this.props.history.push('/');
    
    this.setState({
        name: '',
        email: '',
        comment: ''
    })
    window.alert('Thank you for your inquiry')
    console.log(contact)
  }
  render() {
    return (
      <div className = 'contactPage'>
      <div className="jumbotron jumbotron-fluid contacthover">
      <div className="contactcontainer">
              <h1>Contact Us</h1>
          </div>
      </div>
      <div className="contactReturn">
          {/* <h3 className='text-center'>Contact Us</h3> */}
          <div className='contactheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
          <div className="containerContact">
            <div className="contentContact">
            <form className='contact-form' onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="contact-label">Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  >
                  </input>
              </div>
              <div className="form-group">
                  <label className="contact-label">Email:</label>
                  <input
                  type="email"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  >
                  </input>
              </div>
              <div className="form-group">
                <label className="contact-label">Questions and Comments:</label>
                  <textarea
                  type="text"
                  className="form-control"
                  value={this.state.comment}
                  onChange={this.onChangeQuestion}
                  rows='6'
                  >
                  </textarea>
              </div>
              <div className="form-group">
                  <input
                  type="submit"
                  value="Send"
                  className="btn btn-contact"
                  />
              </div>
            </form>
            </div>
            <div className="content">
            </div>
          </div>
      </div>
      </div>
    )
  }
}