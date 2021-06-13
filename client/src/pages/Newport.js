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

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Hofbräuhaus</h5>
  <img src="https://images2.imgbox.com/54/17/eBcB1EQ1_o.png" className="card-img-top" alt="Hofbräuhaus" />
  <div className="card-body">
    <p className="card-text">The Hofbräuhaus Newport is a restaurant attraction in the popular Newport on the Levee area of Northern Kentucky. From the traditionally decorated rooms, to the excellent bier and tasty German and American fare, Hofbräuhaus Newport is sure to be a memorable experience for everyone.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">200 3rd St, Newport, KY 41071</li>
  </ul>
  <div className="card-body">
    <a href="https://www.hofbrauhausnewport.com/" target="_blank" rel="noreferrer" className="card-link">Visit</a>
  </div>
  </div>


        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">Newport Aquarium</h5>
  <img src="https://images2.imgbox.com/64/84/a9UxLrvf_o.png" className="card-img-top" alt="Newport Aquarium" />
  <div className="card-body">
    <p className="card-text">Delighting families since 1999, Newport Aquarium welcomes your family to discover the wonder of an underwater world. SEA thousands of the world’s most exotic aquatic creatures as you waddle with playful penguins, meet rare white alligators, be surrounded by sharks and surprised by smiling stingrays. Encounter thrilling adventures like the first-in-the-world Shark Bridge, where you can cross inches above a tank full of sharks on a rope bridge.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1 Levee Way, Newport, KY 41071</li>
  </ul>
  <div class="card-body">
    <a href="https://www.newportaquarium.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">BB Riverboats</h5>
  <img src="https://images2.imgbox.com/4b/86/or8aITX1_o.png" className="card-img-top" alt="BB Riverboats" />
  <div className="card-body">
    <p className="card-text">Step aboard for amazing views from the Belle of Cincinnati or the River Queen. Whether in the climate-controlled areas or the open-air upper decks, during a dining cruise or kids' cruise, you're sure to appreciate the relaxing pace of river life.</p>
  </div>
<div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">101 Riverboat Row, Newport, KY 41071</li>
  </ul>
  <div className="card-body">
    <a href="http://www.bbriverboats.com/" target="_blank" rel="noreferrer" className="card-link">Visit</a>
  </div>
</div>
</div>
</div>

          
    )
}

export default Newport