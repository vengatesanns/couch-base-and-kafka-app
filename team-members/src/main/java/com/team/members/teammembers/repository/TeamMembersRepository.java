package com.team.members.teammembers.repository;

import java.util.List;

import org.springframework.data.couchbase.core.query.N1qlPrimaryIndexed;
import org.springframework.data.couchbase.core.query.ViewIndexed;
import org.springframework.data.couchbase.repository.CouchbaseRepository;

import com.team.members.teammembers.entity.TeamMembers;

@N1qlPrimaryIndexed
@ViewIndexed(designDoc = "TeamMembers")
public interface TeamMembersRepository extends CouchbaseRepository<TeamMembers, Long> {

	List<TeamMembers> findAllByOrderByIdDesc();
}
