function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  var pos2=500;

  function frame() {
    if (pos < 500) {


      pos++;

      elem.style.left = pos + 'px';
    }




      else{
        pos2--;
        elem.style.left = pos2 + 'px';

      }
    


}


}
