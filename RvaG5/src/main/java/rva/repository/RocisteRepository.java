package rva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Predmet;
import rva.model.Rociste;
import rva.model.Ucesnik;

public interface RocisteRepository extends JpaRepository<Rociste,Long> {
	List<Rociste> findByUcesnik(Ucesnik ucesnik);
	
	List<Rociste> findByPredmet(Predmet predmet);
}
