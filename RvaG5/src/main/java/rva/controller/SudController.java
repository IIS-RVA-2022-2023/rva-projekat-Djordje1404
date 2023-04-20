package rva.controller;

import java.net.URI;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import rva.model.Sud;
import rva.service.SudService;

@CrossOrigin
@RestController
public class SudController {

	@Autowired
	private SudService service;
	
	@GetMapping("/hello")
	public ResponseEntity<?> sayHello(String hello) {
		return new ResponseEntity<>("Hello!", HttpStatus.OK);
	}
	
	@GetMapping("/sud")
	public ResponseEntity<List<Sud>> getAll(){
		List<Sud> sudovi = service.getAll();
		return new ResponseEntity<>(sudovi, HttpStatus.OK);
	}
	
	@GetMapping("/sud/{id}")
	public ResponseEntity<?> getSudById(@PathVariable long id) {
		if(service.existsById(id)) {
			return ResponseEntity.ok(service.getById(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sud with requested id is not found!");
		}
	}
	
	@GetMapping("/sud/naziv/{naziv}")
	public ResponseEntity<?> getSudByNaziv(@PathVariable String naziv) {
		if(!service.getByNaziv(naziv).get().isEmpty()) {
			return ResponseEntity.ok(service.getByNaziv(naziv));
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).
					body("Sud with requested naziv:" + naziv + " do not exist");
		}
	}
	
	@PostMapping("/sud")
	public ResponseEntity<?> createSud(@RequestBody Sud sud){
		Sud savedSud;
		if(!service.existsById(sud.getId())) {
			savedSud = service.save(sud);
		}else {
			List<Sud> lista = service.getAll();
			long najvecaVrednost = 1;
			for(int i = 0; i< lista.size(); i++) {
				if(najvecaVrednost <= lista.get(i).getId()) {
					najvecaVrednost = lista.get(i).getId();
				}
				
				if(i == lista.size() - 1) {
					najvecaVrednost++;
				}
			}
			sud.setId(najvecaVrednost);
			savedSud = service.save(sud);
			
			
		}
		
		
		URI uri = URI.create("/sud/" + savedSud.getId());
		return ResponseEntity.created(uri).body(savedSud);
	}
	
	@PutMapping("/sud/{id}")
	public ResponseEntity<?> updateSud(@RequestBody Sud sud, @PathVariable long id){
		if(service.existsById(id)) {
			sud.setId(id);
			Sud updatedSud = service.save(sud);
			return ResponseEntity.ok(updatedSud);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " has not been found");
		}
		
	}
	
	@DeleteMapping("/sud/{id}")
	public ResponseEntity<?> deleteSud(@PathVariable long id){
		if(service.existsById(id)) {
			service.deleteById(id);
			return ResponseEntity.ok("Resource with ID: " + id + " has been deleted");
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " has not been found");
		}
	}
}

