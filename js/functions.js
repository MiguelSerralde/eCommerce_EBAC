const showCart = document.querySelector(".header__cart")
showCart.addEventListener("click", () => {
    const initUnit = 1
    showHideCart(1)
})

function showHideCart(num) {
    const cart = document.querySelector(".cart")
    const flexPrincipal = document.querySelector(".flexPrincipal")
    const items = document.querySelectorAll(".cart__item") 
    
    if (cart.style.display == 'none' && items.length>0) {
        cart.style.display = 'block'
        flexPrincipal.style.flex ="0 0 85%"
    } else{
        cart.style.display = 'none'
        flexPrincipal.style.flex = "0 0 99%"
    }    
}

const btnDeleteArtCart = document.querySelectorAll(".cart__delete")
btnDeleteArtCart.forEach(button => {
    button.addEventListener("click",() => {         
    deleteElementCart(button)
})
})

function deleteElementCart(button){
    button.closest(".cart__item").remove()
    checkCartEmpty()
}

function checkCartEmpty(){
    const items = document.querySelectorAll(".cart__item")  
    const clickCart = document.querySelector(".header__cart")  
    if (items.length === 0) {
        console.log("vacio")
        clickCart.click()                
    } 
}
const addCartElement = document.querySelectorAll(".product__addCart")
addCartElement.forEach(button => {
    button.addEventListener("click",() => {
        const varIconDelete = `<i class="cart__delete"><img src="./img/bin.png" alt="Eliminar" class="cart__delete-icon"></i>`
        const item = button.closest(".product")
        console.log(varIconDelete)

        const addItemCart = document.querySelector(".cart")
        const addDivItem = document.createElement("div")
        addDivItem.setAttribute("class", "cart__item")
        const addImageCart = document.createElement("img")
        const addPriceCart = document.createElement("p")
        const addNameCartItem = document.createElement("p")
        const addIItem = document.createElement("i")
        addIItem.setAttribute("class","cart__delete")
        const addImageDelete = document.createElement("img")
        addImageDelete.src = "./img/bin.png"
        addImageDelete.setAttribute("class","cart__delete-icon")

        addPriceCart.setAttribute("class","cart__price")
        addPriceCart.textContent = item.querySelectorAll("p")[0].textContent
        addNameCartItem.setAttribute("class","cart__name")
        addNameCartItem.textContent = item.querySelectorAll("h3")[0].textContent
                
        addImageCart.setAttribute("class", "cart__image")        
        addImageCart.setAttribute("src",item.querySelectorAll("img")[0].src)

        addItemCart.appendChild(addDivItem)
        addDivItem.appendChild(addImageCart)
        addDivItem.appendChild(addPriceCart)
        addDivItem.appendChild(addNameCartItem)
        addDivItem.appendChild(addIItem)
        addIItem.appendChild(addImageDelete)

        addImageDelete.addEventListener("click",() => {
            deleteElementCart(addImageDelete)
        })
    })
})