# TOTLE Topic Search Component

A React-based topic search and filtering component for TOTLE's Catalogue Management System. This application allows users to search and filter topics by name and category, with advanced sorting capabilities and a modern, responsive UI.

## 🔗 Live Demo & Repository

- **GitHub Repository**: [https://github.com/Indhu-pv/Catalogue-Management-System](https://github.com/Indhu-pv/Catalogue-Management-System)
- **Video Walkthrough**: [Link to your video walkthrough]

## ✨ Features

- 🔍 **Real-time Search Filtering**: Filter topics instantly as you type
- 🗂️ **Category Filtering**: Filter topics by specific categories
- 📊 **Interactive Statistics**: View and filter by category with visual statistics
- 🔄 **Advanced Sorting**: Sort topics by name, category, popularity, or difficulty
- 📱 **Fully Responsive Design**: Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI**: Clean, professional interface with smooth animations
- 🏷️ **Visual Category Coding**: Color-coded topics for easy recognition
- 📈 **Popularity Indicators**: Visual indicators for topic popularity
- ⚡ **Performance Optimized**: Efficient React state management and rendering

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Indhu-pv/Catalogue-Management-System.git
   cd Catalogue-Management-System
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── TopicSearch.js   # Main search component
│   ├── TopicCard.js     # Card component for topics
│   └── NoResults.js     # No results component
├── styles/              # CSS styles
│   ├── TopicSearch.css
│   ├── TopicCard.css
│   └── NoResults.css
├── data/
│   └── topicsData.js    # Sample topic data
├── App.js               # Main App component
├── App.css              # App styles
├── index.js             # Entry point
└── index.css            # Global styles
```

## 💻 Implementation Details

### Components

- **TopicSearch**: The main component that manages state, filtering, and sorting logic
- **TopicCard**: Displays individual topic information with visual styling based on category
- **NoResults**: Displays helpful suggestions when no topics match the search criteria

### State Management

- React's useState and useEffect hooks manage the application state
- useMemo is used for performance optimization of filtered lists and statistics

### Filtering and Sorting

- Case-insensitive text search
- Category-based filtering
- Multiple sorting options (name, category, popularity, difficulty)
- Ascending/descending sort order toggle

## 📋 Requirements Met

This project was created as part of the TOTLE Frontend Developer Intern application and meets all requirements:

- ✅ Displays a search input and a list of topic cards
- ✅ Filters topics by name as the user types
- ✅ Shows "No topics found" when no matches are found
- ✅ Uses an in-memory array of topics (extended to 24 topics)
- ✅ Clean, professional UI design
- ✅ Proper error handling
- ✅ Full documentation

## 📹 Video Walkthrough

A 2-minute video explaining the code structure and implementation is available [here](link-to-your-video).

## 👤 Author

Indhu Ponnurangam

## 📄 License

This project was created for the TOTLE Frontend Developer Intern application.