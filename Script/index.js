var hamburger = document.querySelector('.hamburger')
var navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})



var sub = document.getElementById('submit')
sub.addEventListener('click',submitData)
function submitData(e){

    e.preventDefault(e)
    // console.log(localStorage.getItem('todo'));

    if(localStorage.getItem('todoList') === null)
   { 
    var data = []
    localStorage.setItem('todoList',JSON.stringify(data))
}
var task = document.getElementById('name').value
var quan = document.getElementById('qty').value
var prio = document.getElementById('priority').value
// console.log(task,quan,prio)
var obj = {
    id:Math.round(Math.random() * 10000),
    task,//task:task
    quantity:quan,
    priority:prio,
    completed:false
}
// console.log(obj)
var res= []
var todoList = JSON.parse(localStorage.getItem('todoList')) || []
todoList.push(obj)
console.log(todoList)

localStorage.setItem('todoList',JSON.stringify(todoList))
document.getElementById('form').reset()
     
}