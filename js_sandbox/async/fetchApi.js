fetch(' https://languagetool.org/api/v2/languages')
  .then(response => {
    console.log('resolved', response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
