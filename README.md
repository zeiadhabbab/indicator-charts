# Indicator Chart Anguar Component 
## How to use this component:
```
<app-indicator-charts [percent]="60" [fontsize]="300" [animated]="false" [customClass]="'cusindicator'">
</app-indicator-charts>
```

## To override the CSS
```
.customClass {
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
```
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/indicator-charts)
