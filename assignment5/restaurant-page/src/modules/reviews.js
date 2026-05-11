import reviewrPic1 from "../../assets/reviewer-pic1.jpeg";
import reviewrPic2 from "../../assets/reviewr-pic2.jpg";
import reviewrPic3 from "../../assets/reviewr-pic3.jpg";

class review {
  constructor(profilePic, name, comment) {
    this.profilePic = profilePic;
    this.name = name;
    this.comment = comment;
  }
}

const reviews = [
  new review(
    reviewrPic2,
    "Lisa van Dijk",
    '"The Dubai Crêpe is absolutely heavenly! The perfect balance of sweet and rich flavors, with a texture that’s just right. I’ll definitely be coming back!"',
  ),
  new review(
    reviewrPic3,
    "Mark Janssen",
    '"These are the best macarons I’ve ever had outside of France. The texture is spot on and the flavors are simply divine. Truly a must-try!"',
  ),
  new review(
    reviewrPic1,
    "Sanne de Vries",
    '"These are the best macarons I’ve ever had outside of France. The texture is spot on and the flavors are simply divine. Truly a must-try!"',
  ),
];

function loadReviews() {
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
