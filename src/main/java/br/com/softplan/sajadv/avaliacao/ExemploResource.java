package br.com.softplan.sajadv.avaliacao;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExemploResource {

    @RequestMapping(value = "/exemplo", method = RequestMethod.GET)
    public Exemplo exemplo() {
        return new Exemplo("Avaliação SAJ ADV");
    }
}
