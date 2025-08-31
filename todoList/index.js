let todoList=[
    {item:  'buy milk',
         dueDate: '4/5/2025'},

    {item: 'go to cllg',
         dueDate: '4/5/2025'}

]; //global variable

displayItem();

function addTodo() {
    let inputElement = document.querySelector('#todo-input'); 
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    
    
    todoList.push({item:todoItem,dueDate: tododate}); // add in end
    inputElement.value = '';
    dateElement.value ='';
    displayItem();
}

    function displayItem() {
        let containerElement = document.querySelector('.todo-container');

        let newHtml = '';

        for (let i = 0; i < todoList.length; i++) {

            let item = todoList[i].item;
            let dueDate = todoList[i].dueDate;

            newHtml +=
            `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delect" onclick="todoList.splice(${i},1);
            displayItem();
            "
            > Delete </button>
            
            `;
            // displayElement.innerText = displayElement.innerText +   "\n" + todoList[i];
            
        }

        containerElement.innerHTML=newHtml;
        
    }
    
    
    
