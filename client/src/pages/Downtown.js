import React from 'react'
import '../styles/SingleAttraction.css'

export const Downtown = () => {
    return (
        <div>
        <div className = 'home'>
  <div className="jumbotron jumbotron-fluid downtownhover">
      <div className="parkscontainer">
          <h1>Visit Downtown</h1>
      </div>
  </div>
  <div className='aboutheader'>
      <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
      <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
  </div>
    </div>
        <div className = 'singleattraction'>
            <a href="http://www.arnoldsbarandgrill.com/default.htm" target="_blank"><h1>Arnold’s Bar & Grill</h1></a>
        <img src="https://images2.imgbox.com/e3/bb/T3aCPe9P_o.png" alt="Arnold’s Bar & Grill"/>
        <p>210 E 8th St, Cincinnati, OH 45202</p>
        </div>
        <div className = 'singleattraction'>
            <a href="https://www.facebook.com/blaCkCoffeeCincy/" target="_blank"><h1>BlaCk Coffee Lounge</h1></a>
        <img src="https://images2.imgbox.com/fd/f8/jeuRncFt_o.png" alt="BlaCk Coffee Lounge"/>
        <p>824 Elm St, Cincinnati, OH 45202</p>
        </div>
        <div className = 'singleattraction'>
            <a href="http://thebankscincy.com/" target="_blank"><h1>The Banks</h1></a>
        <img src="https://images2.imgbox.com/e1/be/XSNwQQQ4_o.png" alt="The Banks"/>
        <p>150 E Freedom Way, Cincinnati, OH 45202</p>
        </div>
        <div className = 'singleattraction'>
            <a href="https://www.cincinnatiarts.org/aronoff-center" target="_blank"><h1>The Aronoff</h1></a>
        <img src="https://images2.imgbox.com/1b/3c/YBoF6ZDa_o.png" alt="The Aronoff"/>
        <p>650 Walnut St, Cincinnati, OH 45202</p>
        </div>
        <div className = 'singleattraction'>
            <a href="https://www.contemporaryartscenter.org/" target="_blank"><h1>Contemporary Art Center</h1></a>
        <img src="https://images2.imgbox.com/be/a6/SUsMk5aN_o.png" alt="Contemporary Art Center"/>
        <p>44 E 6th St, Cincinnati, OH 45202</p>
        </div>
    </div>
    )
}

export default Downtown