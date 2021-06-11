import React from 'react'
import '../styles/SingleAttraction.css'

const Parks = () => {
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

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Washington Park</h5>
  <img src="https://images2.imgbox.com/9e/fa/r43o0Ml0_o.png" className="card-img-top" alt="Washington Park" />
  <div className="card-body">
    <p className="card-text">Washington Park includes a playground for kids with a play castle, climbing wall, sandbox and slides; interactive water features with more than 130 pop-up jets to provide cool relief on hot days; historic restored bandstand gazebo for weekly live music; a fenced-in dog area with 12,000 square feet, synthetic turf and a doggy-water fountain; American Classical Music Walk of Fame and more.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1230 Elm St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://washingtonpark.org/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Mt Airy</h5>
  <img src="https://images2.imgbox.com/4e/1c/FzPhF84A_o.png" className="card-img-top" alt="Mt Airy" />
  <div className="card-body">
    <p className="card-text">Mt. Airy Forest’s 1,459 acres includes miles of hiking trails, bridle trails (located off Diehl Road) for horseback riders, and multi-use mountain biking trail. Mt. Airy has Ohio’s only wheelchair accessible public treehouse, an enclosed dog park and disc golf. Or just come for a picnic, there are tables, charcoal grills and swing sets waiting for you.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">2885 Diehl Rd, Cincinnati, OH 45211</li>
  </ul>
  <div class="card-body">
    <a href="https://www.cincinnatiparks.com/west/mt-airy-forest/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Smale Park</h5>
  <img src="https://images2.imgbox.com/31/49/wEY6cvQN_o.png" className="card-img-top" alt="Smale Park" />
  <div className="card-body">
    <p className="card-text">Smale Riverfront Park is a park for the generations. Its many and varied features—including fountains, walkways, gardens, event lawns, playgrounds and a carousel—contribute to the emotional and physical health of its citizens; to the economic vitality of the region and to the exceptional quality of life and experience to be cultivated and enjoyed throughout the area.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">West Mehring Way, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>
           
        </div>
    )
}

export default Parks