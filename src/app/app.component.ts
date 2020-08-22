import { Component, OnInit } from '@angular/core';
import { VideoJsPlayerOptions } from 'video.js';

export class TimeCode {
  id? : number;
  archiveid? : number;
  code : string; // number?
  active? : number;
  title : string;
  created? : string;
  modified? : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  opciones: VideoJsPlayerOptions;
  timecodes: TimeCode[];
  constructor(){}

  ngOnInit(){
    /*
    * PARA VIDEOS USAR atributo sources, en opciones
    * PARA AUDIOS USAR atributo src, en opciones
    *
    * Si se itera para crear varios videos/audios, cada elemento tiene que tener un ID único (idx)
    */
    this.opciones = {
        poster: '../assets/videos/posters/oceans.jpeg',
        controls: true,
        aspectRatio: '16:9',
        preload: 'none',
        sources: [{ src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }]
    };
    let timecode1: TimeCode = new TimeCode();
    timecode1.code = '00:00:10';
    timecode1.title = 'delfines';

    let timecode2: TimeCode = new TimeCode();
    timecode2.code = '00:00:25';
    timecode2.title = 'más peces';

    let timecode3: TimeCode = new TimeCode();
    timecode3.code = '00:00:32';
    timecode3.title = 'ballenas';

    this.timecodes = [
       timecode1, timecode2, timecode3
    ];
      /*
      {
        poster: '../assets/videos/posters/sample_1280x720.jpeg',
        controls: true,
        aspectRatio: '4:3',
        preload: 'none',
        sources: [{ src: '../assets/videos/sample_1280x720.m4v', type: 'video/mp4' }]},
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
        src: 'assets/1.mp3'
      }*/
  }
}
