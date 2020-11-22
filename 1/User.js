'use strict'

class User {
    constructor() {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                ratting: 73             
            },
            {
                firstName: 'Jain',
                lastName: 'Matrik',
                ratting: 55           
            },
            {
                firstName: 'Dima',
                lastName: 'Barter',
                ratting: 99           
            },
            {
                firstName: 'Derek',
                lastName: 'Kronshtain',
                ratting: 85            
            },
        ]
    }
    addUser(fName, sName, ratting) {
        console.log(fName)
        this.users.push({
            firstName: fName,
            lastName: sName,
            ratting: ratting
        })
    }
    showAll() {
        return this.users.map(user => user.firstName + ' ' + user.lastName + ' ' + user.ratting + '\n')
    }
    sortNameByAlpha() {
        return this.users.sort((a, b) => {
            if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1
            if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1
            return 0
        })
    }
    sortByRatting(ratting) {
        const arr = this.users.sort((a, b) => a.ratting < b.ratting ? 1 : -1)

        switch (ratting) {
            case 'max': 
                return arr[0]
            case 'middle': 
                return arr[Math.floor(arr.length / 2)]
            case 'min': 
                return arr[arr.length -1]
            default:
                return arr
        }
    }
}
