import React from 'react'
import '../styles/SingleAttraction.css'

export const Casinos = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid casinohover">
          <div className="aboutcontainer">
              <h1>Casinos</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Hollywood Casino Lawrenceburg</h5>
  <img src="https://images2.imgbox.com/7c/9f/eD0Sbg2G_o.png" className="card-img-top" alt="Hollywood Casino Lawrenceburg" />
  <div className="card-body">
    <p className="card-text">Across from the Ohio River, this modern casino hotel is a 14-minute walk from downtown Lawrenceburg, 0.9 miles from Lawrenceburg Speedway and 2.9 miles from Interstate 275. Amenities include a casino and 6 dining options, including a steakhouse and a buffet diner. There's also a nightclub and live entertainment.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">777 Hollywood Blvd, Lawrenceburg, IN 47025</li>
  </ul>
  <div class="card-body">
    <a href="https://www.hollywoodindiana.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Hard Rock Casino</h5>
  <img src="https://images2.imgbox.com/48/d3/DVjFDuMz_o.png" className="card-img-top" alt="Hard Rock Casino" />
  <div className="card-body">
    <p className="card-text">The Hard Rock Brand's World-Class Gaming, Bars, Dining Have a New Home. Feel Like a Rock-Star at the New Hard Rock Casino in Downtown Cincinnati. Where Cincinnati plays. The fun never stops.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1000 Broadway St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.hardrockcasinocincinnati.com/en" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Belterra Park Gaming & Entertainment</h5>
  <img src="https://images2.imgbox.com/4f/4d/R9IRPhWE_o.png" className="card-img-top" alt="Belterra Park Gaming & Entertainment" />
  <div className="card-body">
    <p className="card-text">Belterra Park Gaming is one amazing place to play with over 1,300 games, 4 restaurants, live thoroughbred racing & simulcast action.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">6301 Kellogg Rd, Cincinnati, OH 45230</li>
  </ul>
  <div class="card-body">
    <a href="https://www.belterrapark.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>
        
     
        </div>
    )
}

export default Casinos