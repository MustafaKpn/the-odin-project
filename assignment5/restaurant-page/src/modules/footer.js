import { CONFIG } from "../config";

function loadFooter() {
  const content = document.getElementById("content");

  const footerSection = document.createElement("section");
  footerSection.classList.add("footer-section");
  footerSection.id = "footer-section";

  const storeDescription = document.createElement("div");
  storeDescription.classList.add("store-description");

  const storeName = document.createElement("h1");
  storeName.classList.add("store-name");
  storeName.textContent = "Kaplan Bakery";

  const storeAbout = document.createElement("p");
  storeAbout.classList.add("store-about");
  storeAbout.textContent =
    "Feel free to contact us by phone or email, or stop by our cozy sweets bar in Kaplan. We’d love to see you!";

  storeDescription.append(storeName, storeAbout);
  const quickLinks = document.createElement("div");
  quickLinks.classList.add("quick-links");

  const quickLinksTitle = document.createElement("h1");
  quickLinksTitle.textContent = "Quick Links";

  const footerHomeBtn = document.createElement("a");
  footerHomeBtn.textContent = "Home";
  footerHomeBtn.href = "#welcoming-section";
  footerHomeBtn.classList.add("home-link");

  const footerMenuBtn = document.createElement("a");
  footerMenuBtn.textContent = "Menu";
  footerMenuBtn.href = "#menu-section";
  footerMenuBtn.classList.add("menu-link");

  quickLinks.append(quickLinksTitle, footerHomeBtn, footerMenuBtn);

  const misc = document.createElement("div");
  misc.classList.add("misc");

  const followUs = document.createElement("h1");
  followUs.textContent = "Follow Us";

  const socials = document.createElement("div");
  socials.classList.add("socials");

  const instagramBtn = document.createElement("a");
  instagramBtn.innerHTML = CONFIG.ICONS.instagramIcon;
  instagramBtn.classList.add("instagram-logo");

  const tiktokBtn = document.createElement("a");
  tiktokBtn.innerHTML = CONFIG.ICONS.tiktokIcon;
  tiktokBtn.classList.add("tiktok-btn");

  socials.append(instagramBtn, tiktokBtn);

  const paymentOptions = document.createElement("h1");
  paymentOptions.textContent = "Payment Options";

  const paymentOptionsLogos = document.createElement("div");
  paymentOptionsLogos.classList.add("payment-options-logos");

  const masterCard = document.createElement("a");
  masterCard.innerHTML = CONFIG.ICONS.mastercardIcon;

  const visaCard = document.createElement("a");
  visaCard.innerHTML = CONFIG.ICONS.visacardIcon;

  const cashLogo = document.createElement("a");
  cashLogo.innerHTML = CONFIG.ICONS.cashIcon;

  paymentOptionsLogos.append(masterCard, visaCard, cashLogo);
  misc.append(followUs, socials, paymentOptions, paymentOptionsLogos);

  const separator = document.createElement("hr");
  separator.classList.add("solid-line");

  const policySection = document.createElement("p");
  policySection.classList.add("policy-section");
  policySection.textContent = CONFIG.policySentence;

  footerSection.append(
    storeDescription,
    quickLinks,
    misc,
    separator,
    policySection,
  );

  content.appendChild(footerSection);
}

export default loadFooter;
