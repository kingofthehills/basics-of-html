





fetch('https://fakestoreapi.com/products')
.then(data=>data.json())//helps to convert data into json
.then(data=>{
    body.innerHTML=data.map((element)=>{
        return(
            `
            <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.price}</td>
            <td>${element.category}</td>
            <td>
            <img src="${element.image}" width="50px" height="50px"/>
            </td>
            <td>${element.rating.count}</td>
            `
        )
    }).join("")
})
