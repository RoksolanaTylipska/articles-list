import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ArticlesList.css';
import Article from '../Article/Article';
import NewArticle from '../NewArticle/NewArticle';
import Button from '../Button/Button';

function ArticleList() {
  const articles = useSelector(state => state.articles);
  const [newArticleModal, setNewArticleModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

   const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           article.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main className='articles-list'>
      {newArticleModal ? (
        <NewArticle setNewArticleModal={setNewArticleModal} />
      ) : (
        <div>
        {articles.length === 0 ? (
          <p className='articles-list__text'>You don't have any articles yet...</p>
        ) : (
          <div>
            <div className='articles-list__search'>
            <input
              type='text'
              placeholder='Search articles...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=''
            />
           </div>
          <ul className='articles-list__items-container'>
            {filteredArticles.map(article => (
              <li className='articles-list__item' key={article.id}>
                <Article
                  article={article}
                />
              </li>
            ))}
          </ul>
          </div>
        )}
        <Button onClick={() => setNewArticleModal(true)} content={'Add Article'} />
      </div>
      )}
    </main>
  );
}

export default ArticleList;