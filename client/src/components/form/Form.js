import React, { useState } from "react";

import "./form.css";

const initialState ={
  task: "",
  hr: "", 
}

export const Form = ({ taskEntry }) => {
  const [data, setData] = useState({initialState});

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setData({
      ...data,
      [name]: name === "hr" ? +value : value,
      type: "entry",
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    taskEntry(data);
    setData(initialState);

  };

  return (
    <div className="form">
      <form onSubmit={handleOnSubmit}>
        <div className="row mt-3 g-2">
          <div className="col-md-6">
            <input
              name="task"
              value ={data.task}
              type="text"
              className="form-control"
              placeholder=""
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3">
            <input
              name="hr"
              value={data.hr}
              type="number"
              className="form-control"
              min="1"
              placeholder=""
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
