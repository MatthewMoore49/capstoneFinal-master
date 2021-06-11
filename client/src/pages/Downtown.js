import React from 'react'
import '../styles/SingleAttraction.css'

export const Downtown = () => {
    return (
        <div>
        <div className = 'home'>
  <div className="jumbotron jumbotron-fluid downtownhover">
      <div className="aboutcontainer">
          <h1>Visit Downtown</h1>
      </div>
  </div>
  <div className='aboutheader'>
      <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
      <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
  </div>
    </div>

    <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">BlaCk Coffee Lounge</h5>
  <img src="https://images2.imgbox.com/fd/f8/jeuRncFt_o.png" className="card-img-top" alt="BlaCk Coffee Lounge" />
  <div className="card-body">
    <p className="card-text">BlaCk Coffee Lounge is a Black-owned coffee establishment located directly next to BlaCk OWned Outerwear at the corner of Elm and West 9th Street. The menu boasts a wide variety of espresso, home-brewed coffees, like the ‘Wakanda’ blend, cold-pressed juices, and light bites, including vegan options.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">824 Elm St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.facebook.com/blaCkCoffeeCincy/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

    <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">The Banks</h5>
  <img src="https://images2.imgbox.com/e1/be/XSNwQQQ4_o.png" className="card-img-top" alt="The Banks" />
  <div className="card-body">
    <p className="card-text">The Banks is an electrifying cityscape, buzzing and bustling with thousands of people reigniting their passion, by day and night, for the City we all love. Downtown Cincy will never be the same. One visit and neither will you.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">150 E Freedom Way, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="http://thebankscincy.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

    <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Contemporary Art Center</h5>
  <img src="https://images2.imgbox.com/be/a6/SUsMk5aN_o.png" className="card-img-top" alt="Contemporary Art Center" />
  <div className="card-body">
    <p className="card-text">The Contemporary Arts Center is a contemporary art museum in Cincinnati, and one of the first contemporary art institutions in the United States. The CAC focuses on new developments in painting, sculpture, photography, architecture, performance art and new media.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">44 E 6th St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.contemporaryartscenter.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

    </div>
    )
}

export default Downtown