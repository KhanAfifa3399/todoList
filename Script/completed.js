var hamburger = document.querySelector('.hamburger')
var navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})
if(localStorage.getItem('todoList')){
    var todoList =JSON.parse(localStorage.getItem('todoList'))
    todoList.filter((function(val){
        if(val.completed == true){
    var tbody = document.getElementsByTagName('tbody')[0]
    var tr = document.createElement('tr')
  
    tr.innerHTML = `<td>${val.task}</td>
    <td>${val.quantity}</td>
    <td>${val.priority}</td>`
    tbody.appendChild(tr)
        }
    }))
  }
  
  
  
  
  
  