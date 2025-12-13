// zappar-app.js
// This component handles the "Tap to Freeze" logic for Zappar

AFRAME.registerComponent('zappar-logic', {
  init: function () {
    // 1. Get references to our objects
    this.tracker = document.querySelector('a-entity[zappar-instant]');
    this.hint = document.getElementById('hint-text');
    this.hasPlaced = false;

    // 2. Listen for a tap anywhere on the screen
    window.addEventListener('click', () => {
      // If we already placed the model, stop listening (LOCKED)
      if (this.hasPlaced) return;

      // 3. The Magic Line:
      // "placement-mode: false" tells Zappar to stop following the camera
      // and freeze the anchor exactly where it is now.
      this.tracker.setAttribute('zappar-instant', 'placement-mode: false');

      // Update the state
      this.hasPlaced = true;

      // Update the UI text to confirm it worked
      this.hint.textContent = "Scene Locked";
    });
  }
});
