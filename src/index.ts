//Typescript untility type which supports genric.
//Used to transform types.
interface UserTemp {
    name: string;
    age: number;
}

function sumOfAge(user1: UserTemp, user2: UserTemp) {
    return user1.age + user2.age;
}

let ans = sumOfAge({ name: "yash", age: 23 }, { name: "nt", age: 20 });
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

const player1: player = {
    rank: 122,
    name: "yash",
    password: "passs@123e"
}

//we can not update properties of object now -> it is like Object.freez();
// player1.rank = 12;

//another syntax for Readonly
type player2 = {
    rank: number;
    name: string;
    password: string
}

const player2: Readonly<player2> = {
    name: "yash",
    password: "yashh",
    rank: 1443
}

// player2.name = "lalage";//can not do this

// 4->Record
type Gamer = {
    rank: number;
    id: number;
    name: string
}

type Gamers = {
    [key: string]: Gamer
}

let gamers: Gamers = {
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
}
//insted of above approch we can do this same with records with more cleaner way

type GamersRecord = Record<string, Gamer>

let gamersRecord: GamersRecord = {
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
}


//omit
interface Employee {
    empid: number;
    name: string;
    email: string;
    isActive: boolean
}

let empEmil: Omit<Employee, 'empid'> = {
    name: "yash",
    email: "yash@gmail.com",
    isActive: false,
}

//Exclude -> We can use Exclude<> with types only for interface we can use omit
type Status2 = "active" | "inactive" | "pending";

// let status2: Exclude<Status2, 'pending'> = "pending";

let status3: Exclude<Status2, 'pending'> = "active";

//generics
function identity<T>(val: T): T {
    return val;
}

let res1 = identity<string>("yash"); // Explicit type

let res2 = identity<number>(12); // Explicit type

let res3 = identity(true);// TypeScript infers `boolean`

//multiple type parameter
function pair<T,U>(vla1:T,val2:U):[T,U]{
    return [vla1,val2]
}

let res4 = pair<string,number>("yash",13)
// console.log(res);

//generics in interface

interface Box<T>{
    value:T
}

const numberBox: Box<number> = {value:20};

const stringBox: Box<string> = {value:"yash"};

//default generic
function defaultIdentity<T = string>(val:T):T{
    return val;
}

defaultIdentity("yash");
defaultIdentity<number>(12);

//map
type MapUser = {
    name:string,
    age:number
}

const mapUsers = new Map<string,MapUser>();

mapUsers.set("user1",{name:"yash",age:12});
mapUsers.set("user2",{name:"yash",age:13});

console.log("map started-------------------------");
console.log(mapUsers);
console.log(mapUsers.get("user1"));

// mapUsers.delete("user2");

mapUsers.forEach((value,key)=>{
    console.log(key);
    console.log(value);
})

//conver map into array
let arrMapUsers =  Array.from(mapUsers);
//now we can perform fiter and map on it
console.log(arrMapUsers);
//arrMapUsers.map()
//arrMapUsers.filter()


