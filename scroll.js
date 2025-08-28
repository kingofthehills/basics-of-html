const sub=document.querySelector('.sub_main')
const next=document.getElementById('next')
const back=document.getElementById('back')


back.addEventListener('click',()=>{
    sub.scrollLeft-=800
})

next.addEventListener('click',()=>{
    sub.scrollLeft+=800

})
