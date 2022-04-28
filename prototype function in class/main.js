
// prototype classes  in javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
   
}

User.prototype.login=function(){
        console.log('user is logged in');
}

user1=new User('danis','email');

console.log(user1);