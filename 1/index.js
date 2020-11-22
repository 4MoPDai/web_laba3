'use strict'

// TASK I
const user = new User()

const showUsers = () => {
    return user.showAll().map(user => {   
        const el = document.createElement('el')
        result.appendChild(el)
        el.textContent += user
    })
}
const showUser = (user) => {
    if(!user) console.log('User is not found')
    const el = document.createElement('el')
    result.appendChild(el)
    el.textContent = `${user.firstName} ${user.lastName} ${user.ratting}` 
}
showUsers()

addUserBtn.addEventListener('click', () => {
    user.addUser(fName.value, sName.value, ratting.value)
    result.textContent = ''
    showUsers()
    
})
showAllBtn.addEventListener('click', () => {
    result.textContent = ''
    showUsers()
})
sortByAlpha.addEventListener('click', () => {
    result.textContent = ''
    user.sortNameByAlpha()
    showUsers()
})
sortByRatting.addEventListener('click', () => {
    result.textContent = ''
    user.sortByRatting()
    showUsers()
})

showMaxRatting.addEventListener('click', () => {
    result.textContent = ''
    const res = user.sortByRatting('max')
    console.log(res)
    showUser(res)
    
})
showMiddleRatting.addEventListener('click', () => {
    result.textContent = ''
    const res = user.sortByRatting('middle')
    showUser(res)
})
showMinRatting.addEventListener('click', () => {
    result.textContent = ''
    const res = user.sortByRatting('min')
    showUser(res)
})



// TASK II

const userStatic = new User()

userStatic.showAllWithDiference = (arr) => {
    arr.map(user => {   
        console.log(user)
        const el = document.createElement('el')
        result.appendChild(el)
        el.textContent += `${user.firstName} ${user.lastName} ${user.ratting} (${user.rate})` 
    })
}
showDifferenceRatting.addEventListener('click', () => {
    result.textContent = ''
    const max = user.sortByRatting('max')
    userStatic.users.map(user => user.rate = max.ratting - user.ratting)
    userStatic.showAllWithDiference(userStatic.users)
})



// TASK III

// TASK 3 / 1
const generator = new PasswordGenerator(lengthPass.value, letters.value)  // length|number, letters|string

password.textContent = 'Click to generate password'
message.textContent = 'Default  length is 32 letters without Numeric'


const changeToGaneratePassword = (generator) => {
    if (withNum.checked) {
        return password.textContent = generator.generateNumericLetters()
    }

    if(letters.value.replace(/[^-0-1]/g,'') == true && !withNum.checked){
        message.textContent = 'If u wanna use numbers in your password, check this config!'
    } else {
        message.textContent = 'We generate new password with only letters'
    }
    return password.textContent = generator.generateLetters()
}

const PromisePassword = () => new Promise((resolve, reject) => {
    try {
        resolve(changeToGaneratePassword(generator))
    } catch (error) {
        reject(error)
    }
})


const passwordsArr = (count) => {
    const passwords = []
    console.time('promise.passwords')
    for (let i = 0; i < count; i++) {
        passwords.push(PromisePassword())
    }
    console.timeEnd('promise.passwords')

    return passwords
    
} 
console.log(changeToGaneratePassword(generator))

const AsyncPasswords = async (count) => {
    try {
        const passwords = []
        console.time('async.passwords')
        for (let i = 0; i < count; i++) {
            passwords.push( await changeToGaneratePassword(generator))
            console.log(await changeToGaneratePassword(generator))
        }
        console.timeEnd('async.passwords')
        return passwords
    } catch (error) {
        console.error(error)
    }
}

const check10PromisePasswords = () => {
    return Promise.all([...passwordsArr(10)])
            .then((passwords) => passwords.map(password => console.log(password)))
            .catch((err) => console.error(err))
}



AsyncPasswords(10)
generate.addEventListener('click', () => {
    setTimeout(() => PromisePassword(), 500)
})





