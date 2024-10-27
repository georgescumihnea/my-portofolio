// types/global.d.ts

interface HCaptcha {
  render: (
    container: HTMLElement,
    parameters: {
      sitekey: string;
      callback: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
      [key: string]: any;
    }
  ) => void;
  reset: () => void;
}

interface Window {
  hcaptcha?: HCaptcha;
}
