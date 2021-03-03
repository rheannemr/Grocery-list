// API - search ingredient
// click a button related to a particular ingredient on a list
// On click, That button will take in the name of the ingredient by getting the value of the element that has the name of the ingredient
// That value will be passed through the API URL
// Access the ID of the ingredient and pass it through the 2nd API (Get Ingredient Info)
// $('#nutrition').on('click', getIngredientInfo());

// function getIngredientInfo(event){
//     event.preventDefault();
// let ingredient = $('#new-item').val().trim();
let ingredient = 'apples'
apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
let searchIngredient = `https://api.spoonacular.com/food/ingredients/search?minProteinPercent=0&maxProteinPercent=100&minFatPercent=0&maxFatPercent=100&minCarbsPercent=0&maxCarbsPercent=100&metaInformation=true&intolerances=dairy&sortDirection=desc&offset=0&number=1&apiKey=fd41c46f4fa7436c8570c46ddb3743ec&=&query=${ingredient}`
$.ajax({
    url: searchIngredient,
    method: "GET"
}).then(function (response) {
    console.log('here is the response: ', response);
    console.log('finding id: ', response.results[0].id);
    let id = response.results[0].id;
    let amount = 1
    let unit = 'piece'
    apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
    let getIngredientInfo = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=${amount}&unit=${unit}&apiKey=${apiKey}`

    $.ajax({
        url: getIngredientInfo,
        method: "GET"
    }).then(function (response) {
        console.log('here is the response: ', response);
        console.log('name: ', response.name);
        console.log('img: ', response.img);
        // console.log('name: ', response.name);
    });

});

// moved 2nd api into the .then of the first api call

// API - get ingredient information
// This API will take in the ID from the previous API in order to access various information on that ingredient
// Thechosen information related to the selected ingredient will be appended/pushed to html to be displayed or alerted to the page



console.log("get api call")
// API - search recipe by ingredients
$("#search_submit").click(function (event) {
    event.preventDefault();
    var lookupIngredient = $("#search").val();
    console.log(lookupIngredient)
 
    console.log("click")
    lookupRecipe(lookupIngredient);

})

function lookupRecipe(ingredients) {

    // let ingredients = "lamb,+sauce,+pepper"
    apiKey = 'fd41c46f4fa7436c8570c46ddb3743ec'
    let searchRecipe = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
    $.ajax({
        url: searchRecipe,
        method: "GET"
    }).then(function (response) {
        console.log('response for recipe based on ingridents input: ', response);
        // var city = (response.name);
        // var cityEl = $("<div>").text(city);
        // $("#city-view").append(cityEl);
    })
}