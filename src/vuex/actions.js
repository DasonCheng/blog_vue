export const increment = ({dispatch}) => dispatch('INCREMENT');
export const decrement = ({dispatch}) => dispatch('DECREMENT');
export const updateCount = ({dispatch}, value) => dispatch('UPDATECOUNT', value);
export const updateSort = ({dispatch}, value) => dispatch('UPDATESORT', value);
export const updateArticles = ({dispatch}, value) => dispatch('UPDATEARTICLES', value);
export const updateArticle = ({dispatch}, value) => dispatch('UPDATEARTICLE', value);
