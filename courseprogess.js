document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("courseVideo");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    // ✅ Ensure progress is loaded before playing
    const savedProgress = localStorage.getItem("englishCourseProgress");

    video.addEventListener("loadedmetadata", () => {
        if (savedProgress) {
            const lastTime = parseFloat(savedProgress);
            if (!isNaN(lastTime) && lastTime < video.duration) {
                video.currentTime = lastTime; // Resume playback
                console.log("✅ Resuming video from:", lastTime);
            }
        }
    });

    // ✅ Update progress bar in real-time
    video.addEventListener("timeupdate", () => {
        if (video.duration) {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.value = progress;
            progressText.innerText = `${Math.round(progress)}%`;

            // Save progress to localStorage
            localStorage.setItem("englishCourseProgress", video.currentTime);
        }
    });

    // ✅ Clear progress when video ends
    video.addEventListener("ended", () => {
        localStorage.removeItem("englishCourseProgress");
        progressBar.value = 100;
        progressText.innerText = "100% - Completed 🎉";
    });

    console.log("✅ Video progress tracking initialized.");
});
