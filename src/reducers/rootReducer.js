export var initialState = {
  productData: [
    {
      "id": 0.4517122543626939,
      "product_title": "Product title",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 5000,
      "product_rating": 4,
      "product_image": "https://homepages.cae.wisc.edu/~ece533/images/frymire.png",
      "orderType": "outofstock",
      "visible": true
    },
    {
      "id": 0.4517122543626988,
      "product_title": "Product title",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 74000,
      "product_rating": 4,
      "product_image": "https://image.shutterstock.com/z/stock-photo-black-kid-enjoying-his-painting-1061905802.jpg",
      "orderType": "instock",
      "visible": true
    },
    {
      "id": 0.4517122543626934,
      "product_title": "Girl Painting",
      "product_desc": "Product description... Girl Painting dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 2600,
      "product_rating": 3,
      "product_image": "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
      "orderType": "instock",
      "visible": false
    },
    {
      "id": 0.4517122543626937,
      "product_title": "Lorem Ispum",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 19000,
      "product_rating": 1,
      "product_image": "https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg",
      "orderType": "outofstock",
      "visible": true
    },
    {
      "id": 0.4517122543626810,
      "product_title": "Mother Modonna",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 38900,
      "product_rating": 1,
      "product_image": "https://cdn.pixabay.com/photo/2015/11/24/19/14/mother-of-perpetual-help-1060612_960_720.jpg",
      "orderType": "instock",
      "visible": true
    },
    {
      "id": 0.4517122543626850,
      "product_title": "Mona Lisa",
      "product_desc": "Product description... Mona Lisa consectetuer, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 99000,
      "product_rating": 5,
      "product_image": "https://cdn.pixabay.com/photo/2015/03/26/09/44/mona-lisa-690203_1280.jpg",
      "orderType": "instock",
      "visible": true
    },
    {
      "id": 0.4517122543626777,
      "product_title": "ship cruise",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 78000,
      "product_rating": 1,
      "product_image": "https://cdn.pixabay.com/photo/2018/06/24/03/06/ship-3493887_1280.jpg",
      "orderType": "instock",
      "visible": true
    },
    {
      "id": 0.4517122543626748,
      "product_title": "House Beautiful painting",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 58000,
      "product_rating": 1,
      "product_image": "https://cdn.pixabay.com/photo/2016/08/26/12/44/houses-1622066_1280.jpg",
      "orderType": "instock",
      "visible": true
    },
    {
      "id": 0.4517122543626440,
      "product_title": "Horse Painting",
      "product_desc": "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "product_price": 96000,
      "product_rating": 1,
      "product_image": "https://cdn.pixabay.com/photo/2017/01/12/12/49/painting-1974614_1280.jpg",
      "orderType": "instock",
      "visible": true
    }

  ]



}



var localData = localStorage.getItem('state')
if (localData == null) { } else {

  initialState = JSON.parse(localData)
}



const rootReducer = (state = initialState, action) => {

  if (action.type === 'DELETE_PRODUCT') {
   

    let deleteProduct = state.productData.filter(product => {
      return action.id !== product.id

    });

    return {
      ...state,
      productData: deleteProduct
    }
  }
  if (action.type === 'ADD_PRODUCT') {
  
    console.log(action)
    let randomId = Math.random()
    let myNew = [{ id: randomId, product_title: action.id.product_title, product_desc: action.id.product_desc, product_image: action.id.product_image, product_price: action.id.product_price, product_rating: action.id.product_rating, orderType: action.id.orderType, visible: true }]

    alert("Product Added successfully")

    return {
      ...state,
      productData: [...state.productData, ...myNew],
    }

  }

  if (action.type === "UPDATE_PRODUCT") {
   
    const updatedItems = state.productData.map((product) => {
      if (product.id === action.id.id) {
        return { ...product, id: action.id.id, product_title: action.id.product_title, project_desc: action.id.project_desc, product_image: action.id.product_image, product_price: action.id.product_price, product_rating: action.id.product_rating, orderType: action.id.orderType, visible: true }
      }

      return product;
    });
    alert("Product Updated successfully")
    return { ...state, productData: updatedItems };
  }



  if (action.type === "RESTORE_PRODUCT") {
    const updatedItems = state.productData.map((product) => {
      if (product.id === action.id) {
        return { ...product, visible: true };
      }

      return product;
    });
    return { ...state, productData: updatedItems };
  }


  if (action.type === "TRASH_PRODUCT") {
    const updatedItems = state.productData.map((product) => {
      if (product.id === action.id) {
        return { ...product, visible: false };
      }

      return product;
    });
    return { ...state, productData: updatedItems };
  }




  return state;
}

export default rootReducer;
