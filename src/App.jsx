import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "테스트 제목 1",
      contents: "테스트 내용 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트 제목 2",
      contents: "테스트 내용 2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "테스트 제목 3",
      contents: "테스트 내용 3",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [showDoneList, setShowDone] = useState(true);
  const [showTodoList, setShowTodoList] = useState(true);

  const newCard = function (event) {
    event.preventDefault();

    // TODO: 넣을 객체 생성(new todo)
    const newTodo = {
      id: uuid(),
      title,
      contents,
      isDone: false,
    };

    // TODO: todos state에 넣어줘야 해!!
    setTodos([...todos, newTodo]);
  };

  //버튼 클릭시 List 필터링

  //전체 리스트
  const handleAllList = () => {
    setShowTodoList(true);
    setShowDone(true);
  };

  // 할 일 리스트
  const handleFilterTodo = () => {
    setShowTodoList(true);
    setShowDone(false);
  };

  //완료된 일 리스트
  const handleFilterDone = () => {
    setShowTodoList(false);
    setShowDone(true);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#f5dfa2",
          padding: "10px",
        }}
      >
        헤더입니다.
      </header>
      <main
        style={{
          backgroundColor: "#c3f7c9",
          padding: "10px",
        }}
      >
        <div>
          <h3>INPUT 영역</h3>
          <div>
            <form onSubmit={newCard}>
              <input
                type="text"
                placeholder="제목입력!"
                value={title}
                onChange={function (event) {
                  setTitle(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="내용입력!"
                value={contents}
                onChange={function (event) {
                  setContents(event.target.value);
                }}
              />
              <button type="submit">제출</button>
            </form>
          </div>
        </div>
        <div>
          <button onClick={handleAllList}>전체</button>
          <button onClick={handleFilterTodo}>할 일</button>
          <button onClick={handleFilterDone}>완료된 일</button>
        </div>
        {showTodoList === true ? (
          <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        ) : (
          null
        )}
        {showDoneList === true ? (
          <TodoList todos={todos} setTodos={setTodos} isDone={true} />
        ) : (
          null
        )}
      </main>
      <footer
        style={{
          backgroundColor: "#c3ddf7",
          padding: "10px",
        }}
      >
        푸터입니다.
      </footer>
    </>
  );
}

export default App;
