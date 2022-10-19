import { Component, Input } from "@angular/core";

@Component({
    selector: 'tx-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
    @Input() isLoading: boolean = false;
}