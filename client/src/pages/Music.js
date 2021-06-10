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
        


            <div className = 'singleattraction'>
                <a href="https://www.riverbend.org/"target="_blank"><h1>Riverbend</h1></a>
            <img src="https://images2.imgbox.com/f7/cb/mNnsOqnH_o.png" alt=" image"/>
            <p>6295 Kellogg Ave, Cincinnati, OH 45230</p>

            </div>


            <div className = 'singleattraction'>
                <a href="https://iconmusiccenter.com/" target="_blank"><h1>ICON Music Center</h1></a>
            <img src="https://images2.imgbox.com/9d/58/4ZhwMp9c_o.png" alt="img"/>
            <p>25 Race St, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://promowestlive.com/our-venues/promowest-pavilion-at-ovation"target="_blank"><h1>PromoWest Pavilion at Ovation</h1></a>
            <img src= "https://images2.imgbox.com/26/50/rpVxYmGv_o.png" alt=" img"/>
            <p>101 W 4th St, Newport, KY 41071</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.bogarts.com/"target="_blank"><h1>Bogarts</h1></a>
            <img src="https://images2.imgbox.com/da/9d/OBdwzEoV_o.png" alt=""/>
            <p>2621 Vine St, Cincinnati, OH 45219</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiarts.org/music-hall"target="_blank"><h1>Music Hall</h1></a>
            <img src="https://images2.imgbox.com/6b/1a/UiUFvwko_o.png"alt=""/>
            <p>1241 Elm St, Cincinnati, OH 45202</p>
            </div>
</div>
            
           
    )
}


export default Music
