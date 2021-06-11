import React from 'react'
import '../styles/SingleAttraction.css'

export const Sports = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid sporthover">
          <div className="aboutcontainer">
              <h1>Sports</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Cincinnati Bengals</h5>
  <img src="https://images2.imgbox.com/4b/73/k4Bjsmls_o.png" className="card-img-top" alt="Cincinnati Bengals" />
  <div className="card-body">
    <p className="card-text">Welcome to the Jungle! The Bengals have had an up and down roller coaster existence in the NFL, but over the years they’ve been a part of a number of interesting games and moments in the league’s history. Who Dey!</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1 Paul Brown Stadium, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.bengals.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Cincinnati Reds</h5>
  <img src="https://images2.imgbox.com/f2/18/XxND9Iuo_o.png" className="card-img-top" alt="Cincinnati Reds" />
  <div className="card-body">
    <p className="card-text">Located on the winding banks of the Ohio River in downtown Cincinnati, Great American Ball Park serves as the home of the Cincinnati Reds and is praised for innovative features, breathtaking views and affordable seating options.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">100 Joe Nuxhall Way, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.mlb.com/reds" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Cincinnati Cyclones</h5>
  <img src="https://images2.imgbox.com/3d/28/5BjpZLBH_o.png" className="card-img-top" alt="Cincinnati Cyclones" />
  <div className="card-body">
    <p className="card-text">Two time Kelly Cup Champions, the Cincinnati Cyclones are a professional hockey team based in Cincinnati, Ohio. In 2007–08, the team had the most successful season in ECHL history with 55 wins, 115 points, and its first conference and league championships.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">100 Broadway St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://cycloneshockey.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        </div>
    )
}

export default Sports