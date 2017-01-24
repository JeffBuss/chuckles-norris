import React from 'react';

const handleChange = (e) => {
  console.log(e.target.value);
};

const JokeCount = (props) => {
  return (
    <input onChange={(e) => handleChange(e)} />
  );
};

export default JokeCount;
