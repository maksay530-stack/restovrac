document.querySelectorAll("[data-compare]").forEach((box)=>{
  const input=box.querySelector("input[type=range]");
  const update=()=>box.style.setProperty("--pos",`${input.value}%`);
  input.addEventListener("input",update);update();
});