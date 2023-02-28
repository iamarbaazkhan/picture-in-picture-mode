const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//function

async function selectMediaStream() {
  try {
    //Navigatio api to catch the screen
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //videoelement to get the src
    videoElement.srcObject = mediaStream;
    //function to play the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error
    console.log("whoops, error here:", error);
  }
}

//Calling button

button.addEventListener("click", async () => {
  // Disable button

  button.disabled = true;
  // Start pic in pic
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});
// on Load
selectMediaStream();
