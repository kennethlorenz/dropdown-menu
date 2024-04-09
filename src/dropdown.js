export default function dropDownMenu(...menuItems) {
  const dropDown = document.createElement("div");
  dropDown.style.backgroundColor = "red";
  dropDown.classList.add("dropdown");

  const btn = document.createElement("button");
  btn.textContent = "Menu";
  dropDown.appendChild(btn);

  const dropDownContent = document.createElement("div");
  dropDownContent.classList.add("dropdown-content");
  dropDownContent.classList.add("hidden");
  dropDown.appendChild(dropDownContent);

  menuItems.forEach((item) => {
    const aTag = document.createElement("a");
    aTag.href = "#";
    aTag.textContent = item;
    dropDownContent.appendChild(aTag);
  });

  dropDown.addEventListener("mouseover", () => {
    dropDownContent.classList.remove("hidden");
  });

  dropDown.addEventListener("mouseleave", () => {
    dropDownContent.classList.add("hidden");
  });
  return dropDown;
}
