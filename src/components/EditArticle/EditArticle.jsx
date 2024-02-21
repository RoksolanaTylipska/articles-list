import React, { useState } from 'react';
import './EditArticle.css'
import { editArticle } from '../../actions';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

function EditArticle({ article, setEditArticleModal }) {
  const { id, title, description } = article;

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setsetEditedDescription] = useState(description);

  const dispatch = useDispatch();

  const handleClose = () => {
    setEditArticleModal(false);
  }

  const handleEditArticle = () => {
    if (!editedTitle || !editedDescription) {
      alert(`Title and description can't be empty`);
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
      <input
        type='text'
        value={editedTitle}
        onChange={e => setEditedTitle(e.target.value)}
        className='edit-article__title'
      />
      <textarea
        type='text'
        value={editedDescription}
        onChange={e => setsetEditedDescription(e.target.value)}
        className='edit-article__description'
      />
      </form >
      <span className='edit-article__buttons'>
        <Button content={'Submit'} onClick={handleEditArticle} />
        <Button content={'Close'} onClick={handleClose} />
      </span>
    </>
  );
}

export default EditArticle;