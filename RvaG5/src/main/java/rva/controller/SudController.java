package rva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.model.Sud;
import rva.service.SudService;

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
}

