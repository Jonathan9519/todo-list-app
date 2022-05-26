import React, { useState } from 'react'
import './App.css';
import { Input, FormControl, Checkbox } from '@chakra-ui/react'

function App() {
  const [taskName, setTaskName] = useState("");
  const [todoItems, setTodoItems] = useState([
    { name: 'Buy milk', status: 'uncomplete' },
    { name: 'Wash car', status: 'uncomplete' },
    { name: 'Cut gras', status: 'complete' },
  ]);

  const addNewList = () => {
    try {
      if (taskName === '') {
        alert('')
      }
    } catch (error) {

    }
  }

  const changeItemProp = (prop, ix, value) => {
    const clone = [...todoItems];
    clone[ix] = { ...todoItems[ix], [prop]: value }
    setTodoItems(clone);
  }

  const renderItems = todoItems.map((it, ix) => {
    return <div style={{ width: '100%', padding: 5 }}>
      <div
        className='item-card'
      >
        <div class="ui checkbox">
          <input 
          type="checkbox"
           name="example" 
          />
          <label>{it.name}</label>
        </div>
        <Checkbox
          isChecked={it.status === 'complete'}
          onChange={() => {
            let status = it.status === 'complete' ? 'uncomplete' : 'complete';
            changeItemProp('status', ix, status)
          }}
          colorScheme='green' defaultChecked>
          {it.name}
        </Checkbox>
      </div>
    </div>
  })

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
              width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'
            }}>
              {todoItems.length === 0
                ? "No things to do"
                : <FormControl
                  style={{ width: '100%', height: '100%' }}
                >
                  {/* <FormLabel htmlFor='country'>List</FormLabel> */}
                  {renderItems}
                </FormControl>}

            </div>
            <div className='row-container' >
              <Input
                style={{ width: '90%', padding: 10, borderRadius: 6, border: '1px solid lightgray' }}
                placeholder='Basic usage'
                size='md'
                variant='filled'
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
