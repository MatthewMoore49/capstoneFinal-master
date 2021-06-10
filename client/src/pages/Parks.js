import React from 'react'
import '../styles/SingleAttraction.css'

export const Parks = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid parkshover">
          <div className="aboutcontainer">
              <h1>Parks</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/central/eden-park/"target="_blank"><h1>Eden Park</h1></a>
            <img src="https://images2.imgbox.com/3b/42/TwlYH5ER_o.png" alt=""/>
            <p>950 Eden Park Dr, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/" target="_blank"><h1>Smale Park</h1></a>
            <img src="https://images2.imgbox.com/31/49/wEY6cvQN_o.png" alt=""/>
            <p>West Mehring Way, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://washingtonpark.org/" target="_blank"><h1>Washington Park</h1></a>
            <img src="https://images2.imgbox.com/9e/fa/r43o0Ml0_o.png" alt=""/>
            <p>1230 Elm St, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/river-parks/sawyer-point-park-yeatmans..." target="_blank"><h1>Sawyer Point</h1></a>
            <img src="https://images2.imgbox.com/ac/12/GV7fKcLb_o.png" alt=""/>
            <p>705 E Pete Rose Way, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/west/mt-airy-forest/" target="_blank"><h1>Mt. Airy</h1></a>
            <img src="https://images2.imgbox.com/4e/1c/FzPhF84A_o.png" alt=""/>
            <p>2885 Diehl Rd, Cincinnati, OH 45211</p>
            </div>
        </div>
    )
}

export default Parks