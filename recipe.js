document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get("id");

    const recipes = [
        {
            id: 1,
            name: "Fluffy Pancakes",
            category: "Breakfast",
            image: "images/pancakes.jpg",
            prepTime: "15 mins",
            cookTime: "20 mins",
            servings: 4,
            difficulty: "Easy",
            rating: 4.8,
            ingredients: [
                "2 cups all-purpose flour",
                "2 tablespoons sugar",
                "2 teaspoons baking powder",
                "1/2 teaspoon salt",
                "2 cups milk",
                "2 large eggs",
                "1/4 cup melted butter"
            ],
            instructions: [
                "Mix dry ingredients in a large bowl",
                "Whisk wet ingredients in another bowl",
                "Combine wet and dry ingredients until just mixed",
                "Heat griddle to medium temperature",
                "Pour 1/4 cup batter for each pancake",
                "Cook until bubbles form, then flip",
                "Cook other side until golden brown"
            ],
            tips: "Let the batter rest for 5 minutes before cooking for fluffier pancakes.",
            nutrition: {
                calories: "320",
                protein: "8g",
                carbs: "45g",
                fat: "12g"
            }
        },
        {
            id: 2,
            name: "Grilled Chicken Salad",
            category: "Lunch",
            image: "images/chicken-salad.jpg",
            prepTime: "20 mins",
            cookTime: "15 mins",
            servings: 2,
            difficulty: "Medium",
            rating: 4.6,
            ingredients: [
                "2 chicken breasts",
                "Mixed salad greens",
                "Cherry tomatoes",
                "Cucumber",
                "Red onion",
                "Olive oil",
                "Balsamic vinegar",
                "Salt and pepper"
            ],
            instructions: [
                "Season chicken breasts with salt and pepper",
                "Grill chicken for 6-7 minutes each side",
                "Let chicken rest for 5 minutes, then slice",
                "Wash and chop all vegetables",
                "Mix olive oil and balsamic for dressing",
                "Combine all ingredients in a bowl",
                "Drizzle with dressing and serve"
            ],
            tips: "Marinate chicken for 30 minutes before grilling for extra flavor.",
            nutrition: {
                calories: "380",
                protein: "42g",
                carbs: "12g",
                fat: "18g"
            }
        },
        {
            id: 3,
            name: "Creamy Pasta Alfredo",
            category: "Dinner",
            image: "images/pasta-alfredo.jpg",
            prepTime: "10 mins",
            cookTime: "20 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.7,
            ingredients: [
                "1 pound fettuccine pasta",
                "1 cup heavy cream",
                "1/2 cup butter",
                "1/2 cup grated Parmesan cheese",
                "2 cloves garlic, minced",
                "Salt and pepper",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Cook pasta according to package instructions",
                "In a large pan, melt butter and add garlic",
                "Add heavy cream and simmer for 5 minutes",
                "Stir in Parmesan cheese until melted",
                "Add cooked pasta to the sauce",
                "Season with salt and pepper",
                "Garnish with parsley and serve"
            ],
            tips: "Reserve some pasta water to thin the sauce if needed.",
            nutrition: {
                calories: "650",
                protein: "18g",
                carbs: "71g",
                fat: "32g"
            }
        },
        {
            id: 4,
            name: "Berry Smoothie Bowl",
            category: "Breakfast",
            image: "images/smoothie-bowl.jpg",
            prepTime: "10 mins",
            cookTime: "0 mins",
            servings: 1,
            difficulty: "Easy",
            rating: 4.5,
            ingredients: [
                "1 cup mixed berries (frozen)",
                "1 ripe banana",
                "1/2 cup Greek yogurt",
                "1/4 cup almond milk",
                "1 tbsp honey or maple syrup",
                "Toppings: granola, fresh berries, chia seeds, sliced almonds"
            ],
            instructions: [
                "Add frozen berries, banana, yogurt and almond milk to a blender",
                "Blend until smooth and creamy, adding more milk if needed",
                "Pour into a bowl",
                "Top with fresh berries, granola, chia seeds and sliced almonds",
                "Drizzle with honey or maple syrup"
            ],
            tips: "Freeze the banana beforehand for an extra thick smoothie bowl.",
            nutrition: {
                calories: "295",
                protein: "14g",
                carbs: "52g",
                fat: "7g"
            }
        },
        {
            id: 5,
            name: "Spicy Chicken Tacos",
            category: "Lunch",
            image: "images/tacos.jpg",
            prepTime: "15 mins",
            cookTime: "15 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.9,
            ingredients: [
                "1 pound ground chicken",
                "1 packet taco seasoning",
                "8 corn tortillas",
                "1 cup shredded lettuce",
                "1 cup diced tomatoes",
                "1/2 cup shredded cheese",
                "1/4 cup sour cream",
                "1 avocado, sliced",
                "1 lime, cut into wedges"
            ],
            instructions: [
                "Brown ground chicken in a pan over medium heat",
                "Add taco seasoning and water according to package directions",
                "Simmer until liquid is reduced",
                "Warm tortillas in a dry pan or microwave",
                "Assemble tacos with meat, lettuce, tomatoes, cheese",
                "Top with sour cream and avocado slices",
                "Serve with lime wedges"
            ],
            tips: "Toast the tortillas lightly for extra flavor and texture.",
            nutrition: {
                calories: "380",
                protein: "32g",
                carbs: "30g",
                fat: "18g"
            }
        },
        {
            id: 6,
            name: "Chocolate Lava Cake",
            category: "Dessert",
            image: "images/lava-cake.jpg",
            prepTime: "15 mins",
            cookTime: "12 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.8,
            ingredients: [
                "200g dark chocolate",
                "200g unsalted butter",
                "200g granulated sugar",
                "4 eggs",
                "2 tbsp all-purpose flour",
                "Cocoa powder for dusting",
                "Vanilla ice cream for serving"
            ],
            instructions: [
                "Preheat oven to 430°F (220°C)",
                "Melt chocolate and butter together",
                "Whisk eggs and sugar until light and fluffy",
                "Fold chocolate mixture into eggs",
                "Sift in flour and fold gently",
                "Pour into greased ramekins",
                "Bake for 12 minutes until edges are set but center is soft",
                "Serve immediately with vanilla ice cream"
            ],
            tips: "Don't overbake - the center should be gooey! For best results, refrigerate the batter for 1 hour before baking.",
            nutrition: {
                calories: "450",
                protein: "6g",
                carbs: "48g",
                fat: "28g"
            }
        },
        {
            id: 7,
            name: "Mediterranean Salad",
            category: "Lunch",
            image: "images/med-salad.jpg",
            prepTime: "15 mins",
            cookTime: "0 mins",
            servings: 2,
            difficulty: "Easy",
            rating: 4.4,
            ingredients: [
                "2 cups mixed greens",
                "1/2 cup cherry tomatoes, halved",
                "1/2 cucumber, diced",
                "1/4 red onion, thinly sliced",
                "1/2 cup kalamata olives",
                "1/2 cup feta cheese, crumbled",
                "1/4 cup extra virgin olive oil",
                "2 tbsp red wine vinegar",
                "1 tsp dried oregano",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Combine mixed greens, tomatoes, cucumber, red onion, olives, and feta in a large bowl",
                "In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt and pepper",
                "Pour dressing over salad and toss gently",
                "Serve immediately"
            ],
            tips: "Add grilled chicken or shrimp to make it a complete meal.",
            nutrition: {
                calories: "320",
                protein: "8g",
                carbs: "12g",
                fat: "28g"
            }
        },
        {
            id: 8,
            name: "Butter Chicken",
            category: "Dinner",
            image: "images/butter-chicken.jpg",
            prepTime: "30 mins",
            cookTime: "25 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.9,
            ingredients: [
                "1.5 pounds chicken thighs, cut into pieces",
                "1 cup plain yogurt",
                "2 tbsp lemon juice",
                "2 tsp ground cumin",
                "2 tsp ground turmeric",
                "2 tsp garam masala",
                "2 tsp paprika",
                "4 tbsp butter",
                "1 large onion, diced",
                "4 cloves garlic, minced",
                "1 tbsp ginger, minced",
                "1 cup tomato sauce",
                "1 cup heavy cream",
                "Fresh cilantro for garnish",
                "Basmati rice for serving"
            ],
            instructions: [
                "Marinate chicken with yogurt, lemon juice, and half of the spices for at least 1 hour",
                "In a large skillet, melt butter over medium heat",
                "Add onions, garlic, and ginger, and sauté until soft",
                "Add remaining spices and cook for 1 minute",
                "Add marinated chicken and cook until browned",
                "Stir in tomato sauce and simmer for 15 minutes",
                "Add heavy cream and simmer for another 5 minutes",
                "Garnish with cilantro and serve with basmati rice"
            ],
            tips: "For more authentic flavor, use Kasoori Methi (dried fenugreek leaves) in the sauce.",
            nutrition: {
                calories: "520",
                protein: "35g",
                carbs: "18g",
                fat: "36g"
            }
        },
        {
            id: 9,
            name: "Apple Cinnamon Oatmeal",
            category: "Breakfast",
            image: "images/oatmeal.jpg",
            prepTime: "5 mins",
            cookTime: "10 mins",
            servings: 2,
            difficulty: "Easy",
            rating: 4.3,
            ingredients: [
                "1 cup rolled oats",
                "2 cups milk (or almond milk)",
                "1 apple, diced",
                "1 tbsp cinnamon",
                "2 tbsp maple syrup",
                "1/4 cup chopped walnuts",
                "Pinch of salt"
            ],
            instructions: [
                "Combine oats, milk, diced apple, cinnamon, and salt in a pot",
                "Bring to a boil, then reduce heat and simmer for 8-10 minutes, stirring occasionally",
                "Remove from heat and let stand for 2 minutes",
                "Serve topped with maple syrup and chopped walnuts"
            ],
            tips: "For creamier oatmeal, use a combination of milk and water. Try sliced bananas as an alternative topping.",
            nutrition: {
                calories: "285",
                protein: "9g",
                carbs: "45g",
                fat: "10g"
            }
        },
        {
            id: 10,
            name: "Tiramisu",
            category: "Dessert",
            image: "images/tiramisu.jpg",
            prepTime: "30 mins",
            cookTime: "0 mins",
            servings: 8,
            difficulty: "Medium",
            rating: 4.7,
            ingredients: [
                "6 egg yolks",
                "3/4 cup sugar",
                "2/3 cup milk",
                "1 1/4 cups heavy cream",
                "1/2 tsp vanilla extract",
                "1 pound mascarpone cheese",
                "1/4 cup strong espresso, cooled",
                "2 tbsp rum (optional)",
                "24 ladyfinger cookies",
                "Cocoa powder for dusting"
            ],
            instructions: [
                "Beat egg yolks and sugar until light and fluffy",
                "Heat milk in a saucepan until simmering, then gradually whisk into egg mixture",
                "Cook over low heat, stirring constantly, until mixture thickens",
                "Chill custard in refrigerator",
                "Whip heavy cream and vanilla until stiff peaks form",
                "Fold mascarpone into custard, then fold in whipped cream",
                "Mix espresso and rum in a shallow dish",
                "Dip ladyfingers quickly in coffee mixture and place in a single layer in a 9x13 dish",
                "Spread half of mascarpone mixture over ladyfingers",
                "Repeat layers, ending with mascarpone mixture",
                "Refrigerate for at least 4 hours or overnight",
                "Dust with cocoa powder before serving"
            ],
            tips: "For the best flavor, make tiramisu a day ahead to allow the flavors to meld.",
            nutrition: {
                calories: "420",
                protein: "8g",
                carbs: "38g",
                fat: "27g"
            }
        },
        {
            id: 11,
            name: "Sushi Roll Platter",
            category: "Dinner",
            image: "images/sushi.jpg",
            prepTime: "45 mins",
            cookTime: "20 mins",
            servings: 4,
            difficulty: "Hard",
            rating: 4.8,
            ingredients: [
                "2 cups sushi rice",
                "3 cups water",
                "1/4 cup rice vinegar",
                "2 tbsp sugar",
                "1 tsp salt",
                "8 sheets nori (seaweed)",
                "1 cucumber, julienned",
                "1 avocado, sliced",
                "1/2 pound sashimi-grade tuna or salmon",
                "Wasabi paste",
                "Pickled ginger",
                "Soy sauce for serving"
            ],
            instructions: [
                "Rinse rice until water runs clear, then cook with water in a rice cooker",
                "Mix rice vinegar, sugar, and salt, then fold into cooked rice",
                "Let rice cool to room temperature",
                "Place a nori sheet on a bamboo sushi mat",
                "Spread a thin layer of rice over nori, leaving 1-inch border at the top",
                "Place fillings in a line across the center of the rice",
                "Roll the bamboo mat, pressing firmly",
                "Seal the edge with a few grains of rice",
                "Cut roll into 6-8 pieces with a wet knife",
                "Repeat with remaining ingredients",
                "Serve with wasabi, ginger, and soy sauce"
            ],
            tips: "Keep a small bowl of water nearby to wet your hands when handling rice to prevent sticking.",
            nutrition: {
                calories: "380",
                protein: "18g",
                carbs: "65g",
                fat: "8g"
            }
        },
        {
            id: 12,
            name: "Fresh Fruit Parfait",
            category: "Breakfast",
            image: "images/parfait.jpg",
            prepTime: "15 mins",
            cookTime: "0 mins",
            servings: 2,
            difficulty: "Easy",
            rating: 4.5,
            ingredients: [
                "2 cups Greek yogurt",
                "2 tbsp honey",
                "1 tsp vanilla extract",
                "1 cup mixed berries (strawberries, blueberries, raspberries)",
                "1 banana, sliced",
                "1/2 cup granola",
                "2 tbsp chia seeds",
                "Fresh mint leaves for garnish"
            ],
            instructions: [
                "Mix yogurt with honey and vanilla in a bowl",
                "In two serving glasses, layer yogurt, berries, banana, and granola",
                "Begin and end with yogurt layer",
                "Top with remaining berries, granola, and chia seeds",
                "Garnish with mint leaves",
                "Serve immediately or refrigerate for up to 2 hours"
            ],
            tips: "For a make-ahead option, keep the granola separate until serving time to maintain its crunch.",
            nutrition: {
                calories: "310",
                protein: "18g",
                carbs: "42g",
                fat: "9g"
            }
        },
        {
            id: 13,
            name: "Fried Chicken",
            category: "Dinner",
            image: "images/fried-chicken.jpg",
            prepTime: "30 mins",
            cookTime: "25 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.8,
            ingredients: [
                "4 chicken pieces",
                "2 cups buttermilk",
                "2 cups all-purpose flour",
                "1 tbsp paprika",
                "1 tbsp garlic powder",
                "1 tbsp black pepper",
                "2 tsp salt",
                "Oil for frying"
            ],
            instructions: [
                "Marinate chicken in buttermilk for 2 hours",
                "Mix flour with spices in a bowl",
                "Coat chicken pieces in seasoned flour",
                "Heat oil to 350°F",
                "Fry chicken for 12-15 minutes until golden",
                "Drain on paper towels",
                "Serve hot"
            ],
            tips: "Double-dip chicken in buttermilk and flour for extra crispiness.",
            nutrition: {
                calories: "420",
                protein: "28g",
                carbs: "22g",
                fat: "26g"
            }
        },
        {
            id: 14,
            name: "Paneer Tikka Masala",
            category: "Dinner",
            image: "images/paneer-tikka-masala.jpg",
            prepTime: "25 mins",
            cookTime: "30 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.7,
            ingredients: [
                "500g paneer, cubed",
                "2 onions, pureed",
                "3 tomatoes, pureed",
                "2 tbsp ginger-garlic paste",
                "2 tbsp butter",
                "1 cup heavy cream",
                "Garam masala",
                "Kasuri methi",
                "Salt to taste"
            ],
            instructions: [
                "Marinate paneer in yogurt and spices",
                "Grill paneer until charred",
                "Sauté onion puree until golden",
                "Add tomato puree and spices",
                "Simmer with cream",
                "Add grilled paneer",
                "Garnish with cream and kasuri methi"
            ],
            tips: "Soak paneer in warm water before marinating for softer texture.",
            nutrition: {
                calories: "380",
                protein: "18g",
                carbs: "12g",
                fat: "32g"
            }
        },
        {
            id: 15,
            name: "Chocolate Ice Cream",
            category: "Dessert",
            image: "images/chocolate-icecream.jpg",
            prepTime: "20 mins",
            cookTime: "4 hours",
            servings: 6,
            difficulty: "Easy",
            rating: 4.9,
            ingredients: [
                "2 cups heavy cream",
                "1 cup milk",
                "3/4 cup sugar",
                "1/2 cup cocoa powder",
                "1 tsp vanilla extract",
                "Pinch of salt"
            ],
            instructions: [
                "Whisk cocoa, sugar, and salt",
                "Add milk and blend until smooth",
                "Stir in heavy cream and vanilla",
                "Churn in ice cream maker",
                "Freeze for 4 hours",
                "Let soften slightly before serving"
            ],
            tips: "Use high-quality cocoa powder for richer flavor.",
            nutrition: {
                calories: "320",
                protein: "4g",
                carbs: "28g",
                fat: "22g"
            }
        },
        {
            id: 16,
            name: "Mango Milkshake",
            category: "Drinks",
            image: "images/mango-shake.jpg",
            prepTime: "10 mins",
            cookTime: "0 mins",
            servings: 2,
            difficulty: "Easy",
            rating: 4.6,
            ingredients: [
                "2 ripe mangoes",
                "1 cup yogurt",
                "1/2 cup milk",
                "2 tbsp honey",
                "Cardamom powder",
                "Ice cubes"
            ],
            instructions: [
                "Peel and chop mangoes",
                "Blend mangoes until smooth",
                "Add yogurt, milk, and honey",
                "Blend with ice cubes",
                "Add cardamom powder",
                "Serve chilled"
            ],
            tips: "Use Alphonso mangoes when in season for best flavor.",
            nutrition: {
                calories: "180",
                protein: "5g",
                carbs: "35g",
                fat: "4g"
            }
        },
        {
            id: 17,
            name: "Chicken Biryani",
            category: "Dinner",
            image: "images/chicken-biryani.jpg",
            prepTime: "40 mins",
            cookTime: "50 mins",
            servings: 6,
            difficulty: "Hard",
            rating: 4.9,
            ingredients: [
                "1kg chicken",
                "500g basmati rice",
                "2 onions, sliced",
                "Yogurt for marination",
                "Whole spices",
                "Saffron",
                "Ghee",
                "Mint and coriander"
            ],
            instructions: [
                "Marinate chicken with yogurt and spices",
                "Cook rice with whole spices until 70% done",
                "Layer chicken and rice",
                "Add saffron milk and ghee",
                "Seal pot with dough",
                "Cook on low heat for 25 minutes",
                "Let rest for 10 minutes before opening"
            ],
            tips: "Soak rice for 30 minutes before cooking for best results.",
            nutrition: {
                calories: "450",
                protein: "32g",
                carbs: "48g",
                fat: "18g"
            }
        },
        {
            id: 18,
            name: "Kimchi",
            category: "Sides",
            image: "images/kimchi.jpg",
            prepTime: "1 hour",
            cookTime: "3-5 days",
            servings: 8,
            difficulty: "Medium",
            rating: 4.7,
            ingredients: [
                "1 Napa cabbage",
                "Korean red pepper flakes",
                "Garlic and ginger",
                "Fish sauce",
                "Green onions",
                "Carrots",
                "Sea salt"
            ],
            instructions: [
                "Salt cabbage and let sit for 2 hours",
                "Rinse and drain cabbage",
                "Mix pepper flakes with garlic and ginger",
                "Add vegetables and seasonings",
                "Pack into jars",
                "Ferment at room temperature",
                "Refrigerate when ready"
            ],
            tips: "Ferment longer for stronger flavor.",
            nutrition: {
                calories: "50",
                protein: "2g",
                carbs: "12g",
                fat: "0g"
            }
        },
        {
            id: 19,
            name: "Classic Fish & Chips",
            category: "Dinner",
            image: "images/fish-and-chips.jpg",
            prepTime: "20 mins",
            cookTime: "25 mins",
            servings: 4,
            difficulty: "Medium",
            rating: 4.8,
            ingredients: [
                "4 cod fillets",
                "2 cups flour",
                "1 bottle beer",
                "Potatoes for chips",
                "Salt and vinegar",
                "Tartar sauce",
                "Lemon wedges"
            ],
            instructions: [
                "Cut potatoes into chips",
                "Make beer batter",
                "Fry chips until golden",
                "Coat fish in batter",
                "Fry fish until crispy",
                "Serve with tartar sauce and lemon"
            ],
            tips: "Use cold beer for crispier batter.",
            nutrition: {
                calories: "480",
                protein: "28g",
                carbs: "52g",
                fat: "22g"
            }
        },
        {
            id: 20,
            name: "Vegetable Salad",
            category: "Lunch",
            image: "images/vegetable-salad.jpg",
            prepTime: "15 mins",
            cookTime: "0 mins",
            servings: 4,
            difficulty: "Easy",
            rating: 4.5,
            ingredients: [
                "Mixed lettuce",
                "Cherry tomatoes",
                "Cucumber",
                "Bell peppers",
                "Red onion",
                "Avocado",
                "Olive oil",
                "Balsamic vinegar"
            ],
            instructions: [
                "Wash and chop vegetables",
                "Mix in a large bowl",
                "Prepare vinaigrette",
                "Toss with dressing",
                "Season to taste",
                "Serve immediately"
            ],
            tips: "Add nuts or seeds for extra crunch.",
            nutrition: {
                calories: "120",
                protein: "3g",
                carbs: "12g",
                fat: "8g"
            }
        },
        {
            id: 21,
            name: "Gulab Jamun",
            category: "Dessert",
            image: "images/gulab-jamun.jpg",
            prepTime: "30 mins",
            cookTime: "20 mins",
            servings: 15,
            difficulty: "Medium",
            rating: 4.9,
            ingredients: [
                "Milk powder",
                "All-purpose flour",
                "Ghee",
                "Milk",
                "Sugar for syrup",
                "Cardamom",
                "Rose water",
                "Pistachios for garnish"
            ],
            instructions: [
                "Mix milk powder and flour",
                "Knead into soft dough",
                "Shape into small balls",
                "Prepare sugar syrup",
                "Fry balls until golden",
                "Soak in warm syrup",
                "Garnish with pistachios"
            ],
            tips: "Keep dough soft but not sticky for perfect texture.",
            nutrition: {
                calories: "150",
                protein: "2g",
                carbs: "28g",
                fat: "4g"
            }
        }
    ];

    const recipe = recipes.find(r => r.id == recipeId);
    if (recipe) {
        document.title = `${recipe.name} - Recipe Details`;
        
        document.getElementById("recipeDetails").innerHTML = `
            <div class="recipe-hero">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-overlay">
                    <h1 class="recipe-title">${recipe.name}</h1>
                    <div class="recipe-meta">
                        <div class="recipe-meta-item">
                            <i class="fas fa-star" style="color: #FFD700;"></i>
                            ${recipe.rating}
                        </div>
                        <div class="recipe-meta-item">
                            <i class="fas fa-clock"></i>
                            ${recipe.prepTime} + ${recipe.cookTime}
                        </div>
                        <div class="recipe-meta-item">
                            <i class="fas fa-utensils"></i>
                            ${recipe.servings} servings
                        </div>
                        <div class="recipe-meta-item">
                            <i class="fas fa-chart-simple"></i>
                            ${recipe.difficulty}
                        </div>
                    </div>
                </div>
            </div>

            <div class="recipe-details">
                <div class="recipe-content">
                    <div class="recipe-main">
                        <div class="ingredients-list">
                            <h2>Ingredients</h2>
                            <div>
                                ${recipe.ingredients.map(ingredient => `
                                    <div class="ingredient-item">
                                        <div class="ingredient-check">
                                            <i class="fas fa-check-circle"></i>
                                        </div>
                                        <div>${ingredient}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="instructions-list">
                            <h2>Instructions</h2>
                            <div>
                                ${recipe.instructions.map((instruction, index) => `
                                    <div class="instruction-step">
                                        <div class="step-number">${index + 1}</div>
                                        <div>${instruction}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="recipe-sidebar">
                        <div class="nutrition-card">
                            <h2>Nutrition Facts</h2>
                            ${Object.entries(recipe.nutrition).map(([key, value]) => `
                                <div class="nutrition-item">
                                    <span class="capitalize">${key}</span>
                                    <span class="font-semibold">${value}</span>
                                </div>
                            `).join('')}
                        </div>

                        <div class="tips-card">
                            <h2>Chef's Tips</h2>
                            <div class="tips-content">${recipe.tips}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        document.getElementById("recipeDetails").innerHTML = `
            <div class="text-center py-12">
                <h2 class="text-2xl font-bold text-gray-800">Recipe not found</h2>
                <p class="mt-4">Sorry, we couldn't find the recipe you're looking for.</p>
                <a href="index.html" class="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg">
                    Browse Recipes
                </a>
            </div>
        `;
    }
});
