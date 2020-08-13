// vjs-player.component.ts
import { Component, ElementRef, Input, OnDestroy, AfterViewInit, ViewEncapsulation } from '@angular/core';
import videojs, { VideoJsPlayerOptions } from 'video.js';
//import 'videojs-sprite-thumbnails';
import 'videojs-youtube';
import '@devmobiliza/videojs-vimeo/dist/videojs-vimeo.cjs';
import * as WaveSurfer from 'wavesurfer.js';
import * as Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

@Component({
  selector: 'vjs-player',
  templateUrl: './vjs-player.component.html',
  styleUrls: ['./vjs-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class VjsPlayerComponent implements AfterViewInit, OnDestroy {
  private player;
  private plugin;
  private config: VideoJsPlayerOptions;
  idx;

  @Input() options: {config: VideoJsPlayerOptions, src: object, idx: number};

  constructor(private elementRef: ElementRef) {
    this.player = false;
    // save reference to plugin (so it initializes)
    this.plugin = Wavesurfer;
  }

  ngAfterViewInit() {

    console.log(this.options.idx)
    this.player = videojs(document.getElementById('target-' + this.options.idx), this.options.config, () => {
      this.player.src(this.options.src);
    });

    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });

    /* TODO: VIDEO SPRITE THUMBNAILS
    const self = this;
    this.target.nativeElement.onloadedmetadata = function() {
      self.player.spriteThumbnails({
        interval: //,
        url: '../assets/videos/thumbnails/oceans.jpeg',
        width: //,
        height: //
      });
    };*/
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
      this.player = false;
    }
  }
}
