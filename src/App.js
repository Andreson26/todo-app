import Form from "./components/Form";
import List from "./components/List";
import { useLocalStorage } from "./localStorage";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useLocalStorage('list', []);
  const [value, setValue] = useState("")
  const [isSorted, setIsSorted] = useState(null)

  const addItem = (value) => {
    const item = {
      value,
      completed: false,
      id: `${Math.random()} - ${Math.random()}`,
      counter: 0,
    };
    const newList = [...list, item]
    setList(newList);
  };

  const handleDelete = (item) => {
    const newList = list.filter((newItem) => {
      return newItem.id !== item.id;
    });
    setList(newList);
  };

  const handleToggle = (item) => {
    const newList = list.map((newItem) => {
      if (newItem.id === item.id) {
        newItem.completed = !item.completed;
      }
      return newItem;
    });
    setList(newList);
  };

  const handleCount = (item, flag) => {
    const newList = list.map((newItem) => {
      if (newItem.id === item.id) {
        if (flag === true) {
          item.counter += 1;
        } else {
          item.counter -= 1;
        }
      }
      return newItem;
    });
    setList(newList);
  };

  const handleFilter = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }

  const handleSorting = (e) => {
    const option = e.target.value
    if(option === "high-priority") {
      setIsSorted(false)
    }else if (option === "low-priority") {
      setIsSorted(true)
    }else {
      setIsSorted(null)
    }
    console.log(option)
  }

  let filteredList = list.filter(item => item.value.includes(value))

  if(isSorted === true) {
    filteredList.sort((a, b) =>{
      return a.counter - b.counter
    })
  }

  if(isSorted === false) {
    filteredList.sort((a, b) => {
      return b.counter - a.counter
    })
  }

  return (
    <div className="App">
      <h1>Add a New Task</h1>
      <Form addItem={addItem} 
        handleFilter={handleFilter}
      />

      <select className="options" name="item" onChange={handleSorting}>
        <option value="default">Default</option>
        <option value="high-priority">High-Priority</option>
        <option value="low-priority">Low-Priority</option>
      </select>

      <List
        list={filteredList}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleCount={handleCount}
      />
    </div>
  );
}

export default App;
