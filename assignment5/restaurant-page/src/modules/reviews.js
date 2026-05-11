class review {
  constructor(profilePic, name, comment) {
    this.profilePic = profilePic;
    this.name = name;
    this.comment = comment;
  }
}

const reviews = [
  new review(
    "https://randomuser.me/api/portraits/women/32.jpg",
    "Lisa van Dijk",
    '"The Dubai Crêpe is absolutely heavenly! The perfect balance of sweet and rich flavors, with a texture that’s just right. I’ll definitely be coming back!"',
  ),
  new review(
    "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.ZlhtCzn2PiptsT4vy_c1xQHaHa%3Fpid%3DApi&sp=1778518043Tb1a4c815366c36a0c24bc8b8de612d550ab82351cda2a64d9aea598118d38e8a",
    "Mark Janssen",
    '"These are the best macarons I’ve ever had outside of France. The texture is spot on and the flavors are simply divine. Truly a must-try!"',
  ),
  new review(
    "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.kLuVl7_2soHqjgecM56X2AHaLL%3Fr%3D0%26pid%3DApi&sp=1778518252Tc921f153ac9046ff6c74d0d325bda45a284dc219630785e27dccb19cd2f5f634",
    "Sanne de Vries",
    '"These are the best macarons I’ve ever had outside of France. The texture is spot on and the flavors are simply divine. Truly a must-try!"',
  ),
];

function loadReviews() {
  console.log("reviews are loading");
  const content = document.getElementById("content");

  const reviewsSection = document.createElement("section");
  reviewsSection.classList.add("reviews-section");
  reviewsSection.id = "reviews-secion";

  const reviewsTitle = document.createElement("h1");
  reviewsTitle.classList.add("reveiws-title");
  reviewsTitle.textContent = "What our customers say?";

  const reviewsGallary = document.createElement("div");
  reviewsGallary.classList.add("reviews-gallary");

  reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");
    const reviewText = document.createElement("p");
    console.log(review.comment);
    reviewText.textContent = review.comment;
    const reviewerName = document.createElement("h3");
    reviewerName.textContent = review.name;
    const reviewerPic = document.createElement("img");
    reviewerPic.src = review.profilePic;

    reviewCard.append(reviewerPic, reviewerName, reviewText);
    reviewsGallary.append(reviewCard);
  });

  reviewsSection.append(reviewsTitle, reviewsGallary);
  content.appendChild(reviewsSection);
}

export default loadReviews;
