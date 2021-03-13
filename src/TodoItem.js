import React from 'react';
 
const TodoItem = ({todo, removeItem}) => {

    const handleDoubleClick = (e) => {
        e.preventDefault();
        removeItem(e.currentTarget.id);
    }
    return (
       <div id={todo.id} key={todo.id + todo.task} onDoubleClick={handleDoubleClick}>
           {todo.task}
       </div>
    );
};
export default TodoItem;
