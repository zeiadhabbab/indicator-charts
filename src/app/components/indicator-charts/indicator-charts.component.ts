import {Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-indicator-charts',
  templateUrl: './indicator-charts.component.html',
  styleUrls: ['./indicator-charts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndicatorChartsComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.percent.currentValue !== undefined) {
      this.percent = Math.ceil(changes.percent.currentValue);
      if (this.percent >= 50 && this.percent <= 84) {
          this.color = ' orange ';
      } else if(this.percent >= 85) {
          this.color = ' green ';
      } else {
          this.color = '';
      }
      if(this.animated){
        let itemClass = "p0";
        let index = 0;
        let max = Math.floor(this.percent);
        let parent = this;
        let interval = setInterval(function(){

          if(index <= max ){

            index++;
            parent.itemClass = parent.customClass + " p" + index;

          }else{
            clearInterval(interval);
          }

        },10);
      }else{
        this.itemClass = this.customClass + " p" + Math.floor(this.percent);
      }
    }
  }

  /**
   *  How to use this component:
   *  <app-indicator-charts [percent]="60" [fontsize]="300" [animated]="false" [customClass]="'cusindicator'">
   *  </sf-indicator-charts>
   *  To override the CSS
   *  .customClass {
        .c100.color .bar,
        .c100.color .fill {
          border: 0.08em solid #e4f402 !important;
        }
        .c100.color:hover > span {
          color: #00f426;
        }

        .c100.color:after {
          background-color: #cecece !important;
        }

        .c100.color span {
          color: #1514f4 !important;
        }

        .c100.color {
          background-color: #821cad !important;
        }
      }
   ****/

  @Input() percent = 50;
  @Input() fontsize = 100;
  @Input() animated:boolean = true ;
  @Input() customClass;
  @Input() idPrefix = '';
  color = '';

  public itemClass;

  constructor() {
  }


  ngOnInit(){
    if(this.animated){
      let itemClass = "p0";
      let index = 0;
      let max = Math.floor(this.percent);
      if (this.percent >= 50 && this.percent <= 84) {
          this.color = ' orange ';
      } else if(this.percent >= 85) {
          this.color = ' green ';
      } else {
          this.color = '';
      }
      let parent = this;
      let interval = setInterval(function(){

        if(index <= max ){

          index++;
          parent.itemClass = parent.customClass + " p" + index;

        }else{

          clearInterval(interval);

        }

      },10);
    }else{
      this.itemClass = this.customClass + " p" + Math.floor(this.percent);
    }
  }

  public getStyle(){
    return  this.fontsize+"px";
  }


}
