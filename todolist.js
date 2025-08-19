
function addvalue(){
    if(inputval===' '){
        alert('Please enter a value')
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputval.value 
        datalist.append(li)


        let i=document.createElement('i')
        i.className='fa-solid fa-trash'
        li.append(i)
    
    }
    store()
}


datalist.addEventListener('click',function(e){
    if(e.target.tagName==='I'){//in this elemnet it should the letter be caps lock
      e.target.parentElement.remove()
    }
    store();
})

function store(){
    localStorage.setItem('emp1',datalist.innerHTML)//any parameter can be passed it into it
}
function show(){
  datalist.innerHTML=localStorage.getItem('emp1')
}
show()



  


