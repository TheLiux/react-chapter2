import TodoItem from "./TodoItem";
const todos = [
    {id: 1, done: false, text: "Prima Attività"},
    {id: 2, done: true, text: "Seconda Attività"},
    {id: 3, done: false, text: "Terza Attività"},
]

function getTodoItems() {
    return todos.map((t) => (
        <TodoItem key={t.id} done={t.done} text={t.text}/>
    ));
}

export default function TodoList() {
    const todoItems = getTodoItems();
    return (
        <ul className="list-group pb-3">
            {todoItems}
        </ul>
    );
}