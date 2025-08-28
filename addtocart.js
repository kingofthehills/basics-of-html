const products=[
    {image:'pictures/shirt.webp',title:"offershirt",price:500},
    {image:'pictures/shirty1.webp',title:"offershirt1",price:600},
    {image:'pictures/shirt2.webp',title:"offershirt2",price:700},
    {image:'pictures/shirt3.webp',title:"offershirt3",price:800},
    {image:'pictures/shirt4.webp',title:"offershirt4",price:900},
    {image:'pictures/shirt5.webp',title:"offershirt5",price:400},
]

const category=[...new Set((products.map(item=>item)))]
let cart=[]

document.getElementById('product').innerHTML=category.map((item,index)=>{
    return(`
       
        <div class="card">
    <img src=${item.image} width="150px"height="150px">
    <h2>${item.title}</h2>
    <h3>${item.price}</h3>
    <button onclick="addtocart(${index})">addtocart</button>
</div>
        
    `)
}).join('')

function addtocart(e){
    cart.push({...category[e]})
    displaycart()

}
function delItem(index){
    alert(index);
    cart.splice(index,1)
    displaycart()
}
function displaycart(){
    let total=0;
    document.getElementById("count").innerHTML=cart.length
    if(cart.length===0){
        document.getElementById('cart_data').innerHTML="your cart is empty";
        document.getElementById('tot').innerHTML=0;
    }
    else{
        document.getElementById('cart_data').innerHTML=cart.map((item,index)=>{
            total += item.price;
            return(
                `
                 <div class='cart_card'>
        <img src=${item.image} width="150px" height="150px"/>
        <h2>${item.title}</h2>
        <h3>${item.price}</h3>
        <button onclick="delItem(${index})">delete</button>
        </div>
                `
            )
        }).join('')
        document.getElementById('tot').innerHTML=total;
    }
}











