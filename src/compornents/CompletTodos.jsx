import React from "react";

export const CompleteTodos = (props) => {
	const { todos, onClickBack } = props;
  return (
    <div className="completed-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p className="list-name">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
