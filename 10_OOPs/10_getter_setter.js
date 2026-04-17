class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shivpal`
    }

    set password(value){
        this._password = value
    }
}

const shivpal = new User("shiv@google.com", "abc")
console.log(shivpal.email);
