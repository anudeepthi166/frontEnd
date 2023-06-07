import React from "react";
//imports
import { useSelector } from "react-redux";
import { deleteTodo } from "../../slice/toDoSlice";
import { useDispatch } from "react-redux";

function ToDoList() {
  //state from redux store
  let todo = useSelector((state) => state.todo);

  let dispatch = useDispatch();

  //delete Task
  const deleteTask = (index) => {
    //dispatch action object
    console.log("Deleting Todo Task");
    dispatch(deleteTodo(index));
  };
  return (
    <div className="container mt-5">
      <h3>To do List</h3>
      <div className="mt-3">
        {/* table to display data */}
        <table className="table text-center">
          <thead></thead>
          <tbody>
            {/* count of tasks */}
            <p className="text-danger ">Hey You have {todo.length} Tasks</p>
            {todo.length ? (
              todo.map((todoObj, index) => {
                return (
                  // task name
                  <tr key={index}>
                    <td>{todoObj.todo}</td>
                    <td>
                      {/* completed button */}
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => deleteTask(index)}
                      >
                        {" "}
                        completed
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p className="text-danger "> You haven't Added any Tasks</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoList;
