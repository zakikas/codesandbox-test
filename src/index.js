/**
 * const, let等の変数宣言
 */
//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  // var変数は再宣言可能
//  var vali1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再現不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// //val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const で定義したオブジェクトはプロパティは変更可能
// const val4 = {
//   name: "Jane",
//   age: 60,
// };
// console.log(val4);
// val4.name = "Mary";
// val4.address = "Tokyo";
// console.log(val4);

// const で定義した配列はプロパティは変更可能
// const val5 = ['doc', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Jane";
// const age = 28;

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数の書き方
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// //returnをなくすことも可能
// const func3 = (num1, num2) =>  num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Jane",
//   age: 60,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["Jane", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "すずき"];
// const nameArr2 = nameArr.map((name) => {
//   if (name === "すずき") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(nameArr2);

/**
 * 三項演算子
 */
// const num = "1300";
// let formattedNum = "";
// if (typeof num === 'number') {
//   formattedNum = num.toLocaleString();
// } else {
//   formattedNum = '数値を入力してください';
// }
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(99, 2));
// console.log(checkSum(90, 2));

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1 or 2 is true.");
// }
// if (flag1 && flag2) {
//   console.log("1 and 2 is true.");
// }

// || は左側がfalseの時に評価され、評価値が返る
// null は　評価するとfalseになる
// const num = null;
// const fee = num || "未設定です";
// console.log(fee);

// && は左側がtrueの時に評価され、評価値が返る
const num2 = 100;
const fee2 = num2 && "何か設定されました";
const fee3 = "何か設定されました" && num2;
console.log(fee2);
console.log(fee3);
