document.addEventListener('DOMContentLoaded',function(){
let cars=[
    {id:1,brand:"Audi",image:"pictures/r8.jpeg",qty:2,price:20},
    {id:2,brand:"porche",image:"pictures/porche.jpeg",qty:5,price:88},
    {id:3,brand:"bentley",image:"pictures/bentley.jpeg",qty:1,price:47},
    {id:4,brand:"mustang",image:"pictures/mustang.jpeg",qty:2,price:20},
    {id:5,brand:"rubicorn",image:"pictures/rubicorn.jpeg",qty:3,price:20},
    {id:6,brand:"bmw",image:"pictures/m4.jpeg",qty:7,price:20},
]
function showCars(){
    const root=document.getElementById('root')
    const searchTerm=document.getElementById('searchvalue').value.toLowerCase()
    const filterCars=cars.filter(car=>car.brand.toLowerCase().includes(searchTerm))
    root.innerHTML=filterCars.map((element,index)=>{
      return(
        `
        <tr>
        <td>${element.id}</td>
        <td>${element.brand}</td>
        <td><img src='${element.image}' width="50px" height="50px"/></td>
        <td>
        <i class="fa-solid fa-minus" data-index='${index}' data-action="decrement"></i>
        ${element.qty}
        <i class="fa-solid fa-plus" data-index='${index}' data-action="increment"></i>
        </td>
        <td>&#8377;${element.price.toFixed(2)}</td>
        <td>&#8377;${(element.qty*element.price).toFixed(2)}</td>
        <td><i class="fa-solid fa-trash text-danger" data-index='${index}' data-action="delete"></i></td>
        <td><i class="fa-solid fa-pen-to-square" data-index='${index}' data-action="edit"></i></td>
  
        </tr>
        `
      )
    }).join('')
 
    CalgarndTotal(filterCars)
    
  }
  showCars()
  function CalgarndTotal(filterCars){
    const garndTotal=cars.reduce((total,car)=>total+(car.price*car.qty),0)
    document.getElementById('grandtotal').innerHTML=`&#8377;${garndTotal.toFixed(2)}`
  }
  function addCar(brand,image,price,qty){
    const newCar={
      id:cars.length?cars[cars.length-1].id+1:0,
      brand,
      image,
      price:parseFloat(price),
      qty:parseInt(qty)
    }
    cars.push(newCar)
    showCars()
  
  }
  
 
  
  document.getElementById('root').addEventListener('click',function(evnt){
    const target=evnt.target
    const index=target.dataset.index
    const action=target.dataset.action
  
    if(action==='increment'){
      cars[index].qty++
    }else if(action === 'decrement' && cars[index].qty >0){
      cars[index].qty--
    }else if(action==='delete'){
      cars.splice(index,1) 
    }
    else if(action==='edit'){
      const car=cars[index]
      document.getElementById('editid').value=car.id
      document.getElementById('editbrand').value=car.brand
      document.getElementById('editimage').value=car.image
      document.getElementById('editprice').value=car.price
      document.getElementById('editqty').value=car.qty
    }
  
  
   showCars()
  })
  document.getElementById('searchvalue').addEventListener('input',function(){
    showCars()
  })


  function updateCar(id,brand,image,price,qty){
    const car=cars.find(car=>car.id===parseInt(id))
    if(car){
      car.brand=brand
      car.image=image
      car.price=parseFloat(price)
      car.qty=parseInt(qty)
      showCars()
      
    }
  
  }
  document.getElementById('editcarform').addEventListener('submit',function(event){
    event.preventDefault()
    const eid=document.getElementById('editid').value
    const ebrand=document.getElementById('editbrand').value
    const eimage=document.getElementById('editimage').value
    const eprice=document.getElementById('editprice').value
    const eqty=document.getElementById('editqty').value


    if(eid&&ebrand&&eimage&&eprice&&eqty){
      updateCar(eid,ebrand,eimage,eprice,eqty)
    }
    else{
        alert('Please fill all fields')
    }
  })

  document.getElementById('addcarform').addEventListener('submit',function(event){
    event.preventDefault()

    const carBrand=document.getElementById('inpbrand').value
    const carImage=document.getElementById('inpimage').value
    const carPrice=document.getElementById('inpprice').value
    const carQty=document.getElementById('inpqty').value


    if(carBrand&&carImage&&carPrice&&carQty){
        addCar(carBrand,carImage,carPrice,carQty)
    }
    else{
        alert('Please fill all fields')
    }
  })
  showCars()
   
  })