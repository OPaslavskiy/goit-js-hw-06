const numberOfCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${numberOfCategories}`);

const categories = Array.from(document.querySelectorAll(".item h2"));
const elements = Array.from(document.querySelectorAll(".item ul"));

const category = categories.map((category) => category.innerHTML);
const quantityElement = elements.map((element) => element.children.length);

for (let i = 0; i < category.length; i += 1) {
  console.log(`Category: ${category[i]}`);
  console.log(`Elements: ${quantityElement[i]}`);
}
