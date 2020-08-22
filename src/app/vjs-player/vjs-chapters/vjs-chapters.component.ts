import { Component, OnInit, Output , Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'vjs-chapters',
  templateUrl: './vjs-chapters.component.html',
  styleUrls: ['./vjs-chapters.component.scss']
})
export class VjsChaptersComponent implements OnInit {
  @Input() timecodes;
  @Output() chapterEmitter = new EventEmitter<{seconds: number, title: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  goToChapter(obj){
    this.chapterEmitter.emit({seconds: this.stringToSeconds(obj.code), title: obj.title});
  }

  stringToSeconds(hms: string): number {
    // var hms = '02:04:33';
    let a = hms.split(':'); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  }
}
