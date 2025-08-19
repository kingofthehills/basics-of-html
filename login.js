form.addEventListener('click',e=>{
    e.preventDefault()
    validInputs()
})

const setError=(element,message)=>{
    const inputControls=element.parentElement
    const errorDisplay=inputControls.querySelector('.error')
    errorDisplay.innerText=message
}

const setSuccess=(element)=>{

        const inputControls=element.parentElement
        const errorDisplay=inputControls.querySelector('.error')
        errorDisplay.innerText=""   
}

const emailValid=(e)=>{
    const res=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return res.test(String(e).toLowerCase())

}


const validInputs=()=>{
    const userNamevalue=username.value
    const userEmailvalue=useremail.value
    const userPasswordvalue=userpassword.value
    const userCnfPasswordvalue=userconfrimpassword.value

    
    if(userNamevalue===''){
        setError(username,"Enter userName required")

    }else{
        setSuccess(username)
    }

    if(userEmailvalue===''){
        setError(useremail,"Enter email required")

    }else if(!emailValid(userEmailvalue)){
        setError(useremail,"Enter valid email required")
    }
    else{
        setSuccess(useremail)
    }


    if(userPasswordvalue===''){
        setError(userpassword,"Enter password required")

    }else if(userPasswordvalue.length<6){
        setError(userpassword,"password must be 6 char")

    }
    else{
        setSuccess(userpassword)
    }

    if(userCnfPasswordvalue===''){
        setError(userconfrimpassword,"confrim password ")

    }else if(userCnfPasswordvalue!==userPasswordvalue){
        setError(userconfrimpassword,"password miss match")

    }
    else{
        setSuccess(userconfrimpassword)
    }
if(userCnfPasswordvalue==userPasswordvalue){
    if(userNamevalue&&userEmailvalue&&userPasswordvalue&&userCnfPasswordvalue){
        
        appendRowTable(userNamevalue,userEmailvalue,userPasswordvalue,userCnfPasswordvalue)
    }
}
}
const appendRowTable=(userName,userEmail,userPassword,userConfrimPassword)=>{
    const tableBody=document.getElementById('root')
    const newRow=document.createElement('tr')
    newRow.innerHTML=`
                <td>${userName}</td>
                <td>${userEmail}</td>
                <td>${userPassword}</td>
                <td>${userConfrimPassword}</td>
               <td><button class="btn" onclick="delRow(this)">del</button></td>

               `
                tableBody.append(newRow)
}
function delRow(i){
     i.closest('tr').remove()
    }
    
pdfForm.addEventListener('click',function(){
    const{jsPDF}=window.jspdf
    const doc=new jsPDF()
    const table=document.querySelector('.tbl')
    doc.autoTable({
        html:table,
        headStyles:{fillColor:[255,0,0]}
    })
    const fileName='table.pdf'
    doc.save(fileName)
})
/*pdfForm.addEventListener('click',function(){
    const{jsPDF}=window.jspdf
    const doc=new jsPDF()
    const table=document.querySelector('.tbl')
    doc.autoTable({
        html:table,
        headStyles:{fillColor:[255,0,0]}
    })
    const fileName='table.pdf'
    doc.save(fileName)
})*/




