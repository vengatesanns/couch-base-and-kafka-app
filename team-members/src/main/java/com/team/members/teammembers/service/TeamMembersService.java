package com.team.members.teammembers.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.members.teammembers.entity.TeamMembers;
import com.team.members.teammembers.repository.TeamMembersRepository;

@Service
public class TeamMembersService {

	@Autowired
	private TeamMembersRepository teamMembersRepository;

	public TeamMembers saveTeamDetails(TeamMembers teamMembers) {
		teamMembers.setId(getTeamDetails().size() + 1);
		return teamMembersRepository.save(teamMembers);
	}

	public List<TeamMembers> getTeamDetails() {
		return teamMembersRepository.findAllByOrderByIdDesc().stream()
				.sorted(Comparator.comparingLong(TeamMembers::getId).reversed()).collect(Collectors.toList());
	}

}
