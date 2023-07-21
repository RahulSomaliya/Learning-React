import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    setItems(items => items.filter(i => i.id !== itemId));
  }

  function handleUpdateItem(item) {
    setItems(items => items.map(i => (i.id === item.id ? item : i)));
  }

  function handleClearAllItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        deleteItem={handleDeleteItem}
        updateItem={handleUpdateItem}
        clearItems={handleClearAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
