function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const pictureArray =[
    'images/1.jpg' ,
    'images/5.jpg' ,
    'images/6.jpg' ,
    'images/2.jpg' ,
    'images/3.jpg' ,
    'images/4.jpg'
  ];

  function getpictureArray(num){
    return pictureArray[num];
  }

  