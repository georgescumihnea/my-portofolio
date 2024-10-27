// next-hcaptcha.config.js

const config = {
  captchaVerifyUrl: "https://hcaptcha.com/siteverify",
  passRequestIpAddress: false,
  skipCaptchaRequestsOptimization: false,
  exceptions: false,
  cleanInterception: true,
  errorDisplayMode: "message",
  forwardCaptchaResponse: false,
  enterprise: {
    scoreThreshold: null,
  },
  envVarNames: { secret: "HCAPTCHA_SECRET" },
};

export default config;
