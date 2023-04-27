import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService : CustomToastrService){
    toastrService.message("Basliq", "mesaj", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomRight
    })
    toastrService.message("Basliq", "mesaj", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.BottomLeft
    })
    toastrService.message("Basliq", "mesaj", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopRight
    })
    toastrService.message("Basliq", "mesaj", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopLeft
    })
  }
}

