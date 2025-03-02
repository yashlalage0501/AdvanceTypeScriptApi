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
const player2 = {
    name: "yash",
    password: "yashh",
    rank: 1443
};
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
// let status2: Exclude<Status2, 'pending'> = "pending";
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
const numberBox = { value: 20 };
const stringBox = { value: "yash" };
//default generic
function defaultIdentity(val) {
    return val;
}
defaultIdentity("yash");
defaultIdentity(12);
const mapUsers = new Map();
mapUsers.set("user1", { name: "yash", age: 12 });
mapUsers.set("user2", { name: "yash", age: 13 });
console.log("map started-------------------------");
console.log(mapUsers);
console.log(mapUsers.get("user1"));
// mapUsers.delete("user2");
mapUsers.forEach((value, key) => {
    console.log(key);
    console.log(value);
});
//conver map into array
let arrMapUsers = Array.from(mapUsers);
//now we can perform fiter and map on it
console.log(arrMapUsers);
//arrMapUsers.map()
//arrMapUsers.filter()
