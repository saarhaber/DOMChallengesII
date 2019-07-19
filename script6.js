function alerting() {
var volume = 0;;
var radius = document.getElementById('form1').value;
radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  alert ("The volume of the sphere is: " + volume);
}