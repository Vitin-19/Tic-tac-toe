import { useState } from "react";
import { turnwithAI } from "./index.js";
import './css/style.css'

function Singleplayer(){
    return (
        <>
            <header>
                <h1>Tic Tac Toe</h1>
            </header>
            <main>
            <section className="turn">
                <h2 id="h2">Player <span id="number">1</span> turn</h2>
            </section>
            <table id="game">
                <tbody>
                    <tr className="Top">
                        <td id="space1" className="top left" onClick={() =>{ localStorage.setItem('place','space1');turnwithAI();}}></td>
                        <td id="space2" className="top" onClick={() =>{ localStorage.setItem('place','space2');turnwithAI();}}></td>
                        <td id="space3" className="top right" onClick={() =>{ localStorage.setItem('place','space3');turnwithAI();}}></td>
                    </tr>
                    <tr className="middle">
                        <td id="space4" className="left center" onClick={() =>{ localStorage.setItem('place','space4');turnwithAI();}}></td>
                        <td id="space5" className="center" onClick={() =>{ localStorage.setItem('place','space5');turnwithAI();}}></td>
                        <td id="space6" className="right center" onClick={() =>{ localStorage.setItem('place','space6');turnwithAI();}}></td>
                    </tr>
                    <tr className="Bottom">
                        <td id="space7" className="bottom left" onClick={() =>{ localStorage.setItem('place','space7');turnwithAI();}}></td>
                        <td id="space8" className="bottom" onClick={() =>{ localStorage.setItem('place','space8');turnwithAI();}}></td>
                        <td id="space9" className="bottom right" onClick={() =>{ localStorage.setItem('place','space9');turnwithAI();}}></td>
                    </tr>
                </tbody>
            </table>
            </main>
        </>
    )
}

export default Singleplayer