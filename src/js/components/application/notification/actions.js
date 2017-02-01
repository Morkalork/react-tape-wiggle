export const SHOW_INFO = 'SHOW_INFO';
export const SHOW_ERROR = 'SHOW_ERROR';

const showNotification = (actionType, type, message, title) => {
  return {
    type: actionType,
    payload: {
      type,
      message,
      title
    }
  };
};

export const showInfo = (message, title) => {
  return showNotification(SHOW_INFO, 'info', message, title);
};

export const showError = (message, title) => {
  return showNotification(SHOW_ERROR, 'error', message, title);
};