const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

// Prompt user to select media stream and pass to video element to play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch errors here
    console.log("Some error occured: ", error);
  }
}

// Event listner for the start button
button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
