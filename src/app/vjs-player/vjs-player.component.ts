// vjs-player.component.ts
import { Component, ElementRef, Input, OnDestroy, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import 'videojs-sprite-thumbnails';

@Component({
  selector: 'vjs-player',
  template: `
    <video #target class="video-js vjs-16-9" controls muted playsinline preload="none"></video>
  `,
  styleUrls: [
    './vjs-player.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };

  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    // console.log('onPlayerReady', this);
    });

    /*
    this.player.spriteThumbnails({
      interval: this.target.nativeElement.duration / 4,
      url: '../assets/videos/oceans.jpeg',
      width: 256,
      height: 106
    });
    console.log(this.target.nativeElement.duration);*/
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
