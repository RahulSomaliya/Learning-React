import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  deleteItem: handleDeleteItem,
  updateItem: handleUpdateItem,
  clearItems: handleClearAllItems,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  // sorted as per user input
  if (sortBy === 'input') sortedItems = items;
  // sorted alphabetically
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // sorted as per packed Items
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => {
          return (
            <Item
              item={item}
              key={item.id}
              deleteItem={handleDeleteItem}
              updateItem={handleUpdateItem}
            />
          );
        })}
      </ul>

      <div className='action'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>

        <button onClick={handleClearAllItems}>Clear list</button>
      </div>
    </div>
  );
}
