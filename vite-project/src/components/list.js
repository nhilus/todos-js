import { getData } from "../services/jsonplaceholder";



async function list(){
    const listEl = document.createElement('ul');
    const todos = await getData()
    todos.forEach(todo => {
        const listLi = document.createElement('li');
        list.textContent = todo.title
        listEl.append(listLi)
    });
    return listEl;
}




export {list}