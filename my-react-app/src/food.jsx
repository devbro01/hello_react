function Food() {

  const food1 = "Apple"
  const food2 = "Orange"
  const food3 = "Potato"
  
  return (
    <>
      <ul>
        <li className="food">{food1}</li>
        <li className="food">{food2}</li>
        <li className="food">{food3.toLowerCase()}</li>
      </ul>
    </>
  );
}

export default Food