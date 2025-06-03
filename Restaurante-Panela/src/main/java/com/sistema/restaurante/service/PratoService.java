package com.sistema.restaurante.service;

import com.sistema.restaurante.dto.PratoDTO;
import com.sistema.restaurante.exception.PratoNaoEncontradoException;
import com.sistema.restaurante.mapper.PratoMapper;
import com.sistema.restaurante.model.Prato;
import com.sistema.restaurante.repository.PratoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PratoService {

    private final PratoRepository pratoRepository;

    public PratoService(PratoRepository pratoRepository){
        this.pratoRepository=pratoRepository;
    }

    public PratoDTO cadastrarPrato (PratoDTO pratoDTO){

        Prato prato = PratoMapper.toModel(pratoDTO);
        Prato salvo = pratoRepository.save(prato);
        return PratoMapper.toDTO(salvo);
    }

    public List<PratoDTO> listarPratos(){
        List<Prato> pratos = pratoRepository.findAll();
        List<PratoDTO> pratoDTOs= new ArrayList<>();

        for(Prato prato : pratos){
            pratoDTOs.add(PratoMapper.toDTO((prato)));
        }

        return pratoDTOs;
    }

    public PratoDTO editarPrato(Long id, PratoDTO pratoDTO){

        Prato pratoExistente = pratoRepository.findById(id).orElseThrow(() -> new PratoNaoEncontradoException("Prato de ID"+pratoDTO.getId()+" não encontrado"));

        PratoMapper.atualizarDados(pratoExistente, pratoDTO);;

        Prato pratoAtualizado = pratoRepository.save(pratoExistente);

        return PratoMapper.toDTO(pratoAtualizado);
    }

    public void excluirPrato(Long id){

        Prato pratoExistente = pratoRepository.findById(id).orElseThrow(() -> new PratoNaoEncontradoException("Prato de ID " +id+ " não encontrado"));

        pratoRepository.deleteById(id);

    }

}
