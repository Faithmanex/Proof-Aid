let currentIndex = 0;
  const reviewContainers = document.querySelectorAll('.review-container');
  
  function scrollReviews() {
    currentIndex++;
    if (currentIndex >= reviewContainers.length) {
      currentIndex = 0;
    }
    reviewContainers[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }
  
  setInterval(scrollReviews, 1000);