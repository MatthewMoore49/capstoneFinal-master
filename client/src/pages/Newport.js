import React from 'react'
import '../styles/SingleAttraction.css'

export const Newport = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid newporthover">
          <div className="parkscontainer">
              <h1>Visit Newport</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
            <div className = 'singleattraction'>
                <a href="https://www.hofbrauhausnewport.com/" target="_blank"><h1>Hofbräuhaus</h1></a>
            <img src="https://images2.imgbox.com/54/17/eBcB1EQ1_o.png" alt="Hofbräuhaus"/>
            <p>200 3rd St, Newport, KY 41071</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.newportaquarium.com/" target="_blank"><h1>Newport Aquarium</h1></a>
            <img src="https://images2.imgbox.com/4b/86/or8aITX1_o.png" alt="Newport Aquarium"/>
            <p>1 Levee Way, Newport, KY 41071</p>
            </div>
            <div className = 'singleattraction'>
                <a href="http://www.bbriverboats.com/" target="_blank"><h1>BB Riverboats</h1></a>
            <img src="https://images2.imgbox.com/4b/86/or8aITX1_o.png" alt="BB Riverboats"/>
            <p>101 Riverboat Row, Newport, KY 41071</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://purplepeoplebridge.com/" target="_blank"><h1>Purple People Bridge</h1></a>
            <img src="https://images2.imgbox.com/dd/7d/H9SHKp81_o.png" alt="Purple People Bridge"/>
            <p>425 York St, Newport, KY 41071</p>
            </div>
            <div className = 'singleattraction'>
                <a href="https://www.americanlegacytours.com/newport-gangster-tour" target="_blank"><h1>Newport Gangster Tours</h1></a>
            <img src="https://images2.imgbox.com/6d/2d/cS6H2SU4_o.png" alt="Newport Gangster Tours"/>
            <p>56 E 5th St, Newport, KY 41071</p>
            </div>
        </div>
    )
}

export default Newport