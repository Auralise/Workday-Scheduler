
//save tasks objects
function saveTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//load tasks from save
function loadTasks (tasks) {
    let timeSlices = $('textarea');
    let i = 0;
    //console.log(timeSlices);
    for(const key in tasks){
        timeSlices[i].value = tasks[key];
        // console.log(timeSlices[i]);
        // console.log(tasks[key]);
        i++;
    }
}


function drawTime (time) {
    $('#currentDay').text(`Current day is ${time.format('DD/MM/YYYY')}`)
}

function updateBarColours (time){

}



// Save handler function
function handleSaveEvent (event) {
    
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    
    switch (event.target.id){
        case 'save9':
            // save 9am
            tasks.tasks9 = $('#time9').val();
            break;

        case 'save10':
            //save 10am
            tasks.tasks10 = $('#time10').val();
            break;

        case 'save11':
            //save 11am
            tasks.tasks11 = $('#time11').val();
            break;

        case 'save12':
            //save 12pm
            tasks.tasks12 = $('#time12').val();
            break;

        case 'save13':
            //save 1pm
            tasks.tasks13 = $('#time13').val();
            break;

        case 'save14':
            //save 2pm
            tasks.tasks14 = $('#time14').val();
            break;

        case 'save15':
            //save 3pm
            tasks.tasks15 = $('#time15').val();
            break;

        case 'save16':
            //save 4pm
            tasks.tasks16 = $('#time16').val();
            break;

        case 'save17':
            //save 5pm
            tasks.tasks17 = $('#time17').val();
            break;
    }

    //save tasks
    saveTasks(tasks);
        
}






function init () {

    //get time - now
    let now = moment();

    // load from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if (tasks !== null)
    {
        loadTasks(tasks);
    } else {
        let structure = {
            tasks9: '',
            tasks10: '',
            tasks11: '',
            tasks12: '',
            tasks13: '',
            tasks14: '',
            tasks15: '',
            tasks16: '',
            tasks17: '',
        }
        //save structure in localstorage
        saveTasks(structure);
    }

    drawTime(now);



    // colour the bars based on past present and future
    // add event listener to container
    $('#time-container').on('click', handleSaveEvent);


}



init ();

