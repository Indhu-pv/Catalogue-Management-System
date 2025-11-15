// src/components/TopicSearch.js
import React, { useState, useEffect, useMemo } from 'react';
import TopicCard from './TopicCard';
import NoResults from './NoResults';
import '../styles/TopicSearch.css';
import topicsData from '../data/topicsData';

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [topics] = useState(topicsData);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(topics.map(topic => topic.category))];
    return cats;
  }, [topics]);

  // Filter and sort topics based on search term, category, and sort options
  useEffect(() => {
    let results = [...topics];
    
    // Filter by search term
    if (searchTerm.trim()) {
      results = results.filter(topic => 
        topic.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(topic => topic.category === selectedCategory);
    }
    
    // Sort results
    results.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'popularity') {
        comparison = b.popularity - a.popularity;
      } else if (sortBy === 'category') {
        comparison = a.category.localeCompare(b.category);
      } else if (sortBy === 'difficulty') {
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
        comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
    
    setFilteredTopics(results);
  }, [searchTerm, topics, selectedCategory, sortBy, sortOrder]);

  // Count topics by category for the stats bar
  const categoryStats = useMemo(() => {
    const stats = {};
    topics.forEach(topic => {
      stats[topic.category] = (stats[topic.category] || 0) + 1;
    });
    return stats;
  }, [topics]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading topics...</p>
      </div>
    );
  }

  return (
    <div className="topic-search-container">
      <header className="search-header">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <h1>TOTLE <span className="subtitle">Topic Catalogue</span></h1>
        </div>
        <p>Browse and search topics in TOTLE's catalogue management system</p>
      </header>

      <div className="search-controls">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search topics by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-button" onClick={clearSearch}>
              ✕
            </button>
          )}
        </div>
        
        <div className="filter-sort-controls">
          <div className="category-filter">
            <label htmlFor="category-select">Category:</label>
            <select 
              id="category-select" 
              value={selectedCategory} 
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="sort-controls">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select" 
              value={sortBy} 
              onChange={handleSortChange}
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
              <option value="popularity">Popularity</option>
              <option value="difficulty">Difficulty</option>
            </select>
            
            <button 
              className="sort-order-toggle" 
              onClick={toggleSortOrder}
              aria-label={`Sort ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      <div className="category-stats">
        {Object.entries(categoryStats).map(([category, count]) => {
          const categoryColors = {
            'Physics': '#2196f3',
            'Computer Science': '#4caf50',
            'Chemistry': '#f44336',
            'Economics': '#ffc107',
            'Biology': '#9c27b0',
            'Engineering': '#009688'
          };
          
          return (
            <div 
              key={category} 
              className={`category-stat ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => handleCategoryChange(category === selectedCategory ? 'All' : category)}
              style={selectedCategory === category ? { backgroundColor: categoryColors[category] + '30', borderColor: categoryColors[category] } : {}}
            >
              <span className="category-name">{category}</span>
              <span 
                className="category-count"
                style={selectedCategory === category ? { backgroundColor: categoryColors[category] } : {}}
              >
                {count}
              </span>
            </div>
          );
        })}
      </div>

      <div className="results-info">
        <p>
          {searchTerm || selectedCategory !== 'All' ? (
            <>Showing {filteredTopics.length} result{filteredTopics.length !== 1 ? 's' : ''} 
              {searchTerm && <> for "<strong>{searchTerm}</strong>"</>}
              {selectedCategory !== 'All' && <> in <strong>{selectedCategory}</strong></>}
            </>
          ) : (
            <>Showing all {topics.length} topics</>
          )}
        </p>
      </div>

      <div className="topic-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))
        ) : (
          <NoResults searchTerm={searchTerm} selectedCategory={selectedCategory} />
        )}
      </div>
      
      <footer className="app-footer">
        <p>© 2023 TOTLE Catalogue Management System</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default TopicSearch;
