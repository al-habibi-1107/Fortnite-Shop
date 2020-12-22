import React , {useState} from 'react'

import './Home.css';


function Home(){

   
    
    
    const bgAdresses = ['https://cdn2.unrealengine.com/15br-social-lineup-social-1920x1080-685054651.jpg','https://static.giga.de/wp-content/uploads/2020/04/fortniteseason2kapitel2.jpg','https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg','https://image-cdn.essentiallysports.com/wp-content/uploads/20200617190129/fortnite-season-3-battle-pass-skins.jpg','https://www.talkesport.com/wp-content/uploads/Switch_Fortnite_C2S4_Hero.jpg','https://images.daznservices.com/di/library/GOAL/73/ac/fortnite_1tyzd1926f7ja1ah6guecu4q82.png?t=1043388964&quality=100'];
    let i=Math.floor(Math.random()*bgAdresses.length);
    const [imgAddresses,setBgImg]= useState(bgAdresses[i]);
    
    

    function changeBG(){
        if(i<=bgAdresses.length-1){
            console.log('i < ='+i)
            setBgImg(bgAdresses[i]);
            i++;
        }
        else {
            console.log('i > ='+i);
            i=0;
            setBgImg(bgAdresses[0]);
        }
    }
    



return (
    <>
   
    <img src={imgAddresses} alt='bg'/>
    <div className="btn">
    <button onClick={changeBG}>Shop Now</button>
    </div>
    </>
);

}

export default Home;