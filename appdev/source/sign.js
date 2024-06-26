// Get the canvas element and clear and save buttons
const canvas = document.getElementById("signature-pad");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button"); // New button
const ctx = canvas.getContext("2d");
let drawing = false;
let prevX = 0;
let prevY = 0;
// Event listeners for drawing
canvas.addEventListener("pointerdown", (e) => {
    drawing = true;
    prevX = e.clientX - canvas.getBoundingClientRect().left;
    prevY = e.clientY - canvas.getBoundingClientRect().top;
});
canvas.addEventListener("pointermove", (e) => {
    if (!drawing) return;
    draw(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});
canvas.addEventListener("pointerup", () => {
    drawing = false;
});
canvas.addEventListener("pointerleave", () => {
    drawing = false;
});
// Function to draw on the canvas
function draw(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    prevX = x;
    prevY = y;
}
// Event listener for the clear button
clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
// Event listener for the save button
let epadv = 1;
saveButton.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("image/png");
    const esignPreview = document.getElementById("esivw");
    esignPreview.src = dataURL;
    const imgv = document.getElementById("esivw");
    const clear = document.getElementById("clear-button");
    const pad =  document.getElementById("signature-pad");
    imgv.style.display = "block";
    if(epadv == 1){
        pad.style.display = "none";
        clear.style.display = "none";
        epadv = 1212;
    }else{
        pad.style.display = "block";
        clear.style.display = "inline-flex";
        epadv = 1;
    }

});






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
//   };
//   // Read the selected file as Data URL
//   reader.readAsDataURL(file);
// });