let { player, superName } = require('../stored/userItems')

const randomDecision = () => {
    return Math.round(Math.random())
}

const healthDecrease = () => {
     if(player.health === 0){
        return player.health
     }else{
        return player.health--
     }
}

const healthIncrease = () => {
    if(player.health === 10){
        return player.health
    }else{
        return player.health++
    }
}

const checkWeapon = (weapon) => {
    console.log(weapon)
    if(weapon === "yukka plant"){
        return true
    }else{
        return false
    }
}
const checkSkateboard = () => {
    if(player.weapon === 'skateboard'){
        return false
    }else if(player.weapon === 'deck of cards'){
        return true
    }else {
        return true
    }
}
const nameCheck = () => {
    let userName = [...new Set(player.name.toLowerCase().split(''))]
    let superArr = [...new Set(superName.hero.toLowerCase().split(''))]
    let match = 0
    let arr = []
    for(let i = 0; i < userName.length; i++){
        if(superArr.includes(userName[i])){
            match++
            arr.push(userName[i])
        }
    }

    return match > 1 ? true : false
}

const checkHealth = () => {
    return player.health >= 5 ? true : false
}

module.exports = {
    randomDecision,
    healthDecrease,
    healthIncrease,
    checkWeapon,
    nameCheck,
    checkSkateboard,
    checkHealth
}