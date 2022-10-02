let todos = document.getElementById("todos")
let inputs = document.querySelectorAll("input")




var xhttp = new XMLHttpRequest();        /*fetching data*/ 
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var output=""
        data.forEach(td => {
            let list = td.title
            let check = td.completed
            if (check === true) {check = "checked disabled"}
            else {check = "unchecked"}
            output +=`<input type="checkbox" name="checkbox" id="${list}" ${check}></input> <label for="${list}">${list}</label><br>`
        })
        todos.innerHTML = output
       

        var checkbox = document.getElementsByName("checkbox")
        var count =0
        checkbox.forEach(box =>{
            box.addEventListener('change', function(){
                counton(box.checked)
            })
        }) 
    }
        var count = 0
        let counton = function(tik){
            var promise = new Promise(function (resolve,reject){
                if(tik == true){
                    resolve()
                }else{
                    reject()
                }
            })
    
            promise
            .then(function(){
                count++
            })
            .then(function(){
                if(count===5){
                    console.log(count)
                    alert("congratulations!! you completed five task")
                }
            })
            .catch( function(){
                count--
            })
        }
        




};
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
                                                                                




