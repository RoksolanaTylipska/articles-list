import React, { useState } from 'react';
import './Article.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { removeArticle, pinArticle } from '../../actions';
import EditArticle from '../EditArticle/EditArticle';

function Article({ article }) {
  const dispatch = useDispatch();
  const pinnedArticleId = useSelector(state => state.pinnedArticleId);
  const { id, title, description } = article;
  const [editArticleModal, setEditArticleModal] = useState(false)

  const isPinned = pinnedArticleId === id;

  const handlePinArticle = () => {
    if (isPinned) {
      dispatch(pinArticle(null)); 
    } else {
      dispatch(pinArticle(id)); 
    }
  };
  
  return (
    <div className='article'>
      <span className='article__text-container'>
        {editArticleModal ? (
          <EditArticle article={article} setEditArticleModal={setEditArticleModal} />
        ) 
        : (
          <>
            <h3 className='article__title'>{title}</h3>
            <p className='article__description'>{description}</p>
        </>
        )}

      </span>
      <span className='article__button-container'>
        <button className='article__button article__button--delete' onClick={() => dispatch(removeArticle(id))}></button>
        <button className='article__button article__button--edit' onClick={() => setEditArticleModal(true)}></button>
        <button
          className={classNames('article__button', {
            'article__button--pin': isPinned,
            'article__button--unpin': !isPinned
          })}
          onClick={handlePinArticle}
        >
        </button>
      </span>
    </div>
  );
}

export default Article;