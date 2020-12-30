import React from "react";
import purplebg1 from '../images/purplebg1.png';

export default function Home() {
    return (
        <main>
            <img 
            src={purplebg1}
            alt="purple background"
            className="absolute bg-cover w-full h-full"
         
            />

            <section className="relative flex min-h-screen pt-12 lg:pt-33 px-8">
                <h1 className="text-white text-9xl font-bold cursive home-name">Lavender Irons, M.S.Ed.</h1>
            </section>
        </main>
    );
}