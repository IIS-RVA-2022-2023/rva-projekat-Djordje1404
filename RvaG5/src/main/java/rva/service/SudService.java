package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rva.model.Sud;
import rva.repository.SudRepository;

@Service
public class SudService {

	@Autowired
	private SudRepository repo;
	
	public List<Sud> getAll(){
		return repo.findAll();
	}
	
	public Optional<Sud> getById(long id) {
		return repo.findById(id);
	}
	
	public Optional<List<Sud>> getByNaziv(String naziv) {
		Optional<List<Sud>> sudovi = Optional.of(repo.findByNazivContainingIgnoreCase(naziv));
		return sudovi;
	}
	
	public Sud save(Sud sud) {
		return repo.save(sud);
	}
	
	public boolean existsById(long id) {
		return getById(id).isPresent();
	}
	
	public void deleteById(long id) {
		repo.deleteById(id);
	}
}
