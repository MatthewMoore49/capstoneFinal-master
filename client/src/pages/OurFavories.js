import React from 'react'
import '../styles/SingleAttraction.css'

export const Favorites = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid favoriteshover">
          <div className="aboutcontainer">
              <h1>Our Favorites</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
            <div className = 'singleattraction'>
                <a href="https://myfountainsquare.com/" target="_blank" rel="noreferrer"><h1>Fountain Square</h1></a>
            <img src="https://images2.imgbox.com/de/47/tVQ72Uie_o.png" alt="Fountain Square"/>
            <h4>Eat lunch under the sun, check out what’s playing on the video board, or take part in the multitudes of free programming including music, movies and special events. Presiding over the Square is the historic Tyler Davidson Fountain, dedicated in 1871 to the people of Cincinnati. 
            </h4>
            <p>520 Vine St, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.newportonthelevee.com/" target="_blank" rel="noreferrer"><h1>Newport on the Levee</h1></a>
            <img src="https://images2.imgbox.com/b3/6e/YK3JPePI_o.png" alt="Newport on the Levee"/>
            <h4>Opened in 2001, Newport on the Levee is a multi-level retail entertainment destination, located across from downtown Cincinnati on the south bank of the Ohio River in Newport, Kentucky. Shopping, movies, comedy clubs, aquariums...Newport on the Levee has something for everyone.</h4>
            <p>1 3rd St, Newport, KY 41071</p>
            </div>


            <div className = 'singleattraction'>
                <a href="http://cincinnatizoo.org/" target="_blank" rel="noreferrer"><h1>Cincinnati Zoo</h1></a>
            <img src="https://images2.imgbox.com/c4/f6/qP6JT3ns_o.png" alt="Cincinnati Zoo"/>
            <h4>The Cincinnati Zoo & Botanical Garden is the sixth-oldest zoo in the US, opening in 1873. Originally 64.5 acres in the middle of the city, it has spread into neighboring blocks and several reserves in Cincinnati’s outer suburbs. It was appointed as a National Historic Landmark in 1987.</h4>
            <p>3400 Vine St, Cincinnati, OH 45220</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.visitkingsisland.com/"target="_blank" rel="noreferrer"><h1>Kings Island</h1></a>
            <img src="https://images2.imgbox.com/76/46/7qlJUEia_o.png" alt="Kings Island"/>
            <h4>Kings Island is a 364-acre in Mason, Ohio. The park features over 100 attractions including fourteen roller coasters and a 33-acre water park</h4>
            <p>6300 Kings Island Dr, Mason, OH 45040</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.findlaymarket.org/" target="_blank" rel="noreferrer"><h1>Findlay Market</h1></a>
            <img src="https://images2.imgbox.com/2a/05/nZHp1vAc_o.png" alt="Findlay Market"/>
            <h4>Experience the sights, sounds and smells of Ohio's oldest continuously operated public market. Located in Cincinnati's historic Over-the-Rhine neighborhood, the market has been in operation since 1855 and offers a diverse selection of delicious fresh foods, handmade goods, entertainment, dining, a biergarten and more.</h4>
            <p>1801 Race St, Cincinnati, OH 45202</p>
            </div>
        </div>
    )
}

export default Favorites