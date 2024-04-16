import React, { useState, useMemo } from 'react';

// Mock data - large list of items
const largeDataset = [...Array(10000).keys()].map(i => `Item ${i}`);

// HeavyComputationComponent
function HeavyComputationComponent({ items }) {
  const [filterTerm, setFilterTerm] = useState('');
  
  // Expensive computation - filtering the dataset based on filter term
  const filteredItems = useMemo(() => {
    console.log('Performing filtering...');
    return items.filter(item => item.toLowerCase().includes(filterTerm.toLowerCase()));
  }, [items, filterTerm]);

  return (
    <div>
      {/* Input field for filter term */}
      <input 
        type="text" 
        placeholder="Filter items..." 
        value={filterTerm} 
        onChange={e => setFilterTerm(e.target.value)} 
      />
      
      {/* Display filtered items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Computation() {
  return (
    <div>
      <h1>Optimizing Component Performance with useMemo</h1>
      <HeavyComputationComponent items={largeDataset} />
    </div>
  );
}
