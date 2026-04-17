function User(email, password){
    this._email = email;
    this._passeord = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const chai = new User("shiv@google.com")
console.log(chai.email);
