import "../Preloader.css"

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Preloader({ children, setStartAnimation }) {

    const container = useRef();

    useGSAP(
        () => {

            const counter3=document.querySelector(".counter-3");

            for (let i=0; i<2; ++i) {
                for (let j=0; j<10; ++j) {
                    const div=document.createElement("div");
                    div.className="num";
                    div.textContent=j;
                    counter3.appendChild(div);
                }
            }

            const finalDiv=document.createElement("div");
            finalDiv.className="num";
            finalDiv.textContent="0";
            counter3.appendChild(finalDiv);

            function animate(counter, duration, delay=0) {
                const numHeight=counter.querySelector(".num").clientHeight;
                const totalDistance=(counter.querySelectorAll(".num").length-1)*numHeight;

                gsap.to(counter, {
                    y: -totalDistance,
                    duration: duration, 
                    delay: delay,
                    ease: "power2.inOut",
                })
            }

            animate(counter3, 5);
            animate(document.querySelector(".counter-2"), 6);
            animate(document.querySelector(".counter-1"), 2, 4);

            gsap.to(".digit", {
                top: "-150px",
                stagger: {
                    amount: 0.25,
                },
                delay: 5.5,
                duration: 1,
                ease: "power4.inOut", 
            });

            gsap.from(".loader-1", {
                width: 0,
                duration: 5,
                ease: "power2.inOut",
            })

            gsap.from(".loader-2", {
                width: 0,
                delay: 1.9,
                duration: 5,
                ease: "power2.inOut"
            })

            gsap.to(".loader-1", {
                rotate: 90,
                y:-50, 
                duration: 0.5,
                delay: 6
            })

            gsap.to(".loader-2", {
                rotate: -90,
                x: -50,
                y: 50,
                duration: 0.5
            }, "<")

            const el = document.querySelector(".loader-2");
            const bounds = el.getBoundingClientRect();
            const distanceToRight = window.innerWidth-bounds.right-200;

            gsap.to(".loader-2", {
                x: `+=${distanceToRight}px`,
                duration: 0.5,
                delay: 6.5,
            })

            gsap.to(".loader-2", {
                scale: 27,
                duration: 1,
                delay: 7,
                ease: "power2.inOut",
            })


            const el_1 = document.querySelector(".loader-1");
            const bounds_1 = el_1.getBoundingClientRect();
            const distanceToRight_1 = window.innerWidth-bounds_1.left-260;

            gsap.to(".loader-1", {
                x: `-=${distanceToRight_1}px`,
                duration: 0.5,
                delay: 6.5,
            })

            gsap.to(".loader-1", {
                scale: 27,
                duration: 1,
                delay: 7,
                ease: "power2.inOut",
            })

            gsap.to(".loading-screen", {
                opacity: 0,
                duration: 0.5, 
                delay: 7.75,
                ease: "power1.inOut"
            })

            gsap.from(".content-container", {
                delay: 7.5,
                y: 100
            })
            
            gsap.to(".content-container", {
                delay: 7.75,
                y: 0,
                onComplete: () => {
                    setStartAnimation(false);
                }
            })

        }, { scope: container }
    );

    return (
        <div>
            <div ref={container}>
                <div className="loading-screen">
                    <div className="loader">
                        <div className="loader-1 bar"></div>
                        <div className="loader-2 bar"></div>
                    </div>

                    <div className="counter">
                        <div className="counter-1 digit">
                            <div className="num">0</div>
                            <div className="num num1offset1">1</div>
                        </div>
                        <div className="counter-2 digit">
                            <div className="num">0</div>
                            <div className="num num1offset2">1</div>
                            <div className="num">2</div>
                            <div className="num">3</div>
                            <div className="num">4</div>
                            <div className="num">5</div>
                            <div className="num">6</div>
                            <div className="num">7</div>
                            <div className="num">8</div>
                            <div className="num">9</div>
                            <div className="num">0</div>
                        </div>
                        <div className="counter-3 digit">
                            <div className="num">0</div>
                            <div className="num">1</div>
                            <div className="num">2</div>
                            <div className="num">3</div>
                            <div className="num">4</div>
                            <div className="num">5</div>
                            <div className="num">6</div>
                            <div className="num">7</div>
                            <div className="num">8</div>
                            <div className="num">9</div>
                        </div>
                    </div>
                </div>

                <div className="content-container">
                    {children}
                </div> 
            </div>
        </div>
    );
}

export default Preloader;