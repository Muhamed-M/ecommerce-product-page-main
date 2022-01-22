/* <======= NAVIGATION ========> */
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});

/* <======= CART ========> */
const cartBtn = document.getElementById('cart-btn');
const addBtn = document.querySelector('.add-btn');
const cartDropdown = document.querySelector('.cart-dropdown');
const cart = document.getElementById('cart');
const cartPlaceholder = document.getElementById('placeholder');
const deleteBtn = document.getElementById('delete');
let cartCounter = 0;

cartBtn.addEventListener('click', () => {
    cartDropdown.classList.toggle('active');
});

window.addEventListener('click', e => {
    if (e.target !== cartDropdown && e.target !== cartBtn)
        cartDropdown.classList.remove('active');
});

addBtn.addEventListener('click', () => {
    if (counter.counter === 0) {
        alert('Please choose how many items you want.');
        return;
    }
    cartCounter++;
    if (cartCounter > 0) cartPlaceholder.remove();
    cart.innerHTML += `
      <div class="checkout">
        <div class="checkout-content">
          <img src="images/image-product-1-thumbnail.jpg">
          <div class="checkout-title">
            <h6>Fall Limited Edition Sneakers</h6>
            <p>$125.00 x ${counter.counter} <span>$${125 * counter.counter}.00</span></p>
          </div>
          <img id="delete" src="images/icon-delete.svg">
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>
      `;
});

/* <======== COUNTER ========> */
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const display = document.getElementById('display');

class Counter {
    constructor() {
        this.counter = 0;

        plusBtn.addEventListener('click', () => {
            this.counter++;
            display.innerHTML = this.counter;
        });
        
        minusBtn.addEventListener('click', () => {
            if (this.counter <= 0) return;
            this.counter--;
            display.innerHTML = this.counter;
        });
    }
}
const counter = new Counter();

/* <======== CHANGE IMAGE WHEN THUMBNAIL IMAGE CLICKED ========> */
class ImageSwitch {
    constructor() {
        this.bigImg = document.querySelector('.big-image');
        this.smallImgs = document.querySelectorAll('.small-images img');

        this.smallImgs.forEach((img, index) => {
            if (index > 3) return;
            img.addEventListener('click', () => {
                this.bigImg.src = img.src.replace('-thumbnail', '');
                for (let i = 0; i < this.smallImgs.length - 4; i++) {
                    if (i === index) this.smallImgs[i].classList.add('active');
                    else this.smallImgs[i].classList.remove('active');
                }
            });
        });
    }
}
new ImageSwitch();

/* <======== LIGHTBOX SLIDER ========> */
class Lightbox {
    constructor() {
        this.counter = 1;
        this.openBtn = document.querySelector('.big-image');
        this.closeBtn = document.getElementById('close');
        this.lightbox = document.querySelector('.lightbox-container');
        this.nextBtn = document.getElementById('next-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.bigImg = document.querySelector('.lightbox .big-image');
        this.smallImgs = document.querySelectorAll('.lightbox .small-images img');

        this.openBtn.addEventListener('click', () => {
            if (window.innerWidth < 500) return;
            this.lightbox.classList.add('active');
        });

        this.closeBtn.addEventListener('click', () => {
            this.lightbox.classList.remove('active');
        });

        this.nextBtn.addEventListener('click', () => {
            if (this.counter > 3) this.counter = 0;
            this.counter++;
            this.bigImg.src = `images/image-product-${this.counter}.jpg`;

            this.smallImgs.forEach((img, i) => {
                if (i === this.counter - 1) img.classList.add('active');
                else img.classList.remove('active');
            });
        });

        this.prevBtn.addEventListener('click', () => {
            if (this.counter < 2) this.counter = 5;
            this.counter--;
            this.bigImg.src = `images/image-product-${this.counter}.jpg`;

            this.smallImgs.forEach((img, i) => {
                if (i === this.counter - 1) img.classList.add('active');
                else img.classList.remove('active');
            });
        });

        this.smallImgs.forEach((img, index) => {
            img.addEventListener('click', () => {
                this.bigImg.src = img.src.replace('-thumbnail', '');
                this.counter = index + 1;

                for (let i = 0; i < this.smallImgs.length; i++) {
                    if (i === index) this.smallImgs[i].classList.add('active');
                    else this.smallImgs[i].classList.remove('active');
                }
            });
        });
    }
}
new Lightbox();
/* <================> */

/* <======== MOBILE SLIDER ========> */
const nextBtnMob = document.getElementById('next-btn-mob');
const prevBtnMob = document.getElementById('prev-btn-mob');
const image = document.querySelector('.big-image');
let slideIndex = 1;

nextBtnMob.addEventListener('click', () => {
    if (slideIndex > 3) slideIndex = 0;
    slideIndex++;
    image.src = `images/image-product-${slideIndex}.jpg`;
});

prevBtnMob.addEventListener('click', () => {
    if (slideIndex < 2) slideIndex = 5;
    slideIndex--;
    image.src = `images/image-product-${slideIndex}.jpg`;
});
/* <================> */