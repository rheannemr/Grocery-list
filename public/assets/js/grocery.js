let id = 9266
let amount = 1
let unit = 'piece'
apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
let getIngredientInfo = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=${amount}&unit=${unit}&apiKey=${apiKey}`

$.ajax({
url: getIngredientInfo,
method: "GET"
}).then(function(response) {
console.log('here is the response: ', response);
console.log('name: ', response.name);
console.log('img: ', response.img);
// console.log('name: ', response.name);
});  



// API - get ingredient information
let id = 9003;
let amount = 1
let unit = 'piece'
apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
let getIngredientInfo = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=${amount}&unit=${unit}&apiKey=${apiKey}`
$.ajax({
url: getIngredientInfo,
method: "GET"
}).then(function(response) {
console.log('here is the response: ', response);
console.log('name: ', response.name);
console.log('img: ', response.img);
console.log('id is: ', response.id);
// console.log('name: ', response.name);
});

// API - search ingredient
let ingredient = "apple"
apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
let searchIngredient = `https://api.spoonacular.com/food/ingredients/search?minProteinPercent=0&maxProteinPercent=100&minFatPercent=0&maxFatPercent=100&minCarbsPercent=0&maxCarbsPercent=100&metaInformation=true&intolerances=dairy&sortDirection=desc&offset=0&number=1&apiKey=fd41c46f4fa7436c8570c46ddb3743ec&=&query=${ingredient}`
$.ajax({
    url: searchIngredient,
    method: "GET"
    }).then(function(response) {
    console.log('here is the response: ', response);
    console.log('finding id: ', response.results[0].id);
    // console.log('img: ', response.img);
    // console.log('id is: ', response.id);
    // console.log('name: ', response.name);
    });

// API - search recipe by ingredients
let ingredients = "lamb,+sauce,+pepper"
apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
let searchRecipe = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
$.ajax({
    url: searchRecipe,
    method: "GET"
}).then(function(response) {
    
})