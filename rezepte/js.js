const recipeContainer = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");

const recipes = [
    {
        name: "Butterchicken",
        link: "butterchicken.html",
    },
    {
        name: "Tikka Masala",
        link: "tikka.html",
    },
    {
        name: "KFC",
        link: "KFC.html",
    },
    {
        name: "Bolognese",
        link: "bolognese.html",
    },
    {
        name: "Pav",
        link: "Pav.html",
    },
    {
        name: "Pizza",
        link: "pizza.html",
    },
    {
        name: "Brownies",
        link: "Brownies.html",
    },
    {
        name: "(Galic) Naan",
        link: "(Galic) Naan.html",
    },
    {
        name: "Risotto",
        link: "risotto.html",
    },
];

function displayRecipes() {
    const searchQuery = searchInput.value.toLowerCase();

    // Remove all recipe cards
    recipeContainer.innerHTML = '';

    recipes.forEach(recipe => {
        if (recipe.name.toLowerCase().includes(searchQuery)) {
            const card = document.createElement("a");
            card.className = "recipe-card";
            card.href = recipe.link;
            card.innerHTML = `<h2>${recipe.name}</h2>`;
            recipeContainer.appendChild(card);
        }
    });
}


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

 
src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"