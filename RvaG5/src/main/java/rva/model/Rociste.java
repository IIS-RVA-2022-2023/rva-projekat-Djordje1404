package rva.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;

public class Rociste implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@SequenceGenerator(name = "ROCISTE_ID_GENERATOR", sequenceName = "ROCISTE_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ROCISTE_ID_GENERATOR")
	private long id;
	private Date datumRocista;
	private String sudnica;
	
	@ManyToOne
	@JoinColumn(name = "ucesnik")
	private Ucesnik ucesnik;
	@ManyToOne
	@JoinColumn(name = "predmet")
	private Predmet predmet;
	
	public Rociste() {
		
	}
	
	
	public Ucesnik getUcesnik() {
		return ucesnik;
	}


	public void setUcesnik(Ucesnik ucesnik) {
		this.ucesnik = ucesnik;
	}


	public Predmet getPredmet() {
		return predmet;
	}


	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getDatumRocista() {
		return datumRocista;
	}
	public void setDatumRocista(Date datumRocista) {
		this.datumRocista = datumRocista;
	}
	public String getSudnica() {
		return sudnica;
	}
	public void setSudnica(String sudnica) {
		this.sudnica = sudnica;
	}
	
	
	
}
