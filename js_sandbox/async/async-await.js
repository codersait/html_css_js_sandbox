const getTodo = async () => {
  const response = await fetch('todos/luigi.json');
  if (response.status !== 200)
    throw new Error(`An error is occured with status code:${response.status}`);
  const data = await response.json();
  return data;
};

getTodo()
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
