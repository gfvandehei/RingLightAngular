import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LightCardComponent } from './light-card/light-card.component';
import { CanvasColorcircleComponent } from './canvas-colorcircle/canvas-colorcircle.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LightCardComponent,
    CanvasColorcircleComponent],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LightCardComponent,
    CanvasColorcircleComponent
  ]
})
export class ComponentsModule {}
