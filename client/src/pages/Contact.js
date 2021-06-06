import React from 'react';


export default function Contact() {
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
  
}


   

