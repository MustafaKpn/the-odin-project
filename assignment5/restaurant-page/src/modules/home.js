function createSpecificationCard(image, title, description) {
  const specificationCard = document.createElement("div");
  specificationCard.classList.add("specification-card");

  const specificationIcon = document.createElement("a");
  specificationIcon.innerHTML = image;
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
  welcomingSection.id = "welcoming-section";

  const welcomingSectionRight = document.createElement("div");
  welcomingSectionRight.classList.add("welcoming-section-right");
  welcomingSectionRight.classList.add("bounce");
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

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Sweets";
  menuBtn.addEventListener("click", () => {
    document.getElementById("menu-section").scrollIntoView({
      behavior: "smooth",
    });
  });

  const welcomingBox = document.createElement("div");
  const specificationCard1 = createSpecificationCard(
    `<svg height="200px" width="200px" version="1.1" id="_x35_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#75A874;" d="M461.044,46.548C331.271-11.868,184.378,3.571,89.951,98.005 C-0.94,188.893-18.62,328.363,32.254,454.389c-8.792,8.638-16.89,16.648-23.973,23.734c-5.857,5.857,0,0,0,0l21.188,21.188 c1.946-1.945,0,0,0,0c7.083-7.087,15.092-15.181,23.731-23.977c126.023,50.878,265.493,33.194,356.38-57.693 C504.014,323.207,519.46,176.315,461.044,46.548z"></path> <path style="fill:#5AA25A;" d="M17.463,511.318C16.697,512.083,16.415,512.361,17.463,511.318L17.463,511.318z"></path> <path style="fill:#5AA25A;" d="M21.188,507.592c-0.808,0.808-1.441,1.437-2.003,2.002 C20.219,508.565,21.188,507.592,21.188,507.592z"></path> <path style="fill:#5AA25A;" d="M18.568,510.209c-0.393,0.393-0.765,0.765-1.069,1.073 C17.763,511.017,18.135,510.646,18.568,510.209z"></path> </g> <g> <g> <path style="fill:#79C17A;" d="M89.951,85.799C-4.491,180.233-19.93,327.126,38.493,456.892l422.55-422.55 C331.271-24.074,184.378-8.635,89.951,85.799z"></path> <path style="fill:#67B765;" d="M409.579,405.435c-94.434,94.434-241.327,109.88-371.086,51.457l422.55-422.55 C519.46,164.108,504.014,311.001,409.579,405.435z"></path> </g> <path style="fill:#5AA25A;" d="M21.188,495.386c3.168-1.988,3.168-1.988,8.28-8.281 C131.175,385.391,408.442,91.169,417.631,77.754C404.209,86.936,109.987,364.21,8.281,465.917C2.424,471.773,0,474.19,0,474.19 L21.188,495.386z"></path> <path style="fill:#5AA25A;" d="M267.027,236.353c0,0,0,0,0-9.311c0-41.882-8.031-159.557-10.025-164.205 c-2.009,4.648-10.033,122.323-10.033,164.205c-0.007,9.311-0.007,9.311-0.007,9.311H267.027z"></path> <path style="fill:#5AA25A;" d="M160.479,342.901c0,0,0,0,0-9.31c0-41.883-8.03-159.557-10.033-164.205 c-2.009,4.647-10.033,122.329-10.033,164.205c0,9.31,0,9.31,0,9.31H160.479z"></path> <path style="fill:#5AA25A;" d="M260.813,230.139c0,0,0,0,9.31,0c41.882,0,159.557,8.023,164.205,10.033 c-4.648,2.009-122.323,10.033-164.205,10.033c-9.31,0-9.31,0-9.31,0V230.139z"></path> <path style="fill:#5AA25A;" d="M154.265,336.686c0,0,0,0,9.311,0c41.875,0,159.557,8.031,164.205,10.033 c-4.648,2.01-122.33,10.033-164.205,10.033c-9.311,0.007-9.311,0.007-9.311,0.007V336.686z"></path> </g> </g> </g></svg>`,
    "Fresh Ingredients",
    "We use only the freshest ingredients to create our delicious dishes.",
  );
  const specificationCard2 = createSpecificationCard(
    `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 983.384 381.465 c 0 -147.456 -119.467 -266.923 -266.923 -266.923 c -81.4649 0 -154.283 36.4089 -203.207 93.8662 c -48.9245 -57.4578 -121.856 -93.8662 -203.207 -93.8662 c -147.456 0 -266.923 119.467 -266.923 266.923 c 0 77.3689 35.6125 142.109 85.5609 195.811 L 514.275 947.964 l 378.994 -366.592 c 48.0142 -50.0622 90.112 -120.377 90.112 -199.907 Z" fill="#d1525c"></path><path d="M 514.275 947.964 L 128.569 577.276 C 78.507 523.574 43.008 458.835 43.008 381.465 c 0 -147.456 119.467 -266.923 266.923 -266.923 c 81.4649 0 154.283 36.4089 203.207 93.8662 l 1.13778 739.555 Z" fill="#db6574"></path></g></svg>`,
    "Cozy Atmosphere",
    "Enjoy your meal in a cozy and welcoming atmosphere.",
  );
  const specificationCard3 = createSpecificationCard(
    `<svg fill="#c2a800" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#c2a800"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.835 9.233l-4.371-8.358c-0.255-0.487-0.915-0.886-1.464-0.886h-10.060c-0.011-0.001-0.022-0.003-0.033-0.004-0.009 0-0.018 0.003-0.027 0.004h-9.88c-0.55 0-1.211 0.398-1.47 0.883l-4.359 8.197c-0.259 0.486-0.207 1.248 0.113 1.696l15.001 20.911c0.161 0.224 0.375 0.338 0.588 0.338 0.212 0 0.424-0.11 0.587-0.331l15.247-20.758c0.325-0.444 0.383-1.204 0.128-1.691zM29.449 8.988h-5.358l2.146-6.144zM17.979 1.99h6.436l-1.997 5.716zM20.882 8.988h-9.301l4.396-6.316zM9.809 8.034l-2.006-6.044h6.213zM21.273 10.988l-5.376 15.392-5.108-15.392h10.484zM13.654 25.971l-10.748-14.983h5.776zM23.392 10.988h5.787l-11.030 15.018zM5.89 2.575l2.128 6.413h-5.539z"></path> </g></svg>`,
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
  welcomingSectionLeft.append(welcomingText1, welcomingText2, menuBtn);
  content.appendChild(welcomingSection);
}

export default loadHome;
