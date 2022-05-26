import React, { useState } from 'react'
import './App.css';
import { Input } from '@chakra-ui/react'

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addNewList = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          className='blur-background'
        >
          <div
            className='logo-container'
          >
            <img
              alt='Logo Todo'
              src={"https://img.icons8.com/color-glass/100/000000/checklist.png"}
            />
          </div>

          <div
            className='box-card-list'
          >
            <label className='title-card'>
              Todo list
            </label>
            <div style={{
              width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'
            }}>
              {todoItems.length === 0
                ? "No things to do"
                : "hay"}
            </div>
            <div className='row-container' >
              <Input
                style={{ width: '90%', padding: 10, borderRadius:6, border:'1px solid lightgray' }}
                placeholder='Basic usage'
                size='md'
                variant='filled'
                onChange={() => setTaskName()}
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
