import React, { useState, useEffect, useRef } from "react";
import "./Search.css"; 

function Search() {
    const [inputVisible, setInputVisible] = useState(false); // State to manage input visibility
    const [searchQuery, setSearchQuery] = useState(""); // State to manage the search input
    const [showPressEnter, setShowPressEnter] = useState(false); // State for showing "Press Enter" message
    const containerRef = useRef(null); // Reference to the search container

    const toggleInput = () => {
        setInputVisible(true); // Show the input field
        setShowPressEnter(true); // Show "Press Enter" message
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value); // Update search query state
    };

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
        // Redirect to the search results page
        window.location.href = `http://localhost:3000/search?q=${encodeURIComponent(searchQuery)}`;
    };

    // Close input if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setInputVisible(false); // Hide input if clicked outside
                setShowPressEnter(false); // Hide "Press Enter" message
                setSearchQuery(""); // Clear the input
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [containerRef]);

    return (
        <div className="search-container" ref={containerRef}>
            {inputVisible ? (
                <>
                    <input 
                        type="text" 
                        id="searchInput"
                        value={searchQuery} 
                        onChange={handleInputChange} 
                        placeholder="Type your search..." 
                        onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }} // Allow searching on Enter key press
                    />
                    {showPressEnter && <p className="press-enter">Press Enter</p>} {/* Display message */}
                </>
            ) : (
                <button id="Search" onClick={toggleInput}>
                    🔍 Search
                </button>
            )}
        </div>
    );
}

export default Search;
