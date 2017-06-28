package br.com.softplan.sajadv.avaliacao.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.sajadv.avaliacao.model.Pessoa;
import br.com.softplan.sajadv.avaliacao.service.PessoaService;

@RestController
public class PessoaController {
	
	@Autowired
	PessoaService pessoaService;
	
	@RequestMapping(method = RequestMethod.GET, value="/pessoas", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Pessoa>> buscaPessoas(){
		Collection<Pessoa> pessoasEncontradas = pessoaService.buscarPessoas();
		return new ResponseEntity<>(pessoasEncontradas, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/pessoas/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> buscarPessoaPorId(@PathVariable String id) {
		Pessoa pessoa = pessoaService.buscarPessoaPorId(id);
		return new ResponseEntity<>(pessoa, HttpStatus.OK);
	}
	

	@RequestMapping(method = RequestMethod.PUT, value = "/pessoas", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> alterarPessoa(@RequestBody Pessoa pessoa) {
		Pessoa pessoaAtualizado = pessoaService.alterar(pessoa);
		return new ResponseEntity<>(pessoaAtualizado, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/pessoas/{id}")
	public ResponseEntity<Pessoa> desativarPessoa(@PathVariable String id) {
		Pessoa pessoaEncontrado = pessoaService.buscarPessoaPorId(id);
		if (pessoaEncontrado == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		pessoaService.desativarPessoa(id);

		return new ResponseEntity<>(HttpStatus.OK);
	}
}
