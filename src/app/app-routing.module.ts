import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamListComponent } from "./team-list/team-list.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { MyTeamComponent } from "./my-team/my-team.component";

const routes: Routes = [
  { path: "teams", component: TeamListComponent },
  { path: "players", component: PlayerListComponent },
  { path: "my-team", component: MyTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
