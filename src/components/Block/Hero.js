import React, { useEffect } from 'react'
import Picture from '../Feature/Picture'

export default () => {

    useEffect(()=>{
        try {
                window.addEventListener("scroll", function(){
                    parallax(); 
                });
                
                function parallax() {
                    var scrollable = document.querySelector('#scroll-parallax');
                    
                    // scroll amount / parallax speed
                    var yPos = window.scrollY*0.25;
                    // background position
                    var coords = 'translate3d(0px, '+ yPos + 'px, 0px)';
                
                    // move background image
                    scrollable.style.transform = coords;
                }
        } catch(e) {}
    }, [])

    return (
        <>
            <section id="hero">
                <Picture id="scroll-parallax" src="feo.jpg" webp="feo.webp" alt="Photo by @ushnisky_dima"/>
                <h1>Happy<br/> Birthday<span style={{display: 'none'}}>,</span> <br/>Feo</h1>
                <style jsx>
                {`
                    #hero {
                        width: 100vw;
                        height: 100vw;
                        text-align: left;
                    }
                    img {
                        width: 100vw;
                        position: absolute;
                        margin: 0 auto;
                        left: 0;
                        right: 0;
                    }
                    h1 {
                        margin-top: 2vw;
                        font-family: 'Maven Pro', sans-serif;
                        text-transform: uppercase;
                        position: absolute;
                        font-size: 15vw;
                        line-height: 102%;
                        margin-left: 3vw;
                        font-weight: 100;
                        mix-blend-mode: plus-darker;
                        color: rgba(77, 77, 77, 1);
                    }
                    #scroll-parallax {
                        position: absolute;
                    }
                `}
                </style>
            </section>
        </>
    )
}