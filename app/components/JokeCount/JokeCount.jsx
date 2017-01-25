import React from 'react';

// const handleChange = (e) => {
//   console.log(e.target.value);
// };

const JokeCount = ({ handleChange, handleKeyUp }) => {
  return (
    <input
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default JokeCount;
