package com.sistema.restaurante.dto;

import com.sistema.restaurante.enums.CATEGORIA;
import com.sistema.restaurante.enums.DISPONIBILIDADE;

public class PratoDTO {

    private Long id;
    private String nome;
    private String descricao;
    private Double preco;
    private CATEGORIA categoria;
    private DISPONIBILIDADE disponibilidade;
    private String urlImagem;

    public PratoDTO(Long id, String nome, String descricao, Double preco, CATEGORIA categoria, DISPONIBILIDADE disponibilidade, String urlImagem) {
        this.id=id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public PratoDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public CATEGORIA getCategoria() {
        return categoria;
    }

    public void setCategoria(CATEGORIA categoria) {
        this.categoria = categoria;
    }

    public DISPONIBILIDADE getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(DISPONIBILIDADE disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
}
