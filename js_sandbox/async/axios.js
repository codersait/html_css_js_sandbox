const getTodo = async () => {
    const response = await axios.get('todos/luigi.json');
    return response.data;
};

getTodo()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));