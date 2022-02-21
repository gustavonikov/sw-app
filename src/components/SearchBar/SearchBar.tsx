
import Search from 'antd/lib/input/Search'
import './styles.css'

type SearchBarProps = {
  onSearch: (charName: string) => void
}

export default function SearchBar({ onSearch } : SearchBarProps) {
  return (
    <div className="search-container">
      <Search 
        placeholder="Ache o seu personagem..." 
        onSearch={onSearch} 
        enterButton 
        allowClear
      />
    </div>
  )
    
}
