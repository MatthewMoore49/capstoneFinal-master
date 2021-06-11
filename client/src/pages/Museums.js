import React from 'react'
import '../styles/SingleAttraction.css'

export const Museums = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid museumhover">
          <div className="aboutcontainer">
              <h1>Museums</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
        
        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Union Terminal</h5>
  <img src="https://images2.imgbox.com/4b/0f/m6raxo3G_o.png" className="card-img-top" alt="Union Terminal" />
  <div className="card-body">
    <p className="card-text">One of the last great American train stations built, Union Terminal is a Cincinnati icon and one of the most widely regarded examples of the art deco style. Since its opening in 1933, Union Terminal has had a long and storied history, from welcoming soldiers home from World War II to becoming the home of three museums, an OMNIMAX® Theater and the Cincinnati History Library and Archives.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1301 Western Ave, Cincinnati, OH 45203</li>
  </ul>
  <div class="card-body">
    <a href="https://www.cincymuseum.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">National Underground Railroad Freedom Center</h5>
  <img src="https://images2.imgbox.com/ec/3b/0c2Sfrn6_o.png" className="card-img-top" alt="National Underground Railroad Freedom Center" />
  <div className="card-body">
    <p className="card-text">The National Underground Railroad Freedom Center is a museum in downtown Cincinnati, based on the history of the Underground Railroad. Opened in 2004, the Center also pays tribute to all efforts to "abolish human enslavement and secure freedom for all people."</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">50 E Freedom Way, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://freedomcenter.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">American Sign Museum</h5>
  <img src="https://images2.imgbox.com/16/08/ybJ9EqF8_o.png" className="card-img-top" alt="American Sign Museum" />
  <div className="card-body">
    <p className="card-text">The American Sign Museum is proud to be the largest public museum dedicated to signs in the United States! Covering more than 100 years of American sign history in 20,000 square feet of indoor space, the museum is a walk through the ages of technology and design.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1330 Monmouth Ave, Cincinnati, OH 45225</li>
  </ul>
  <div class="card-body">
    <a href="https://www.americansignmuseum.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

</div>
            
           
    )
}


export default Museums