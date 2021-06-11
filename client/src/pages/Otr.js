import React from 'react'
import '../styles/SingleAttraction.css'

export const OTR = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid otrhover">
          <div className="parkscontainer">
              <h1>Visit OTR</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">The Candle Lab</h5>
  <img src="https://images2.imgbox.com/cc/b7/wo54OmjC_o.png" className="card-img-top" alt="The Candle Lab" />
  <div className="card-body">
    <p className="card-text">Grab a few friends or your partner for an afternoon or evening of fun and relaxation! Pour your own custom candle using any of our 120+ fragrances, then grab a bite to eat or drink at one of the many local favorites within walking distance. While you are enjoying your meal, your candles will be hard at work cooling and getting ready for you to take home. </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1325 Vine St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.thecandlelab.com/pages/the-candle-lab-cincy-otr-store" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-right" style={{width: '27rem'}}>
           <h5 className="card-title">Holtman’s Donuts</h5>
  <img src="https://images2.imgbox.com/ea/81/lHtLAKUb_o.png" className="card-img-top" alt="Holtman’s Donuts" />
  <div className="card-body">
    <p className="card-text">Family-owned donut shop that produces fresh-baked goods from a recipe passed down through generations of their German heritage. Donut flavors range from Glazed, Jelly and Sprinkles to Maple Bacon, Lucky Charms and Red Velvet and everything in between.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1332C-2, Vine St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="https://www.holtmansdonutshop.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>

        <div className="container card" data-aos="fade-left" style={{width: '27rem'}}>
           <h5 className="card-title">The Senate</h5>
  <img src="https://images2.imgbox.com/0d/ba/upEeTUbM_o.png" className="card-img-top" alt="The Senate" />
  <div className="card-body">
    <p className="card-text">Senate Pub offers old style pub fare in a classic and inviting setting that acts as a local watering hole for the community. Hearty fare options at Senate Pub are listed on the menu and include such items as fresh market oysters, tomato mussels, sweet potato falafel sandwiches, lobster BLT sandwiches, pork belly grilled cheese, seared scallops, hot dogs, duck fat fries and lobster mac and cheese.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1212 Vine St, Cincinnati, OH 45202</li>
  </ul>
  <div class="card-body">
    <a href="http://senatepub.com/" target="_blank" rel="noreferrer" class="card-link">Visit</a>
  </div>
</div>
           
           
        </div>
    )
}

export default OTR