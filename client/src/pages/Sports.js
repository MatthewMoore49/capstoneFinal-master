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
                <a href="https://www.mlb.com/reds" target="_blank"><h1>Cincinnati Reds</h1></a>
            <img src="https://images2.imgbox.com/f2/18/XxND9Iuo_o.png" alt="Cincinnati Reds"/>
            <p>100 Joe Nuxhall Way, Cincinnati, OH 45202</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.bengals.com/" target="_blank"><h1>Cincinnati Bengals</h1></a>
            <img src="https://images2.imgbox.com/4b/73/k4Bjsmls_o.png" alt="Cincinnati Bengals"/>
            <p>1 Paul Brown Stadium, Cincinnati, OH 45202</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://cycloneshockey.com/" target="_blank"><h1>Cincinnati Cyclones</h1></a>
            <img src="https://images2.imgbox.com/3d/28/5BjpZLBH_o.png" alt="Cincinnati Cyclones"/>
            <p>100 Broadway St, Cincinnati, OH 45202</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.fccincinnati.com/" target="_blank"><h1>FC Cincinnati</h1></a>
            <img src="https://images2.imgbox.com/a3/6b/bkhMMib4_o.png" alt="FC Cincinnati"/>
            <p>1501 Central Pkwy, Cincinnati, OH 45214</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.turfway.com/home" target="_blank"><h1>Turfway</h1></a>
            <img src="https://images2.imgbox.com/db/e9/w5n6rG7s_o.png" alt="Turfway"/>
            <p>7500 Turfway Rd, Florence, KY 41042</p>
            </div>
        </div>
    )
}

export default Sports