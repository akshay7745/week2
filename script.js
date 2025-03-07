
const data = [
    {
      customSlide1: {
        options: {},
        slides: [
            {
              options: {},
              id: 1,
              imageUrl:
                "./images/watch1.png",
              title: "Exquisite Watches",
              colorDescription:"Gold Luxury, Choose Us",
              description:
                "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
              price: '$499.00',
            
            },
            {
              options: {},
              id: 2,
              imageUrl:
                "./images/watch2.png",
              title: "Exquisite Watches",
              colorDescription:"Gold Luxury, Choose Us",
              description:
                "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
              price: '$499.00',
            
            },
            {
              options: {},
              id: 3,
              imageUrl:
                "./images/watch3.png",
              title: "Dainty Timepieces",
              colorDescription:"Silver Luxury, Choose Us",
              description:
                "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
              price: '$469.00',
            
            },
            {
              options: {},
              id: 4,
              imageUrl:
                "./images/watch4.png",
              title: "Refined Timepieces",
              colorDescription:"Choose Luxury, Choose Us",
              description:
                "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
              price: '$599.00',
            
            },
          
        ],
      },
    },
  ];


  class CustomSlider extends HTMLElement {
    constructor() {
      super();
      this.splideNode = this.querySelector(".splide");
    }
  
    connectedCallback() {
      this.mountSplider();
    }
  
    mountSplider() {
      const splide = new Splide(this.splideNode, {
        type: 'loop',
        perPage: 1,
        autoplay: true,
      });

      splide.mount();
    }
  }
  
  customElements.define("custom-slider", CustomSlider);

const slides = data[0].customSlide1.slides.map((slide)=>{
    const {imageUrl,id,title}=slide;
    return `<li class="splide__slide">
    <img src="${imageUrl}" alt="${title}">
    </li>`
}).join("");
  document.querySelector(
    ".carousel"
  ).innerHTML = `<custom-slider>
  <section class="splide" aria-label="Splide Basic HTML Example">
    <div class="splide__track">
          <ul class="splide__list">${slides}</ul>
    </div>
  </section>
  <custom-slider/>`;