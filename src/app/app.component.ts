import { Component, OnInit } from "@angular/core";
import { Teams, Team } from "../data-models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ff-prototype";
  teams: Team[] = new Array();

  /**
   *
   */
  constructor() {}

  ngOnInit() {
    for (let team in Teams) {
      this.teams.push(new Team(team, Teams[team]));
      //team is the static value
      //Teams[team] is the string value
      console.log("adding: " + team);
    }
    this.teams.sort();
  }
}
