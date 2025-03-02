"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
let ans = sumOfAge({ name: "yash", age: 23 }, { name: "nt", age: 20 });
console.log(ans);
let userProfile = {
    name: "yash",
    age: 12,
    // password:"yash" // this is not available now
};
let partialProf = {
    name: "yash",
    //we can exclude age here
};
const player1 = {
    rank: 122,
    name: "yash",
    password: "passs@123e"
};
//we can not update properties of object now -> it is like Object.freez();
player1.rank = 12;
const player2 = {
    name: "yash",
    password: "yashh",
    rank: 1443
};
player2.name = "lalage"; //can not do this
let gamers = {
    "gamer1": {
        rank: 123,
        id: 12,
        name: "yash"
    },
    "gamer2": {
        rank: 1234,
        id: 13,
        name: "bot"
    }
};
let gamersRecord = {
    "gamer1": {
        rank: 123,
        id: 12,
        name: "yash"
    },
    "gamer2": {
        rank: 1234,
        id: 13,
        name: "bot"
    }
};
let empEmil = {
    name: "yash",
    email: "yash@gmail.com",
    isActive: false,
};
let status2 = "pending";
let status3 = "active";
//generics
function identity(val) {
    return val;
}
let res1 = identity("yash"); // Explicit type
let res2 = identity(12); // Explicit type
let res3 = identity(true); // TypeScript infers `boolean`
//multiple type parameter
function pair(vla1, val2) {
    return [vla1, val2];
}
let res4 = pair("yash", 13);
console.log(res);
const numberBox = { value: 20 };
const stringBox = { value: "yash" };
//default generic
function defaultIdentity(val) {
    return val;
}
defaultIdentity("yash");
defaultIdentity(12);
