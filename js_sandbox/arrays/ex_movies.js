const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

const result = movies
  .filter(obj => obj.year === 2018 && obj.rating > 4)
  .sort((a, b) => {
    //if (a.rating < b.rating) return 1;
    //if (a.rating > b.rating) return -1;
    //return 0;
    return a.rating - b.rating;
  })
  .reverse()
  .map(obj => obj.title);

console.log(result);
