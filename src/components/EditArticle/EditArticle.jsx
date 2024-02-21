import React, { useState } from 'react';
import './EditArticle.css'
import { editArticle } from '../../actions';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

function EditArticle({ article, setEditArticleModal }) {
  const { id, title, description } = article;

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setsetEditedDescription] = useState(description);
  const [error, setError] = useState(false); 

  const dispatch = useDispatch();

  const handleClose = () => {
    setEditArticleModal(false);
  }

  const handleEditArticle = () => {
    if (!editedTitle || !editedDescription) {
      setError(`Title or description can't be empty`)
      return;
    }
  
    const currentArticle = {
      id: id, 
      title: editedTitle,
      description: editedDescription,
    };
  
    dispatch(editArticle(currentArticle));
    setEditArticleModal(false);
  };

  return (
    <>
      <form className='edit-article' >
       <div className='edit-article__input'>
          <input
            type='text'
            placeholder='Enter title'
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
            className='edit-article__title'
          />
          {!editedTitle ?
            (<lable>{error}</lable>) 
           : false
          }
        </div>
        <div className='edit-article__input'>
          <textarea
            type='text'
            placeholder='Enter description'
            value={editedDescription}
            onChange={e => setsetEditedDescription(e.target.value)}
            className='edit-article__description'
          />
          {!editedDescription ?
            (<lable>{error}</lable>) 
           : false
          }
        </div>
      </form >
      <span className='edit-article__buttons'>
        <Button content={'Submit'} onClick={handleEditArticle} />
        <Button content={'Close'} onClick={handleClose} />
      </span>
    </>
  );
}

export default EditArticle;