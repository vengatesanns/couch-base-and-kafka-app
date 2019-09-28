package com.team.members.teammembers.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.members.teammembers.entity.TeamMembers;
import com.team.members.teammembers.repository.TeamMembersRepository;

@Service
public class TeamMembersService {

	@Autowired
	private TeamMembersRepository teamMembersRepository;

	public TeamMembers saveTeamDetails(TeamMembers teamMembers) {
		return teamMembersRepository.save(teamMembers);
	}

	public List<TeamMembers> getTeamDetails() {
		return teamMembersRepository.findAllByOrderByIdDesc();
	}

}
