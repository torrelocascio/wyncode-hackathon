import * as THREE from 'three'

export function updateScene() {
	var delta = this.clock.getDelta(); // seconds.
	var moveDistance = 200 * delta; // 200 pixels per second
	var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second

  // console.log(this.keyboard)
	if ( this.keyboard.pressed("A") )
		this.player.rotation.y += rotateAngle;
	if ( this.keyboard.pressed("D") )
		this.player.rotation.y -= rotateAngle;

	if ( this.keyboard.pressed("left") )
		this.player.position.x -= moveDistance;
	if ( this.keyboard.pressed("right") )
		this.player.position.x += moveDistance;
	if ( this.keyboard.pressed("up") )
		this.player.position.z -= moveDistance;
	if ( this.keyboard.pressed("down") )
		this.player.position.z += moveDistance;

  for (let car of this.collidableMeshList){
    this.animateCars(car, delta);
  }

	// collision detection:
	//   determines if any of the rays from the cube's origin to each vertex
	//		intersects any face of a mesh in the array of target meshes
	//   for increased collision accuracy, add more vertices to the cube;
	//		for example, new THREE.CubeGeometry( 64, 64, 64, 8, 8, 8, wireMaterial )
	//   HOWEVER: when the origin of the ray is within the target mesh, collisions do not occur
	var originPoint = this.player.position.clone();

	// clearText();

	for (var vertexIndex = 0; vertexIndex < this.player.geometry.vertices.length; vertexIndex++)
	{
		var localVertex = this.player.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4( this.player.matrix );
		var directionVector = globalVertex.sub( this.player.position );

		var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
    var collisionResults = ray.intersectObjects( this.collidableMeshList );
    // console.log(ray, collisionResults);
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() )
      // appendText(" Hit ");
      console.log("Hit");
	}

    this.controls.update();
}

export function animateScene () {
    this.window.requestAnimationFrame(this.animateScene);
    // drawCount = (drawCount + 1) % MAX_POINTS;

    // const line = lines[0];
    // line.geometry.setDrawRange(0, drawCount);
    // if (drawCount === 0) {
      // updateLinePositions();
      // line.geometry.attributes.position.needsUpdate = true;
      // line.material.color.setHSL(Math.random(), 1, 0.5);
    // }
    this.renderer.render(this.scene, this.camera);
    this.updateScene();
}