package com.nova.MSNovaBK.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;


import org.apache.log4j.Logger;

@Entity
@Table(name = "tb_prj_projectxlabel")

/**
 * Class for create one object relation between project and label
 * 
 * @author enlaRed.co
 * @version 1.0
 */

public class ProjectxLabel {
	static final Logger log = Logger.getLogger(ProjectxLabel.class);

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idnprjxlabel_seq")
	@SequenceGenerator(name = "idnprjxlabel_seq", sequenceName = "idnprjxlabel_sequence", allocationSize = 1)

	@Column(name = "idnprjxlabel")
	private long idnprjxlabel;

	@NotNull
	private String shortnamespr;

	@NotNull
	private long idprjlabel;
	
	/**
	 * Builder for the class without parameter
	 * 
	 * @param None
	 */

	public ProjectxLabel() {
		
	}


	/**
	 * This method get the parameters the front end in one object relation between project and Label
	 * @param idnprjxlabel Id the relation between project and label
	 * @param String Id project
	 * @param idprjlabel Id Label
	 */
	
	public ProjectxLabel(long idnprjxlabel, String shortnamespr, long idprjlabel) {
		super();
		this.idnprjxlabel = idnprjxlabel;
		this.shortnamespr = shortnamespr;
		this.idprjlabel = idprjlabel;
		
	}

	//Getters and Setters


	public long getIdnprjxlabel() {
		return idnprjxlabel;
	}


	public void setIdnprjxlabel(long idnprjxlabel) {
		this.idnprjxlabel = idnprjxlabel;
	}



	public String getShortnamespr() {
		return shortnamespr;
	}


	public void setShortnamespr(String shortnamespr) {
		this.shortnamespr = shortnamespr;
	}


	public long getIdprjlabel() {
		return idprjlabel;
	}


	public void setIdprjlabel(long idprjlabel) {
		this.idprjlabel = idprjlabel;
	}


	public static Logger getLog() {
		return log;
	}

	@Override
	public String toString() {
		return "ProjectxLabel[idnprjxlabel=" + idnprjxlabel+ ", shortnamespr=" + shortnamespr + ", idprjlabel=" + idprjlabel + "]";
	}
}

