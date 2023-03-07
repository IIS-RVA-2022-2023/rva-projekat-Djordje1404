package rva.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Predmet implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name = "PREDMET_ID_GENERATOR", sequenceName = "PREDMET_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PREDMET_ID_GENERATOR")
	private long id;
	private String brojPr;
	private String opis;
	private Date datumPocetka;
	private Boolean aktivan;
	
	@ManyToOne
	@JoinColumn(name = "sud")
	private Sud sud;
	
	@OneToMany(mappedBy = "predmet")
	private List<Rociste> rocista;
	
	public Predmet() {
		
	}
	
	
	public Sud getSud() {
		return sud;
	}


	public void setSud(Sud sud) {
		this.sud = sud;
	}


	public List<Rociste> getRocista() {
		return rocista;
	}


	public void setRocista(List<Rociste> rocista) {
		this.rocista = rocista;
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
	public String getBrojPr() {
		return brojPr;
	}
	public void setBrojPr(String brojPr) {
		this.brojPr = brojPr;
	}
	public String getOpis() {
		return opis;
	}
	public void setOpis(String opis) {
		this.opis = opis;
	}
	public Date getDatumPocetka() {
		return datumPocetka;
	}
	public void setDatumPocetka(Date datumPocetka) {
		this.datumPocetka = datumPocetka;
	}
	public Boolean getAktivan() {
		return aktivan;
	}
	public void setAktivan(Boolean aktivan) {
		this.aktivan = aktivan;
	}
	
	
	
}
