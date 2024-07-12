function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  console.log(capitalizeFirstLetters("hello i'm aditya from this side"));