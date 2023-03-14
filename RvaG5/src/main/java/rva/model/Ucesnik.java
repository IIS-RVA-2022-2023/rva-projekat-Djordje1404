package rva.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Ucesnik implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name = "UCESNIK_ID_GENERATOR", sequenceName = "UCESNIK_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "UCESNIK_ID_GENERATOR")
	private long id;
	private String ime;
	private String prezime;
	private String MBR;
	private String status;
	
	@JsonIgnore
	@OneToMany(mappedBy = "ucesnik")
	private List<Rociste> rocista;
	
	
	public Ucesnik() {
		
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
	public String getIme() {
		return ime;
	}
	public void setIme(String ime) {
		this.ime = ime;
	}
	public String getPrezime() {
		return prezime;
	}
	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}
	public String getMBR() {
		return MBR;
	}
	public void setMBR(String mBR) {
		MBR = mBR;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
