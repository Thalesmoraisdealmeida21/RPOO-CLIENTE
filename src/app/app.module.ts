import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NavbarTopComponent } from './layout/navbar-top/navbar-top.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HabilidadesComponent } from './user/profile/habilidades/habilidades.component';
import { DadosComponent } from './user/profile/dados/dados.component';
import { ChallengerComponent } from './challenger/challenger.component';
import { ListChallengersComponent } from './challenger/list-challengers/list-challengers.component';
import { CreateComponent } from './challenger/create/create.component';
import { QuestionsComponent } from './challenger/create/questions/questions.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { ListGroupsComponent } from './group/list-groups/list-groups.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { GroupInformationComponent } from './group/group-information/group-information.component';
import { MenuComponent } from './challenger/menu/menu.component';
import { ListGeneralComponent } from './challenger/list-general/list-general.component';
import { SolvedComponent } from './challenger/solved/solved.component';
import { RankComponent } from './rank/rank.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarTopComponent,
    ProfileComponent,
    SidebarComponent,
    HomeComponent,
    HabilidadesComponent,
    DadosComponent,
    ChallengerComponent,
    ListChallengersComponent,
    CreateComponent,
    QuestionsComponent,
    CreateGroupComponent,
    ListGroupsComponent,
    PageHeaderComponent,
    GroupInformationComponent,
    MenuComponent,
    ListGeneralComponent,
    SolvedComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
