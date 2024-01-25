import { Component ,ViewChild,ElementRef} from '@angular/core';
import { CommonModule ,} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @ViewChild("content",{static:true}) content:ElementRef | undefined;

  title = 'researchmart';
  constructor(  private modalService: NgbModal) {

  }
   ngOnInit(): void {
    this.openModel(this.content)
    
   }

   openModel(data:any){
    this.modalService.open(data, {
      size: "md",
      centered: true,
      scrollable: true,
      keyboard: false,
    });
   }
}
