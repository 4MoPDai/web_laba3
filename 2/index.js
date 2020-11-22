'use strict'

// Task I

const p = (tagName, options) => {
    let wrapper = document.getElementById('wrapper')
    if (!wrapper) {
        wrapper = document.createElement('div')
        wrapper.id = 'wrapper'
        document.body.appendChild(wrapper)
    }
    const tag = document.createElement(tagName)
    if (options) {
        options.textContent && (tag.textContent = options.textContent)
        options.href && tag.setAttribute('href', options.href)
        wrapper.appendChild(tag)

        if (options.id) {
            options.id && (tag.id = options.id)
            document.body.appendChild(tag)
            wrapper
                .childNodes
                .forEach(item =>
                    tag.appendChild(item.cloneNode(true))
                )
            document.body.removeChild(wrapper)
        }
    }
}


// Task II
const values = {}
let errors = []

const User = {
    email: 'mail@mail.com',
    password: '123123'
}



const validate = (name, value) => {
    return new Promise((resolve, reject) => {
        try {
            switch (name) {
                case 'login':
                    const REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    if (REGEXP.test(value)) {
                        resolve(values[name] = value)
                    }
                    reject(errors.push('Invalid E-mail'))
                case 'password':
                    if (value) {
                        resolve(values[name] = value)
                    }

                    reject(errors.push('Invalid password'))
                default:
                    reject(false)
            }
        } catch (err) {
            console.log(err)
        }

    })
}

const auth = (values) => {
    errors = []
    if (values.login === User.email) {
        errors = []
        return values.password === User.password ?
            setTimeout(() => p('div', { id: 'header' }, [
                p('div', { textContent: 'Привіт!' }),
                p('div', { textContent: ' Базовий приклад SPA без використання сторонніх бібліотек.' }),
                p('a', { href: '#', textContent: 'Перейти на привітання' }),
                p('a', { href: '#', textContent: 'Перейти назад' })
            ]), 500) :
            errors.push('Invalid password')
    }
    return errors.push('Invalid E-Mail')
}

const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    validate(name, value)
}

const handleSubmit = () => {
    auth(values), 10000
    if (errors) {
        errorMessage.textContent = errors[0]
    }
}

const activeQuestion = [
    'Are u here?',
    'Hey? Are u here?',
    "We wait u!!",
    "Write some!",
]


const handleActiveInput = (type) => {
    switch (type) {
        case 'focus':  
            return setInterval(() => {
                askMessage.textContent = activeQuestion[Math.floor(Math.random() * activeQuestion.length)]
            }, 3000)
        case 'blur':  
            return askMessage.textContent = ''
        default: 
            return askMessage.textContent = ''
    }

}

loginInput.onchange = e => handleChange(e)
passwordInput.onchange = e => handleChange(e)

loginInput.onfocus = () => handleActiveInput('focus')
loginInput.onblur = () => handleActiveInput('blur')
passwordInput.onfocus = () => handleActiveInput('focus')
passwordInput.onblur = () => handleActiveInput('blur')


authForm.onsubmit = (e) => {
    e.preventDefault()
    loginInput.value = ''
    passwordInput.value = ''
    handleSubmit()
}