import React from 'react'
import '../styles/SingleAttraction.css'

export const Music = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid musichover">
          <div className="aboutcontainer">
              <h1>Music Venues</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
        
        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Riverbend</h5>
  <img src="https://images2.imgbox.com/f7/cb/mNnsOqnH_o.png" className="card-img-top" alt="Riverbend" />
  <div className="card-body">
    <p className="card-text">When Riverbend opened in 1984, it was one of only 16 outdoor music amphitheaters in the United States and it helped revive the Cincinnati concert scene. Many memorable and historic performances have taken place here.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">6295 Kellogg Ave, Cincinnati, OH 45230</li>
  </ul>
  <div class="card-body">
    <a href="https://www.riverbend.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>
        
        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">ICON Music Center</h5>
  <img src="https://images2.imgbox.com/9d/58/4ZhwMp9c_o.png" className="card-img-top" alt="ICON Music Center" />
  <div className="card-body">
    <p className="card-text">Cincinnati’s newest music venue, the ICON is a year-round venue located on the banks of the Ohio River. The Foo Fighters will be the first performers in the space, tickets sold out in less than 10 minutes.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">25 Race St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://iconmusiccenter.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>
        
        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Bogarts</h5>
  <img src="https://images2.imgbox.com/da/9d/OBdwzEoV_o.png" className="card-img-top" alt="Bogarts" />
  <div className="card-body">
    <p className="card-text">Originally built in 1890,  Bogart’s was constructed as a vaudeville theater named the Nordland Plaza Nickelodeon and remained as such into the 1950's.After an extensive remodel in 1980, it became a venue for local, national, and international live music, as it remains to this day.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">2621 Vine St, Cincinnati, OH 45219</li>
  </ul>
  <div class="card-body">
    <a href="https://www.bogarts.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

</div>
            
           
    )
}


export default Music
