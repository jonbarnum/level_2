

fullListPull = () => {
    axios.get("https://api.vschool.io/jonbarnum/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1');
            h1.textContent = `Title: ${response.data[i].title}`;
            document.getElementsByClassName('todo')[0].appendChild(h1);

            const liEl = document.createElement('li');
            liEl.style.listStyleType = 'none';
            liEl.textContent = `Description: ${response.data[i].description}`;
            document.getElementsByClassName('todo')[0].appendChild(liEl);

            const liEl2 = document.createElement('li');
            liEl2.style.listStyleType = 'none';
            liEl2.textContent = `Price: ${response.data[i].price}`;
            document.getElementsByClassName('todo')[0].appendChild(liEl2)

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.style.marginLeft = '0';
            const label = document.createElement('label');
            label.textContent = 'Have you completed this todo?';
            document.getElementsByClassName('todo')[0].appendChild(checkbox);
            document.getElementsByClassName('todo')[0].appendChild(label);

            const liEl3 = document.createElement('li');
            liEl3.style.listStyleType = 'none';
            liEl3.textContent = `Completed: ${response.data[i].completed}`;
            document.getElementsByClassName('todo')[0].appendChild(liEl3)

            let imageEl = document.createElement('img');
            imageEl.src = response.data[i].imgUrl;
            imageEl.width = '125';
            imageEl.height = '100';
            document.getElementsByClassName('todo')[0].appendChild(imageEl)

        }
    })
    .catch(error => console.log(error));
}


const todoFormAdd = document.addTodo;

todoFormAdd.addEventListener('submit', function(event){
    event.preventDefault();
    const newTodo = {
        title: todoFormAdd.title.value,
        description: todoFormAdd.description.value,
        price: todoFormAdd.price.value,
        completed: todoFormAdd.completed.value,
        imgUrl: todoFormAdd.imgUrl.value
    }
    todoFormAdd.title.value = '';
    todoFormAdd.description.value = '';
    todoFormAdd.price.value = '';
    todoFormAdd.completed.value = '';
    todoFormAdd.imgUrl.value = '';

    axios.post("https://api.vschool.io/jonbarnum/todo", newTodo)
        .then(response => fullListPull())
        .catch(error => console.log(error))
})

clearList = () => {
    const el = document.getElementsByClassName('todo')[0];
    while (el.firstChild){
        el.remove(el.firstChild);
    }
}

fullListPull();

