import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      {    completedTodos === totalTodos ? (
        <span>Has completado todas las metas</span>
      ) : (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
