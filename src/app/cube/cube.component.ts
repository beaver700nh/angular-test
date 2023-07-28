import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private geometry = new THREE.IcosahedronGeometry(1.0);
  private texture = new THREE.TextureLoader().load("/assets/peakpx.png");
  private material = new THREE.MeshLambertMaterial({map: this.texture});
  private cube = new THREE.Mesh(this.geometry, this.material);

  private light = new THREE.AmbientLight(0xFFFFFF, 2.0);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  private animateCube(): void {
    this.cube.rotation.x += 0.05;
    this.cube.rotation.y += 0.01;
  }

  private createScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x2F2F2F);
    this.scene.add(this.light, this.cube);

    this.camera = new THREE.PerspectiveCamera();
    this.camera.position.z = 10;
  }

  private startRenderingLoop(): void {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(500, 500);

    (function render(this: any): void {
      requestAnimationFrame(render.bind(this));
      this.animateCube();
      this.renderer.render(this.scene, this.camera);
    }).bind(this)();
  }

  constructor() {
    // nothing
  }

  ngOnInit(): void {
    // nothing
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }
}
