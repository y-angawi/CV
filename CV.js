function start()
{
  var now = document.getElementById("now");
  now.innerHTML = Date();
}
function swap()
{
  var picture = document.querySelector('img');

picture.onclick = function() {
    var mySrc = picture.getAttribute('src');
    if(mySrc === 'D:/1012/Lab/done/CV/yahya2.jpg') {
      picture.setAttribute ('src','D:/1012/Lab/done/CV/yahya.png');
    } else {
      picture.setAttribute ('src','D:/1012/Lab/done/CV/yahya2.jpg');
    }
}
}
