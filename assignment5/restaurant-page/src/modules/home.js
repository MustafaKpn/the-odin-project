function createSpecificationCard(image, title, description) {
  const specificationCard = document.createElement("div");
  specificationCard.classList.add("specification-card");

  const specificationIcon = document.createElement("img");
  specificationIcon.src = image;
  specificationIcon.alt = title;
  const specificationTitle = document.createElement("h3");
  specificationTitle.textContent = title;

  const specificationDesctiption = document.createElement("p");
  specificationDesctiption.textContent = description;

  specificationCard.append(
    specificationIcon,
    specificationTitle,
    specificationDesctiption,
  );

  return specificationCard;
}

function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const welcomingSection = document.createElement("section");
  welcomingSection.classList.add("welcoming-section");

  const welcomingSectionRight = document.createElement("div");
  welcomingSectionRight.classList.add("welcoming-section-right");
  const welcomingSectionImage = document.createElement("img");
  welcomingSectionImage.src =
    "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg";

  welcomingSectionRight.appendChild(welcomingSectionImage);

  const welcomingSectionLeft = document.createElement("div");
  welcomingSectionLeft.classList.add("welcoming-section-left");

  const welcomingText1 = document.createElement("h1");
  welcomingText1.classList.add("welcoming-text-1");
  welcomingText1.textContent = "Discover Our Delicious Sweets";

  const welcomingText2 = document.createElement("h2");
  welcomingText2.classList.add("welcoming-text-2");
  welcomingText2.textContent = "Delicious Food, Great Atmosphere";

  const welcomingBox = document.createElement("div");
  const specificationCard1 = createSpecificationCard(
    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    "Fresh Ingredients",
    "We use only the freshest ingredients to create our delicious dishes.",
  );
  const specificationCard2 = createSpecificationCard(
    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    "Cozy Atmosphere",
    "Enjoy your meal in a cozy and welcoming atmosphere.",
  );
  const specificationCard3 = createSpecificationCard(
    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    "Friendly Service",
    "Our staff is dedicated to providing you with friendly and attentive service.",
  );

  welcomingBox.append(
    specificationCard1,
    specificationCard2,
    specificationCard3,
  );
  welcomingBox.classList.add("welcoming-box");

  welcomingSection.append(
    welcomingSectionLeft,
    welcomingSectionRight,
    welcomingBox,
  );
  welcomingSectionLeft.append(welcomingText1, welcomingText2);
  content.appendChild(welcomingSection);
}

export default loadHome;
