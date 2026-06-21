import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "dotlottie-player": any;
      }
    }
  }
}
