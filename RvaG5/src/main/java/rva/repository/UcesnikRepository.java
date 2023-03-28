package rva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Ucesnik;

public interface UcesnikRepository extends JpaRepository<Ucesnik,Long> {

	public abstract List<Ucesnik> findByPrezimeContainingIgnoreCase(String prezime);
}
