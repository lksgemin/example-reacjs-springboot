package br.com.softplan.sajadv.avaliacao.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.sajadv.avaliacao.model.Pessoa;
import br.com.softplan.sajadv.avaliacao.repository.PessoaRepository;

@Service
public class PessoaService {
	@Autowired
	PessoaRepository pessoaRepository;

	public Pessoa inserir(Pessoa pessoa){
		return pessoaRepository.save(pessoa);
	}
	
	public Pessoa alterar(Pessoa pessoa){
		return pessoaRepository.save(pessoa);
	}
	
	public List<Pessoa> buscarPessoas(){
		return pessoaRepository.findAll();
	}
	
	public Pessoa buscarPessoaPorId(String id){
		return pessoaRepository.findOne(id);
	}
	
	public void desativarPessoa(String id){
		Pessoa pessoaRetorno = buscarPessoaPorId(id);
		if(pessoaRetorno != null){
			pessoaRetorno.setAtiva(false);
			pessoaRepository.save(pessoaRetorno);
		}
	}
}
