const updateIngredient = (ingredientData) => {
    // find a way to get id and put it in the route
    fetch(`/api/in-fridge/${id}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredientData),
    })
        .then(getIngredients)
        .catch((err) => console.error(err));
}

// Get all the ingredients
const getIngredients = () => {
    fetch('/api/in-fridge', {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
    }).then((res) => res.json())
    .then((data) => {
        // make sure you're adding to the fridge section
        const addRows = [];
        for (let i = 0; i < data.length; i++) {
            addRows.push(createIngredientRow(data[i]));
       }
       // render to the fridge list instead
       renderIngredientsList(addRows);
       ingredientInput.value = ''; 
        })
        .catch((error) => console.error('Error:', error))
    };

// when checkbox is clicked, call updateIngredient, change from not inFridge to yes inFridge. make sure to get the id from the click
// when page is refreshed/loaded, call getIngredients, where inFridge === 1
getIngredients();