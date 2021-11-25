function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign ({}, obj, { [key]: value });
}
    let employee = {name:'',
        streetAddress: '12 Broadway'
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj [key] = value
    return employee;
}
function deleteFromEmployeeByKey(obj, key, value) {
    return Object.assign({}, obj, { [key]: value});
}
function destructivelyDeleteFromEmployeeByKey (obj, key, value) {
    return Object.assign(obj, { [key]: value});
}