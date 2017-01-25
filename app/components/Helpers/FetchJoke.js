// const FetchJoke = (url) => {
//   fetch(url).then((response) => {
//     return response.json();
//   }).then((data) => {
//     return (data.value.joke);
//   });
// };

const FetchJoke = (url, jokesCount, getRandomJoke) => {
  // jokesCount?
  fetch(url + '/' + jokesCount)
  .then((response) => {
    return (response.json());
  }).then((data) => {
    return (data.value);
  }).then((array) => {
    return (array.map(i => i.joke));
  }).then(((jokes) => {
    return (getRandomJoke(jokes));
  //
  //   :

  // fetch(url).then((response) => {
  //   return response.json();
  // }).then((data) => {
  //   return (data.value.joke);
  // }).then(((joke) => {
  //   return (getRandomJoke(joke));
  }));
  // }));
};

export default FetchJoke;
