const { 
    randomDecision, 
    healthDecrease,
    healthIncrease, 
    checkWeapon, 
    nameCheck,
    checkSkateboard,
    checkHealth,
 } = require('../functions/functions')

const { player, superName } = require('../stored/userItems')

describe('randomDecision function tests', () => {
    let collection = []
    for(let i = 0; i < 20; i++){
        collection.push(randomDecision())
    }

    test('returns a number', () => {
        expect(typeof(randomDecision())).toBe('number')
    })
    test('does not return a string', () => {
        expect(typeof(randomDecision())).not.toBe('string')
    })
    test('collection array does not contain a string', () => {
        let res = collection.map(item => typeof item)
        expect(res).not.toContain('string')
    })
    test('collection array contains numbers', () => {
        let res = collection.map(item => {
            return typeof item === 'number' ? true : false
        })
        expect(res).toContain(true)
    })
    test('colletion array contains numbers 0 or 1', () => {
        let res = collection.map(item => item === 0 || item === 1 ? true : false)
        expect(res).not.toContain(false)
    })
})

describe('decrease and increase user health', () => {
   
    test('health decreases by 1 to 9', () => {
        healthDecrease()
        expect(player.health).toBe(9)
    })
    test('health decreases by 2, including previous test to 7', () => {
        healthDecrease()
        healthDecrease()
        expect(player.health).toBe(7)
    })
 
    test('health increases by 1 to 8', () => {
        healthIncrease()
        expect(player.health).toBe(8)
    })
    test('health increases by 2, including previous test to 10', () => {
        healthIncrease()
        healthIncrease()
        expect(player.health).toBe(10)
    })
    test('if player.health is 0, does not decrease below 0', () => {
        //player.health = 10
        let amount = 20
        while(amount > 0){
            healthDecrease()
            amount--
        }
        expect(player.health).not.toBeLessThan(0)
    })
    test('if player.health is 0, does not decrease below 0', () => {
        //player.health = 0
        let amount = 20
        while(amount > 0){
            healthIncrease()
            amount--
        }
        expect(player.health).toBeLessThan(11)
    })
    test('multiple function calls ends with player.health 8', () => {
        healthDecrease()
        healthDecrease()
        healthIncrease()
        healthDecrease()
        healthIncrease()
        healthDecrease()
        expect(player.health).toBe(8)
    })
})

describe("check weapon selected is plant", () => {
    test('checkWeapon returns true',  () => {
        player.weapon = 'yukka plant'
        expect(checkWeapon()).toBe(true)
    })
    test('checkWeapon returns false',  () => {
        player.weapon = 'skateboard'
        expect(checkWeapon()).toBe(false)
    })
    test('checkWeapon returns false',  () => {
        player.weapon = 'deck of cards'
        expect(checkWeapon()).toBe(false)
    })
})

describe('superhero or super villain', () => {
    // matches if the same letter, not duplicate values
    // eg 'adam' and 'aj' would match 'a' not 'aa'
    test('name has 1 matching letters return false', () => {
        player.name = 'adam'
        superName.hero = 'Ajack'
        expect(nameCheck()).toBe(false)
    })
    test('name has no matching letters return false', () => {
        player.name = 'bob'
        superName.hero = 'Avengers'
        expect(nameCheck()).toBe(false)
    })

    test('player name and superName have 2 matching letters return true', () => {
        player.name = 'cal'
        superName.hero = 'Ajack'
        expect(nameCheck()).toBe(true)
    })

    test('player name and superName have 3 matching letters return true', () => {
        player.name = 'kcal'
        superName.hero = 'Ajack'
        expect(nameCheck()).toBe(true)
    })

    test('Ignore casing, returns true with 2 matching uppercase letters', () => {
        player.name = 'CAL'
        superName.hero = 'Ajack'
        expect(nameCheck()).toBe(true)
    })
})

describe('Check if weapon is skateboard or deck of cards', () => {
    test('If weapon is skateboard return false', () => {
        player.weapon = 'skateboard'
        expect(checkSkateboard()).toBe(false)
    })
    test('If weapon is deck of cards return true', () => {
        player.weapon = 'deck of cards'
        expect(checkSkateboard()).toBe(true)
    })
})

describe('Check health', () => {
    test('returns true if health is 5', () => {
        player.health = 5
        expect(checkHealth()).toBe(true)
    })
    test('returns false if health is 4', () => {
        player.health = 4
        expect(checkHealth()).toBe(false)
    })
    test('returns true if health is 10', () => {
        player.health = 10
        expect(checkHealth()).toBe(true)
    })
    test('returns false if health is 0', () => {
        player.health = 0
        expect(checkHealth()).toBe(false)
    })
})


   
