package com.team.members.teammembers.entity;

import java.util.List;

import org.springframework.data.couchbase.core.mapping.Document;

import com.couchbase.client.java.repository.annotation.Field;
import com.couchbase.client.java.repository.annotation.Id;

import lombok.Data;

@Document
@Data
public class TeamMembers {

	@Id
	private long id;
	@Field
	private String teamName;
	@Field
	private String teamMemberName;
	@Field
	private List<Integer> phoneNumbers;

}
