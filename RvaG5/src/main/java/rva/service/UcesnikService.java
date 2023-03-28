package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rva.model.Ucesnik;
import rva.repository.UcesnikRepository;

@Service
public class UcesnikService {

	@Autowired
	private UcesnikRepository repo;
	
	public List<Ucesnik> getAll(){
		return repo.findAll();
	}
	
	public Optional<Ucesnik> getById(long id){
		return repo.findById(id);
	}
	
	public Optional<List<Ucesnik>> getByPrezime(String prezime) {
		Optional<List<Ucesnik>> ucesnici = Optional.of(repo.findByPrezimeContainingIgnoreCase(prezime));
		return ucesnici;
	}
	
	public Ucesnik save(Ucesnik ucesnik) {
		return repo.save(ucesnik);
	}
	
	public boolean existsById(long id) {
		return getById(id).isPresent();
	}
	
	public void deleteById(long id) {
		repo.deleteById(id);
	}
}
