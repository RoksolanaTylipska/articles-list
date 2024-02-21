import React from 'react';
import './NewsItem.css'

const NewsItem = ({ article }) => {

  const { urlToImage, title, author, description, url } = article

  return (
    <a href={url} target='_blank' rel="noreferrer">
      <div className='news-item__image'>
        <img src={urlToImage} alt={title} />
      </div>
      <div className='news-item__details'>
        <h3>{title}</h3>
        <p className='news-item__author'>{`Author: ${author || "unknown"}`}</p>
        <p className='news-item__description'>{description}</p>
      </div>
    </a>

  );
};

export default NewsItem;