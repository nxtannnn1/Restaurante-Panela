package com.sistema.restaurante.model;

import com.sistema.restaurante.enums.CATEGORIA;
import com.sistema.restaurante.enums.DISPONIBILIDADE;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Prato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato não pode ser vazio")
    @Column(nullable = false)
    private String nome;

    @NotBlank(message = "Descrição do prato não pode ser vazio")
    @Column(nullable = false)
    private String descricao;

    @NotNull(message = "Preço do prato não pode ser nulo")
    @DecimalMin(value = "0.1", message = "Valor mínimo R$ 0,1")
    @Column(nullable = false)
    private Double preco;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Disponibilidade do prato não pode ser vazio")
    @Column(nullable = false)
    private DISPONIBILIDADE disponibilidade;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Categoria do prato não pode ser vazio")
    @Column(nullable = false)
    private CATEGORIA categoria;

    @NotBlank(message = "URL da imagem do prato não pode ser vazio")
    @Column(nullable = false)
    private String urlImagem;

    public Prato(Long id, String nome, String descricao, Double preco, DISPONIBILIDADE disponibilidade, CATEGORIA categoria, String urlImagem) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.disponibilidade = disponibilidade;
        this.categoria = categoria;
        this.urlImagem = urlImagem;
    }

    public Prato() {
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

    public DISPONIBILIDADE getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(DISPONIBILIDADE disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public CATEGORIA getCategoria() {
        return categoria;
    }

    public void setCategoria(CATEGORIA categoria) {
        this.categoria = categoria;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
}
