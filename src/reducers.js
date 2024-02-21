import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  PIN_ARTICLE,
  EDIT_ARTICLE,
} from './actions';

const initialState = {
  articles: [],
  pinnedArticleId: null,
};

const generateUniqueId = () => {
  const id = new Date().getTime();
  return `${id}`;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArticle = {
        ...action.payload,
        id: generateUniqueId(),
      };
      return {
        ...state,
        articles: [...state.articles, newArticle],
      };
    case EDIT_ARTICLE:
      const editedArticleIndex = state.articles.findIndex(article => article.id === action.payload.id);
      const updatedArticlesCopy = [...state.articles];
      updatedArticlesCopy[editedArticleIndex] = {
        ...updatedArticlesCopy[editedArticleIndex],
        title: action.payload.title,
        description: action.payload.description,
      };
      return {
        ...state,
        articles: updatedArticlesCopy,
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== action.payload),
      };
    case PIN_ARTICLE:
      const articleIndex = state.articles.findIndex(article => article.id === action.payload);
      const updatedArticles = [
        state.articles[articleIndex],
        ...state.articles.slice(0, articleIndex),
        ...state.articles.slice(articleIndex + 1)
      ];
      return {
        ...state,
        articles: updatedArticles,
          pinnedArticleId: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;