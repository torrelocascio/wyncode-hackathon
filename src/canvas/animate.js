export const animateScene = () => {
    this.window.requestAnimationFrame(animateScene);
    this.controls.update()
    // drawCount = (drawCount + 1) % MAX_POINTS;

    // const line = lines[0];
    // line.geometry.setDrawRange(0, drawCount);
    // if (drawCount === 0) {
      // updateLinePositions();
      // line.geometry.attributes.position.needsUpdate = true;
      // line.material.color.setHSL(Math.random(), 1, 0.5);
    // }
    this.renderer.render(this.scene, this.camera);
}