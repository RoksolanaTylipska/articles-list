export const ADD_ARTICLE = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const PIN_ARTICLE = 'PIN_ARTICLE';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: article,
});

export const removeArticle = (articleId) => ({
  type: REMOVE_ARTICLE,
  payload: articleId,
});

export const pinArticle = (articleId) => ({
  type: PIN_ARTICLE,
  payload: articleId,
});

export const editArticle = (article) => ({
  type: EDIT_ARTICLE,
  payload: article,
});
