import React from 'react'
import '../styles/SingleAttraction.css'

export const Museums = () => {
    return (
        <div>
            <div className = 'home'>
      <div className="jumbotron jumbotron-fluid museumhover">
          <div className="aboutcontainer">
              <h1>Museums</h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
        </div>
        


            <div className = 'singleattraction'>
                <a href="https://www.cincymuseum.org/" target="_blank" rel="noreferrer"><h1>Union Terminal</h1></a>
            <img src="https://images2.imgbox.com/4b/0f/m6raxo3G_o.png" alt="Union Terminal"/>
            <h4>
            One of the last great American train stations built, Union Terminal is a Cincinnati icon and one of the most widely regarded examples of the art deco style. Since its opening in 1933, Union Terminal has had a long and storied history, from welcoming soldiers home from World War II to becoming the home of three museums, an OMNIMAX® Theater and the Cincinnati History Library and Archives.
            </h4>
            <p>1301 Western Ave, Cincinnati, OH 45203</p>

            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincinnatiartmuseum.org/" target="_blank" rel="noreferrer"><h1>Cincinnati Art Museum</h1></a>
            <img src="https://images2.imgbox.com/ff/03/yodMfL5A_o.png" alt="Cincinnati Art Museum"/>
            <h4>
            The Cincinnati Art Museum is an art museum in the Eden Park neighborhood of Cincinnati, Ohio. Founded in 1881, it was the first purpose-built art museum west of the Alleghenies, and is one of the oldest in the United States.
            </h4>
            <p>953 Eden Park Dr, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://freedomcenter.org/" target="_blank" rel="noreferrer"><h1>National Underground Railroad Freedom Center</h1></a>
            <img src= "https://images2.imgbox.com/ec/3b/0c2Sfrn6_o.png" alt="National Underground Railroad Freedom Center"/>
            <h4>
            The National Underground Railroad Freedom Center is a museum in downtown Cincinnati, based on the history of the Underground Railroad. Opened in 2004, the Center also pays tribute to all efforts to "abolish human enslavement and secure freedom for all people."
            </h4>
            <p>50 E Freedom Way, Cincinnati, OH 45202</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.cincymuseum.org/sciencemuseum/" target="_blank" rel="noreferrer"><h1>Museum of Natural History & Science</h1></a>
            <img src="https://images2.imgbox.com/32/91/HUOdl3Il_o.png" alt="Museum of Natural History & Science"/>
            <h4>
            The Museum of Natural History & Science at Cincinnati Museum Center offers a world of science, history and nature through interactive exhibits and amazing artifacts. Guests can reach their own “ah-ha” moment through creative thinking and problem-solving skills. With something for all ages, there’s always more to explore in the Museum of Natural History & Science.
            </h4>
            <p>1301 Western Ave, Cincinnati, OH 45203</p>
            </div>


            <div className = 'singleattraction'>
                <a href="https://www.americansignmuseum.org/"target="_blank" rel="noreferrer"><h1>American Sign Museum</h1></a>
            <img src="https://images2.imgbox.com/16/08/ybJ9EqF8_o.png"alt="American Sign Museum"/>
            <h4>
            The American Sign Museum is proud to be the largest public museum dedicated to signs in the United States! Covering more than 100 years of American sign history in 20,000 square feet of indoor space, the museum is a walk through the ages of technology and design.
            </h4>
            <p>1330 Monmouth Ave, Cincinnati, OH 45225</p>
            </div>
</div>
            
           
    )
}


export default Museums