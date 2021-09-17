const pizzas = [
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    topinsveg: [ "Grilled Mushrooms", "Onions", "Fresh Tomatos"],
    topinsnoveg: [ "Chicken Tikka", "Peri Peri"],

    price: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },{
          Onions: 50,
          Fresh_Tomatos: 30,
      },
      {
        tikka: 60,
        peri : 90
      }
    ],
    catagory: "veg",
    imgage: "https://images.dominos.co.in/new_margherita_2502.jpg",
    description: "A classic delight with 100% Real mozzarella cheese",
  },
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    price: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    catagory: "veg",
    imgage: "https://images.dominos.co.in/farmhouse.png",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    price: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    catagory: "veg",
    imgage: "https://images.dominos.co.in/new_veggie_paradise.jpg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
  },
  {
    name: "Pepper Barbecue Chicken",
    varients: ["small", "medium", "large"],
    price: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    catagory: "nonveg",
    imgage: "https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg",
    description: "Pepper barbecue chicken for that extra zing",
  },
  {
    name: "Non Veg Supreme",
    varients: ["small", "medium", "large"],
    price: [
      {
        small: 319,
        medium: 579,
        large: 839,
      },
    ],
    catagory: "nonveg",
    imgage: "https://images.dominos.co.in/new_non_veg_supreme.jpg",
    description:
      "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken and grilled chicken rashers.",
  },
  {
    name: "Pepper Barbecue Chicken",
    varients: ["small", "medium", "large"],
    base: [
      {
        "New Hand Tosted": 199,
        "Wheat Thin Crust": 249,
        "Cheese Burst": 298,
        "Fresh Pan Pizza": 239,
      },
    ],
    price: [
      {
        small: 169,
        medium: 309,
        large: 499,
      },
    ],
    catagory: "nonveg",
    imgage: "https://images.dominos.co.in/updated_achari_do_pyaza.jpg",
    description:
      "Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!",
  },
];
export default pizzas;
