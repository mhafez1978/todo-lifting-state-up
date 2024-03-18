import React from "react";

const Todo = (props) => {
  return (
    <>
      <div className="w-[450px] min-h-[150px] rounded-md border-slate-100">
        <div className="">
          <form className="flex flex-col justify-center items-center">
            <input
              placeholder={props.title}
              className="w-full h-10"
              onChange={props.handleTitleChange}
            />
            <textarea
              rows="5"
              className="mt-4 w-full"
              onChange={props.handleDescriptionChange}
              placeholder={props.description}
            ></textarea>
            <div className="w-full mt-4 flex flex-row justify-evenly gap-2">
              <button
                className="w-full h-10 bg-green-300 font-black text-slate-800"
                onClick={props.handleSave}
              >
                Save
              </button>
              <button
                className="w-full h-10 bg-violet-300 font-black text-slate-800"
                // onClick={props.handleModalClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Todo;
