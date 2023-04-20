package rva.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rva.model.Predmet;
import rva.model.Rociste;
import rva.model.Ucesnik;
import rva.service.PredmetService;
import rva.service.RocisteService;
import rva.service.UcesnikService;

@RequestMapping("rociste")
@CrossOrigin
@RestController
public class RocisteController {
	@Autowired
	private RocisteService service;
	
	@Autowired
	private UcesnikService ucesnikService;
	
	@Autowired
	private PredmetService predmetService;
	
	@GetMapping
	public ResponseEntity<List<Rociste>> getAll() {
		return ResponseEntity.ok(service.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getRocisteById(@PathVariable long id){
		if(service.existsById(id)) {
			return ResponseEntity.ok(service.getById(id).get());
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " has not been found");
		}
	}
	
	@GetMapping("/ucesnik/{id}")
	public ResponseEntity<?> getRocisteByUcesnik(@PathVariable long id){
		Optional<Ucesnik> ucesnik = ucesnikService.getById(id);
		if(ucesnik.isPresent()) {
			return ResponseEntity.ok(service.getByUcesnik(ucesnik.get()));
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested sud: " + id + " has not been found");
		}
	}
	
	@GetMapping("/predmet/{id}")
	public ResponseEntity<?> getRocisteByPredmet(@PathVariable long id){
		Optional<Predmet> predmet = predmetService.getById(id);
		if(predmet.isPresent()) {
			return ResponseEntity.ok(service.getByPredmet(predmet.get()));
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested sud: " + id + " has not been found");
		}
	}
	
	@PostMapping
	public ResponseEntity<Rociste> createRociste(@RequestBody Rociste rociste){
		Rociste savedRociste;
		
		if(!service.existsById(rociste.getId())) {
			savedRociste = service.addRociste(rociste);
		}else {
			List<Rociste> lista = service.getAll();
			long najvecaVrednost = 1;
			for(int i = 0; i< lista.size(); i++) {
				if(najvecaVrednost <= lista.get(i).getId()) {
					najvecaVrednost = lista.get(i).getId();
				}
				
				if(i == lista.size() - 1) {
					najvecaVrednost++;
				}
			}
			rociste.setId(najvecaVrednost);
			savedRociste = service.addRociste(rociste);
			
			
		}
		
		URI uri = URI.create("/rociste/" + savedRociste.getId());
		return ResponseEntity.created(uri).body(savedRociste);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateRociste(@RequestBody Rociste rociste, @PathVariable long id){
		if(service.existsById(id)) {
			rociste.setId(id);
			Rociste savedRociste = service.addRociste(rociste);
			return ResponseEntity.ok(savedRociste);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Response with requested ID: " + id + " has not been found");
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRociste(@PathVariable long id){
		if(service.existsById(id)) {
			service.deleteById(id);
			return ResponseEntity.ok("Resource with ID: " + id + " has been deleted");
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " has not been found");
		}
	}
	
}
