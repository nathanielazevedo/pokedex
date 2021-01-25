

function shuffle(array) {
  let counter = array.length;
  
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  const half = Math.ceil(array.length / 2);
  let firstHand = array.splice(0, half);
  let secondHand = array.splice(-half);
  
  return [firstHand, secondHand] ;
}


export default shuffle;