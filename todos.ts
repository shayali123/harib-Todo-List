import inquirer from "inquirer"

let todos = []

let condition = true;

while(condition)
{
let todo = await inquirer.prompt(
    [
        {
            name: "question",
            type: "input",
            message: "what you want to add in your todos?"
        },
        {
            name: "Question",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]
)
todos.push(todo.question)
condition = (todo.Question)
console.log(todos)
}