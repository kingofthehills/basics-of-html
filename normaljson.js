const products=[
    {name:"product1",price:10,img:"pictures/lufy.jpeg"},
    {name:"product2",price:9,img:"pictures/zoro.jpeg"},
    {name:"product3",price:8,img:"pictures/sanji.jpeg"},
    {name:"product4",price:4,img:"picturers/luffy.jpeg"},
]

const data=products.filter((e)=>{
    return e.price<10
})
console.log(data)

//normal json calling in dom by manual data
body.innerHTML=data.map((element)=>{
    return(
       ` <tr>

        <td>${element.name}</td>
        <td>${element.price}</td>
        <td><img src=${element.img} width="100px" height="100px"/></td>
        </tr>`
        
    )
})