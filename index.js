// Write your solution in this file!
const employee ={
    name:"kabuu paul" ,
    streetAdress: "0045",
};

function updateEmployeeWithKeyAndValue(obj,key, value){

let  staff ={...obj};
staff[key] = value;
return staff;


return staff;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key ,value){

obj[key]= value;
return obj;

}

function deleteFromEmployeeByKey(obj, key){

let staff ={...obj};
delete staff[key];
return staff;
}


function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
return obj;
}