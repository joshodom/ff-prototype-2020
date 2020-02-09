import { Component, OnInit } from "@angular/core";
import { NFLTeam, City } from "src/data-models";

@Component({
  selector: "team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"]
})
export class TeamListComponent implements OnInit {
  teams: NFLTeam[] = new Array();

  /**
   *
   */
  constructor() {}

  ngOnInit() {
    for (let city in City) {
      let myCity: City = City[city];
      this.teams.push(new NFLTeam(myCity, city));
      //team is the static value
      //Teams[team] is the string value
      console.log("adding: " + city);
      console.log("type of city: " + typeof city);
    }
    this.teams.sort();
  }
}
