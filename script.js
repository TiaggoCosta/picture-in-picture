const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const select = document.getElementById('select');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

select.addEventListener('click', async () => {
  // Disable Button
  select.disabled = true;
  // Start Picture in Picture
  selectMediaStream();
  // Reset Button
  select.disabled = false;
});

selectMediaStream();
