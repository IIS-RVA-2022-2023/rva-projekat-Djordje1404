package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rva.model.Predmet;
import rva.model.Rociste;
import rva.model.Ucesnik;
import rva.repository.RocisteRepository;

@Service
public class RocisteService {
	@Autowired
	private RocisteRepository repo;
	
	public List<Rociste> getAll(){
		return repo.findAll();
	}
	
	public Optional<Rociste> getById(long id){
		return repo.findById(id);
	}
	
	public Optional<List<Rociste>> getBySudnica(String sudnica){
		
		Optional<List<Rociste>> lista = Optional.of(repo.findBySudnicaContainingIgnoreCase(sudnica));
		return lista;
	}
	
	public Optional<List<Rociste>> getByUcesnik(Ucesnik ucesnik) {
		return Optional.of(repo.findByUcesnik(ucesnik));
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
