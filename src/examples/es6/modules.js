//export.js

let func = a => a + a
let obj = {}
let x = 0

export { func, obj, x }

//import 
import { func, obj, x } from './export.js'

console.log(func(3), obj, x)