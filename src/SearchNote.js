import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const SearchNote = () => {
    const [search, setSearch] = useState('')
    
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault}>
            <input
                required
                placeholder="Search for notes"
                id="search"
                type="text"
                role="searchbox"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                
            />
            <FaSearch/>
        </form>
    )
}

export default SearchNote;