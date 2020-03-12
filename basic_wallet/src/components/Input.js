import React from 'react';

function Input(props) {

  
  return (
    <form onSubmit={handle}>
      <input type="number" name="id" />
      <button type="submit">Save</button>
    </form>
  );
}

export default Input;
