interface UserTemp {
    name: string;
    age: number;
}

function sumOfAge(user1: UserTemp, user2: UserTemp) {
    return user1.age + user2.age;
}

let ans = sumOfAge({name:"yash",age:23},{name:"nt",age:20});
console.log(ans);

interface User {
    name: string;
    age: number;
    email: string;
    password: string;
}

//1->Pick 
type UserProfinle = Pick<User, 'name' | 'age'>;

let userProfile: UserProfinle = {
    name: "yash",
    age: 12,
    // password:"yash" // this is not available now
}

//2->Partial
type partialProfile = Partial<UserProfinle>;

let partialProf: partialProfile = {
    name: "yash",
    //we can exclude age here
}

//3->readonly
type player = {
    readonly rank: number,
    readonly name: string,
    readonly password: string,
}

const player1:player = {
    rank:122,
    name:"yash",
    password:"passs@123e"
}

//we can not update properties of object now -> it is like Object.freez();
player1.rank = 12;

//another syntax for Readonly
type player2 = {
    rank:number;
    name:string;
    password:string
}

const player2:Readonly<player2> = {
    name:"yash",
    password:"yashh",
    rank:1443
}

player2.name = "lalage";//can not do this

// 4->Record
type Gamer = {
    rank:number;
    id:number;
    name:string
}

type Gamers = {
    [key:string]:Gamer
}

let gamers:Gamers = {
    "gamer1":{
        rank:123,
        id:12,
        name:"yash"
    },
    "gamer2":{
        rank:1234,
        id:13,
        name:"bot"
    }
}
//insted of above approch we can do this same with records with more cleaner way

type GamersRecord = Record<string,Gamer>

 let gamersRecord:GamersRecord = {
    "gamer1":{
        rank:123,
        id:12,
        name:"yash"
    },
    "gamer2":{
        rank:1234,
        id:13,
        name:"bot"
    }
 }



