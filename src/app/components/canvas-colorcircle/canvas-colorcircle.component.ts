import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  HostListener,
  EventEmitter,
} from '@angular/core'


@Component({
  selector: 'app-canvas-colorcircle',
  templateUrl: './canvas-colorcircle.component.html',
  styleUrls: ['./canvas-colorcircle.component.scss']
})
export class CanvasColorcircleComponent implements AfterViewInit {

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>

  @Output()
  color: EventEmitter<number[]> = new EventEmitter()

  private ctx: CanvasRenderingContext2D
  private mousedown: boolean = false
  private selectedHeight: number

  ngAfterViewInit() {
    this.draw()
  }

  draw() {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d')
    }
    const width = this.canvas.nativeElement.width
    const height = this.canvas.nativeElement.height

    var x = width / 2;
    var y = height / 2;
    var radius = Math.min(x, y);
    var counterClockwise = false;
    
    for(var angle=0; angle<=360; angle+=1){
        var startAngle = (angle-2)*Math.PI/180;
        var endAngle = angle * Math.PI/180;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        this.ctx.closePath();
        //this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = 'hsl('+angle+', 100%, 50%)';
        this.ctx.stroke();
    }

    /*this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.arc(x, y, radius/2, 0, Math.PI*2, counterClockwise);
    this.ctx.closePath();
    this.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.ctx.fill();*/
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(evt: MouseEvent) {
    this.mousedown = false
  }

  onMouseDown(evt: MouseEvent) {
    this.mousedown = true
    this.selectedHeight = evt.offsetY
    this.draw()
    this.emitColor(evt.offsetX, evt.offsetY)
  }

  onMouseMove(evt: MouseEvent) {
    if (this.mousedown) {
      this.selectedHeight = evt.offsetY
      this.draw()
      this.emitColor(evt.offsetX, evt.offsetY)
    }
  }

  emitColor(x: number, y: number) {
    const rgbaColor = this.getColorAtPosition(x, y)
    this.color.emit(rgbaColor)
  }

  getColorAtPosition(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data
    return (
      [imageData[0], imageData[1], imageData[2]]
    )
  }
}
