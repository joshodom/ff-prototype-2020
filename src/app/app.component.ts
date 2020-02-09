import { Component, OnInit } from "@angular/core";
import { City, NFLTeam } from "../data-models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ff-prototype";
  constructor() {}

  ngOnInit() {}
}
