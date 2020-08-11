import { Component, OnInit } from '@angular/core';
import { VideoOptions } from './vjs-player/vjs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  opciones: Array<VideoOptions>;

  constructor(){}

  ngOnInit(){
    this.opciones = [
      { poster: '../assets/videos/posters/oceans.jpeg',
        controls: true,
        aspectRatio: '16:9',
        preload: 'none',
        sources: [{ src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }]},
      { poster: '../assets/videos/posters/sample_1280x720.jpeg',
        controls: true,
        aspectRatio: '4:3',
        preload: 'none',
        sources: [{ src: '../assets/videos/sample_1280x720.m4v', type: 'video/mp4' }]},
      { controls: true,
        aspectRatio: '4:3',
        muted: true,
        techOrder: ['youtube'],
        sources: [{ src: 'https://www.youtube.com/watch?v=0FnPMIy42_4', type: 'video/youtube' }]},
      { controls: true,
        //aspectRatio: '4:3',
        fluid: true,
        muted: true,
        techOrder: ['Vimeo'],
        sources: [{ src: 'https://vimeo.com/258591291', type: 'video/vimeo' }]}
    ];
  }
}
