package com.team.members.teammembers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.team.members.teammembers.entity.TeamMembers;
import com.team.members.teammembers.service.TeamMembersService;

@RestController
public class TeamMembersController {

	@Autowired
	private TeamMembersService teamMembersService;

	@PostMapping("/save-team-info")
	public TeamMembers saveTeamMembersDetails(@RequestBody TeamMembers teams) {
		return teamMembersService.saveTeamDetails(teams);
	}

}
