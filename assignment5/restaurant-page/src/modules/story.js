function loadOurStory() {
  const content = document.getElementById("content");

  const ourStorySection = document.createElement("section");
  ourStorySection.classList.add("our-story-section");

  const ourStoryImage = document.createElement("img");
  ourStoryImage.classList.add("our-story-image");
  ourStoryImage.src =
    "https://images.stockcake.com/public/5/3/f/53fa0e6b-a71f-4b25-bae8-adaa9531bb2b_large/raspberry-cream-cake-stockcake.jpg";

  const ourStoryText = document.createElement("div");
  ourStoryText.classList.add("our-story-text-section");

  const ourStoryTextTitle = document.createElement("h1");
  ourStoryTextTitle.classList.add("our-story-text-title");
  ourStoryTextTitle.textContent = "Our Story";

  const ourStoryTextContent = document.createElement("p");
  ourStoryTextContent.classList.add("our-story-text-content");
  ourStoryTextContent.textContent =
    "Amsterdam Bakery was born from a passion for delicious desserts and a desire to share unique flavor experiences. Our founder began his career in pastry arts in Paris and brought his knowledge and skills back to the Netherlands.\n At Amsterdam Bakery, we believe that a great dessert is more than just sweetness, it’s a work of art that stimulates all the senses. We use only the finest ingredients and combine traditional techniques with modern creativity.";

  ourStoryText.append(ourStoryTextTitle, ourStoryTextContent);

  ourStorySection.append(ourStoryImage, ourStoryText);

  content.appendChild(ourStorySection);
}

export default loadOurStory;
