'use strict'

class PasswordGenerator {
    constructor(length, letters) { 
        this.length = length ? Number(length.replace(/[^-0-9]/,'')) :  32
        this.letters = letters || ''
        this.basicLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.basicNumericLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    }   
    
    generateLetters() {
        const password = []
        for (let i = 0; i < this.length; i++) {
            const idx = Math.floor(Math.random() * this.basicLetters.length)
            password.push(this.basicLetters[idx])
        }
        if(this.letters) {
            const lettersArr = this.letters.replace(/[^a-zA-Z]/,'').split('')
            for (let i = 0; i < lettersArr.length; i++) {
                const idx = Math.floor(Math.random() * this.length)
                password[idx] = lettersArr[i]
            }
        }
        return password.join('').toString()
    }
    generateNumericLetters() {
        const password = []
        for (let i = 0; i < this.length; i++) {
            const idx = Math.floor(Math.random() * this.basicNumericLetters.length)
            password.push(this.basicNumericLetters[idx])
        }
        return password.join('').toString()
    }
    
}