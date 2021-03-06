package com.nova.MSNovaBK.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.sql.Date;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;


import org.apache.log4j.Logger;

@Entity
@Table(name = "tb_prj_projects")

/**
 * Class for create one object project
 * 
 * @author enlaRed.co
 * @version 1.0
 */

public class Project {
	static final Logger log = Logger.getLogger(Project.class);

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idnprj_seq")
	@SequenceGenerator(name = "idnprj_seq", sequenceName = "idnprj_sequence", allocationSize = 1)

	@Column(name = "idnprj")
	private long idnprj;

	@NotNull
	private String shortnamespr;

	@NotNull
	private String name;

	@NotNull
	private String description;

	@NotNull
	private Date creationdate;
	
	@NotNull
	private String shortnamegnp;

	/**
	 * Builder for the class without parameter
	 * 
	 * @param None
	 */

	public Project() {

	}

	/**
	 * This method get the parameters the front end in one object project
	 * 
	 * @param idnprj
	 *            id for new projects
	 * @param shortname
	 *            short name for identification the projects
	 * @param name
	 *            general name for the project
	 * @param description
	 *            reference words for explain the project
	 * @param creationdate
	 *            creation date the project in system
	 */

	public Project(long idnprj, String shortnamespr, String name, String description, Date creationdate, String shortnamegnp) {
		super();
		this.idnprj = idnprj;
		this.shortnamespr = shortnamespr;
		this.name = name;
		this.description = description;
		this.creationdate = creationdate;
		this.shortnamegnp = shortnamegnp;

	}

	// Getters and Setters

	public long getIdnprj() {
		return idnprj;
	}


	public String getShortnamespr() {
		return shortnamespr;
	}

	public void setShortnamespr(String shortnamespr) {
		this.shortnamespr = shortnamespr;
	}

	public String getShortnamegnp() {
		return shortnamegnp;
	}

	public void setShortnamegnp(String shortnamegnp) {
		this.shortnamegnp = shortnamegnp;
	}

	public void setIdnprj(long idnprj) {
		this.idnprj = idnprj;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreationdate() {
		return creationdate;
	}

	public void setCreationdate(Date creationdate) {
		this.creationdate = creationdate;
	}

	public static Logger getLog() {
		return log;
	}

	@Override
	public String toString() {
		return "Project[idnprj=" + idnprj + ", shortnamespr=" + shortnamespr + ", " + "name=" + name + ", description="
				+ description + ", creationdate=" + creationdate + "shortnamegnp=" + shortnamegnp + "]";
	}

}
