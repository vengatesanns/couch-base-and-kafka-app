import { HttpClient } from '@angular/common/http';
import { TeamMemberModel } from './team-memebers.model';
import { forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamMemberService {

    HOST_URL = 'http://localhost:9003'

    constructor(private http: HttpClient) {

    }

    saveTeamDetails = (teamMembers: TeamMemberModel) => {
        return this.http.post(`${this.HOST_URL}/save-team-info`, teamMembers);
    }

    fetchTeamDetails = () => {
        return this.http.get(`${this.HOST_URL}/fetch-team-info`).toPromise();
    }
}