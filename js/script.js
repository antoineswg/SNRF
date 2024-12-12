document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserveRight = document.querySelectorAll(".right1, .right2");

  const observerRight = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hiddenRight");
          entry.target.classList.add("slideInFromRight");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.1, 
    }
  );

  elementsToObserveRight.forEach((element) => observerRight.observe(element));

  const elementsToObserveLeft = document.querySelectorAll(".left1");

  const observerLeft = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hiddenLeft");
          entry.target.classList.add("slideInFromLeft");
          observerLeft.unobserve(entry.target); // Stop observing after adding the class
        }
      });
    },
    {
      threshold: 0.1, // Adjust as needed
    }
  );

  elementsToObserveLeft.forEach((element) => observerLeft.observe(element));
});
