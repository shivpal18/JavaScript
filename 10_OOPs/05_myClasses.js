//  ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUSername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("Shivpal", "shiv@google.com", "123")
console.log(user.encryptPassword());
console.log(user.changeUSername());

// behind the scene

function User (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newuser = new User("Shiv", "shivpal@google.com", "123")
console.log(newuser.encryptPassword());
console.log(newuser.changeUsername());