import React from 'react'
import '../styles/SingleAttraction.css'

export const Favorites = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid favoriteshover">
          <div className="aboutcontainer">
              <h1>Our Favorites</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Fountain Square</h5>
  <img src="https://images2.imgbox.com/de/47/tVQ72Uie_o.png" className="card-img-top" alt="Fountain Square" />
  <div className="card-body">
    <p className="card-text">Eat lunch under the sun, check out what’s playing on the video board, or take part in the multitudes of free programming including music, movies and special events. Presiding over the Square is the historic Tyler Davidson Fountain, dedicated in 1871 to the people of Cincinnati. </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">520 Vine St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://myfountainsquare.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Cincinnati Zoo & Botanical Garden</h5>
  <img src="https://images2.imgbox.com/c4/f6/qP6JT3ns_o.png" className="card-img-top" alt="Cincinnati Zoo & Botanical Garden" />
  <div className="card-body">
    <p className="card-text">The Cincinnati Zoo & Botanical Garden is the sixth-oldest zoo in the US, opening in 1873. Originally 64.5 acres in the middle of the city, it has spread into neighboring blocks and several reserves in Cincinnati’s outer suburbs. It was appointed as a National Historic Landmark in 1987.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">3400 Vine St, Cincinnati, OH 45220</li>
  </ul>
  <div class="card-body">
    <a href="http://cincinnatizoo.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Findlay Market</h5>
  <img src="https://images2.imgbox.com/2a/05/nZHp1vAc_o.png" className="card-img-top" alt="Findlay Market" />
  <div className="card-body">
    <p className="card-text">Experience the sights, sounds and smells of Ohio's oldest continuously operated public market. Located in Cincinnati's historic Over-the-Rhine neighborhood, the market has been in operation since 1855 and offers a diverse selection of delicious fresh foods, handmade goods, entertainment, dining, a biergarten and more.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1801 Race St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.findlaymarket.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>


        </div>
    )
}

export default Favorites