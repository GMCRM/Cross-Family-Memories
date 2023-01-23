var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName( "mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}









// #image_input

// const image_input = document.querySelector("image_input");
// var uploaded_image = "";

//   image_input.addEventListener("change", funcion(){
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//           uploaded_image = reader.result;
//     document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
//   })
//   reader.readAsDataURL(this.files[0]);
// })