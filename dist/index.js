"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
let ans = sumOfAge({ name: "yash", age: 23 }, { name: "nt", age: 20 });
console.log(ans);
