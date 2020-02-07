import { Component, OnInit } from "@angular/core";
import { City, NFLTeam } from "../data-models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ff-prototype";
  teams: NFLTeam[] = new Array();

  /**
   *
   */
  constructor() {}

  ngOnInit() {
    for (let city in City) {
      //this.teams.push(new NFLTeam(city, City[city], "dave", null));
      //team is the static value
      //Teams[team] is the string value
      console.log("adding: " + city);
      console.log("type of city: " + typeof City[city]);
    }
    this.teams.sort();
  }
}
