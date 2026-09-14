import { useState } from 'react'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import ItemCard from './components/ItemCard'
import ItemForm from './components/ItemForm'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Black Leather Wallet', description: 'Found a black leather wallet near the library entrance. Contains a student ID.', type: 'found', date: '2026-09-12', contact: 'john.doe@university.edu' },
    { id: 2, title: 'Honda Bike Keys', description: 'Lost my Honda bike keys with a red superhero keychain somewhere in the Science Building.', type: 'lost', date: '2026-09-11', contact: 'jane.smith@university.edu' },
    { id: 3, title: 'Blue Hydroflask', description: 'Found a blue water bottle left behind in Room 402 after the physics lecture.', type: 'found', date: '2026-09-10', contact: 'mike99@gmail.com' },
    { id: 4, title: 'Apple AirPods Pro', description: 'Lost my AirPods case at the campus cafeteria. Please let me know if you find it!', type: 'lost', date: '2026-09-09', contact: '+91-9876543210' },
    { id: 5, title: 'Calculus Textbook', description: 'Found "Calculus Early Transcendentals" on a bench near the sports complex.', type: 'found', date: '2026-09-08', contact: 'sarah.jones@university.edu' }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
    setShowForm(false);
  };

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'all' ? true : item.type === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container">
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm && (
        <ItemForm onAddItem={handleAddItem} />
      )}

      <main className="main-content">
        <FilterBar 
          filter={filter} 
          setFilter={setFilter} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="items-grid">
          {filteredItems.length === 0 ? (
            <p className="no-items">No items found matching your criteria.</p>
          ) : (
            filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))
          )}
        </div>
      </main>

      <footer className="footer">
        <p>Built for the Campus IT Class Presentation • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
