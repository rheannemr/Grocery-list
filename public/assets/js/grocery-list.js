// Add Event listner


// variables that grab elements from the DOM so we can use/manipulate what happens with ingredient inputs
// const ingredientInput = document.getElementByID('ingredient-name');
// const groceryList = document.querySelector('');

// Create new Ingrdient to add to the List
const insertIngredient = (ingredientData) => {
    fetch('/api/grocery-list', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredientData),
    })
        .then(getIngredients)
        .catch((err) => console.error(err));
}

// Get all the Ingredients
const getIngredients = () => {
    fetch('/api/grocery-list', {
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

    // handle delete ingredient button
const handleDeleteIngredientButton = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/grocery-list/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' :'application/json',
        },
        
    }).then(getIngredients);
}
    // get list of ingredients
    getIngredients();

    const placeIngredient = (ingredientData) => {
        fetch('/api/grocery-list/:id', {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(placeIngredient)
            .catch((err) => console.error(err));
    };