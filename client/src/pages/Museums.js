import React from 'react'
import '../styles/SingleAttraction.css'

export const Museums = () => {
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
                <a href="https://www.cincymuseum.org/" target="_blank"><h1>Union Terminal</h1></a>
            <img src="https://images2.imgbox.com/4b/0f/m6raxo3G_o.png" alt=" image"/>
            <p>1301 Western Ave, Cincinnati, OH 45203</p>

            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiartmuseum.org/" target="_blank"><h1>Cincinnati Art Museum</h1></a>
            <img src="https://images2.imgbox.com/ff/03/yodMfL5A_o.png" alt="img"/>
            <p>953 Eden Park Dr, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://freedomcenter.org/" target="_blank"><h1>National Underground Railroad Freedom Center</h1></a>
            <img src= "https://images2.imgbox.com/ec/3b/0c2Sfrn6_o.png" alt=" img"/>
            <p>50 E Freedom Way, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincymuseum.org/sciencemuseum/" target="_blank"><h1>Museum of Natural History & Science</h1></a>
            <img src="https://images2.imgbox.com/32/91/HUOdl3Il_o.png" alt=""/>
            <p>1301 Western Ave, Cincinnati, OH 45203</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.americansignmuseum.org/"target="_blank"><h1>American Sign Museum</h1></a>
            <img src="https://images2.imgbox.com/16/08/ybJ9EqF8_o.png"alt=""/>
            <p>1330 Monmouth Ave, Cincinnati, OH 45225</p>
            </div>
</div>
            
           
    )
}


export default Museums