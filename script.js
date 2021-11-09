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

// On Load
selectMediaStream();
