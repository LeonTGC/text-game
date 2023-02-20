const superheroes = require('superheroes')
const { healthDecrease, randomDecision, checkWeapon, nameCheck, checkHealth } = require('./functions/functions')
const { name, selectWeapon, hillSubway, takeDrink, userDecision, useWeapon } = require('./functions/inq')
let { player, weapons, superName } = require('./stored/userItems')


const start = async () => {
    console.log('what name?')
    player.name = await name()
    console.log('hello', player.name)
    console.log('you are on a quests to survive, the world is differnt nuclear fallout didnt help an you have woken up from a fridge that somehow kept you alive for 60 years but you havnt aged a day...')
    userSelectWeapon()
}
const userSelectWeapon = async () => {
    console.log('you have to use a weapon to survive, lets see whats laying around...select a weapon')
    player.weapon = await selectWeapon(weapons)
    console.log('you have selected', player.weapon)
    hillOrSubway()
}
const hillOrSubway = async () => {
    console.log('you have managed to remember how a door works and have now ventured outside')
    console.log('you can see two routes...')
    let direction = await hillSubway()
    if(direction === 'hill'){
        console.log('you are going up the hill')
        dogEncounter()
    }else if(direction === 'subway'){
        console.log('subway, lost health')
        healthDecrease()
        dogEncounter()
    }else{
        console.log('didnt quite get that, hill or subway?')
        hillOrSubway()
    }
}
const dogEncounter = () => {
    console.log('you made it, but there is a pack of dogs and they arent very nice')
    console.log('they come at you with teeth and claw n that...one of them had a corkscrew...dont know how they are managing that')
    const result = randomDecision()
    if(result === 0){
        console.log('luckilly though you sort it out by throwing a bottle of wine at them')
        console.log('the one with the corkscrew was the leader, and go distracted and franticaly tried to open an already opened bottle...idiot')
        changeWeaponOption()
    }else if(result === 1){
        console.log('they surround you and with once synchronised BARK you get disorientated')
        console.log('and fall over...')
        console.log('and find a couple of toes nibbled off...great')
        healthDecrease()
        changeWeaponOption()
    }else {
        console.log('error')
        dogEncounter()
    }
}

const changeWeaponOption = async () => {
    console.log('you start to think...what if...and still have a chance to change your weapon...')
    console.log('what you thinking...?')
    console.log('select weapon of choice')
    player.weapon = await selectWeapon(weapons)
    console.log('you have selected', player.weapon)
    let result = checkWeapon(player.weapon) 
    if(result){
        console.log(`listen, you have chosen ${player.weapon}`)
        console.log(`and to be honest its quite commendable, so go on...take this shortcut`)
        healthChecks()
    }else if(!result){
        console.log('well well well, look at you, im sure you will be safe now')
        console.log('(sniggers uncontrollably)')
        offersDrink()
    }else{
        console.log('not valid')
        changeWeaponOption()
    }
}

const offersDrink = async () => {
    console.log('you come across a bunch of people that have body armour that was made out of used sharpies and plastic bottles')
    console.log("stranger: 'do you want a drink eh?'")
    let result = await takeDrink()
    if(result){
        console.log('you dont know these and the drink had poison in...obviously you loose health')
        healthDecrease()
        changeName()
    }else if(!result){
        console.log("of course you dont take it, some people would have said yes to that believe it or not")
        console.log("this is life of death...not a game")
        changeName()
    }else {
        console.log('error')
        offersDrink()
    }
}

const changeName = async () => {
    console.log("they start to discuss some things...you can't really make out what it is they are saying")
    console.log("some words you can get are 'hero'... 'villain'...?")
    console.log("one of them walks up to you")
    console.log("stranger: 'tell us your name'")
    console.log("this is clearly important...should I change my name?")
    console.log('change name?')
    let result = await userDecision()
    if(result){
        console.log('changing name...')
        player.name = await name()
        console.log(`hello... ${player.name}`)
        nameRoute()
    }else if(!result){
        console.log(`hello again ${player.name}`)
        nameRoute()
    }else {
        console.log('error')
        changeName()
    }
}

const nameRoute = () => {
    console.log(`stranger: 'we heard of a hero called ${superName.hero}'`)
    let checker = nameCheck()
    if(checker){
        console.log("stranger: 'it is you!'")
        heroRoute()
    }else if(!checker){
        console.log(`stranger: 'you're no hero, you are ${superName.villain} the villain!'`)
        villainRoute()
    }
    else{
        console.log('error')
        nameRoute()
    }
}

const heroRoute = async () => {
    console.log("stranger: 'can you help us, there is a beast over there we cannot be rid of'")
    console.log("they take you over to an old tesco trolley shed")
    console.log("inside you can see a rat, bigger than any of those dogs you saw before")
    console.log("you see next to it a metal barrel with a danger sign on")
    console.log("with some fluid seeping out...so grim, the smell knocks you back")
    healthDecrease()
    console.log("you going to fight?")
    let result = await useWeapon()
    if(result){
        if(player.weapon === 'skateboard'){
            console.log(`lost the fight ${superName.hero} looses health`)
            healthDecrease()
        }else{
            console.log(`${superName.hero} wins!`)
        }
    } else if (!result){
        if(player.weapon === 'deck of cards'){
            console.log(`you start to walk away but ${superName.hero} slips and looses health`)
            healthDecrease()
        }else{
            console.log(`${superName.hero} walks away`)
        }
    }
}

const villainRoute = () => {
    console.log(`stranger: '${superName.villain} is EVIL, move along!'`)
    console.log("you can't help but think you have gotten away with something here")
    healthChecks()
}

const healthChecks = () => {
    console.log("you keep walking and walking and see an old zoo")
    console.log("its now a haven, animals can talk and some humans living there too")
    console.log("in order to join them though you need to pass a health check")
    console.log("a parrot flies over with a scanner...and you wait...")
    console.log(`your health is ${player.health}`)
    let result = checkHealth()
    if(result) {
        console.log('well done, you can enter')
        winner()
    }else if(!result){
        console.log('you must take another test...')
        chance()
    }else{
        console.log('error')
        healthChecks()
    }
}

const chance = () => {
    console.log('feeling lucky? lets see')
    let result = randomDecision()
    if(result === 0){
        console.log('you loose')
    }else{
        winner()
    }
}

const winner = () => {
    console.log('congratulations')
    restart()
}

const restart = async () => {
    console.log("would you like to restart?")
    let result = await userDecision()
    if(result){
        start()
    }
    player = {
        name: "",
        weapon: "",
        health: 10
    }
}


start()