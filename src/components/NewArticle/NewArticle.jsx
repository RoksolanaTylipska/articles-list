import React, { useState } from 'react';
import './NewArticle.css'
import { useDispatch } from 'react-redux';
import { addArticle } from '../../actions';
import Button from '../Button/Button';

function NewArticle({ setNewArticleModal }) {
  const [newArticleTitle, setNewArticleTitle] = useState('');
  const [error, setError] = useState(false); 
  const [newArticleDescription, setNewArticleDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddArticle = () => {
    if (!newArticleDescription || !newArticleTitle) {
      setError(`Title or description can't be empty`)
      return;
    }
  
    dispatch(addArticle({ title: newArticleTitle, description: newArticleDescription }));
  
    setNewArticleTitle('');
    setNewArticleDescription('');
    setNewArticleModal(false)
  };

  const closeAddArticle = () => {
    setNewArticleModal(false)
  };

  return (
    <div className='new-article'>
      <button className='new-article_button--close' onClick={closeAddArticle}></button>
      <form className='new-article__input-container'>
        <div className='new-article__input'>
          <input
            type='text'
            placeholder='Enter title'
            value={newArticleTitle}
            onChange={e => setNewArticleTitle(e.target.value)}
            className='new-article__title'
          />
          {!newArticleTitle ?
            (<lable>{error}</lable>) 
           : false
          }
        </div>
        <div  className='new-article__input'>
          <textarea
            type='text'
            placeholder='Enter description'
            value={newArticleDescription}
            onChange={e => setNewArticleDescription(e.target.value)}
            className='new-article__description'
          />
          {!newArticleDescription ?
            (<lable>{error}</lable>) 
           : false
          }
        </div>
      </form>
      <Button 
        onClick={handleAddArticle} 
        content={'Submit'} 
      />
    </div>
  );
}

export default NewArticle;
