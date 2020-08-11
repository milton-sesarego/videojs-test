// vjs-player.component.ts
import { Component, ElementRef, Input, OnDestroy, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { VideoOptions } from './vjs.model';
import videojs from 'video.js';
import 'videojs-sprite-thumbnails';
import 'videojs-youtube';
import '@devmobiliza/videojs-vimeo/dist/videojs-vimeo.cjs';

@Component({
  selector: 'vjs-player',
  template: `
    <video #target class="video-js"></video>
  `,
  styleUrls: [
    './vjs-player.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  @Input() options: VideoOptions;

  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    // console.log('onPlayerReady', this);
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
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
