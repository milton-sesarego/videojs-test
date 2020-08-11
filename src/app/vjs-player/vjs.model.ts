export interface VideoOptions{
  // Standard <video> Element Options
  autoplay?: boolean|string;
  controls?: boolean;
  height?: string|number;
  width?: string|number;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  preload?: string;
  src?: string;
  // Video.js-specific Options
  aspectRatio?: string;
  autoSetup?: boolean;
  breakpoints?: object;
  children?: Array<string>|object;
  fluid?: boolean;
  inactivityTimeout?: number;
  language?: string;
  languages?: object;
  liveui?: boolean;
  nativeControlsForTouch?: boolean;
  notSupportedMessage?: string;
  fullscreen?: object;
  playbackRates?: Array<number>;
  plugins?: object;
  responsive?: boolean;
  sources?: Array<object>;
  suppressNotSupportedError?: boolean;
  techCanOverridePoster?: boolean;
  techOrder?: Array<string>;
  userActions?: object;
  // userActions.doubleClick?: boolean|function;
  // userActions.hotkeys?: boolean|function|object
  // userActions.hotkeys.fullscreenKey?: function
  // userActions.hotkeys.muteKey?: function
  // userActions.hotkeys.playPauseKey?: function
  // vtt.js?: string
}
