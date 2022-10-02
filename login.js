let userName = document.querySelector("#username")
let passWord = document.querySelector("#password")
const user = "admin"
const pass = "12345"

function show(){
    alert("Credentials are incorrect")
}
function validate(callback){
    if(userName.value === "admin" && passWord.value === "12345"){
    return true
    }else{
     callback()
     return false
    }
}