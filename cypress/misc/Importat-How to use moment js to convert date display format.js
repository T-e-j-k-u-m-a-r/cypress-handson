const moment = require("moment");

let from_date = moment().add(0, 'd').format()
let to_date = moment().add(7, 'd').format()

let from_date_data = from_date.split('/').join('-').substring(0, 10);
let to_date_data = to_date.split('/').join('-').substring(0, 10);

console.log(from_date_data);
console.log(to_date_data);