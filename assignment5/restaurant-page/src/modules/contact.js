import { CONFIG } from "../config";

class contactInfo {
  constructor(icon, title, text) {
    this.icon = icon;
    this.title = title;
    this.text = text;
  }
}

const contactInfos = [
  new contactInfo(CONFIG.ICONS.addressIcon, "Address", CONFIG.address),
  new contactInfo(CONFIG.ICONS.phoneIcon, "Telephone", CONFIG.telephone),
  new contactInfo(CONFIG.ICONS.emailIcon, "Email", CONFIG.email),
  new contactInfo(
    CONFIG.ICONS.openingHoursIcon,
    "Opening Hours",
    CONFIG.openingHours,
  ),
];

function loadContact() {
  const content = document.getElementById("content");

  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");
  contactSection.id = "contact-section";

  const contactLeftSection = document.createElement("div");
  contactLeftSection.classList.add("contact-section-left");

  const contactHeader1 = document.createElement("h1");
  contactHeader1.classList.add("contact-header1");
  contactHeader1.textContent = "Get in touch";

  const contactHeader2 = document.createElement("p");
  contactHeader2.classList.add("contact-header2");
  contactHeader2.textContent =
    "Feel free to contact us by phone or email, or stop by our cozy sweets bar in Amsterdam. We’d love to see you!";

  const contactHeader3 = document.createElement("p");
  contactHeader3.classList.add("contact-header2");
  contactHeader3.textContent = "We’d love to see you!";

  const contactCards = document.createElement("div");
  contactCards.classList.add("contact-cards");

  contactLeftSection.append(
    contactHeader1,
    contactHeader2,
    contactHeader3,
    contactCards,
  );

  contactInfos.forEach((e) => {
    const contactElement = document.createElement("div");
    contactElement.classList.add("contact-element");

    contactElement.innerHTML = `
    ${e.icon}
    <div class="contact-info-text">
      <h3>${e.title}</h3>
      <p>${e.text}</p>
    </div>
  `;

    contactCards.append(contactElement);
  });

  const locationMap = document.createElement("div");
  locationMap.classList.add("map");

  locationMap.innerHTML = CONFIG.locationMap;

  contactSection.append(contactLeftSection, locationMap);
  content.appendChild(contactSection);
}

export default loadContact;
