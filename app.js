let todo = [];

let req = prompt("Please enter your choice");

while(true) {
    if(req == "exit") {
        console.log("Exiting from Application...");
        break;
    }
    
    if(req == "list") {
        console.log("------------------");
        for (let i = 0; i < todo.length; i++) {
           console.log(i, todo[i]);
        }
        console.log("------------------");
    } else if(req == "add") {
        let task = prompt("Enter a new task to add");
        todo.push(task);
        console.log("Task added Successfully");
    } else if(req == "delete") {
        let idx = prompt("Please Enter the task index you want to delete");
        todo.splice(idx, 1);
        console.log("Task Deleted Successfully");
    } else {
        console.log("Please Enter a valid choice!!"); 
    }
    req = prompt("Please enter your choice");
}
