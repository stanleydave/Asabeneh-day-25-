const population = [
    { World: 7693165599 },
    { China: 1377422166 },
    { India: 1295210000 },
    { USA: 323947000 },
    { Indonesia: 258705000 },
    { Brazil: 206135893 },
    { Pakistan: 194125062 },
    { Nigeria: 186988000 },
    { Bangladesh: 161006790 },
    { Russia: 146599183 },
    { Japan: 126960000 },
  ];
  
  let arr = [];
  const country = document.querySelectorAll(".country");
  const figure = document.querySelectorAll(".figure");
  for (i = 0; i < population.length; i++) {
    country[i].textContent = Object.keys(population[i]);
    figure[i].textContent = Object.values(population[i]);
    arr.push(Object.values(population[i]));
  }
  
  const census = Object.values(population[0]);
  for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((arr[i] / census) * 100);
  }
  const bar = document.querySelectorAll(".bar");
  for (i = 0; i < bar.length; i++) {
    bar[i].style.width = `${arr[i]}%`;
  }