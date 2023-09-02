package rva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Predmet;
import rva.model.Sud;

public interface PredmetRepository extends JpaRepository<Predmet,Long>{
	public abstract List<Predmet> findByAktivanTrue();
	//List<Predmet> findByNumericThanOrderById(double iznos);
	
	List<Predmet> findBySud(Sud sud);
}
