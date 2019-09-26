package com.team.members.teammembers.repository;

import org.springframework.data.couchbase.repository.CouchbaseRepository;
import org.springframework.stereotype.Repository;

import com.team.members.teammembers.entity.TeamMembers;

@Repository
public interface TeamMembersRepository extends CouchbaseRepository<TeamMembers, Long> {

}
