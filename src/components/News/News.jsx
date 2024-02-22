import React, { useEffect, useState } from 'react';
import './News.css';
import NewsItem from '../NewsItem/NewsItem';
import Button from '../Button/Button';
import { CircularProgress } from '@mui/material';

const apiKey = 'a06c78e095c6450dab617c2efd162eb4';
const pageSize = 10;
const country = 'us';
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${apiKey}`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 
    fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network not response');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setArticles(data.articles);
      })
      .catch(error => {
        console.error('Problem with the fetch operation:', error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  const loadMoreArticles = () => {
    const nextPage = page + 1;
    const nextPageUrl = `${BASE_URL}&page=${nextPage}`;

    fetch(nextPageUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network not response');
        }
        return response.json();
      })
      .then(data => {
        const newArticles = data.articles.filter(article => !articles.some(existingArticle => existingArticle.title === article.title));
        setArticles(prevArticles => [...prevArticles, ...newArticles]);
        setPage(nextPage);
      })
      .catch(error => {
        console.error('Problem with the fetch operation:', error);
      })

  };

  return (
    <main className="news">
      {isLoading && <CircularProgress color="inherit" />}
      <ul className="news__list">
        {articles.map((article, index) => (
          <li className="news__list-item" key={index}>
            <NewsItem article={article} />
          </li>
        ))}
      </ul>
      <Button content="Load more..." onClick={loadMoreArticles} />
    </main>
  );
};

export default News;