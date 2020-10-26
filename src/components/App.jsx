import React, {useState} from 'react';
import './App.scss';
import initialData from '../initialData';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import Row from "./Row";

const App = () => {
    const [data, setData] = useState(initialData);

    const handleOnDragEnd =(result) =>{
        if (!result.destination) return;
        const items = [...data];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setData(items);
    }

  return (
    <>
      <header className="app-header">
          <div className="container">
            <h1>Learn Beautiful drag'n'drop</h1>
          </div>
      </header>
      <main>
          <div className="container">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="rows">
                      {(provided) => (
                          <ul {...provided.droppableProps} ref={provided.innerRef}>
                              {data.map((el, index) =>(
                                  <Draggable key={el.id} draggableId={String(el.id)} index={index}>
                                      {(provided) => (
                                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                             <Row element={el} />
                                          </li>)
                                      }
                                  </Draggable>)
                              )}
                              {provided.placeholder}
                          </ul>
                      )}
                  </Droppable>
              </DragDropContext>
          </div>
      </main>
    </>
  );
}

export default App;
