const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

const tagBody = document.querySelector('body')
let tagNav    = document.createElement('nav')
let tagImg    = document.createElement('img')
tagImg.src    = "./img/brand/logo.svg"



let tagMainPai         = document.createElement('main')
tagMainPai.classList   = ("container")

let tagSection         = document.createElement('section')
tagSection.classList   = ("products-section")

let tagH1              = document.createElement('h1')
tagH1.innerText        = `Frutas`

let tagMainFilha       = document.createElement('main')
tagMainFilha.classList = ("products-content fruits")

let tagUl             = document.createElement('ul')

let tagLi              = document.createElement('li')
tagLi.classList        = ("products-content fruits")
// ADICIONAR  / ALT / TITLE
// img
//   src="./img/brand/logo.svg"
//   alt="Imagem da logotipo do Virtual Market de cor preta"
//   title="Imagem da logotipo do Virtual Market de cor preta"
  let tagImgUva          = document.createElement('img')
  tagImgUva.src          = "./img/products/no-img.svg"

    


tagNav.append(tagImg)
tagBody.append(tagNav)
tagBody.append(tagMainPai)
tagMainPai.append(tagSection, tagMainFilha)
tagSection.append(tagH1)
tagMainFilha.append(tagUl)
tagUl.append(tagLi)
tagLi.append(tagImgUva)


let tagMainUva         = document.createElement('main')
tagMainUva.classList   = ("product-main")

let tagH1Uva           = document.createElement('h1')
tagH1Uva.classList     = ("product-title")

let tagH5Uva           = document.createElement('h5')
tagH5Uva.classList     = ("product-category")

let strongUva          = document.createElement('strong')
strongUva.classList    = ("product-price")

tagLi.append        (tagMainUva)
tagMainUva.append   (tagH1Uva, tagH5Uva, strongUva)
tagH1Uva.innerText  = `Uva Crimson`
tagH5Uva.innerText  = `Frutas`
strongUva.innerText = `R$ 8.99`

let tagLiProductBanana = document.createElement('li')

let tagImgBanana       = document.createElement('img')

let tagMainBanana      = document.createElement('main')

let tagH1Banana        = document.createElement('h1')

let tagH5Banana        = document.createElement('h5')

let strongBanana       = document.createElement('strong')

tagUl.append                 (tagLiProductBanana)
tagLiProductBanana.append    (tagImgBanana, tagMainBanana)
tagLiProductBanana.classList = ("product")
tagImgBanana.src             = "./img/products/product_2.svg"
tagMainBanana.append         (tagH1Banana, tagH5Banana, strongBanana)
tagH1Banana.innerText        = "Banana"
tagH5Banana.innerText        = "Frutas"
strongBanana.innerText       = "R$ 5.69"

let tagLiProduct = document.createElement('li')

let tagImgMamao  = document.createElement('img')

let tagMainMamao = document.createElement('main')

let tagH1Mamao   = document.createElement('h1')

let tagH5Mamao   = document.createElement('h5')

let strongMamao = document.createElement('strong')
tagUl.append                (tagLiProduct)
tagLiProduct.append         (tagImgMamao, tagMainMamao)
tagLiProduct.classList      = ("product-main")
tagImgMamao.src             = "./img/products/product_3.svg"
tagMainMamao.append         (tagH1Mamao, tagH5Mamao, strongMamao)
tagH1Mamao.innerText        = "Mamão"
tagH5Mamao.innerText        = "Frutas"
strongMamao.innerText       = "R$ 4.99"



let tagLiProductMaca = document.createElement('li')

let tagImgMaca = document.createElement('img')

let tagMainMaca = document.createElement('main')

let tagH1Maca  = document.createElement('h1')

let tagH5Maca  = document.createElement('h5')

let strongMaca = document.createElement('strong')

tagUl.append                    (tagLiProductMaca)
tagLiProductMaca.append         (tagImgMaca, tagMainMaca)
tagLiProductMaca.classList      = "Product"
tagImgMaca.src                  = "./img/products/product_4.svg"
tagMainMaca.classList           = ("product-main")
tagMainMaca.append              (tagH1Maca, tagH5Maca, strongMaca)
tagH1Maca.innerText             = "Maça"
tagH5Maca.innerText             = "Frutas"
strongMaca.innerText            = "R$ R$ 9.2"

tagMainFilha.append(tagSection, tagUl)

/* <main class="container">
      <section class="products-section">
        <h1>Frutas</h1>
        <main class="products-content fruits">
          <ul>
            <li class="product">

              <img
                src="./img/products/no-img.svg"
                alt=""
                title=""
                class="product-img"
              />

              <main class="product-main">
                <h1 class="product-title">Uva Crimson</h1>
                <h5 class="product-category">Frutas</h5>
                <strong class="product-price">R$ 8.99</strong>
              </main> */
         // </li
  
        //    <li class="product">
        //    <img
        //      src="./img/products/product_2.svg"
        //      alt=""
        //      title=""
        //      class="product-img"
        //    />


        //    <main class="product-main">
        //      <h1 class="product-title">Banana</h1>
        //      <h5 class="product-category">Frutas</h5>
        //      <strong class="product-price">R$ 5.69</strong>
        //    </main>
        //  </li>









      //   <li class="product">
      //   <img
      //     src="./img/products/product_4.svg"
      //     alt=""
      //     title=""
      //     class="product-img"
      //   />
      //   <main class="product-main">
      //     <h1 class="product-title">Maçã</h1>
      //     <h5 class="product-category">Frutas</h5>
      //     <strong class="product-price">R$ 9.2</strong>
      //   </main>
      // </li>
      //</ul>