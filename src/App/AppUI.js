import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyMeta } from '../EmptyMeta';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchTodos.length === 0) && <EmptyMeta />}

        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export { AppUI };
