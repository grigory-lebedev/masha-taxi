import { Component } from "@angular/core";

@Component({
    selector: "tx-page-wrapper",
    templateUrl: "./page-wrapper.component.html",
    styleUrls: ["./page-wrapper.component.scss"]
})
export class PageWrapperComponent {
    public isLoggedIn: boolean = false;
}