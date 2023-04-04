package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import rva.model.Predmet;
import rva.model.Rociste;
import rva.model.Ucesnik;
import rva.repository.RocisteRepository;

public class RocisteService {
	@Autowired
	private RocisteRepository repo;
	
	public List<Rociste> getAll(){
		return repo.findAll();
	}
	
	public Optional<Rociste> getById(long id){
		return repo.findById(id);
	}
	
	public Optional<List<Rociste>> getByUcesnik(Ucesnik ucesnik) {
		return Optional.of(repo.findByUcesnik(ucesnik));
	}
	
	public Optional<List<Rociste>> getByPredmet(Predmet predmet) {
		return Optional.of(repo.findByPredmet(predmet));
	}
	
	public Rociste addRociste(Rociste rociste) {
		return repo.save(rociste);
	}
	
	public boolean existsById(long id) {
		if(getById(id).isPresent()) {
			return true;
		}else {
			return false;
		}
	}
	
	public void deleteById(long id) {
		repo.deleteById(id);
	}
}
