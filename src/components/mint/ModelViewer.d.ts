declare module '@google/model-viewer' {
    type ModelViewer = {
      src: string;
      iosSrc?: string;
      class?: string;
      ar?: boolean;
      autoRotate?: boolean;
      cameraControls?: boolean;
      shadowIntensity?: number;
      shadowSoftness?: number;
      exposure?: number;
      environmentImage?: string;
      alt?: string;
      autoplay?: boolean
    };
  
    global {
      namespace JSX {
        interface IntrinsicElements {
          "model-viewer": ModelViewer;
        }
      }
      interface HTMLElementTagNameMap {
        'model-viewer': ModelViewer & HTMLElement;
      }
    }
  }