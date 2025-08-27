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
        flexPrincipal.style.flex ="0 0 80%"
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
    
    const carItem = button.closest(".cart__item")
    const counterSpam = carItem.querySelector(".cart__counter").textContent
    if (counterSpam == 1){
        button.closest(".cart__item").remove()    
    }  
    else {
        console.log("menos uno") 
        carItem.querySelector(".cart__counter").textContent = parseInt(counterSpam) - 1       
    }
    
    checkCartEmpty()
}

function checkCartEmpty(){
    const items = document.querySelectorAll(".cart__item")  
    const clickCart = document.querySelector(".header__cart")  
    if (items.length === 0) {        
        clickCart.click()                
    } 
}
const addCartElement = document.querySelectorAll(".product__addCart")
addCartElement.forEach(button => {
    button.addEventListener("click",() => {
        const item = button.closest(".product")
       
        const addItemCart = document.querySelector(".cart")
        const itemName = item.querySelector("h3").textContent
        
        const cartItem = document.querySelectorAll(".cart__item")
        let found = false

        cartItem.forEach(cartItem => {
        const nameInCart = cartItem.querySelector(".cart__name").textContent;

        if (nameInCart === itemName) {
            found = true;

            let counter = cartItem.querySelector(".cart__counter");
            if (!counter) {
                counter = document.createElement("span");
                counter.setAttribute("class", "cart__counter");
            counter.textContent = "1";
            cartItem.appendChild(counter);
            }
            counter.textContent = parseInt(counter.textContent) + 1;            
        }
        });
        if (!found) {
            const addDivItem = document.createElement("div")
            addDivItem.setAttribute("class", "cart__item")
            const addDivWrapper = document.createElement("div")
            addDivWrapper.setAttribute("class", "cart__image-wrappper")
            const addImageCart = document.createElement("img")
            const addSpamCount = document.createElement("spam")
            addSpamCount.setAttribute("class","cart__counter")
            addSpamCount.textContent = "1"
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
            addDivItem.appendChild(addDivWrapper)
            addDivWrapper.appendChild(addImageCart)
            addDivWrapper.appendChild(addSpamCount)
            addDivItem.appendChild(addPriceCart)
            addDivItem.appendChild(addNameCartItem)
            addDivItem.appendChild(addIItem)
            addIItem.appendChild(addImageDelete)
    
            addImageDelete.addEventListener("click",() => {
                deleteElementCart(addImageDelete)
            })
        }
        //Si esta vacio abre el Carrito de compras al ingresar un articulo nuevo
        const emptyCart = document.querySelectorAll(".cart__item")   
        const counter = document.querySelector(".cart__counter").textContent                    
        const clickIn = document.querySelector(".header__cart")                  
        if (emptyCart.length ===1 && counter == 1) {            
            clickIn.click()            
        }
    })
})
