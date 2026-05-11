class contactInfo {
  constructor(icon, title, text) {
    this.icon = icon;
    this.title = title;
    this.text = text;
  }
}

const contactInfos = [
  new contactInfo(
    `    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>`,
    "Address",
    "Nieuwendijk 104A, 1012 MR Amsterdam",
  ),
  new contactInfo(
    `    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-telephone"
      viewBox="0 0 16 16"
    >
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
    </svg>`,
    "Telephone",
    "020-1234567",
  ),
  new contactInfo(
    `    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-envelope"
      viewBox="0 0 16 16"
    >
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>`,
    "Email",
    "mustafa@mk.com",
  ),
  new contactInfo(
    `    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-clock"
      viewBox="0 0 16 16"
    >
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
    </svg>`,
    "Opening Hours",
    "Mon–Sun: 9:00 AM – 10:00 PM",
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

  locationMap.innerHTML = `
  <div class="gmap_canvas">
    <iframe
      width="600"
      height="500"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=2880%20Broadway%2C%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0">
    </iframe>

    <style>
      .mapouter{
        position:relative;
        text-align:right;
        height:500px;
        width:600px;
      }

      .gmap_canvas{
        overflow:hidden;
        background:none!important;
        height:500px;
        width:600px;
      }
    </style>
  </div>
`;

  contactSection.append(contactLeftSection, locationMap);
  content.appendChild(contactSection);
}

export default loadContact;
