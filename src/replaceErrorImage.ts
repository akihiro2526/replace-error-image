export const replaceErrorImage = (
  targetImageClassName: string,
  replaceImage: string
) => {
  window.addEventListener("DOMContentLoaded", () => {
    const images =
      document.querySelectorAll<HTMLImageElement>(targetImageClassName);

    images.forEach((container, index) => {
      let tempImg = new Image();
      tempImg.src = container.src;

      tempImg.onerror = () => {
        images[index].src = replaceImage;
      };
    });
  });
};
