function loadFooter() {
  const content = document.getElementById("content");

  const footerSection = document.createElement("section");
  footerSection.classList.add("footer-section");

  const storeDescription = document.createElement("div");
  storeDescription.classList.add("store-description");

  const storeName = document.createElement("h1");
  storeName.classList.add("store-name");
  storeName.textContent = "mustafa Bakery";

  const storeAbout = document.createElement("p");
  storeAbout.classList.add("store-about");
  storeAbout.textContent =
    "Feel free to contact us by phone or email, or stop by our cozy sweets bar in Amsterdam. We’d love to see you!";

  storeDescription.append(storeName, storeAbout);
  const quickLinks = document.createElement("div");
  quickLinks.classList.add("quick-links");

  const quickLinksTitle = document.createElement("h1");
  quickLinksTitle.textContent = "Quick Links";
  const footerHomeBtn = document.createElement("a");
  footerHomeBtn.textContent = "Home";
  const footerMenuBtn = document.createElement("a");
  footerMenuBtn.textContent = "Menu";

  quickLinks.append(quickLinksTitle, footerHomeBtn, footerMenuBtn);

  const misc = document.createElement("div");
  misc.classList.add("misc");

  const followUs = document.createElement("h1");
  followUs.textContent = "Follow Us";

  const socials = document.createElement("div");
  socials.classList.add("socials");

  const instagramBtn = document.createElement("a");
  instagramBtn.innerHTML = `<svg fill="#000000" viewBox="0 0 32 32" id="Camada_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"></path> <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"></path> <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"></path> </g> </g></svg>`;
  instagramBtn.classList.add("instagram-logo");

  const tiktokBtn = document.createElement("a");
  tiktokBtn.innerHTML = `<svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.89px;}</style></defs><path class="cls-1" d="M12.94,1.61V15.78a2.83,2.83,0,0,1-2.83,2.83h0a2.83,2.83,0,0,1-2.83-2.83h0a2.84,2.84,0,0,1,2.83-2.84h0V9.17h0A6.61,6.61,0,0,0,3.5,15.78h0a6.61,6.61,0,0,0,6.61,6.61h0a6.61,6.61,0,0,0,6.61-6.61V9.17l.2.1a8.08,8.08,0,0,0,3.58.84h0V6.33l-.11,0a4.84,4.84,0,0,1-3.67-4.7H12.94Z"></path></g></svg>`;
  tiktokBtn.classList.add("tiktok-btn");

  socials.append(instagramBtn, tiktokBtn);

  const paymentOptions = document.createElement("h1");
  paymentOptions.textContent = "Payment Options";

  const paymentOptionsLogos = document.createElement("div");
  paymentOptionsLogos.classList.add("payment-options-logos");

  const masterCard = document.createElement("a");
  masterCard.innerHTML = `<svg viewBox="0 -11 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" width="69" height="47" rx="5.5" fill="white" stroke="#D9D9D9"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3945 34.7619C33.0114 36.8184 29.92 38.0599 26.5421 38.0599C19.0047 38.0599 12.8945 31.8788 12.8945 24.254C12.8945 16.6291 19.0047 10.448 26.5421 10.448C29.92 10.448 33.0114 11.6895 35.3945 13.7461C37.7777 11.6895 40.869 10.448 44.247 10.448C51.7843 10.448 57.8945 16.6291 57.8945 24.254C57.8945 31.8788 51.7843 38.0599 44.247 38.0599C40.869 38.0599 37.7777 36.8184 35.3945 34.7619Z" fill="#ED0006"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3945 34.7619C38.3289 32.2296 40.1896 28.4616 40.1896 24.254C40.1896 20.0463 38.3289 16.2783 35.3945 13.7461C37.7777 11.6895 40.869 10.448 44.247 10.448C51.7843 10.448 57.8945 16.6291 57.8945 24.254C57.8945 31.8788 51.7843 38.0599 44.247 38.0599C40.869 38.0599 37.7777 36.8184 35.3945 34.7619Z" fill="#F9A000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3946 13.7461C38.329 16.2784 40.1897 20.0463 40.1897 24.254C40.1897 28.4616 38.329 32.2295 35.3946 34.7618C32.4603 32.2295 30.5996 28.4616 30.5996 24.254C30.5996 20.0463 32.4603 16.2784 35.3946 13.7461Z" fill="#FF5E00"></path> </g></svg>`;

  const visaCard = document.createElement("a");
  visaCard.innerHTML = `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 750 471" version="1.1" id="svg14" sodipodi:docname="visa.svg" inkscape:version="0.92.2 5c3e80d, 2017-08-06" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata id="metadata18"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> </cc:work> </rdf:rdf> </metadata> <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1515" inkscape:window-height="928" id="namedview16" showgrid="false" inkscape:zoom="0.384" inkscape:cx="83.333333" inkscape:cy="235.5" inkscape:window-x="2301" inkscape:window-y="293" inkscape:window-maximized="0" inkscape:current-layer="Page-1"></sodipodi:namedview> <desc id="desc2">Created with Sketch.</desc> <defs id="defs4"></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="visa" fill-rule="nonzero"> <rect id="Rectangle-1" fill="#0E4595" x="0" y="0" width="750" height="471" rx="40"></rect> <polygon id="Shape" fill="#FFFFFF" points="278.1975 334.2275 311.5585 138.4655 364.9175 138.4655 331.5335 334.2275"></polygon> <path d="M524.3075,142.6875 C513.7355,138.7215 497.1715,134.4655 476.4845,134.4655 C423.7605,134.4655 386.6205,161.0165 386.3045,199.0695 C386.0075,227.1985 412.8185,242.8905 433.0585,252.2545 C453.8275,261.8495 460.8105,267.9695 460.7115,276.5375 C460.5795,289.6595 444.1255,295.6545 428.7885,295.6545 C407.4315,295.6545 396.0855,292.6875 378.5625,285.3785 L371.6865,282.2665 L364.1975,326.0905 C376.6605,331.5545 399.7065,336.2895 423.6355,336.5345 C479.7245,336.5345 516.1365,310.2875 516.5505,269.6525 C516.7515,247.3835 502.5355,230.4355 471.7515,216.4645 C453.1005,207.4085 441.6785,201.3655 441.7995,192.1955 C441.7995,184.0585 451.4675,175.3575 472.3565,175.3575 C489.8055,175.0865 502.4445,178.8915 512.2925,182.8575 L517.0745,185.1165 L524.3075,142.6875" id="path13" fill="#FFFFFF"></path> <path d="M661.6145,138.4655 L620.3835,138.4655 C607.6105,138.4655 598.0525,141.9515 592.4425,154.6995 L513.1975,334.1025 L569.2285,334.1025 C569.2285,334.1025 578.3905,309.9805 580.4625,304.6845 C586.5855,304.6845 641.0165,304.7685 648.7985,304.7685 C650.3945,311.6215 655.2905,334.1025 655.2905,334.1025 L704.8025,334.1025 L661.6145,138.4655 Z M596.1975,264.8725 C600.6105,253.5935 617.4565,210.1495 617.4565,210.1495 C617.1415,210.6705 621.8365,198.8155 624.5315,191.4655 L628.1385,208.3435 C628.1385,208.3435 638.3555,255.0725 640.4905,264.8715 L596.1975,264.8715 L596.1975,264.8725 Z" id="Path" fill="#FFFFFF"></path> <path d="M 45.878906 138.46484 L 45.197266 142.53906 C 66.288263 147.64458 85.126465 155.03257 101.61914 164.22461 L 148.96484 333.91602 L 205.41992 333.84961 L 289.42383 138.46484 L 232.90234 138.46484 L 180.66211 271.96094 L 175.0957 244.83203 C 174.83824 244.00408 174.55942 243.17304 174.27344 242.3418 L 156.10742 154.99219 C 152.87742 142.59619 143.50892 138.89684 131.91992 138.46484 L 45.878906 138.46484 z " id="path16" style="fill:#ffffff;fill-opacity:1"></path> </g> </g> </g></svg>`;

  const cashLogo = document.createElement("a");
  cashLogo.innerHTML = `<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#BDD169;" points="434.934,493.758 501.801,426.891 501.801,284.242 434.934,217.601 77.066,217.601 10.199,284.242 10.199,426.891 77.066,493.758 "></polygon> <circle style="fill:#E6E6E6;" cx="256" cy="355.564" r="75.336"></circle> <g> <polygon style="fill:#FFD890;" points="501.801,493.758 501.801,426.891 434.934,493.758 "></polygon> <polygon style="fill:#FFD890;" points="434.934,217.601 501.801,284.242 501.801,217.601 "></polygon> <polygon style="fill:#FFD890;" points="10.199,493.758 10.199,426.891 77.066,493.758 "></polygon> <polygon style="fill:#FFD890;" points="77.066,217.601 10.199,284.242 10.199,217.601 "></polygon> </g> <polygon style="fill:#BDD169;" points="501.801,217.601 434.934,151.072 77.066,151.072 10.199,217.601 "></polygon> <g> <polygon style="fill:#FFD890;" points="434.934,151.072 501.801,217.601 501.801,151.072 "></polygon> <polygon style="fill:#FFD890;" points="77.066,151.072 10.199,217.601 10.199,151.072 "></polygon> </g> <polygon style="fill:#BDD169;" points="501.801,151.072 434.934,84.635 77.066,84.635 10.199,151.072 "></polygon> <g> <polygon style="fill:#FFD890;" points="434.934,84.635 501.801,151.072 501.801,84.635 "></polygon> <polygon style="fill:#FFD890;" points="77.066,84.635 10.199,151.072 10.199,84.635 "></polygon> </g> <polygon style="fill:#BDD169;" points="501.801,84.635 434.934,18.242 77.066,18.242 10.199,84.635 "></polygon> <g> <polygon style="fill:#FFD890;" points="434.934,18.242 501.801,84.635 501.801,18.242 "></polygon> <polygon style="fill:#FFD890;" points="77.066,18.242 10.199,84.635 10.199,18.242 "></polygon> </g> <g> <path style="fill:#4C1D1D;" d="M256,270.031c-47.165,0-85.536,38.371-85.536,85.536s38.371,85.536,85.536,85.536 s85.536-38.371,85.536-85.536S303.164,270.031,256,270.031z M256,420.703c-35.916,0-65.137-29.22-65.137-65.137 s29.221-65.137,65.137-65.137c35.918,0,65.137,29.22,65.137,65.137S291.918,420.703,256,420.703z"></path> <path style="fill:#4C1D1D;" d="M261.321,344.424V327.04c7.74,0.595,10.002,4.405,13.931,4.405c5.239,0,7.382-6.549,7.382-9.764 c0-8.216-13.931-10.121-21.313-10.359v-2.976c0-1.668-2.262-3.215-4.523-3.215c-2.619,0-4.525,1.548-4.525,3.215v3.334 c-12.622,1.786-23.814,9.05-23.814,24.171c0,15.241,12.86,20.362,23.814,24.529v19.289c-8.812-1.548-12.859-8.572-17.861-8.572 c-4.525,0-8.097,5.953-8.097,10.002c0,7.621,11.669,15.003,25.958,15.479v2.977c0,1.667,1.905,3.214,4.525,3.214 c2.261,0,4.523-1.548,4.523-3.214v-3.453c13.931-2.263,23.457-11.194,23.457-25.957 C284.778,354.069,272.157,348.473,261.321,344.424z M253.462,341.567c-4.524-1.904-7.621-4.048-7.621-7.501 c0-2.858,2.263-5.596,7.621-6.668V341.567z M260.131,379.551v-15.956c4.287,2.024,7.263,4.524,7.263,8.453 C267.394,376.335,264.18,378.597,260.131,379.551z"></path> <path style="fill:#4C1D1D;" d="M10.199,8.043C4.566,8.043,0,12.61,0,18.242v475.516c0,5.632,4.566,10.199,10.199,10.199h491.602 c5.632,0,10.199-4.567,10.199-10.199V18.242c0-5.632-4.567-10.199-10.199-10.199C501.801,8.043,10.199,8.043,10.199,8.043z M81.275,161.271h349.449l46.364,46.13H34.911L81.275,161.271z M477.053,74.434H34.948L81.27,28.44h349.46L477.053,74.434z M20.398,193.065v-31.794h31.956L20.398,193.065z M20.398,94.833h31.933L20.398,126.56V94.833z M34.934,140.873l46.337-46.04 h349.457l46.337,46.04H34.934z M491.602,193.065l-31.955-31.794h31.955V193.065z M491.602,126.56l-31.933-31.727h31.933V126.56z M20.398,259.676v-31.878h31.986L20.398,259.676z M459.617,227.8h31.985v31.878L459.617,227.8z M491.602,60.134l-31.546-31.322 l-0.374-0.371h31.92V60.134z M20.398,60.134V28.441h31.92L20.398,60.134z M20.398,451.514l32.045,32.044H20.398V451.514z M430.709,483.558H81.291l-60.892-60.892V288.477L81.281,227.8h349.438l60.883,60.677v134.189L430.709,483.558z M491.602,483.558 h-32.044l32.044-32.044V483.558z"></path> <path style="fill:#4C1D1D;" d="M457.954,322.187h-4.866c-5.632,0-10.199,4.567-10.199,10.199c0,5.632,4.567,10.199,10.199,10.199 h4.866c5.632,0,10.199-4.567,10.199-10.199C468.154,326.754,463.586,322.187,457.954,322.187z"></path> <path style="fill:#4C1D1D;" d="M375.93,342.586h37.446c5.632,0,10.199-4.567,10.199-10.199c0-5.632-4.567-10.199-10.199-10.199 H375.93c-5.632,0-10.199,4.567-10.199,10.199C365.731,338.018,370.297,342.586,375.93,342.586z"></path> <path style="fill:#4C1D1D;" d="M457.954,368.548H375.93c-5.632,0-10.199,4.567-10.199,10.199c0,5.632,4.567,10.199,10.199,10.199 h82.024c5.632,0,10.199-4.567,10.199-10.199C468.154,373.115,463.586,368.548,457.954,368.548z"></path> <path style="fill:#4C1D1D;" d="M138.332,322.187H56.309c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199 h82.023c5.633,0,10.199-4.567,10.199-10.199C148.531,326.754,143.965,322.187,138.332,322.187z"></path> <path style="fill:#4C1D1D;" d="M138.332,368.548H56.309c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199 h82.023c5.633,0,10.199-4.567,10.199-10.199C148.531,373.115,143.965,368.548,138.332,368.548z"></path> </g> </g></svg>`;

  paymentOptionsLogos.append(masterCard, visaCard, cashLogo);
  misc.append(followUs, socials, paymentOptions, paymentOptionsLogos);

  const separator = document.createElement("hr");
  separator.classList.add("solid-line");

  const policySection = document.createElement("p");
  policySection.classList.add("policy-section");
  policySection.textContent = "© 2025 Amsterdam Bakery. All rights reserved.";

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
