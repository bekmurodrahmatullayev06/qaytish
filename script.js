// class user {
//   constructor(id, name, age, email) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
// }

//     const users1 = new user(1, "muqsin", 20, "muqs1@example.com", )
//     const users2 = new user(2, "begzod", 21, "begzod@example.com", )
//     const users3 = new user(3, "bobir", 25, "bobir@example.com", )



// console.log(users1);
// console.log(users2);
// console.log(users3);
    


// const users ={
//     id: 1,
//     name: "muqsin",
//     age: 20,
//     email: "muqs1@example.com"
// }

// console.log(users);

class User{
    constructor(id, name, age, email){
        this.id = id;
        this.name =name ;
        this.age = age;
        this.email = email;
    }
}

const user1 = new User(1, "muqsin", 20, "muqs1@example.com");
const user2 = new User(2, "begzod", 21, "begzod@example.com");
const user3 = new User(3, "bobir", 25, "bobir@example.com");

console.log(user1);
console.log(user2);
console.log(user3);