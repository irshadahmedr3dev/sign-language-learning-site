const video = document.getElementById("videoElement");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

async function setupCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    console.log("[INFO] Camera started.");
  } catch (error) {
    console.error("[ERROR] Cannot access camera:", error);
    alert("Camera permission is required to use this feature.");
  }
}

function captureFrameAndPredict() {
  if (video.readyState !== 4) {
    console.warn("[WARN] Video not ready.");
    return;
  }

  canvas.width = 224;
  canvas.height = 224;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataURL = canvas.toDataURL("image/jpeg");

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: imageDataURL }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.prediction) {
        document.getElementById("prediction").innerText = `Prediction: ${data.prediction}`;
      } else {
        document.getElementById("prediction").innerText = `Error: ${data.error}`;
      }
    })
    .catch((error) => {
      console.error("[ERROR] Prediction failed:", error);
    });
}

// Load camera and start prediction
setupCamera();

// Call prediction every 2 seconds
setInterval(captureFrameAndPredict, 2000);
