import { useState } from 'react';

export default function Item({
  item,
  deleteItem: handleDeleteItem,
  updateItem: handleUpdateItem,
}) {
  const { quantity, description, packed } = item;
  const [packedStatus, setPackedStatus] = useState(packed);

  console.log(`💎 initial packedStatus: `, packedStatus);

  function deleteItem() {
    handleDeleteItem(item.id);
  }

  function updatePackingStatus(e) {
    handleUpdateItem({ ...item, packed: !packedStatus });
    setPackedStatus(packed => !packed);
  }

  return (
    <li>
      <input
        type='checkbox'
        value={packedStatus}
        onChange={updatePackingStatus}
      />
      <span style={packedStatus ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={deleteItem}>❌</button>
    </li>
  );
}
