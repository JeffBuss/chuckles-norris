const FetchJoke = (url, jokesCount, getRandomJoke) => {
  fetch(url + '/' + jokesCount)
  .then((response) => {
    return (response.json());
  }).then((data) => {
    return (data.value);
  }).then((array) => {
    return (array.map(i => i.joke));
  }).then(((jokes) => {
    return (getRandomJoke(jokes));
  }));
};

export default FetchJoke;
