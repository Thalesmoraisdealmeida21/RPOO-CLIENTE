import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard } from './not-auth.guard';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HabilidadesComponent } from './user/profile/habilidades/habilidades.component';
import { DadosComponent } from './user/profile/dados/dados.component';
import { ListChallengersComponent } from './challenger/list-challengers/list-challengers.component';
import { CreateComponent } from './challenger/create/create.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { ListGroupsComponent } from './group/list-groups/list-groups.component';
import { GroupInformationComponent } from './group/group-information/group-information.component';
import { QuestionsComponent } from './challenger/create/questions/questions.component';
import { MenuComponent } from './challenger/menu/menu.component';
import { ListGeneralComponent } from './challenger/list-general/list-general.component';
import { SolvedComponent } from './challenger/solved/solved.component';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  {
     path: 'login',     
     canActivate: [NotAuthGuard],
     component: LoginComponent
  },
  { 
    path: 'register',   
    canActivate: [NotAuthGuard],
    component: RegisterComponent,
    
  },
  { 
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "profile",
  
    redirectTo: "profile/habilidades",
    canActivate: [AuthGuard]
  },
  {
    path: "profile/habilidades",
    component: HabilidadesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile/dados",
    component: DadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "desafios",
    component: MenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "desafios/lista",
    component: ListChallengersComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "desafios/lista/fazer",
    component: ListGeneralComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "desafios/novo",
    component: CreateComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "desafios/fazer/:challenger/:question",
    component: SolvedComponent,
    canActivate: [AuthGuard]
  },
{
  path: "desafios/novo/questions/:id",
  component: QuestionsComponent,
  canActivate: [AuthGuard]
},

  {
    path: "grupo/novo",
    component: CreateGroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "grupo",
    component: ListGroupsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "grupo/:id",
    component: GroupInformationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "rank",
    component: RankComponent,
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
