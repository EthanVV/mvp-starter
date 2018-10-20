import React from 'react';

class CreateBar extends react {
  constructor(props) {
    super(props);
  }



  render() {
    return 
      <form>
        <input type="text" name="Make New"></input>
        <input type="submit" value="Make New Task"></input>
      </form>
  }
}

export default CreateBar