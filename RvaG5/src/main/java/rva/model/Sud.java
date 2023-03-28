package rva.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Sud implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name = "SUD_ID_GENERATOR", sequenceName = "SUD_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SUD_ID_GENERATOR")
	private long id;
	private String naziv;
	private String adresa;
	
	@JsonIgnore
	@OneToMany(mappedBy = "sud", cascade = CascadeType.REMOVE)
	private List<Predmet> predmeti;
	
	public Sud() {
		
	}
	
	
	public List<Predmet> getPredmeti() {
		return predmeti;
	}


	public void setPredmeti(List<Predmet> predmeti) {
		this.predmeti = predmeti;
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
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public String getAdresa() {
		return adresa;
	}
	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
	
	
}
