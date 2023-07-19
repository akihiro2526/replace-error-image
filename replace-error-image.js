window.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".carousel-img");

  imageContainers.forEach((container, index) => {
    let newImg = new Image();
    newImg.src = container.src;

    newImg.onerror = () => {
      imageContainers[index].src =
        "https://meieki-rdental.com/dental/wp-content/uploads/2022/10/dental-img-1.jpg";
    };
  });
});
