import React from 'react'
import '../styles/SingleAttraction.css'

export const OurFavories = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid abouthover">
          <div className="parkscontainer">
              <h1>Parks</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
            <div className = 'singleattraction'>
                <a href="https://myfountainsquare.com/" target="_blank"><h1>Fountain Square</h1></a>
            <img src="https://images2.imgbox.com/de/47/tVQ72Uie_o.png" alt=""/>
            <p>520 Vine St, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.newportonthelevee.com/" target="_blank"><h1>Newport on the Levee</h1></a>
            <img src="https://images2.imgbox.com/b3/6e/YK3JPePI_o.png" alt=""/>
            <p>1 3rd St, Newport, KY 41071</p>
            </div>


            <div className = 'singleattraction'>
                <a href="http://cincinnatizoo.org/" target="_blank"><h1>Cincinnati Zoo</h1></a>
            <img src="https://images2.imgbox.com/c4/f6/qP6JT3ns_o.png" alt=""/>
            <p>3400 Vine St, Cincinnati, OH 45220</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.visitkingsisland.com/"target="_blank"><h1>Kings Island</h1></a>
            <img src="https://images2.imgbox.com/76/46/7qlJUEia_o.png" alt=""/>
            <p>6300 Kings Island Dr, Mason, OH 45040</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.findlaymarket.org/" target="_blank"><h1>Findlay Market</h1></a>
            <img src="https://images2.imgbox.com/2a/05/nZHp1vAc_o.png" alt=""/>
            <p>1801 Race St, Cincinnati, OH 45202</p>
            </div>
        </div>
    )
}

export default OurFavories