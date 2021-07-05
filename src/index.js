let firstForm = document.querySelector('#create-task-form');
let counter = 0;
document.addEventListener("DOMContentLoaded", () => {
  firstForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let ul = document.createElement('ul');
    let h4 = document.createElement('h4'); 
    ul.id = 'tasks' 
    h4.textContent = e.target[0].value + ", " + e.target[1].value ;
    //ul.append(h4); 
    //console.log(ul);
    console.log(e); 
    let tasks = document.querySelector('#tasks'); 
    if(e.target[2].value === 'high'){
      ul.append(h4)
      h4.style.color = '#FF0D00';
      tasks.prepend(ul); 
      counter++; 
    }
    else if(e.target[2].value === 'medium'){
      ul.append(h4); 
      h4.style.color = '#FFDD00'; 
      tasks.insertBefore(ul, tasks.children[counter]); 
    }
    else if(e.target[2].value === 'low'){
      ul.append(h4); 
      h4.style.color = '#04BF45'; 
      tasks.append(ul); 
    }
    //document.querySelector('#tasks').append(ul); 
  });
});

function deleteTasks(){
  document.querySelector('#tasks ul h4').remove(); 
}

const button = document.querySelector('#btn');
button.addEventListener("click", (e) => {
  deleteTasks(); 
})

