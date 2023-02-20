const inquirer = require('inquirer')


const name = async () => {
    //res 
    const { userInput } = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'what is your name?'
    })
    if(!userInput.match(/^[a-zA-Z]+/g)){
        return 'use letters only'
    }else {
        return userInput
    }
}
const selectWeapon = async (weapons) => {
    const { weaponChoice } = await inquirer.prompt({
        type: 'list',
        name: 'weaponChoice',
        message: 'choose your weapon',
        choices: weapons.map(weapon => weapon)
    })
    return weaponChoice
}
const getFood = async () => {
    const { option } = await inquirer.prompt({
        type: 'confirm',
        name: 'option',
        message: 'go to get food?'
    })
    if(option){
        return true
    }else{
        return false
    }
}

const hillSubway = async () => {
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'which direction will you take? the hill, or the subway?',
        choices: ['hill', 'subway']
    })
    return option
}

const takeDrink = async () => {
    const { option } = await inquirer.prompt({
        type: 'confirm',
        name: 'option',
        message: 'do you quench your thirst?'
    })
    if(option){
        return true
    } else {
        return false
    }
}

const useWeapon = async () => {
    const { option } = await inquirer.prompt({
        type: 'confirm',
        name: 'option',
        message: 'are you going to use the weapon?'
    })
    if(option){
        return true
    } else {
        return false
    }
}

const userDecision = async () => {
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'what is your choice, YES or NO?',
        choices: ['yes', 'no']
    })
    return option === 'yes' ? true : false
}


module.exports = {
    name,
    selectWeapon,
    getFood,
    hillSubway,
    takeDrink,
    useWeapon,
    userDecision
}