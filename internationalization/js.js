// Get the body element directly
const main = document.body;

// Select all select elements and add event listeners
document.querySelectorAll("select").forEach(select => {
  select.addEventListener("change", (event) => {
    const prop = select.dataset.for; // Access data-for attribute using dataset
    main.style[prop] = event.target.value;
  });
});
