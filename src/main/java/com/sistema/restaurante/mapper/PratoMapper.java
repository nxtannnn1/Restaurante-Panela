package com.sistema.restaurante.mapper;

import com.sistema.restaurante.dto.PratoDTO;
import com.sistema.restaurante.model.Prato;

public class PratoMapper {

    private PratoMapper(){

    }

    //Converter de Entidade p/ DTO

    public static PratoDTO toDTO(Prato prato){
        if(prato == null){
            return null;
        }

        PratoDTO dto = new PratoDTO();
        dto.setId(prato.getId());
        dto.setNome(prato.getNome());
        dto.setCategoria(prato.getCategoria());
        dto.setDescricao(prato.getDescricao());
        dto.setPreco(prato.getPreco());
        dto.setDisponibilidade(prato.getDisponibilidade());
        dto.setUrlImagem(prato.getUrlImagem());

        return dto;
    }

    //Converter de DTO p/ Entidade

    public static Prato toModel (PratoDTO pratoDTO){
        if(pratoDTO == null){
            return null;
        }

        Prato prato = new Prato();
        prato.setId(pratoDTO.getId());
        prato.setNome(pratoDTO.getNome());
        prato.setCategoria(pratoDTO.getCategoria());
        prato.setDescricao(pratoDTO.getDescricao());
        prato.setPreco(pratoDTO.getPreco());
        prato.setDisponibilidade(pratoDTO.getDisponibilidade());
        prato.setUrlImagem(pratoDTO.getUrlImagem());

        return prato;
    }

    public static void atualizarDados (Prato prato, PratoDTO dto){
        prato.setNome(dto.getNome());
        prato.setDescricao(dto.getDescricao());
        prato.setPreco(dto.getPreco());
        prato.setCategoria(dto.getCategoria());
        prato.setDisponibilidade(dto.getDisponibilidade());
        prato.setUrlImagem(dto.getUrlImagem());
    }
}
