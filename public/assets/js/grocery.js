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