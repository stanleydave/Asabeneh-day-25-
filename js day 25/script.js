const languages = [
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Russia: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Serbian: 4 },
  ];
  const country = document.querySelectorAll(".country");
  let arr = [];
  const figure = document.querySelectorAll(".figure");
  for (i = 0; i < languages.length; i++) {
    country[i].textContent = Object.keys(languages[i]);
    figure[i].textContent = Object.values(languages[i]);
    arr.push(Object.values(languages[i]));
  }
  const bar = document.querySelectorAll(".bar");
  for (i = 0; i < bar.length; i++) {
    bar[i].style.width = `${arr[i]}%`;
  }