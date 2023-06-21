import React from "react";

export const IncompleteTodos = (props) => {
	const { todos, onclickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p className="list-name">{todo}</p>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
