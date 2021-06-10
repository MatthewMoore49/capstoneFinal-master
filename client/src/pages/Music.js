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
                <a href="https://www.riverbend.org/"target="_blank" rel="noreferrer"><h1>Riverbend</h1></a>
            <img src="https://images2.imgbox.com/f7/cb/mNnsOqnH_o.png" alt="Riverbend"/>
            <h4>When Riverbend opened in 1984, it was one of only 16 outdoor music amphitheaters in the United States and it helped revive the Cincinnati concert scene. Many memorable and historic performances have taken place here.</h4>
            <p>6295 Kellogg Ave, Cincinnati, OH 45230</p>

            </div>


            <div className = 'singleattraction'>
                <a href="https://iconmusiccenter.com/" target="_blank" rel="noreferrer"><h1>ICON Music Center</h1></a>
            <img src="https://images2.imgbox.com/9d/58/4ZhwMp9c_o.png" alt="ICON Music"/>
            <h4>Cincinnati’s newest music venue, the ICON is a year-round venue located on the banks of the Ohio River. The Foo Fighters will be the first performers in the space, tickets sold out in less than 10 minutes. </h4>
            <p>25 Race St, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://promowestlive.com/our-venues/promowest-pavilion-at-ovation"target="_blank" rel="noreferrer"><h1>PromoWest Pavilion at Ovation</h1></a>
            <img src= "https://images2.imgbox.com/26/50/rpVxYmGv_o.png" alt="PromoWest Pavilion at Ovation"/>
            <h4>Still under construction, PromoWest Pavilion at OVATION features state-of-the-art lighting, acoustical systems, and an innovative reversible, movable stage. Whether indoor or out, the venue offers unparalleled viewable intimacy.</h4>
            <p>101 W 4th St, Newport, KY 41071</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.bogarts.com/"target="_blank" rel="noreferrer"><h1>Bogarts</h1></a>
            <img src="https://images2.imgbox.com/da/9d/OBdwzEoV_o.png" alt="Bogarts"/>
            <h4>Originally built in 1890,  Bogart’s was constructed as a vaudeville theater named the Nordland Plaza Nickelodeon and remained as such into the 1950's.After an extensive remodel in 1980, it became a venue for local, national, and international live music, as it remains to this day. </h4>
            <p>2621 Vine St, Cincinnati, OH 45219</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiarts.org/music-hall"target="_blank" rel="noreferrer"><h1>Music Hall</h1></a>
            <img src="https://images2.imgbox.com/6b/1a/UiUFvwko_o.png"alt="Music Hall"/>
            <h4>Cincinnati Music Hall, a National Historic Landmark built in 1878, was beautifully restored in a major renovation in 2017. Standing tall with over a million red bricks in the heart of Cincinnati's historic Over-the-Rhine neighborhood, Music Hall's hallowed halls have hosted legends from Ella Fitzgerald to Yo-Yo Ma, The National to Sergei Rachmaninoff. </h4>
            <p>1241 Elm St, Cincinnati, OH 45202</p>
            </div>
</div>
            
           
    )
}


export default Music
