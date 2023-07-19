import getType from "./getType"; // default로 가져온것
//import { random , user as won } from ""; // 이름을 지정하여 가져오기
//import * as R from ""; // ""파일 안에있는 모든것을 가져와서 R(내가 지정하는 이름)에 저장
import _ from "lodash";

console.log("hello world!");
console.log(123);
console.log(typeof "hello world!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof NaN);
console.log(getType(123));
console.log(getType("hello World!"));
console.log(getType(false));
console.log(getType({}));
console.log(getType([]));
console.log(getType(NaN));
console.log(getType(null));
console.log(getType(undefined));

function timeOut(cb) {
  setTimeout(() => {
    //console.log('3s');
    cb();
  }, 3000);
}

timeOut(() => {
  //console.log("끝!");
});

timeOut(() => {
  //console.log("끝12!");
});

function user(a, b) {
  this.firstName = a;
  this.lastName = b;
}

/* user.prototype.getFullName = () => {
  return `${this.firstName} ${this.lastName}`;
}; */ //화샇표 함수로는 불가능. 자신만의 this를 만들지 않는다.

user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
let abc = new user(123, 456);
console.log(abc.getFullName());

/* function MyName(a,b) { //prototype
  this.firstName = a;
  this.lastName = b;
};

MyName.prototype.FullName = function () { 
  return `${this.firstName} ${this.lastName}`;
}; */
class MyName {
  //class 문법
  constructor(a, b) {
    this.firstName = a;
    this.lastName = b;
  }
  FullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let qwerrt = new MyName("lim", "daewon");
console.log(qwerrt.FullName());

console.log("hello World!".slice(6, 11));
console.log("hello World!".replace("World", "WORLD"));
console.log("hello World!".replace(" World", ""));
const exTrim = "    Hello world  ";
console.log(exTrim.trim()); //앞뒤 공백 문자 제거
//console.log(Math.floor(Math.random() * 10));

const arrayFind = [5, 12, 8, 99, 44];

let found = arrayFind.find((e) => e > 10);
console.log(found);

const numbers = [1, 2, 3, 4];
const fruit = ["Apple", "Banana", "Cherry"];

// forEach는 배열데이터의 아이템의 갯수만큼 함수를 반복한다.
fruit.forEach(function (q, w, e) {
  /* 
  (item, index, array)
  매개변수 첫번째 자리 : 요소
  둘째자리 : fruit index 번호
  셋째자리 : 배열
  */
  console.log(q, w, e);
});

let filtersNum = numbers.filter((i) => i < 3);
console.log(filtersNum);

let mapNum = numbers.map((i) => i < 3);
console.log(mapNum);

let findFruit = fruit.find((i) => /^B/.test(i));
console.log(findFruit);

let findIndexFruit = fruit.findIndex((i) => /^B/.test(i));
console.log(findIndexFruit);

let includesNum = numbers.includes(3);
console.log(includesNum);

let includesFruits = fruit.includes("Bananana");
console.log(includesFruits);

/* 원본 수정 */
let pushNum = numbers.push(5);
console.log(numbers);

let unshiftNum = numbers.unshift(0);
console.log(numbers);

console.log(numbers.reverse());
console.log(fruit.reverse());
console.log(numbers);
console.log(fruit);

numbers.splice(2, 2);
console.log(numbers);

numbers.splice(2, 0, 999);
console.log(numbers);

//Object 정적 매소드
let userAge = {
  name: "won",
  age: "28",
};
let userEmail = {
  name: "won",
  email: "won@uzen.net",
  save: true,
};

console.log(`userAge : ${userAge}`);
console.log(`userEmail : ${userEmail}`);
const nfMerge = Object.assign(userAge, userEmail); //얕은복사 (shallow copy)
//const nfMerge = Object.assign({}, userAge, userEmail);
console.log(nfMerge);
console.log(userAge);

const keys = Object.keys(userAge); //['name', 'age', 'email']
console.log(keys);

const { name, age, email } = userAge;
console.log(name);

let addFruit = fruit.push("Orange");
console.log(fruit);
console.log(...fruit);
console.log(userEmail);

const cloneUser = _.cloneDeep(userEmail); //깊은복사 (deep copy)
console.log(cloneUser == userEmail);



//생성자 함수 정규식
//RegExp ('패턴', '플래그')
//const regexp = new RegExp('the', 'gi');

//리터럴방식
const regexp = /the/gi
// \기호 = escape문자 특정한 기능이 아닌 문자로 인식.
console.log(str.match(regexp));

console.log(regexp.test(str)); 

let a = str.replace(regexp, 'tiger');
console.log(a);

console.log(str.match(/\.$/gim))
console.log(str.match(/D$/gim))
console.log(str.match(/a........d/gim))
console.log(str.match(/http?/g))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.replace(/dog/, 'lion'));
console.log(str.match(/[0-9]/g))


console.log(str.match(/\w/g))
console.log(str.match(/\bt\w{1,}\b/g))

console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

const h = `  the hello   world   !`
console.log(h.match(/\s/g));
console.log(h.replace(/\s/g, ""));