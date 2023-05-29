import "./App.css";
import AddToDo from "./components/add-todo/AddToDo";
import ToDoList from "./components/todo-list/ToDoList";

function App() {
  return (
    <div className="App">
      <h1 className="text-success mt-3">To Do App</h1>
      <div className="row">
        <div className="col-md-6">
          <ToDoList />
        </div>
        <div className="col-md-6">
          <AddToDo />
        </div>
      </div>
    </div>
  );
}

export default App;
