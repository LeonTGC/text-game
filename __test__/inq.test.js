let { name, selectWeapon, getFood, hillSubway, takeDrink, useWeapon, userDecision } = require('../functions/inq')
const inquirer = require('inquirer')
jest.mock('inquirer')

describe('name function test', () => {
    test('user input with bob', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: 'bob' })
        
        await expect(name()).resolves.toEqual('bob')
    })
    test('user input with 123 should return error message', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '123' })

        await expect(name()).resolves.toEqual('use letters only')
    })
    test('user with a symbol in should return error message', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '!bob*&'})
  
        await expect(name()).resolves.toEqual('use letters only')
    })
})

describe('weaponChoice function test', () => {
    test('weapon choice user selects skateboard', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'skateboard' })
        
        await expect(selectWeapon(['skateboard', 'yukka plant', 'deck of cards'])).resolves.toEqual('skateboard')
    })

    test('weapon choice user selects yukka plant', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'yukka plant' })
        
        await expect(selectWeapon(['skateboard', 'yukka plant', 'deck of cards'])).resolves.toEqual('yukka plant')
    })

    test('weapon choice user selects deck of cards', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'deck of cards' })
        
        await expect(selectWeapon(['skateboard', 'yukka plant', 'deck of cards'])).resolves.toEqual('deck of cards')
    })

    test('weapon choice random user selection', async () => {
        expect.assertions(1)
        let weaponChoices = ['skateboard', 'yukka plant', 'deck of cards']
        let wrong = ['bees', 'bad drink', 'rotten toe']
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: weaponChoices[Math.floor(Math.random() * 3)] })
        let selected = await selectWeapon(weaponChoices)
        await expect(wrong).not.toContain(selected)
        // await expect(selectWeapon(weaponChoices)).resolves.toBe('skateboard')
    })
})

describe('getFood functions test', () => {
    test('get food returns boolean true', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: true })
        
        await expect(getFood()).resolves.toEqual(true)
    })

    test('get food returns boolean false', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: false })
        
        await expect(getFood()).resolves.toBeFalsy()
    })
    
    test('get food dont not return string boolean', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: true })
        
        await expect(getFood()).resolves.not.toStrictEqual('true')
    })
})

describe('hillSubway function test', () => {
    test('option returned is hill', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: 'hill' })
        
        await expect(hillSubway()).resolves.toEqual('hill')
    })
    test('option returned is hill', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: 'subway' })
        
        await expect(hillSubway()).resolves.toStrictEqual('subway')
    })
    
})

describe('takeDrink function test', () => {
    test('option returned is true', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: true })
        
        await expect(takeDrink()).resolves.toBeTruthy()
    })
    test('option returned is false', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: false })
        
        await expect(takeDrink()).resolves.toBeFalsy()
    })
    test('option returned is false and boolean', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: false })
        
        await expect(takeDrink()).resolves.toStrictEqual(false)
    })
})

describe('use weapon function', () => {
    test('useWeapon returned is true and boolean', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: true })
        
        await expect(useWeapon()).resolves.toStrictEqual(true)
    })
    test('useWeapon returned is false and boolean', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: false })
        
        await expect(useWeapon()).resolves.toStrictEqual(false)
    })
})

describe('User decision function',  () => {
    test('userDecision returns true when option is string yes', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: 'yes' })

        await expect(userDecision()).resolves.toBe(true)
    })
    test('userDecision returns truthy when option is string yes', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: 'yes' })

        await expect(userDecision()).resolves.toBeTruthy()
    })
    test('userDecision returns false when option is string no', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: 'no' })

        await expect(userDecision()).resolves.toBe(false)
    })
    test('userDecision returns falsy when option is string no', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: 'no' })

        await expect(userDecision()).resolves.toBeFalsy()
    })
})
