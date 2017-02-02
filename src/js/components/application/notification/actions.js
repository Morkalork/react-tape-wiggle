export const SHOW_INFO = 'SHOW_INFO';
export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

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

const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION,
    payload: {type: null}
  };
};

export const showInfo = (message, title) => {
  return showNotification(SHOW_INFO, 'info', message, title);
};

export const showError = (message, title) => {
  return showNotification(SHOW_ERROR, 'error', message, title);
};

export const hideInfo = () => {
  return hideNotification();
};

export const hideError = () => {
  return hideNotification();
};

export const hideAllNotifications = () => {
  return hideNotification();
}