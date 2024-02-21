import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ArticlesList from './components/ArticlesList/ArticlesList';

import NotFound from './components/NotFound/NotFound';
import News from './components/News/News';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  return (
    <div className={`App ${theme}`}>
      <Header setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      

    </div>
  );
}

export default App;
