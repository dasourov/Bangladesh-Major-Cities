const buttons = document.querySelectorAll("button");
const areas = document.querySelectorAll("a");
const svg = document.querySelector("svg");

buttons.forEach((button) => {
  const areaIds = button.dataset.areas.split(" ");
  const buttonColor = button.dataset.color || "rgb(228, 11, 11)";

  button.addEventListener("mouseover", () => {
    areas.forEach((area) => {
      if (areaIds.includes(area.id)) {
        area.style.fill = buttonColor;
      }
    });
  });

  button.addEventListener("mouseout", () => {
    areas.forEach((area) => {
      if (areaIds.includes(area.id)) {
        area.style.fill = "gray";
      }
    });
  });
});

const areas1 = document.querySelectorAll("path");

areas1.forEach((area) => {
  area.addEventListener("mouseover", () => {
    area.style.fill = "red";
  });

  area.addEventListener("mouseout", () => {
    area.style.fill = area.getAttribute("fill");
  });
});

document.querySelectorAll('button[id^="btn"]').forEach(function (button) {
  var link = document.getElementById(button.id.replace("btn", "a"));

  button.addEventListener("mouseover", function () {
    link.style.color = "white";
  });

  button.addEventListener("mouseleave", function () {
    link.style.color = "";
  });
});
