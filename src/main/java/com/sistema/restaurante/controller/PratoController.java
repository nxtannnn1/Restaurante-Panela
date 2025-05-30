package com.sistema.restaurante.controller;

import com.sistema.restaurante.dto.PratoDTO;
import com.sistema.restaurante.exception.PratoNaoEncontradoException;
import com.sistema.restaurante.mapper.PratoMapper;
import com.sistema.restaurante.model.Prato;
import com.sistema.restaurante.service.PratoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/pratos")
public class PratoController {

    private final PratoService pratoService;

    public PratoController(PratoService pratoService) {
        this.pratoService = pratoService;
    }

    // Buscar todos os pratos
    @GetMapping
    public ResponseEntity<List<PratoDTO>> listarTodos() {
        List<PratoDTO> pratos = pratoService.listarTodos()
                .stream()
                .map(PratoMapper::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(pratos);
    }

    // Buscar prato por ID
    @GetMapping("/{id}")
    public ResponseEntity<PratoDTO> buscarPorId(@PathVariable Long id) {
        Prato prato = pratoService.buscarPorId(id)
                .orElseThrow(() -> new PratoNaoEncontradoException("Prato com ID " + id + " não encontrado"));
        return ResponseEntity.ok(PratoMapper.toDTO(prato));
    }

    // Criar novo prato
    @PostMapping
    public ResponseEntity<PratoDTO> criarPrato(@RequestBody PratoDTO pratoDTO) {
        Prato prato = PratoMapper.toModel(pratoDTO);
        Prato salvo = pratoService.salvar(prato);
        return ResponseEntity.status(HttpStatus.CREATED).body(PratoMapper.toDTO(salvo));
    }

    // Atualizar prato
    @PutMapping("/{id}")
    public ResponseEntity<PratoDTO> atualizarPrato(@PathVariable Long id, @RequestBody PratoDTO pratoDTO) {
        try {
            Prato atualizado = pratoService.atualizar(id, pratoDTO);
            return ResponseEntity.ok(PratoMapper.toDTO(atualizado));
        } catch (PratoNaoEncontradoException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Deletar prato
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPrato(@PathVariable Long id) {
        try {
            pratoService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (PratoNaoEncontradoException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
