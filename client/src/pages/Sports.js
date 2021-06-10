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
            <div className = 'singleattraction'>
                <a href="https://www.mlb.com/reds" target="_blank" rel="noreferrer"><h1>Cincinnati Reds</h1></a>
            <img src="https://images2.imgbox.com/f2/18/XxND9Iuo_o.png" alt="Cincinnati Reds"/>
            <h4>Located on the winding banks of the Ohio River in downtown Cincinnati, Great American Ball Park serves as the home of the Cincinnati Reds and is praised for innovative features, breathtaking views and affordable seating options.</h4>
            <p>100 Joe Nuxhall Way, Cincinnati, OH 45202</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.bengals.com/" target="_blank" rel="noreferrer"><h1>Cincinnati Bengals</h1></a>
            <img src="https://images2.imgbox.com/4b/73/k4Bjsmls_o.png" alt="Cincinnati Bengals"/>
            <h4>Welcome to the Jungle! The Bengals have had an up and down roller coaster existence in the NFL, but over the years they’ve been a part of a number of interesting games and moments in the league’s history. Who Dey!</h4>
            <p>1 Paul Brown Stadium, Cincinnati, OH 45202</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://cycloneshockey.com/" target="_blank" rel="noreferrer"><h1>Cincinnati Cyclones</h1></a>
            <img src="https://images2.imgbox.com/3d/28/5BjpZLBH_o.png" alt="Cincinnati Cyclones"/>
            <h4>On May 29, 2018, Major League Soccer announced that Cincinnati would join the league in 2019 as an expansion team under the FC Cincinnati brand. TQL Stadium, a 26,000-seat soccer-specific venue in the West End of Downtown Cincinnati, held their first game on May 16, 2021.</h4>
            <p>100 Broadway St, Cincinnati, OH 45202</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.fccincinnati.com/" target="_blank" rel="noreferrer"><h1>FC Cincinnati</h1></a>
            <img src="https://images2.imgbox.com/a3/6b/bkhMMib4_o.png" alt="FC Cincinnati"/>
            <h4>Two time Kelly Cup Champions, the Cincinnati Cyclones are a professional hockey team based in Cincinnati, Ohio. In 2007–08, the team had the most successful season in ECHL history with 55 wins, 115 points, and its first conference and league championships.</h4>
            <p>1501 Central Pkwy, Cincinnati, OH 45214</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.turfway.com/home" target="_blank" rel="noreferrer"><h1>Turfway</h1></a>
            <img src="https://images2.imgbox.com/db/e9/w5n6rG7s_o.png" alt="Turfway"/>
            <h4>Catch the fun and excitement of Thoroughbred racing all year long at Turfway Park. The vintage charm of historical Turfway Park will be sure to create a memorable experience for the young and old alike.</h4>
            <p>7500 Turfway Rd, Florence, KY 41042</p>
            </div>
        </div>
    )
}

export default Sports