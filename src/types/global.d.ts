/**
 * Global JSX type declarations for custom web components used in the portfolio.
 * This file is automatically picked up by TypeScript via tsconfig.json.
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          background?: string;
          speed?: string;
          loop?: boolean;
          autoplay?: boolean;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }
}

export {};
