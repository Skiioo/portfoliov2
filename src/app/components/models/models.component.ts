import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import { PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, Vector3, TextureLoader } from 'three';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  masque: any;
  scene = new Scene();
  camera = new PerspectiveCamera(30, (isPlatformBrowser(this.platformId) ? window.innerWidth : 0) / (isPlatformBrowser(this.platformId) ? window.innerHeight : 1), 0.1, 1000);
  renderer: WebGLRenderer = {} as WebGLRenderer;
  controls!: OrbitControls;

  isLoading = true;
  isRotating = true;

  showContent = false;
  buttonText = 'Voir plus';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer = new WebGLRenderer({ antialias: true });
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const loader = new TextureLoader();
      loader.load('../../../assets/img/bg_model3D.jpg', (texture) => {
        this.scene.background = texture;
      });

      this.renderer.setClearColor(0x040113); 
      this.addLights();
      this.loadModel();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth * 0.6; 
      const height = window.innerHeight * 0.6;
      this.renderer.setSize(width, height);
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.minPolarAngle = 0; 
      this.controls.maxPolarAngle = Math.PI; 
      this.controls.update();
      this.animate();
    }
  }

  toggleContent() {
    this.showContent = !this.showContent;
    this.buttonText = this.showContent ? 'Voir moins' : 'Voir plus';
  }

  loadModel(): void {
    if (isPlatformBrowser(this.platformId)) {
      var loader = new GLTFLoader();
      loader.load( '../../../assets/models/SAE402.glb', (gltf: any) => {
        this.masque = gltf.scene;
        this.masque.scale.set(6, 6, 6);
        this.masque.position.y = -window.innerHeight / 10; 
        this.masque.position.x = -90; 
        this.masque.position.z = -0; 
        this.scene.add(this.masque);

        this.camera.position.set(0, 100, 450); 
        this.camera.lookAt(new Vector3(0, 0, 0));

        this.controls.target.copy(this.masque.position);
        this.controls.update();

        this.isLoading = false; 

        this.zoomIn();
      });
    }
  }

  zoomIn(): void {
    if (this.camera.position.z > 0) {
      this.camera.position.z -= 2; 
      requestAnimationFrame(() => this.zoomIn());
    }
  }

  animate(): void {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.animate());
      this.controls.update();

      if (this.masque && this.isRotating) {
        this.masque.rotation.y += 0.005; 
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  addLights(): void {
    if (isPlatformBrowser(this.platformId)) {
      const ambientLight = new AmbientLight(0xffffff, 2); 
      this.scene.add(ambientLight);
    }
  }

  @HostListener('window:keydown', ['$event'])
  onDocumentKeyDown(event: KeyboardEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      switch (event.key) {
        case 'ArrowUp':
          this.camera.position.y += 1;
          break;
        case 'ArrowDown':
          this.camera.position.y -= 1;
          break;
      }
    }
  }

  toggleRotation(): void {
    this.isRotating = !this.isRotating;
  }
} 