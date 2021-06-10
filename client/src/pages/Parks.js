import React from 'react'
import '../styles/SingleAttraction.css'

export const Parks = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid parkshover">
          <div className="about container">
              <h1>Parks</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/central/eden-park/" target="_blank" rel="noreferrer"><h1>Eden Park</h1></a>
            <img src="https://images2.imgbox.com/3b/42/TwlYH5ER_o.png" alt="Eden Park"/>
            <h4>Home to the Cincinnati Art Museum, Cincinnati Playhouse in the Park and the Krohn Conservatory, Eden Park is one of the most popular parks in Cincinnati Parks. Twin Lakes, once an old quarry, features two lakes, a footbridge and walking paths, an impressive view of the Ohio River and Kentucky, several sculptures and a playground. </h4>
            <p>950 Eden Park Dr, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/" target="_blank" rel="noreferrer"><h1>Smale Park</h1></a>
            <img src="https://images2.imgbox.com/31/49/wEY6cvQN_o.png" alt="Smale Park"/>
            <h4>Smale Riverfront Park is a park for the generations. Its many and varied features—including fountains, walkways, gardens, event lawns, playgrounds and a carousel—contribute to the emotional and physical health of its citizens; to the economic vitality of the region and to the exceptional quality of life and experience to be cultivated and enjoyed throughout the area.</h4>
            <p>West Mehring Way, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://washingtonpark.org/" target="_blank" rel="noreferrer"><h1>Washington Park</h1></a>
            <img src="https://images2.imgbox.com/9e/fa/r43o0Ml0_o.png" alt="Washington Park"/>
            <h4>This park includes a playground for kids with a play castle, climbing wall, sandbox and slides; interactive water features with more than 130 pop-up jets to provide cool relief on hot days; historic restored bandstand gazebo for weekly live music; a fenced-in dog area with 12,000 square feet, synthetic turf and a doggy-water fountain; American Classical Music Walk of Fame and more.</h4>
            <p>1230 Elm St, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/river-parks/sawyer-point-park-yeatmans..." target="_blank" rel="noreferrer"><h1>Sawyer Point</h1></a>
            <img src="https://images2.imgbox.com/ac/12/GV7fKcLb_o.png" alt="Sawyer Point"/>
            <h4>Overlooking the majestic Ohio River Sawyer Point offers something for everyone. This beautiful mile long Park features beautiful landscapes, award winning playgrounds, numerous pieces of public art, walking paths, tennis and volleyball courts and a refreshing spray ground. </h4>
            <p>705 E Pete Rose Way, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiparks.com/west/mt-airy-forest/" target="_blank" rel="noreferrer"><h1>Mt. Airy</h1></a>
            <img src="https://images2.imgbox.com/4e/1c/FzPhF84A_o.png" alt="Mt Airy"/>
            <h4>Mt. Airy Forest’s 1,459 acres includes miles of hiking trails, bridle trails (located off Diehl Road) for horseback riders, and multi-use mountain biking trail. Mt. Airy has Ohio’s only wheelchair accessible public treehouse, an enclosed dog park and disc golf. Or just come for a picnic, there are tables, charcoal grills and swing sets waiting for you.</h4>
            <p>2885 Diehl Rd, Cincinnati, OH 45211</p>
            </div>
        </div>
    )
}

export default Parks