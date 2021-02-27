// Add Event listner


// variables that grab elements from the DOM so we can use/manipulate what happens with ingredient inputs
const ingredientInput = document.getElementByID('ingredient-name');
const groceryList = document.querySelector('');

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
};

//Handle when new ingredient input is submitted

// const handleIngredientInputSubmit = (e) => {
//     e.preventDefault();
// }

// if (!ingredientInput.value.trim()) {
//     alert('Please provide and ingredient');
//     return;
// }

// insertIngredient({
//     name: ingredientInput.value.trim(),
// });

// document   
//     .getElementById('ingredient-Input')
//     .addEventListener('submit', handleIngredientInputSubmit);

// handle delete ingredient button
const handleDeleteIngredientButton = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/grocery-list/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type : application/json',
        },
    }).then(getIngredients);
}

// Create list row for authors
// const createIngredientRow = (ingredientData) => {
//     const tr = document.createElement('tr');
//     tr.setAttribute('data-ingredient', JSON.stringify(ingredientData));

    // Set each author's ID on the element itself
    // tr.id = ingredientData.id;

    // const td = document.createElement('td');
    // td.textContent = ingredientData.name;
    // tr.appendChild(td);

    // Element to show how many posts
    // const lengthTd = document.createElement('td');
    // if (authorData.Posts) {
    //   lengthTd.textContent = authorData.Posts.length;
    // } else {
    //   lengthTd.textContent = '0';
    // }
    // tr.appendChild(lengthTd);

    // "Go to posts" link
    // const postsLink = document.createElement('td');
    // postsLink.innerHTML = `<td><a href='/blog?author_id=${authorData.id}'>Go to Posts</a></td>`;
    // tr.appendChild(postsLink);

    // "Create a post" link
    // const createLink = document.createElement('td');
    // createLink.innerHTML = `<td><a href='/cms?author_id=${authorData.id}'>Create a Post</a></td>`;
    // tr.appendChild(createLink);

    // "Delete author" link
    // const deleteLink = document.createElement('td');
    // deleteLink.innerHTML = `<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>`;
    // deleteLink.addEventListener('click', handleDeleteButtonPress);
    // tr.appendChild(deleteLink);

    // Return the table row
//     return tr;
//   };

  // Helper function to render content when there are no authors
//   const renderEmpty = () => {
//     const alertDiv = document.createElement('div');
//     alertDiv.classList.add('alert', 'alert-danger');
//     alertDiv.textContent = 'Must have at least one author to post';
//     alertDiv.id = 'removeMe';
//     alertDiv.style.marginRight = '5px';
//     return alertDiv;
//   };

//   const renderAuthorList = (rows) => {
//     authorList.innerHTML = '';

//     if (rows.length) {
//       if (document.getElementById('removeMe')) {
//         document.getElementById('removeMe').remove();
//       }
//       rows.forEach((row) => authorList.append(row));
//     } else {
//       document.querySelector('.author-container').appendChild(renderEmpty());
//     }
//   };

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

    // get list of ingredients
    getIngredients();