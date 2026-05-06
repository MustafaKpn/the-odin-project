function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menu-header");
  menuSection.appendChild(menuHeader);

  const menuHeaderTitle = document.createElement("h1");
  menuHeaderTitle.textContent = "Take a look at our sweets!";

  const menuHeaderText = document.createElement("p");
  menuHeaderText.textContent =
    "Discover our delightful selection of handcrafted desserts.";

  menuHeader.append(menuHeaderTitle, menuHeaderText);

  const menuItemsGrid = document.createElement("div");
  menuItemsGrid.classList.add("menu-items-grid");

  const menuItems = [
    {
      name: "Chocolate Cake",
      description:
        "Rich and moist chocolate cake topped with creamy chocolate frosting.",
      price: "$5.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Vanilla Ice Cream",
      description: "Creamy vanilla ice cream made with real vanilla beans.",
      price: "$3.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Strawberry Cheesecake",
      description:
        "Classic cheesecake with a graham cracker crust and fresh strawberries.",
      price: "$6.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Lemon Tart",
      description:
        "Tangy lemon tart with a buttery crust and a dusting of powdered sugar.",
      price: "$4.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Lemon Tart",
      description:
        "Tangy lemon tart with a buttery crust and a dusting of powdered sugar.",
      price: "$4.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Lemon Tart",
      description:
        "Tangy lemon tart with a buttery crust and a dusting of powdered sugar.",
      price: "$4.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Lemon Tart",
      description:
        "Tangy lemon tart with a buttery crust and a dusting of powdered sugar.",
      price: "$4.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
    {
      name: "Lemon Tart",
      description:
        "Tangy lemon tart with a buttery crust and a dusting of powdered sugar.",
      price: "$4.99",
      image:
        "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg",
    },
  ];

  menuItems.forEach((item) => {
    const menuItemCard = document.createElement("div");
    menuItemCard.classList.add("menu-item-card");

    const menuItemImage = document.createElement("img");
    menuItemImage.src = item.image;
    menuItemImage.alt = item.name;
    menuItemCard.appendChild(menuItemImage);

    const menuItemName = document.createElement("h3");
    menuItemName.textContent = item.name;
    menuItemCard.appendChild(menuItemName);

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = item.description;
    menuItemCard.appendChild(menuItemDescription);

    const menuItemPrice = document.createElement("p");
    menuItemPrice.classList.add("menu-item-price");
    menuItemPrice.textContent = item.price;
    menuItemCard.appendChild(menuItemPrice);

    menuItemsGrid.appendChild(menuItemCard);
  });

  menuSection.appendChild(menuItemsGrid);
  content.appendChild(menuSection);
}

export default loadMenu;
