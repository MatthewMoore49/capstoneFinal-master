import React, { Component } from 'react';
import Footer from '../components/Footer'   
import Navbar from '../components/Navbar'
import '../pages/About.css'


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
      };
    }
