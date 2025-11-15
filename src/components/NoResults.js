// src/components/NoResults.js
import React from 'react';
import '../styles/NoResults.css';

const NoResults = ({ searchTerm, selectedCategory }) => {
  return (
    <div className="no-results">
      <div className="no-results-icon">🔍</div>
      <h3>No topics found</h3>
      
      {searchTerm && selectedCategory !== 'All' ? (
        <p>No results matching "<strong>{searchTerm}</strong>" in <strong>{selectedCategory}</strong></p>
      ) : searchTerm ? (
        <p>No results matching "<strong>{searchTerm}</strong>"</p>
      ) : selectedCategory !== 'All' ? (
        <p>No topics found in <strong>{selectedCategory}</strong></p>
      ) : (
        <p>No topics available in the catalogue</p>
      )}
      
      <div className="suggestions">
        <h4>Suggestions:</h4>
        <ul>
          <li>Check the spelling of your search term</li>
          <li>Try using more general keywords</li>
          <li>Try a different category filter</li>
          <li>Browse all topics by clearing your search</li>
        </ul>
      </div>
      
      <button className="browse-all-button" onClick={() => window.location.reload()}>
        Browse All Topics
      </button>
    </div>
  );
};

export default NoResults;
