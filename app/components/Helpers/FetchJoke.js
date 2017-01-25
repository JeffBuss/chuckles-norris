const FetchJoke = (url) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    return (data.value.joke);
  });
};

export default FetchJoke;
