
var todo_list;
console.log('bienvenue');

class task{
    constructor(texte, etat) {
    this.texte = texte;
    this.etat = etat;
  }
}

let tasks_array = JSON.parse(localStorage.getItem("task")) || [];
// On page load
tasks_array.forEach(task_obj => {
    afficherTache(task_obj);
});

// Update counters after rendering
updateCounters();

let total =document.getElementById("total");
let done = document.getElementById("done"); 

let total_task = Number(total.textContent);
let done_task = Number(done.textContent);






function afficherTache(task_obj) {
    let li = document.createElement('li');
    li.textContent = task_obj.texte;

    // bouton terminer
    let termin = document.createElement('button');
    termin.textContent = "terminée";
    termin.style.marginLeft = "10px";
    termin.addEventListener('click', function() {
        task_obj.etat = "terminée";
        terminerTache(li,tasks_array);
        localStorage.setItem("task", JSON.stringify(tasks_array));
    });

    // bouton supprimer
    let suppBtn = document.createElement('button');
    suppBtn.textContent = "supprimer";
    suppBtn.style.marginLeft = "5px";
    suppBtn.addEventListener('click', function() {
        supprimerTache(li, task_obj);
    });

    li.appendChild(termin);
    li.appendChild(suppBtn);

    if (task_obj.etat === "terminée") {
        li.style.textDecoration = "line-through";
    }

    document.getElementById('list').appendChild(li);
}

function ajouterTache(){
    let txt = document.getElementById('text');
    let valeur = txt.value;
    if(valeur != ""){
        let task_obj = new task(valeur,"non terminée");
        tasks_array.push(task_obj);
        afficherTache(task_obj);   // reuse
        txt.value ="";
        total_task++;
        total.textContent = total_task;
        updateCounters();
        localStorage.setItem("task",JSON.stringify(tasks_array));
    }
}

//supprimer une tache
function supprimerTache(li, task_obj){
    li.remove();
    let index = tasks_array.indexOf(task_obj);
    if(index != -1){
        tasks_array.splice(index,1);
    }
    afficher_array(tasks_array);
    if(done_task>0 && total_task>0){
    done_task--;
    done.textContent = done_task;
    total_task--;
    total.textContent = total_task;
    }
    updateCounters();    
    localStorage.setItem("task",JSON.stringify(tasks_array));
}

//terminer une tache
function terminerTache(li,tasks_array){
    li.style.textDecoration = "line-through";
    done_task++;
    done.textContent = done_task;
    updateCounters();
    localStorage.setItem("task",JSON.stringify(tasks_array));


    
}

//eventListener
var button = document.getElementById('add');
button.addEventListener('click',function() {
    ajouterTache();

});
let input = document.getElementById('text');
input.addEventListener('keypress',function(event){
    if(event.key=='Enter'){
        ajouterTache();
    }
});

let toutsupp = document.getElementById('toutsupp');
toutsupp.addEventListener('click',function(tasks_array){
    tasks_array = [];
    localStorage.removeItem("task");  

    const list = document.getElementById('list');
    list.innerHTML = ''; 

    // Reset counters
    total_task = 0;
    done_task = 0;
    total.textContent = total_task;
    done.textContent = done_task;

    // Save counters to localStorage
    localStorage.setItem('total_task', total_task);
    localStorage.setItem('done_task', done_task);


})


const taskList = document.getElementById('list');


let search = document.getElementById('search');


search.addEventListener('input', function() {
    let filter = search.value.toLowerCase(); 
    let tasks = document.getElementById('list').getElementsByTagName('li'); 

    for (let i = 0; i < tasks.length; i++) {
        let taskText = tasks[i].textContent.toLowerCase(); 
        if (taskText.includes(filter)) {
            tasks[i].style.display = ''; // show task
        } else {
            tasks[i].style.display = 'none'; // hide task
        }
    }
});



function afficher_array(t){
    for(let i=0;i<t.length;i++){
        console.log(t[i]);
    }
}

function updateCounters() {
    const totalCount = tasks_array.length;
    const doneCount = tasks_array.filter(task => task.etat === "terminée").length;

    document.getElementById('total').textContent = totalCount;
    document.getElementById('done').textContent = doneCount;

    // Save counters if you want
    localStorage.setItem('total_task', totalCount);
    localStorage.setItem('done_task', doneCount);
}

