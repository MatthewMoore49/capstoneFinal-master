import React, { Component } from 'react';
import axios from 'axios';
import FooterHome from '../components/FooterHome'
import '../styles/contact.css'
import Navbar from '../src/Navbar'



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
  }
 console.log(contact)
    axios.post(BACKEND_URL + 'contact/add', contact)
    .then(res=>console.log(res.data));
    this.props.history.push('/');
    this.setState({
        name: '',
        email: '',
        comment: ''
    }); 
    onChangeName(e) 
      this.setState({name: e.target.value});
  onChangeEmail(e) 
      this.setState({email: e.target.value});
  onChangeSubject(e) 
      this.setState({subject: e.target.value});
  onSubmit(e) 
      this.setState({message: e.target.value});
  render() 
    return (
      <div className="section">
      <div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="section-title">
          <h2 className="title">Contact Us</h2>
          <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
            method="POST">
            <div className="form-group">
            <div className="row">
            <div className="col-md-6">
              <input placeholder = "Name"  id="name" type="text" 
              className="form-control" required value={this.state.name} 
                onChange={this.onNameChange.bind(this)}/>
                    </div>
              <div className="col-md-6">
                <input placeholder = "Email"  id="email" type="email"
                className="form-control" aria-describedby="emailHelp"
                required value={this.state.email} onChange=
                  {this.onEmailChange.bind(this)}/>
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                  <input placeholder = "Subject"  id="subject" type="text"
                className="form-control" required value={this.state.subject}
              onChange={this.onSubjectChange.bind(this)}/>
              </div>
              <div className="form-group">
              <textarea placeholder = "Message"  id="message" 
              className="form-control" rows="1" 
              required value={this.state.message}
              onChange= {this.onMsgChange.bind(this)}/>
              </div>
              <button type="submit" className="primary-btn submit">Submit</button>
              </form>
              </div>
              </div>
          </div>
        </div>
        </div>
    );