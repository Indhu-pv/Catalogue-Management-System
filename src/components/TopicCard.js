// src/components/TopicCard.js
import React from 'react';
import '../styles/TopicCard.css';

const TopicCard = ({ topic }) => {
  const categoryColors = {
    'Physics': {
      light: '#e3f2fd',
      main: '#2196f3',
      dark: '#1976d2',
      text: '#0d47a1'
    },
    'Computer Science': {
      light: '#e8f5e9',
      main: '#4caf50',
      dark: '#388e3c',
      text: '#1b5e20'
    },
    'Chemistry': {
      light: '#ffebee',
      main: '#f44336',
      dark: '#d32f2f',
      text: '#b71c1c'
    },
    'Economics': {
      light: '#fff8e1',
      main: '#ffc107',
      dark: '#ffa000',
      text: '#ff6f00'
    },
    'Biology': {
      light: '#f3e5f5',
      main: '#9c27b0',
      dark: '#7b1fa2',
      text: '#4a148c'
    },
    'Engineering': {
      light: '#e0f2f1',
      main: '#009688',
      dark: '#00796b',
      text: '#004d40'
    }
  };

  const difficultyBadges = {
    'Beginner': { color: '#4caf50', text: 'Beginner' },
    'Intermediate': { color: '#ff9800', text: 'Intermediate' },
    'Advanced': { color: '#f44336', text: 'Advanced' },
    'Expert': { color: '#9c27b0', text: 'Expert' }
  };

  const colors = categoryColors[topic.category] || {
    light: '#f5f5f5', 
    main: '#9e9e9e', 
    dark: '#757575',
    text: '#424242'
  };
  
  const difficultyBadge = difficultyBadges[topic.difficulty] || { color: '#9e9e9e', text: topic.difficulty };
  
  // Calculate popularity level
  const getPopularityLabel = (score) => {
    if (score >= 90) return 'Trending';
    if (score >= 80) return 'Popular';
    return '';
  };
  
  const popularityLabel = getPopularityLabel(topic.popularity);

  return (
    <div className="topic-card" style={{ borderTopColor: colors.main }}>
      <div className="topic-card-header" style={{ backgroundColor: colors.light }}>
        <div className="category-badge" style={{ backgroundColor: colors.main, color: 'white' }}>
          {topic.category}
        </div>
        {popularityLabel && (
          <div className="popularity-badge">
            {popularityLabel === 'Trending' ? '🔥' : '👍'} {popularityLabel}
          </div>
        )}
      </div>
      
      <div className="topic-card-content">
        <h3 className="topic-name" style={{ color: colors.text }}>{topic.name}</h3>
        
        <div className="topic-card-footer">
          <div 
            className="difficulty-badge" 
            style={{ backgroundColor: difficultyBadge.color + '20', color: difficultyBadge.color }}
          >
            {difficultyBadge.text}
          </div>
          
          <div className="popularity-meter">
            <div className="popularity-bar-bg">
              <div 
                className="popularity-bar-fill" 
                style={{ 
                  width: `${topic.popularity}%`,
                  backgroundColor: colors.main
                }} 
              />
            </div>
            <span className="popularity-text">{topic.popularity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
