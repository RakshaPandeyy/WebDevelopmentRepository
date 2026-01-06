import {add,subtract} from "./index.js";
import {fun} from "./index.js"

let a =2;
let b=10;
add(a,b);
fun(a,b);
//fun is not defined in index.js but used in index2 thus default function will run 

subtract(a,b);