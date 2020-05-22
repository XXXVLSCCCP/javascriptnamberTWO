class ProductsList{// cоздаем класс
    constructor(container = '.products'){//пишем конструктор для класса и в нем присваеваем значение diva .products
        this.container = container;//cоздаем переменные
        this.goods = [];// cоздаем массив для для элементов id title и price
        this.allProducts = [];// массив в котором каждый товар обвертываем в верстку
        this._fetchProduct();//медод вызываемый при запуске конструктора он закрытый
        this.render();
        this.calcProduct();
    }
    _fetchProduct(){//метод с массивом в котором название и цена
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){//метод с помощью которого отображаем товар на страничке
        const block = document.querySelector(this.container);//обращаемся к пустому div
        for(let product of this.goods){//перебираем массив
            const productObj = new ProductItem(product);//присваеваем переменной конструтор с версткой товаров
            this.allProducts.push(productObj);//добавляем в массив каждый товар с версткой
            block.insertAdjacentHTML('beforeend',productObj.render());//выводи товар на страницу
            //block.innerHTML += productObj.render();
        }
    }
    calcProduct() {//метод выщитывает стоимость всех товаров
        let CalcPrice = 0;
            this.goods.forEach((good) => {// перебираем массив goods
                if(good.price !== undefined) {//если не равно undefined
                    CalcPrice += good.price;//складывается все цены
                    console.log(good.price);//выводим в консоль
                }
            });  ;
            document.querySelector('.Calcule').innerHTML = `Все товары на сумму  ${CalcPrice}`;//выводим на страницу
    }
}

class ProductItem{// класс для верстки
    constructor(product, img="https://placehold.it/200x150"){
        this.title = product.title;
        this.id = product.id;
        this.img = img;
        this.price = product.price;
        
    }
    
    render(){//возращаем верстку каждому нашему товару
         return `<div class="product-item">
                <img alt="some img" src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
    
}
class Basket {
    constructor() {
        // массив с для товраров
        this.addproduct = [];
        this.deleteproduct = []; // товары которые были удалены из корзины 
    }
    // Добавление товара в корзину 
    addToBasket() {}

     // Метод открывания корзины
     openBasket() {}

    // Удаление товара из корзины 
    deleteBasket() {}

    // Считаем стоимость и количество товаров в корзине
    calcBasket() {}

    // кнопка оформить заказ
    Order() {}

    

   
}

        
    




let list = new ProductsList();





