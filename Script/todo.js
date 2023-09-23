var hamburger = document.querySelector('.hamburger')
var navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})
if(localStorage.getItem('todoList')){
  var todoList =JSON.parse(localStorage.getItem('todoList'))
  showData(todoList)
}


function showData(data){
  // console.log(data)
  
  var tbody = document.getElementsByTagName('tbody')[0]
tbody.innerHTML = ''
    data.filter((val)=>  val.completed == false).forEach(callback);
    function callback(val){
  var tr = document.createElement('tr')
  tr.id = 'row'
  var td = document.createElement('td')
  var checkbox = document.createElement('span')
  checkbox.innerText = 'Completed'
  checkbox.style.color = 'green'
  checkbox.style.marginLeft = '10px'

  var deleteBtn = document.createElement('span')
  deleteBtn.innerText = 'Delete'
  deleteBtn.id = val.id
  deleteBtn.addEventListener('click',function(){deleteData(val.id)})
  var editBtn = document.createElement('span')
  editBtn.innerText = 'Edit'
  editBtn.style.color =  'blue'
  // editBtn.id = 'edit'
  editBtn.id = val.id
  // var promp = prompt("Edit your data...")

  editBtn.addEventListener('click',function(){addChanges(val.id)})
  

     checkbox.type = 'checkbox'
     checkbox.id = val.id
     checkbox.addEventListener('click',function(){completed(val.id)})
     td.append(checkbox,editBtn,deleteBtn)
    tr.innerHTML = `<td>${val.task}</td>
    <td>${val.quantity}</td>
    <td>${val.priority}</td>`
    tr.append(td)
    tbody.appendChild(tr)
  }
}


function completed(id){

  var todoList =JSON.parse(localStorage.getItem('todoList'))
var rows = document.getElementById('row')
  var res = todoList.map((val,ind) =>{
    if(id == val.id){
       val.completed = !val.completed
       
      }
      return val
    })
  // console.log(res)
  // console.log(todoList.completed)

  showData(todoList)
localStorage.setItem('todoList',JSON.stringify(res))
}


function deleteData(id){
  var todoList =JSON.parse(localStorage.getItem('todoList'))
  todoList.map((val,ind) =>{
    if(id == val.id){
        delete val
    } 
    
  })
  var filter = todoList.filter((val) =>{
    if(id != val.id){
       return val
    }
  })
  localStorage.setItem('todoList',JSON.stringify(filter))
}



  
  function addChanges(id){
    let editTask = prompt('Edit Task....')
    let editquantity = prompt('Edit Quantity....')
    let editpriority = prompt('Edit Priority....')

    var todoList =JSON.parse(localStorage.getItem('todoList'))
    var res = todoList.map((val,ind) =>{
      if(id == val.id){
      if(editTask || editpriority  || editquantity){
      if(editTask != null){

        val.task = editTask
      }
      if(editquantity != null){

        val.quantity = editquantity
      }if(editpriority != null){

        val.priority = editpriority
      }
      
      
  }else {

    return val
  } 
  
}
return val
  })

  localStorage.setItem('todoList',JSON.stringify(res))
  
  
}



