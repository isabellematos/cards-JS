"use strict"

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'Spider Man - Peters relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'Captain America - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]


const criarContainer = (items) => {
    const ul = document.querySelector('ul')
    const div = document.createElement('div')
    div.classList.add('items')
    let separar = items.split('-')
    div.innerHTML = `
        <h2>${separar[0]}</h2>
            <div class="text">${separar[1]}</div>
    `
    ul.appendChild(div)
}
herois.forEach(criarContainer)
