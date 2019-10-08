import { HttpClient } from '@angular/common/http';
import { TeamMemberModel } from './team-memebers.model';
import { forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class TeamMemberService {

    HOST_URL: string;

    constructor(private http: HttpClient) {
        this.HOST_URL = environment.apiUrl;
    }

    saveTeamDetails = (teamMembers: TeamMemberModel) => {
        return this.http.post(`${this.HOST_URL}/save-team-info`, teamMembers);
    }

    fetchTeamDetails = () => {
        return this.http.get(`${this.HOST_URL}/fetch-team-info`).toPromise();
    }
}