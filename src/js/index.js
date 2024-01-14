const body = document.querySelector("body");

const buttonThemeAlt = document.getElementById("button-theme-alt");

const buttonImageAlt = document.querySelector(".button-image");

buttonThemeAlt.addEventListener("click", () => {
  const isDarkThemeActive = body.classList.contains("dark-theme");

  body.classList.toggle("dark-theme");

  if (isDarkThemeActive) {
    buttonImageAlt.setAttribute("src", "./src/images/sun.png");
  } else {
    buttonImageAlt.setAttribute("src", "./src/images/moon.png");
  }
});
