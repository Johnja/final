package com.nova.MSNovaBK.dao;


import java.util.List;
import javax.transaction.Transactional;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nova.MSNovaBK.dto.Label;

import org.apache.log4j.Logger;

// with Spring Data JPA one entity DAO what extend the CrudRepository 
// Set for default the next methods save, delete, deleteAll, findOne y findAll.

@Transactional

public interface LabelDAO extends CrudRepository<Label, Long> {
	static final Logger log = Logger.getLogger(LabelDAO.class);

	// It is not necessary deployment the method, spring jpa does so as long as
	// the parameter matches with one attribute the project
	// for details:
	// http://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/#jpa.query-methods.query-creation

	public Label findByIdprjlabel(long idprjlabel);

	public List<Label> findAll();

}
