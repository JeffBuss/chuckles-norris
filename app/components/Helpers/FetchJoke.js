const FetchJoke = (url, func) => {
  fetch(url, { method: 'get' })
  .then(response => response.json())
  .then(RandomJoke => RandomJoke.value.joke)
  .then(joke => func(joke))
};

export default FetchJoke;
