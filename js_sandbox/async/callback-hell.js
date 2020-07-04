const getLang = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

getLang('./todos/luigi.json', (err, data) => {
  console.log(data);
  getLang('./todos/mario.json', (err, data) => {
    console.log(data);
    getLang('./todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});
