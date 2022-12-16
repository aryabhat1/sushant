import React, { useEffect } from "react";
import "./HomeStyle.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import space from "../../images/space.jpg";
// import { Timeline } from "@mui/icons-material";
import TimeLine from "../timeline/TimeLine";
import { Typography } from "@mui/material";
import wallpaper from "../../images/wallpaper.jpg";
import youtubeimage from "../../images/youtube1.jpg";

import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiRust,
  SiSolidity,
} from "react-icons/si";
import YoutubeCard from "../youtubeCard/YoutubeCard";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(space);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    // pointLight.position.z = 10;

    // const lightHelper = new THREE.PointLightHelper(pointLight);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(8, -5, -5);

    // const controls = new OrbitControls(camera, renderer.domElement);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    // scene.add(lightHelper);

    const constSpeed = 0.05;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;

        // venus.position.x = -8;
      }

      if (e.clientY > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;

        // venus.position.x = -8;
      }
    });

    // moon.rotation.y = 1;
    camera.position.set(4, 4, 8);
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
            <img src={wallpaper} alt="no wallpaper" srcset="" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
            <img src={wallpaper} alt="no wallpaper" srcset="" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
            <img src={wallpaper} alt="no wallpaper" srcset="" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
            <img src={wallpaper} alt="no wallpaper" srcset="" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
            <img src={wallpaper} alt="no wallpaper" srcset="" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
            <img src={wallpaper} alt="no wallpaper" srcset="" />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiRust />
          {/* <SiSolidity /> */}
          <SiReact />
          <SiThreedotjs />
          <SiNodedotjs />
          <SiExpress />
          <SiJavascript />
          {/* <SiHtml5 /> */}
          {/* <SiCss3 /> */}
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">Youtube Content</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard image={youtubeimage} title="My tutorial" />

          <YoutubeCard image={youtubeimage} title="My tutorial" />

          <YoutubeCard image={youtubeimage} title="My tutorial" />

          <YoutubeCard image={youtubeimage} title="My tutorial" />
        </div>
      </div>
    </div>
  );
};

export default Home;
