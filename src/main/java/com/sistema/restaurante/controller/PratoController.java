package com.sistema.restaurante.controller;

import com.sistema.restaurante.dto.PratoDTO;
import com.sistema.restaurante.service.PratoService;
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

    @PostMapping
    public ResponseEntity<PratoDTO> cadastrarPrato(@RequestBody PratoDTO pratoDTO) {
        PratoDTO criado = pratoService.cadastrarPrato(pratoDTO);
        return ResponseEntity.ok(criado);
    }

    @GetMapping
    public ResponseEntity<List<PratoDTO>> listarPratos() {
        List<PratoDTO> pratos = pratoService.listarPratos();
        return ResponseEntity.ok(pratos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PratoDTO> editarPrato(@PathVariable Long id, @RequestBody PratoDTO pratoDTO) {
        PratoDTO atualizado = pratoService.editarPrato(id, pratoDTO);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirPrato(@PathVariable Long id) {
        pratoService.excluirPrato(id);
        return ResponseEntity.noContent().build();
    }
}
