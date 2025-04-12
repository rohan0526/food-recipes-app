document.addEventListener("DOMContentLoaded", function() {
    const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];
    const categoryContainer = document.getElementById("categories");
    const recipeContainer = document.getElementById("recipes");
    const searchBox = document.getElementById("search");
    const clearSearch = document.getElementById("clearSearch");
    const searchSuggestions = document.getElementById("searchSuggestions");

    // Dummy recipes
    const recipes = [
        { id: 1, name: "Fluffy Pancakes", category: "Breakfast", image: "images/pancakes.jpg", rating: 4.8 },
        { id: 2, name: "Grilled Chicken Salad", category: "Lunch", image: "images/chicken-salad.jpg", rating: 4.6 },
        { id: 3, name: "Creamy Pasta Alfredo", category: "Dinner", image: "images/pasta-alfredo.jpg", rating: 4.7 },
        { id: 4, name: "Berry Smoothie Bowl", category: "Breakfast", image: "images/smoothie-bowl.jpg", rating: 4.5 },
        { id: 5, name: "Spicy Chicken Tacos", category: "Lunch", image: "images/tacos.jpg", rating: 4.9 },
        { id: 6, name: "Chocolate Lava Cake", category: "Dessert", image: "images/lava-cake.jpg", rating: 4.8 },
        { id: 7, name: "Mediterranean Salad", category: "Lunch", image: "images/med-salad.jpg", rating: 4.4 },
        { id: 8, name: "Butter Chicken", category: "Dinner", image: "images/butter-chicken.jpg", rating: 4.9 },
        { id: 9, name: "Apple Cinnamon Oatmeal", category: "Breakfast", image: "images/oatmeal.jpg", rating: 4.3 },
        { id: 10, name: "Tiramisu", category: "Dessert", image: "images/tiramisu.jpg", rating: 4.7 },
        { id: 11, name: "Sushi Roll Platter", category: "Dinner", image: "images/sushi.jpg", rating: 4.8 },
        { id: 12, name: "Fresh Fruit Parfait", category: "Breakfast", image: "images/parfait.jpg", rating: 4.5 }
    ];

    // Load categories
    categories.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.className = "bg-blue-500 text-white px-4 py-2 rounded category-btn animated-button";
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.onclick = () => filterRecipes(cat);
        categoryContainer.appendChild(btn);
    });

    // Load recipes
    function displayRecipes(list) {
        recipeContainer.innerHTML = "";
        list.forEach(recipe => {
            const card = document.createElement("div");
            card.className = "recipe-card";
            card.innerHTML = `
                <div class="recipe-image-container">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="recipe-rating">${recipe.rating}</div>
                </div>
                <div class="recipe-content">
                    <div class="recipe-category">${recipe.category}</div>
                    <h3 class="recipe-title">${recipe.name}</h3>
                </div>
                <a href="recipe.html?id=${recipe.id}" class="view-recipe-btn">
                    View Recipe
                </a>
            `;
            recipeContainer.appendChild(card);
        });
    }

    displayRecipes(recipes);

    // Show/hide clear button based on search input
    searchBox.addEventListener("input", function(e) {
        const hasValue = e.target.value.length > 0;
        clearSearch.classList.toggle("visible", hasValue);
        updateSuggestions(e.target.value);
    });

    // Clear search
    clearSearch.addEventListener("click", function() {
        searchBox.value = "";
        clearSearch.classList.remove("visible");
        searchSuggestions.classList.remove("active");
        displayRecipes(recipes); // Show all recipes
    });

    // Handle suggestions
    function updateSuggestions(query) {
        if (query.length < 2) {
            searchSuggestions.classList.remove("active");
            return;
        }

        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(query.toLowerCase()) ||
            recipe.category.toLowerCase().includes(query.toLowerCase()) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(query.toLowerCase()))
        );

        if (filteredRecipes.length > 0) {
            searchSuggestions.innerHTML = filteredRecipes
                .slice(0, 5)
                .map(recipe => `
                    <div class="suggestion-item" onclick="selectRecipe(${recipe.id})">
                        <img src="${recipe.image}" alt="${recipe.name}">
                        <div>
                            <div class="font-semibold">${recipe.name}</div>
                            <div class="text-sm text-gray-500">${recipe.category}</div>
                        </div>
                    </div>
                `).join("");
            searchSuggestions.classList.add("active");
        } else {
            searchSuggestions.innerHTML = `
                <div class="suggestion-item">
                    <div class="text-gray-500">No recipes found</div>
                </div>
            `;
            searchSuggestions.classList.add("active");
        }
    }

    // Close suggestions when clicking outside
    document.addEventListener("click", function(e) {
        if (!searchBox.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.remove("active");
        }
    });

    // Handle recipe selection
    window.selectRecipe = function(id) {
        window.location.href = `recipe.html?id=${id}`;
    };

    // Add keyboard navigation
    searchBox.addEventListener("keydown", function(e) {
        const suggestions = searchSuggestions.querySelectorAll(".suggestion-item");
        let currentFocus = -1;

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            // Update focus
            currentFocus = e.key === "ArrowDown" 
                ? (currentFocus < suggestions.length - 1 ? currentFocus + 1 : 0)
                : (currentFocus > 0 ? currentFocus - 1 : suggestions.length - 1);
            
            suggestions.forEach((item, index) => {
                item.classList.toggle("bg-gray-100", index === currentFocus);
            });
        }

        if (e.key === "Enter" && currentFocus > -1) {
            suggestions[currentFocus].click();
        }
    });

    // Filter by Category
    function filterRecipes(category) {
        const filtered = recipes.filter(r => r.category === category);
        displayRecipes(filtered);
    }
});
