export const getFollowIds = () => {
  const followIds = localStorage.getItem('saved_follows')
    ? JSON.parse(localStorage.getItem('saved_follows'))
    : [];

  return followIds;
};

export const saveFollowIds = (followIdArr) => {
  if (followIdArr.length) {
    localStorage.setItem('saved_follows', JSON.stringify(followIdArr));
  } else {
    localStorage.removeItem('saved_follows');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};
