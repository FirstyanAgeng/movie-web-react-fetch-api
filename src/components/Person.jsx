const Person = (props) => {
  return (
    <>
      <h1>Name :{props.name}</h1>
      <h2>Last Name : {props.lastName}</h2>
      <h2>Age : 30 {props.age}</h2>
    </>
  );
};

export default Person;
