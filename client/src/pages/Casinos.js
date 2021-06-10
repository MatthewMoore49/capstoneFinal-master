import React from 'react'
import '../styles/SingleAttraction.css'

export const Casinos = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid abouthover">
          <div className="breweriescontainer">
              <h1>Breweries</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
            <div className = 'singleattraction'>
                <a href="https://www.hardrockcasinocincinnati.com/en" target="_blank"><h1>Hard Rock Casino</h1></a>
            <img src="https://images2.imgbox.com/48/d3/DVjFDuMz_o.png" alt=" image"/>
            <p>1000 Broadway St, Cincinnati, OH 45202</p>

            </div>


            <div className = 'singleattraction'>
                <a href="https://www.newportrg.com/" target="_blank"><h1>Newport Racing & Gaming</h1></a>
            <img src="https://images2.imgbox.com/e3/2d/6P8JCkkj_o.png"alt=" img"/>
            <p>1723 Monmouth St, Newport, KY 41071</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://miamivalleygaming.com/" target="_blank"><h1>Miami Valley Gaming</h1></a>
            <img src= "https://images2.imgbox.com/72/de/anZIJQca_o.png" alt=" img"/>
            <p>6000 OH-63, Lebanon, OH 45036</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.belterrapark.com/" target="_blank"><h1>Belterra Park Gaming & Entertainment</h1></a>
            <img src="https://images2.imgbox.com/4f/4d/R9IRPhWE_o.png" alt=""/>
            <p>6301 Kellogg Rd, Cincinnati, OH 45230</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.hollywoodindiana.com/"target="_blank"><h1>Hollywood Casino Lawrenceburg</h1></a>
            <img src="https://images2.imgbox.com/7c/9f/eD0Sbg2G_o.png" alt=""/>
            <p>777 Hollywood Blvd, Lawrenceburg, IN 47025</p>
            </div>

            
            

        </div>
    )
}

export default Casinos