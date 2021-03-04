const insertIngredient = (ingredientData) => {
    fetch('/api/in-fridge', {
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
        const addRows = [];
        for (let i = 0; i < data.length; i++) {
            addRows.push(createIngredientRow(data[i]));
       }
       renderIngredientsList(addRows);
       ingredientInput.value = ''; 
        })
        .catch((error) => console.error('Error:', error))
    };
