import React from "react";
import { BadList } from "./BadList";
import { TaskList } from "./TaskList";

export const List = ({
  tasks,
  // handleOnDelete,
  taskSwitcher,
  handleOnCheck,
 idsToDelete,
handleOnSelectAll
}) => {
  const entryList = tasks.filter((item) => item.type === "entry");
  const badList = tasks.filter((item) => item.type === "bad");

  return (
    <div className="row mt-5 g-2">
      <TaskList
        entryList={entryList}
        // handleOnDelete={handleOnDelete}
        taskSwitcher={taskSwitcher}
        handleOnCheck={handleOnCheck}
        idsToDelete ={idsToDelete}
        handleOnSelectAll ={handleOnSelectAll}
      />
      <BadList
        badList={badList}
        // handleOnDelete={handleOnDelete}
        taskSwitcher={taskSwitcher}
        handleOnCheck={handleOnCheck}
        idsToDelete ={idsToDelete}
        handleOnSelectAll ={handleOnSelectAll}
      />
    </div>
  );
};
