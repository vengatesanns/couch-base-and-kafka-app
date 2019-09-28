import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TeamMembersComponent } from './team-members.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamMemberService } from './team-members.service';

@NgModule({
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
    declarations: [TeamMembersComponent],
    exports: [TeamMembersComponent],
    providers: [TeamMemberService]
})
export class TeamMembersModule {

}