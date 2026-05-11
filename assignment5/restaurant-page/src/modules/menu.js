import croissantImg from "../../assets/menu_items/croissant.jpg";
import painAuChocolatImg from "../../assets/menu_items/chocolate-croissant.jpg";
import cinnamonRollImg from "../../assets/menu_items/cinnamon-rolls.jpg";
import blueberryMuffinImg from "../../assets/menu_items/blueberry-muffin.jpg";
import chocolateDonutImg from "../../assets/menu_items/chocolate-donut.jpg";
import cheesecakeImg from "../../assets/menu_items/cheesecake-slice.jpg";
import chocolateCakeImg from "../../assets/menu_items/chocolatecake-slice.jpg";
import redVelvetImg from "../../assets/menu_items/redvelvetcakeslice.jpg";
import applePieImg from "../../assets/menu_items/applepieslice.jpg";

const menuItems = [
  {
    name: "Croissant (buttery pastry)",
    description:
      "A classic French pastry made with laminated dough that creates dozens of delicate, buttery layers. It has a crisp, golden exterior that shatters slightly when bitten, revealing a soft, airy, and rich interior. Best served warm for maximum flakiness and aroma.",
    price: "$3.00",
    image: croissantImg,
  },
  {
    name: "Pain au chocolat (chocolate pastry)",
    description:
      "A traditional French viennoiserie made from buttery layered dough wrapped around rich dark chocolate. As it bakes, the chocolate softens inside while the exterior becomes lightly crisp and golden, creating a balanced contrast of sweetness and texture.",
    price: "$3.75",
    image: painAuChocolatImg,
  },
  {
    name: "Cinnamon roll",
    description:
      "A soft and fluffy baked roll swirled generously with cinnamon, brown sugar, and butter. Once baked, it becomes gooey inside and is often topped with smooth vanilla icing that melts into the warm layers for a sweet, comforting treat.",
    price: "$4.50",
    image: cinnamonRollImg,
  },
  {
    name: "Blueberry muffin",
    description:
      "A moist, bakery-style muffin filled with juicy blueberries that burst during baking, creating pockets of fruity flavor. The top is slightly crisp and golden while the inside remains soft, fluffy, and aromatic.",
    price: "$3.50",
    image: blueberryMuffinImg,
  },
  {
    name: "Chocolate donut",
    description:
      "A light and airy fried dough donut coated with a smooth chocolate glaze. It has a soft interior with a slightly crisp outer layer, often finished with sprinkles or drizzle for added sweetness.",
    price: "$2.75",
    image: chocolateDonutImg,
  },
  {
    name: "Cheesecake slice",
    description:
      "A rich and creamy dessert made with smooth cream cheese layered over a buttery biscuit base. It has a dense yet silky texture and is often topped with fruit, caramel, or berry sauces for extra flavor.",
    price: "$5.50",
    image: cheesecakeImg,
  },
  {
    name: "Chocolate cake slice",
    description:
      "A decadent layered dessert made with moist chocolate sponge and rich chocolate frosting or ganache. Each bite delivers deep cocoa flavor with a soft, melt-in-your-mouth texture.",
    price: "$6.25",
    image: chocolateCakeImg,
  },
  {
    name: "Red velvet cake slice",
    description:
      "A smooth and velvety cocoa-flavored cake with its signature deep red color. It is layered with tangy cream cheese frosting, creating a perfect balance between sweetness and slight acidity.",
    price: "$6.50",
    image: redVelvetImg,
  },
  {
    name: "Apple pie slice",
    description:
      "A warm and comforting dessert made with tender apples cooked in cinnamon and sugar, enclosed in a flaky, buttery pastry crust. The filling is soft and aromatic with a lightly crisp top layer.",
    price: "$5.25",
    image: applePieImg,
  },
];

function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  menuSection.id = "menu-section";

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
