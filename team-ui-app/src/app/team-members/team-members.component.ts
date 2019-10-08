import { Component, OnInit } from "@angular/core";
import { TeamMember, TeamMemberModel } from './team-memebers.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TeamMemberService } from './team-members.service';







@Component({
    selector: 'team-members',
    templateUrl: './team-members.html',
    styleUrls: ['./team-members.scss']
})
export class TeamMembersComponent implements OnInit {


    displayedColumns: string[] = ['id', 'teamName', 'teamMemberName', 'emailId', 'phoneNumber'];
    dataSource;
    registerForm: FormGroup;
    teamModel: TeamMemberModel;


    constructor(private fb: FormBuilder, private teamMemberService: TeamMemberService) {

    }

    ngOnInit(): void {
        this.teamModel = new TeamMemberModel();
        this.setFormBuilder();
        this.fetchTeamDetails();
    }

    /**
     *  Intialize the Forms using FormBuilder
     */
    setFormBuilder = () => {
        this.registerForm = this.fb.group({
            teamName: ['', Validators.required],
            teamMemberName: ['', Validators.required],
            emailId: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    /*
     * Clear Forms  
     */
    resetForm() {
        this.registerForm.reset();
    }


    /**
     * 
     * 
     */
    get form() {
        return this.registerForm.controls;
    }



    /**
     * Validation Error Messages
     * @param key 
     */
    getValidationErrorMsg = (key) => {
        if (key === 'teamName')
            return "Team Name is required";
        else if (key === 'teamMemberName')
            return "Team-Member Name is required";
        else if (key === 'emailId')
            return "Email Id is required";
        else if (key === 'phoneNumber')
            return "Phone No is required";
        else if (key === 'phoneNumber-length')
            return "Minimum 10 character for Phone No";
        else if (key === 'email-valid')
            return "Please enter valid Email Id";
    }

    /**
     * Team Register Form Submit
     */
    teamFormSubmit = () => {
        if (this.registerForm.valid) {
            this.teamMemberService.saveTeamDetails(this.teamModel).subscribe(response => {
                alert("Team Members added Successfully");
                this.fetchTeamDetails();
            }, error => {
                alert("Error while saving Team Details");
                console.error(error);
            })
        }
    }


    fetchTeamDetails = () => {
        this.teamMemberService.fetchTeamDetails().then(teamData => {
            this.dataSource = teamData;
        }, error => {
            alert("Error while fetching Team Details");
            console.error(error);
        });
    }

}