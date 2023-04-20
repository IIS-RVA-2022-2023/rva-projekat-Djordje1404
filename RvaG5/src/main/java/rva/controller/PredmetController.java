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
import rva.model.Sud;
import rva.service.PredmetService;
import rva.service.SudService;

//Defaultni resurs za sve mapping anotacije/metode
@RequestMapping("predmet")
@CrossOrigin
@RestController
public class PredmetController {
	
	@Autowired
	private PredmetService service;
	
	@Autowired
	private SudService sudService;
	
	@GetMapping
	public ResponseEntity<List<Predmet>> getAll() {
		return ResponseEntity.ok(service.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getPredmetById(@PathVariable long id){
		if(service.existsById(id)) {
			return ResponseEntity.ok(service.getById(id).get());
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " has not been found");
		}
	}
	
	@GetMapping("/aktivan/{aktivan}")
	public ResponseEntity<?> getPredmetByAktivanTrue(){
		List<Predmet> lista = service.getByAktivan().get();
		if(!lista.isEmpty()) {
			return ResponseEntity.ok(lista);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource have not found" );
		}
	}
	
	@GetMapping("/sud/{id}")
	public ResponseEntity<?> getPredmetBySud(@PathVariable long id){
		Optional<Sud> sud = sudService.getById(id);
		if(sud.isPresent()) {
			return ResponseEntity.ok(service.getBySud(sud.get()));
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested sud: " + id + " has not been found");
		}
	}
	
	@PostMapping
	public ResponseEntity<Predmet> createPredmet(@RequestBody Predmet predmet){
		Predmet savedPredmet;
		
		if(!service.existsById(predmet.getId())) {
			savedPredmet = service.addPredmet(predmet);
		}else {
			List<Predmet> lista = service.getAll();
			long najvecaVrednost = 1;
			for(int i = 0; i< lista.size(); i++) {
				if(najvecaVrednost <= lista.get(i).getId()) {
					najvecaVrednost = lista.get(i).getId();
				}
				
				if(i == lista.size() - 1) {
					najvecaVrednost++;
				}
			}
			predmet.setId(najvecaVrednost);
			savedPredmet = service.addPredmet(predmet);
			
			
		}
		
		URI uri = URI.create("/predmet/" + savedPredmet.getId());
		return ResponseEntity.created(uri).body(savedPredmet);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updatePredmet(@RequestBody Predmet predmet, @PathVariable long id){
		if(service.existsById(id)) {
			predmet.setId(id);
			Predmet savedPredmet = service.addPredmet(predmet);
			return ResponseEntity.ok(savedPredmet);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Response with requested ID: " + id + " has not been found");
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletePredmet(@PathVariable long id){
		if(service.existsById(id)) {
			service.deleteById(id);
			return ResponseEntity.ok("Resource with ID: " + id + " has been deleted");
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " has not been found");
		}
	}
	
}

