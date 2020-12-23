import React, { useState } from 'react';


import './Home.css';

const bgAdresses = [
    {
        bgImg: 'https://cdn2.unrealengine.com/15br-social-lineup-social-1920x1080-685054651.jpg',
        bgCol: 'radial-gradient(#ff9966,#e65c00)'
    },//Orange
    {
        bgImg: 'https://static.giga.de/wp-content/uploads/2020/04/fortniteseason2kapitel2.jpg',
        bgCol: 'radial-gradient(#485563,#29323c)'
    }, // Black
    {
        bgImg: 'https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg',
        bgCol: 'radial-gradient(#24C6DC,#514a9d)'
    }, // Blue Cool
    {
        bgImg: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200617190129/fortnite-season-3-battle-pass-skins.jpg',
        bgCol: 'radial-gradient(#F8CDDA,#1D2B64)'
    }, // Sky
    {
        bgImg: 'https://www.talkesport.com/wp-content/uploads/Switch_Fortnite_C2S4_Hero.jpg',
        bgCol: 'radial-gradient(#EAECC6,#2BC0E4)'
    }, // Superhero
    {
        bgImg: 'https://images.daznservices.com/di/library/GOAL/73/ac/fortnite_1tyzd1926f7ja1ah6guecu4q82.png?t=1043388964&quality=100',
        bgCol: 'radial-gradient(#faaca8,#ddd6f3)'
    }]; // war

let i = Math.floor(Math.random() * bgAdresses.length);

const bgStyle = {
    'background': bgAdresses[i].bgCol
};

function Home() {


    const [imgAddresses, setBgImg] = useState(bgAdresses[i].bgImg);


    function changeBG() {
        if (i <= bgAdresses.length - 1) {
            console.log('i < =' + i)
            setBgImg(bgAdresses[i]);
            i++;
        }
        else {
            console.log('i > =' + i);
            i = 0;
            setBgImg(bgAdresses[0]);
        }
    }




    return (
        <>

            <img src={imgAddresses} alt='bg' />
            <div className="btn">
                <button onClick={changeBG}>Shop Now</button>
            </div>
        </>
    );

}

export default Home;
export { bgStyle };