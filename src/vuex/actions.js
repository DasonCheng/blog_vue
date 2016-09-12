export const increment = ({dispatch}) => dispatch('INCREMENT');
export const decrement = ({dispatch}) => dispatch('DECREMENT');
export const updateMessage = ({dispatch}, value) => dispatch('UPDATEMESSAGE', value);
