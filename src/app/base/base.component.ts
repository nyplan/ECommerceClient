import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) { }
  showSpinner(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);

    setTimeout(() => this.hideSpinner(spinnerType), 3000);
  }
  hideSpinner(spinnerType: SpinnerType) {
    this.spinner.hide(spinnerType);
  }
}
export enum SpinnerType {
  LineSpinClockwiseFade = "s1",
  BallAtom = "s2",
  BallFall = "s3",
  BallBeat = "s4",
  LineScalePulseOut = "s5"
}
