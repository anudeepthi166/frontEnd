import React from "react";
//import react-hook-form
import { useForm } from "react-hook-form";
import { addTodo } from "../../slice/toDoSlice";
import { useDispatch } from "react-redux";

function AddToDo() {
  //useForm hook
  let { register, handleSubmit, reset } = useForm();

  //dispatch
  let dispatch = useDispatch();

  //submit
  const onSubmit = (taskObj) => {
    console.log(taskObj);
    dispatch(addTodo(taskObj));
    reset();
  };

  return (
    <div className="container col-md-10 mt-5">
      <h3>Add a new Task Here</h3>
      <div className="col-sm-12 col-md-10 mt-3">
        {/* input form to enter task*/}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* add new task */}
          <div>
            <input
              type="text"
              {...register("todo")}
              className="form-control"
              placeholder="Enter New Task Here ..."
            />
          </div>
          {/* submit button */}
          <button
            className="btn btn-outline-success d-block mt-2 float-end"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddToDo;
