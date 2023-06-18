let employee = {};
function updateEmployeeWithKeyAndValue(employee,key,value){
  //let new_employee = {...employee}
  let new_employee = Object.assign({}, employee)
  new_employee[key]=value;
  return new_employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}


function deleteFromEmployeeByKey(employee, key){
  let new_employee = {...employee}
  delete new_employee[key]
  return new_employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee
}

