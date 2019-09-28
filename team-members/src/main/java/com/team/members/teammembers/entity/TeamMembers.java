package com.team.members.teammembers.entity;

import org.springframework.data.couchbase.core.mapping.Document;

import com.couchbase.client.java.repository.annotation.Field;
import com.couchbase.client.java.repository.annotation.Id;

import lombok.Data;

@Document
@Data
public class TeamMembers {

	@Id
	@Field
	private long id;
	@Field
	private String teamName;
	@Field
	private String teamMemberName;
	@Field
	private String emailId;
	@Field
	private long phoneNumber;

}
