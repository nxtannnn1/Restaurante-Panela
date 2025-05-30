package com.sistema.restaurante.controller;

import com.sistema.restaurante.dto.PratoDTO;
import com.sistema.restaurante.exception.PratoNaoEncontradoException;
import com.sistema.restaurante.service.PratoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pratos")
public class PratoController {

    private final PratoService pratoService;

    public PratoController(PratoService pratoService) {
        this.pratoService = pratoService;
    }

    // Criar novo prato
    @PostMapping
    public ResponseEntity<PratoDTO> criarPrato(@RequestBody PratoDTO pratoDTO) {
        PratoDTO criado = pratoService.cadastrarPrato(pratoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(criado);
    }

    // Listar todos os pratos
    @GetMapping
    public ResponseEntity<List<PratoDTO>> listarPratos() {
        List<PratoDTO> pratos = pratoService.listarPratos();
        return ResponseEntity.ok(pratos);
    }

    // Atualizar prato
    @PutMapping("/{id}")
    public ResponseEntity<PratoDTO> atualizarPrato(@PathVariable Long id, @RequestBody PratoDTO pratoDTO) {
        try {
            PratoDTO atualizado = pratoService.editarPrato(id, pratoDTO);
            return ResponseEntity.ok(atualizado);
        } catch (PratoNaoEncontradoException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Deletar prato
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPrato(@PathVariable Long id) {
        try {
            pratoService.excluirPrato(id);
            return ResponseEntity.noContent().build();
        } catch (PratoNaoEncontradoException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
