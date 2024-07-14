let ip = 0;
// // Get the input element
// const imageUpload = document.getElementById("dimg");
// // Add an event listener to detect file upload
// // imageUpload.addEventListener("change", function () {
// //   // Get the selected file
// //   const file = imageUpload.files[0];
// //   // Create a FileReader object
// //   const reader = new FileReader();
// //   // Set up the reader's onload event handler
// //   reader.onload = function (e) {
// //     // Get the image data URL
// //     const imageDataUrl = e.target.result;
// //     // Display the uploaded image
// //     const imagePreview = document.getElementById("divw");
// //     imagePreview.src = imageDataUrl;
// //     imagePreview.style.display = "block";
// //     document.getElementById("dtv").style.display = "none";
// //   };
// //   // Read the selected file as Data URL
// //   reader.readAsDataURL(file);
// // });
// const aimageUpload = document.getElementById("aimg");
// // Add an event listener to detect file upload
// aimageUpload.addEventListener("change", function () {
//   // Get the selected file
//   const file = aimageUpload.files[0];
//   // Create a FileReader object
//   const reader = new FileReader();
//   // Set up the reader's onload event handler
//   reader.onload = function (e) {
//     // Get the image data URL
//     const aimageDataUrl = e.target.result;
//     // Display the uploaded image
//     const aimagePreview = document.getElementById("aivw");
//     aimagePreview.src = aimageDataUrl;          
//     aimagePreview.style.display = "block";
//     document.getElementById("atv").style.display = "none";
//   };
//   // Read the selected file as Data URL
//   reader.readAsDataURL(file); 
// });
// const rimageUpload = document.getElementById("rimg");
// // Add an event listener to detect file upload
// rimageUpload.addEventListener("change", function () {
//   // Get the selected file
//   const file = rimageUpload.files[0];
//   // Create a FileReader object
//   const reader = new FileReader();
//   // Set up the reader's onload event handler
//   reader.onload = function (e) {
//     // Get the image data URL
//     const rimageDataUrl = e.target.result;
//     // Display the uploaded image
//     const rimagePreview = document.getElementById("rivw");
//     rimagePreview.src = rimageDataUrl;
//     rimagePreview.style.display = "block";
//     document.getElementById("rtv").style.display = "none";
//   };
//   // Read the selected file as Data URL
//   reader.readAsDataURL(file);
// });
let nid = 0;
let tka = 0;
function back() {
  switch (nid) {
    case 2:
      document.getElementById("apln").style.color = "white";
      document.getElementById("bck").style.display = "none";
      document.getElementById("form2").style.display = "none";
      document.getElementById("form1").style.display = "block";
      break;
    case 3:
      document.getElementById("form3").style.display = "none";
      document.getElementById("form2").style.display = "block";
      break;
    case 4:
      document.getElementById("form4").style.display = "none";
      document.getElementById("form3").style.display = "block";
      break;
    case 5:
      if(tka == 1){
        document.getElementById("form5").style.display = "none";
        document.getElementById("form4").style.display = "block";
      }else{
        document.getElementById("form6").style.display = "none";
        document.getElementById("form4").style.display = "block";
      }
      break;
    case 6:
      if(tka == 1){
        document.getElementById("form6").style.display = "none";
        document.getElementById("form5").style.display = "block";
      }else{
        document.getElementById("form7").style.display = "none";
        document.getElementById("form6").style.display = "block";
        document.getElementById("nxt").style.display = "grid";
      }
      break;
    case 7:
      document.getElementById("form7").style.display = "none";
      document.getElementById("form6").style.display = "block";
      document.getElementById("nxt").style.display = "grid";
  }
  prog(121);
}
function next(e) {
  switch (nid) {
    case 0:
      document.getElementById("form1").style.display = "block";
      break;
    case 1:
      document.getElementById("apln").style.color = "darkgrey";
      document.getElementById("bck").style.display = "grid";
      document.getElementById("aplh2").innerHTML = "Application No:";
      document.getElementById("form1").style.display = "none";
      document.getElementById("form2").style.display = "block";
      break;
    case 2:
      document.getElementById("form2").style.display = "none";
      document.getElementById("form3").style.display = "block";
      break;
    case 3:
      document.getElementById("form3").style.display = "none";
      document.getElementById("form4").style.display = "block";
      break;
    case 4:
      if(tka == 1){
        document.getElementById("form4").style.display = "none";
        document.getElementById("form5").style.display = "block";
      }else{
        document.getElementById("form4").style.display = "none";
        document.getElementById("form6").style.display = "block";  
      }
      break;
    case 5:
      if(tka == 1){
        document.getElementById("form5").style.display = "none";
        document.getElementById("form6").style.display = "block";
      }else{
        document.getElementById("form6").style.display = "none";
        document.getElementById("form7").style.display = "block";
        document.getElementById("nxt").style.display = "none";
      }
      break;
    case 6:  
        document.getElementById("form6").style.display = "none";
        document.getElementById("form7").style.display = "block";
        document.getElementById("nxt").style.display = "none";
  }
  prog(0);
}
function prog(e) {
  if (e == 0) {
    switch (nid) {
      case 1:
        document.getElementById("c1").classList.replace("act", "fill");
        document.getElementById("c2").classList.add("act");
        break;
      case 2:
        document.getElementById("c2").classList.replace("act", "fill");
        document.getElementById("c3").classList.add("act");
        break;
      case 3:
        document.getElementById("c3").classList.replace("act", "fill");
        document.getElementById("c4").classList.add("act");
        break;
      case 4:
        document.getElementById("c4").classList.replace("act", "fill");
        document.getElementById("c5").classList.add("act");
        break;
      case 5:
        document.getElementById("c5").classList.replace("act", "fill");
        document.getElementById("c6").classList.add("act");
        break;
      case 6:
        document.getElementById("c6").classList.replace("act", "fill");
        document.getElementById("c7").classList.add("act");
        break;

    }
    nid = nid + 1;
    console.log(nid);
  } else {
    switch (nid) {
      case 1:
        break;
      case 2:
        document.getElementById("c2").classList.remove("act");
        document.getElementById("c1").classList.replace("fill", "act");
        break;
      case 3:
        document.getElementById("c3").classList.remove("act");
        document.getElementById("c2").classList.replace("fill", "act");
        break;
      case 4:
        document.getElementById("c4").classList.remove("act");
        document.getElementById("c3").classList.replace("fill", "act");
        break;
      case 5:
        document.getElementById("c5").classList.remove("act");
        document.getElementById("c4").classList.replace("fill", "act");
        break;
      case 6:
        document.getElementById("c6").classList.remove("act");
        document.getElementById("c5").classList.replace("fill", "act");
        break;
      case 7:
        document.getElementById("c7").classList.remove("act");
        document.getElementById("c6").classList.replace("fill", "act");
        break;
    }
    nid = nid - 1;
    console.log(nid);
  }
}
///