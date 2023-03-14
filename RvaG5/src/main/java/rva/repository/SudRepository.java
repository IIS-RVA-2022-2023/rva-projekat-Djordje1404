package rva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Sud;

public interface SudRepository extends JpaRepository<Sud,Long> {
	
	public abstract List<Sud> findByNazivContainingIgnoreCase(String naziv);

}
