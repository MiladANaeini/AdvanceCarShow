import { useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export const CarGTLFLoader = (
  gltf,
  group,
  nextCar,
  setWheelSpeed,
  moveForNextCar,
  selectedCar,
  setNextCar,
  setMoveForNextCar
) => {
  const targetPosition = useRef(new Vector3(0, -0.035, 0));
  const currentPosition = useRef(new Vector3(0, -0.035, 0));
  const lerpFactor = useRef(0); // Factor for easing
  const speed = 0.045; // Adjust speed as needed
  const duration = 6000; // Duration for the car to move from start to end
  const cubicEaseInOut = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
    if (nextCar === "models/car/MB-w2222/scene.gltf") {
      group.children[96].children[0].material.emissiveIntensity = 0; // brake lights

      group.children[96].children[4].material.emissiveIntensity = 0; // parking lights
      group.children[96].children[3].material.emissiveIntensity = 0; // parking lights

      group.children[96].children[2].material.emissiveIntensity = 0; // rear Hazard lights
      group.children[22].children[0].children[19].material.emissiveIntensity = 0; // Left mirror and front left light Hazard lights
      group.children[76].children[5].material.emissiveIntensity = 0; // right mirror Hazard lights
      group.children[60].children[2].material.emissiveIntensity = 0; // front right small Hazard lights
      group.children[63].children[2].material.emissiveIntensity = 0; // front Right Hazard

      group.children[63].children[4].material.emissiveIntensity = 0; // Left Daylight
      group.children[63].children[0].material.emissiveIntensity = 0; // Right DayLight
      group.children[63].children[6].material.emissiveIntensity = 0; // Right DayLight

      group.children[12].children[2].material.emissiveIntensity = 0; // Trunk Light
      group.children[19].children[0].material.emissiveIntensity = 0; // Dash screen
      group.children[19].children[10].material.emissiveIntensity = 0; // Dash screen
    }
    if (nextCar === "models/car/MB-SL63/scene.gltf") {
      group.children[43].children[1].material.emissiveIntensity = 0; // LowBeam
      group.children[43].children[2].material.emissiveIntensity = 0; // DayLight
      group.children[43].children[3].material.emissiveIntensity = 0; // DayLight
      group.children[43].children[4].material.emissiveIntensity = 0; // DayLight
      group.children[43].children[5].material.emissiveIntensity = 0; // Front Hazards
      group.children[83].children[6].material.emissiveIntensity = 0; // Rear Hazard lights
      group.children[83].children[0].material.emissiveIntensity = 0; // Rear parking lights
      group.children[83].children[5].material.emissiveIntensity = 0; // Rear parking lights
      group.children[83].children[1].material.emissiveIntensity = 0; // Rear brake lights
      group.children[83].children[4].material.emissiveIntensity = 0; // Rear reverse lights
    }
  }, [gltf]);

  // useEffect(() => {
  //   if (moveForNextCar) {
  //     // Move the current car to the end position
  //     setTimeout(() => {
  //       targetPosition.current.set(0, -0.035, 20);
  //       lerpFactor.current = 0; // Reset lerp factor for easing
  //       setWheelSpeed(0.8);
  //     }, 100);

  //     setTimeout(() => {
  //       // Hide the current car and prepare the next car
  //       gltf.scene.visible = false;
  //       setWheelSpeed(0);
  //       setNextCar(selectedCar); // Load the next car

  //       // Wait for a short duration before showing the next car
  //       setTimeout(() => {
  //         // Show the next car at the starting position
  //         gltf.scene.visible = true;
  //         currentPosition.current.set(0, -0.035, -20);
  //         targetPosition.current.set(0, -0.035, 0);
  //         lerpFactor.current = 0; // Reset lerp factor for easing
  //         setWheelSpeed(0.8); // Set wheel speed to 0.8 when the car starts moving
  //         moveForNextCar(false); // Reset the moveForNextCar state
  //       }, 500); // Adjust timing as needed
  //     }, 6000); // Adjust timing as needed
  //   }
  // }, [moveForNextCar, selectedCar, setNextCar]);

  // useFrame((state, delta) => {
  //   // Increase lerp factor based on the speed
  //   lerpFactor.current = Math.min(1, lerpFactor.current + speed * delta);
  //   const easedLerpFactor = cubicEaseInOut(lerpFactor.current);

  //   // Smoothly transition the car's position towards the target position with easing
  //   currentPosition.current.lerpVectors(
  //     currentPosition.current,
  //     targetPosition.current,
  //     easedLerpFactor
  //   );
  //   gltf.scene.position.copy(currentPosition.current);

  //   // Stop wheel speed when the car reaches the target position
  //   if (currentPosition.current.distanceTo(targetPosition.current) < 3) {
  //     setWheelSpeed(0);
  //   }
  // });

  useEffect(() => {
    if (moveForNextCar) {
      // Move the current car to the end position
      setTimeout(() => {
        targetPosition.current.set(0, -0.035, 20);
        lerpFactor.current = 0; // Reset lerp factor for easing
        setWheelSpeed(0.8);
      }, 100);

      setTimeout(() => {
        // Hide the current car and prepare the next car
        gltf.scene.visible = false;
        setWheelSpeed(0);
        setNextCar(selectedCar); // Load the next car

        // Wait for a short duration before showing the next car
        setTimeout(() => {
          // Show the next car at the starting position
          gltf.scene.visible = true;
          currentPosition.current.set(0, -0.035, -20);
          targetPosition.current.set(0, -0.035, 0);
          lerpFactor.current = 0; // Reset lerp factor for easing
          setWheelSpeed(0.8); // Set wheel speed to 0.8 when the car starts moving

          // Stop the wheel speed after the car reaches the target position
          setTimeout(() => {
            setWheelSpeed(0);
          }, duration * 0.7); // Slightly longer than the duration to ensure it stops
        }, 500); // Adjust timing as needed
      }, duration); // Adjust timing as needed
    }
  }, [moveForNextCar, selectedCar, setNextCar]);

  useFrame((state, delta) => {
    // Increase lerp factor based on the speed
    lerpFactor.current = Math.min(1, lerpFactor.current + speed * delta);
    const easedLerpFactor = cubicEaseInOut(lerpFactor.current);

    // Smoothly transition the car's position towards the target position with easing
    currentPosition.current.lerpVectors(
      currentPosition.current,
      targetPosition.current,
      easedLerpFactor
    );
    gltf.scene.position.copy(currentPosition.current);
  });
};
