const employee={name:'prince'}
function updateEmployeeWithKeyAndValue(employee,key,value){return {...employee,[key]:value,}}
//console.log((updateEmployeeWithKeyAndValue( employee,'streetAdress','11 Broadway street')))
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){employee[key]=value
    
    return employee;}
    
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,))
function deleteFromEmployeeByKey (employee,key){ const newObj= [...employee[key]]; delete newObj.key; return newObj}
function destructivelyDeleteFromEmployeeByKey(employee,key){const newObj= delete employee[key];return newObj}
 
   console.log( deleteFromEmployeeByKey(employee,'name'))
   //console.log(newObj)
    