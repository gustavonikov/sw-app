
import Search from 'antd/lib/input/Search'
import './styles.css'

export default function SearchBar() {
  return (
    <div className="search-container">
      <Search 
        placeholder="Ache o seu personagem..." 
        className="search-bar"
        /* onSearch={onSearch} */ 
        enterButton 
      />
    </div>
  )
    
}
