import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";
import Modal from "./components/modal/Modal";
import Card from "./components/card/Card";

function App() {
  const [title, setTitle] = useState("Give me a title...");
  const [description, setDescription] = useState(
    "Tell me more about this todo ..."
  );
  const [allTodos, setAllTodos] = useState([]);

  const changeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const saveChanges = (e) => {
    e.preventDefault();
    const newTodo = { title: title, description: description };
    setAllTodos((allTodos) => [...allTodos, newTodo]);
  };

  // const closeMyModal = (e) => {
  //   document.getElementById("my_modal_3").style.display = "none";
  // };
  return (
    <>
      <div className="w-[100vw] min-h-[100vh] flex flex-row justify-center items-start pb-14">
        <div className="w-[70%] min-h-[100vh] flex flex-col pt-14">
          <div className="flex flex-grid flex-wrap gap-2 px-2">
            {allTodos.length > 0 &&
              allTodos.map((todo) => (
                <Card
                  key={todo.title}
                  title={todo.title}
                  description={todo.description}
                />
              ))}

            {allTodos.length === 0 && (
              <Card
                title="Your todo title"
                description="Your todo description"
              />
            )}
          </div>
        </div>
        <div className="w-[30%] min-h-[100vh] flex flex-col justify-start">
          <h1 className="pt-10 text-6xl font-black text-white">Todo App</h1>
          <p className="text-slate-100 mt-10 mb-10 w-[460px]">
            No storage needed, manage each day todo's in this window, once you
            refresh the page all your todo's will be gone.
          </p>
          <div className="flex flex-wrap">
            <Modal>
              <Todo
                title="Hello World"
                description="This is fist todo!"
                handleTitleChange={changeTitle}
                handleDescriptionChange={changeDescription}
                handleSave={saveChanges}
                // handleModalClose={closeMyModal}
              />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
