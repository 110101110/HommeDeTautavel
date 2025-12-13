AFRAME.registerComponent('ar-controller', {
  init: function () {
    // 1. Get references to the HTML elements
    this.reticle = document.getElementById('reticle');
    this.model = document.getElementById('art-piece');
    this.hint = document.getElementById('hint-text');
    this.scene = this.el.sceneEl;
    this.isPlaced = false;

    // 2. EVENT: When AR Mode Starts
    this.scene.addEventListener('enter-vr', () => {
      if (this.scene.is('ar-mode')) {
        this.hint.style.display = 'block'; // Show instructions
        this.reticle.setAttribute('visible', 'true');
      }
    });

    // 3. EVENT: When User Taps the Screen
    this.scene.addEventListener('select', () => {
      // If the model is already placed, STOP. (This locks it)
      if (this.isPlaced) return;

      // Get the reticle's position on the floor
      const position = this.reticle.getAttribute('position');
      const rotation = this.reticle.getAttribute('rotation');

      // Move the hidden model to that spot
      this.model.setAttribute('position', position);
      this.model.setAttribute('rotation', rotation);

      // Make the model visible
      this.model.setAttribute('visible', 'true');

      // Hide the reticle (Clean up)
      this.reticle.setAttribute('visible', 'false');

      // Update UI text
      this.hint.textContent = "Scene Locked";

      // Set flag to true so next tap does nothing
      this.isPlaced = true;
    });
  },

  // 4. LOOP: Updates the Reticle position every frame
  tick: function () {
    // If placed, stop calculating to save battery
    if (this.isPlaced) return;

    const renderer = this.scene.renderer;
    const frame = renderer.xr.getFrame();

    if (this.scene.is('ar-mode') && frame) {
      const refSpace = renderer.xr.getReferenceSpace();
      const viewerSpace = renderer.xr.getViewerReferenceSpace();

      // Hit Test: Send a ray from center of screen to the real world
      const hitTestResults = frame.getHitTestResults(renderer.xr.getHitTestSource(viewerSpace));

      if (hitTestResults.length > 0) {
        const hitPose = hitTestResults[0].getPose(refSpace);

        // Move reticle to where the ray hit the floor
        this.reticle.setAttribute('position', hitPose.transform.position);
        this.reticle.setAttribute('rotation', hitPose.transform.orientation);
        this.reticle.setAttribute('visible', 'true');
      } else {
        // If aiming at the sky, hide reticle
        this.reticle.setAttribute('visible', 'false');
      }
    }
  }
});
