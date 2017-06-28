package br.com.softplan.sajadv.avaliacao.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.softplan.sajadv.avaliacao.model.Pessoa;

public interface PessoaRepository extends MongoRepository<Pessoa, String> {

}
