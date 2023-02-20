const superheroes = require('superheroes');
const supervillains = require('supervillains')
let player = {
    name: "",
    weapon: "",
    health: 10
}
const weapons = ["skateboard", "deck of cards", "yukka plant"]

const superName = {
    hero: superheroes.random(),
    villain: supervillains.random()
}

module.exports = {
    player,
    weapons,
    superName
}
