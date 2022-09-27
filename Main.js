import React from 'react';
import ReactDOM from 'react-dom';

export default function Main(){
     
    return(
        <div>
        <main className="Container-Main">
        <img src="./images/Rectangle90.png" className=
        "Main-Img" ></img>
        <section className="Main-Info">
            <p>  Laura Smith  </p>
            <p>   Frontend Developer </p>
            <p>   laurasmith.website </p>
            <div className="Main-Row">
                <button className="Row-Btn-Mail"><img src="./images/Icon.png" className="Row-Logo-Mail"></img>Email</button>
                <button className="Row-Btn-Linkedn"><img src="./images/Vector.png"
                className="Row-Logo-Linkedn"></img>LinkedIn</button>
            </div>
            
            <div className="Main-About">
            <span>About</span>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            
            <span className="About-Intrest"> Interests</span>
            <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
            </div>
        </section>
        </main>
        <footer>
             <img src="./images/Twitter.png"></img>
            <img src="./images/Facebook.png"></img>
             <img src="./images/Instagram.png"></img>
              <img src="./images/GitHub.png"></img>
        </footer>
        </div>
    )
}