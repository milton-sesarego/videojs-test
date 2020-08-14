import { Component, OnInit } from '@angular/core';
import { VideoJsPlayerOptions } from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  opciones: Array<VideoJsPlayerOptions>;
  constructor(){}

  ngOnInit(){
    /*
    * PARA VIDEOS USAR sources
    * PARA AUDIOS USAR src
    */
    this.opciones = [/*
      {
        poster: '../assets/videos/posters/oceans.jpeg',
        controls: true,
        aspectRatio: '16:9',
        preload: 'none',
        sources: [{ src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }]},
      {
        poster: '../assets/videos/posters/sample_1280x720.jpeg',
        controls: true,
        aspectRatio: '4:3',
        preload: 'none',
        sources: [{ src: '../assets/videos/sample_1280x720.m4v', type: 'video/mp4' }]},*/
      {
        controls: true,
        aspectRatio: '4:3',
        muted: true,
        techOrder: ['youtube'],
        sources: [{ src: 'https://www.youtube.com/watch?v=0FnPMIy42_4', type: 'video/youtube' }]
      },
      {
        controls: true,
        // aspectRatio: '4:3',
        fluid: true,
        muted: true,
        techOrder: ['Vimeo'],
        sources:  [{ src: 'https://vimeo.com/258591291', type: 'video/vimeo' }]
      },
      {
        controls: true,
        autoplay: false,
        fluid: true,
        loop: false,
        width: 600,
        height: 300,
        plugins: {
          // configure videojs-wavesurfer plugin
          wavesurfer: {
              backend: 'MediaElement',
              //displayMilliseconds: true,
              //debug: true,
              waveColor: 'gray',
              progressColor: 'white',
              cursorColor: 'white',
              hideScrollbar: true,
              barWidth: 2,
              barHeight: 1,
              barGap: null,
              scrollParent: true
          }
        },
        src: 'assets/2.mp3'
      }
    ];


  }
}
