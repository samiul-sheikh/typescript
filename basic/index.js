"use strict";
// let myName = "Samiul";
// myName = '';
// let age : number;
// age = 12;
// let isLoggedIn: boolean = false;
// let studentId: number | string = 15304913;
// studentId = "sami-30491"
// define custom type
// type stringOrNumber = number | string;
// let studentId: stringOrNumber = 15304913;
// studentId = "sami-30491";
// type direction = "left" | "right" | "top" | "bottom";
// let puzzleDirection: direction = "left";
// Object
// let student = {
//   name: "sami",
//   id: 10,
//   dept: "cse"
// }
// define in parameter
// let student: { name: string; id: number } = {
//   name: "sami",
//   id: 10,
//   // dept: "cse"
// };
// custome type for multiple
// type StudentType = { name: string; id: number; dept: string };
// let student1: StudentType = {
//   name: "sami",
//   id: 10,
//   dept: "cse",
// };
// let student2: StudentType = {
//   name: "samiul",
//   id: 15,
//   dept: "se",
// };
// good practice
// interface Student {
//   name: string;
//   id: number;
//   // for optional
//   dept?: string;
// }
// let student1: Student = {
//   name: "sami",
//   id: 10,
//   dept: "cse",
// };
// let student2: Student = {
//   name: "samiul",
//   id: 15,
//   // dept: "se",
// };
// Array
// const numbers = [10, 20, 30, 40];
// const numbers: number[] = [10, 20, 30, 40];
// const numbers: any[] = [10, 20, 30, 40, "sami", true];
// const numbers: (number | string)[] = [10, 20, 30, 40, "sheikh"];
// const student: object[] = [
//   {
//     name: "sheikh",
//     id: 15,
//     dept: "se",
//   },
// ];
// interface used for object grouping
// interface Student {
//   name: string;
//   id: number;
//   // for optional
//   dept?: string;
// }
// const student: Student[] = [
//   {
//     name: "sheikh",
//     id: 15,
//     dept: "se",
//   },
//   {
//     name: "sheikh",
//     id: 15,
//     // dept: "se",
//   },
// ];
// functions
// const greeting = (): void => {
//   console.log("Hello....");
// };
// const greeting = (name: string)=> {
//   console.log(`Hello ${name}`);
// };
// greeting("sami");
// const result = (a: number, b: number): number => {
//   return a + b;
// };
// interface Student {
//   name: string;
//   id: number;
//   // for optional
//   dept?: string;
// }
// const user = (student: Student): void => {
//   console.log(
//     `Hello I'am ${student.name}, My ID is ${student.id} & my Dept is ${student.dept}`
//   );
// };
// user({
//   name: "Samiul Sheikh",
//   id: 15,
// });
// destructure object
// interface Student {
//   name: string;
//   id: number;
//   dept: string;
// }
// const user = ({ name, id, dept }: Student): void => {
//   console.log(`Hello I'am ${name}, My ID is ${id} & my Dept is ${dept}`);
// };
// user({
//   name: "Samiul Sheikh",
//   id: 15,
//   dept: "CSE",
// });
// const getArray = (arr: string[]): string[] => {
//   return arr;
// };
// getArray(["hello"]);
// Generic send type dynamically
// const getArray = <T>(arr: T[]): T[] => {
//   return arr;
// };
// getArray<string>(["hello"]);
// getArray<number>([1,1,1,1,]);
// const getArray = <T, T1>(arr: T[]): T[] => {
//   return arr;
// };
// getArray<string, number>(["hello"]);
// getArray<number | string>([1,1,1,1, 's']);
// enum
// enum Week {
//   Sat,
//   Sun,
//   Mon,
//   Tue,
//   Wed,
//   Thu,
//   Fri,
// }
// console.log(Week.Mon);
// print string type
// enum Week {
//   Sat = "SAT",
//   Sun = "SUN",
//   Mon = "MON",
//   Tue = "TUE",
//   Wed = "WED",
//   Thu = "THU",
//   Fri = "FRI",
// }
// console.log(Week.Mon);
