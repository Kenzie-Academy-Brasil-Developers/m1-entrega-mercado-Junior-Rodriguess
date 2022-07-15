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
let tagBody    = document.querySelector('body')
let tagSection = document.createElement('section')
let tagH1      = document.createElement('h1')
let tagMain    = document.createElement('main')
let tagUl      = document.createElement('ul')
tagSection.classList = ("products-section")
tagH1.innerText      = `Frutas`
tagMain.classList    = ("products-content")
tagUl.classList      = ("listaDeProdutos")
tagBody.append(tagSection, tagMain)
tagSection.append(tagH1)
tagMain.append(tagUl)
function categorias(products, categoria) {
    let array = []
    for (let i = 0; i < products.length; i++) {
      if (products[i].category == categoria) {
        array.push(products[i])
      }
    }
    return array
}
let resultadoFrutas  = categorias(products, "Frutas")
function renderizarfrutas(){
  for (let i = 0 ; i < resultadoFrutas.length; i++) {
    let tagLiProdutos           = document.createElement('li')
    let tagImgProdutos          = document.createElement('img')
    console.log(products[i].image === undefined)
    if (products[i].image === undefined) {
      tagImgProdutos.src = "/img/products/no-img.svg"
    }
    else {
      tagImgProdutos.src       = resultadoFrutas[i].image
    }
    let tagH1Produtos           = document.createElement('h1')
    let tagH5Produtos           = document.createElement('h5')
    let strongProdutos          = document.createElement('strong')
    tagLiProdutos.classList.add("product")
    tagH1Produtos.classList.add("product-title")
    tagH5Produtos.classList.add("product-category")
    strongProdutos.classList.add("product-price")
    tagH1Produtos.innerText  = resultadoFrutas[i].title
    tagH5Produtos.innerText  = resultadoFrutas[i].category
    strongProdutos.innerText = resultadoFrutas[i].price
    tagLiProdutos.append(tagImgProdutos, tagH1Produtos, tagH5Produtos, strongProdutos)
    tagUl.append(tagLiProdutos)
  }
}
renderizarfrutas()
let tagSectionBebidas       = document.createElement('section')
let tagH1Bebidas            = document.createElement('h1')
let tagMainBebidas          = document.createElement('main')
let tagUlBebidas            = document.createElement('ul')
tagSectionBebidas.classList = ("products-section")
tagH1Bebidas.innerText      = `Bebidas`
tagMainBebidas.classList    = ("products-content drinks")
tagUlBebidas.classList      = ("listaDeProdutos")
tagBody.append(tagSectionBebidas, tagMainBebidas)
tagSectionBebidas.append(tagH1Bebidas)
tagMainBebidas.append(tagUlBebidas)
function categoriasbebidas(products, categorias){
  let array = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == categorias) {
      array.push(products[i])
    }
  }
  return array
}
let resultadoBebidas = categoriasbebidas(products, "Bebidas")
function renderizarbebidas(){
  for (let i = 0 ; i < resultadoBebidas.length; i++) {
    let tagLiProdutos           = document.createElement('li')
    let tagImgBebidas           = document.createElement('img')
    if (resultadoBebidas[i].image === undefined) {
      tagImgBebidas.src = "./img/products/no-img.svg"
    }
    else {
      tagImgBebidas.src         = resultadoBebidas[i].image
    }
    let tagH1Produtos           = document.createElement('h1')
    let tagH5Produtos           = document.createElement('h5')
    let strongProdutos          = document.createElement('strong')
    tagLiProdutos.classList.add("product")
    tagH1Produtos.classList.add("product-title")
    tagH5Produtos.classList.add("product-category")
    strongProdutos.classList.add("product-price")
    tagH1Produtos.innerText  = resultadoBebidas[i].title
    tagH5Produtos.innerText  = resultadoBebidas[i].category
    strongProdutos.innerText = resultadoBebidas[i].price
    tagLiProdutos.append(tagImgBebidas, tagH1Produtos, tagH5Produtos, strongProdutos)
    tagUlBebidas.append(tagLiProdutos)
  }
}
renderizarbebidas()
let tagSectionHigiene       = document.createElement('section')
let tagH1Higiene            = document.createElement('h1')
let tagMainHigiene          = document.createElement('main')
let tagUlHigiene            = document.createElement('ul')
tagSectionHigiene.classList = ("products-section")
tagH1Higiene.innerText      = `Higiene`
tagMainHigiene.classList    = ("products-content hygiene")
tagUlHigiene.classList      = ("listaDeProdutos")
tagBody.append(tagSectionHigiene, tagMainHigiene)
tagSectionHigiene.append(tagH1Higiene)
tagMainHigiene.append(tagUlHigiene)
function categoriahigiene(products, categoria){
  let array = []
    for (let i = 0; i < products.length; i++) {
      if (products[i].category == categoria) {
        array.push(products[i])
      }
    }
    return array
}
let resultadoHigiene = categoriahigiene(products, "Higiene")
function renderizarhigiene() {
  for (let i = 0 ; i < resultadoHigiene.length; i++) {
    let tagLiProdutos           = document.createElement('li')
    let tagImgProdutos          = document.createElement('img')
    if(resultadoHigiene[i].image === undefined){
      tagImgProdutos.src = "/img/products/no-img.svg"
    }
    else {
      tagImgProdutos.src       = resultadoHigiene[i].image
    }
    let tagH1Produtos           = document.createElement('h1')
    let tagH5Produtos           = document.createElement('h5')
    let strongProdutos          = document.createElement('strong')
    tagLiProdutos.classList.add("product")
    tagH1Produtos.classList.add("product-title")
    tagH5Produtos.classList.add("product-category")
    strongProdutos.classList.add("product-price")
    tagH1Produtos.innerText  = resultadoHigiene[i].title
    tagH5Produtos.innerText  = resultadoHigiene[i].category
    strongProdutos.innerText = resultadoHigiene[i].price
    tagLiProdutos.append(tagImgProdutos, tagH1Produtos, tagH5Produtos, strongProdutos)
    tagUlHigiene.append(tagLiProdutos)
  }
}
renderizarhigiene()