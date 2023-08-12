export const replaceErrorImage = (
  targetImageClassName: string,
  replaceImage: string
) => {
  if (!targetImageClassName) {
    throw new Error("targetImageClassName is required");
  }

  if (!replaceImage) {
    throw new Error("replaceImage is required");
  }

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
