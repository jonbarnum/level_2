

const fullListPull = () => {
    axios.get("https://api.vschool.io/jonbarnum/todo")
    .then(response => {
        const data = response.data;
        for(let i = 0; i < data.length; i++){
            const div = document.createElement('div');
            div.id = data[i]._id
            document.getElementsByClassName('todo')[0].appendChild(div);

            makingCheckBox(div, data[i]);
            const h1 = document.createElement('h1');
            h1.textContent = `Title: ${data[i].title}`;
            if(data[i].completed){
                h1.classList.add('todoHeader', 'done');
            }else{
                h1.classList.add('todoHeader');

            }
            div.appendChild(h1);
            
            const liEl = document.createElement('li');
            liEl.classList.add('listItem');
            liEl.textContent = `Description: ${data[i].description}`;
            div.appendChild(liEl);

            const liEl2 = document.createElement('li');
            liEl2.classList.add('listItem');
            liEl2.textContent = `Price: ${data[i].price}`;
            div.appendChild(liEl2)

            let imageEl = document.createElement('img');
            imageEl.src = data[i].imgUrl;
            imageEl.classList.add('image');
            div.appendChild(imageEl);

            const liEl3 = document.createElement('li');
            liEl3.classList.add('listItem')
            liEl3.textContent = `Completed: ${data[i].completed}`;
            div.appendChild(liEl3);
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
        .then(response => fullListPull(response))
        .catch(error => console.log(error))
})


const strikeThrough = (event) => {
    let checkbox = event.currentTarget;
    let completed = checkbox.parentElement.children[5]
    axios.put(`https://api.vschool.io/jonbarnum/todo/${checkbox.parentElement.id}`, {"completed": checkbox.checked})
    .then(response => {
        response.data.completed;
        if(checkbox.checked){
            checkbox.parentElement.children[1].classList.add('done');
            completed.textContent = 'completed: true';
        }else{
            checkbox.parentElement.children[1].classList.remove('done');
            completed.textContent = 'completed: false';
        }
    })
    .catch(error => console.log(error))
}

const makingCheckBox = (div, todo) => {
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = todo.completed;
    check.classList.add('checkbox');
    check.addEventListener('click', strikeThrough)
    div.appendChild(check);
}








clearList = () => {
    const el = document.getElementsByClassName('todo')[0];
    while (el.firstChild){
        el.remove(el.firstChild);
    }
}



fullListPull();

