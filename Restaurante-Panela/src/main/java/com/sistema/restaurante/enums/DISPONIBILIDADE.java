package com.sistema.restaurante.enums;

public enum DISPONIBILIDADE {
    EM_ESTOQUE("Em Estoque"),
    ESGOTADO("Esgotado");

    private final String descricao;

    DISPONIBILIDADE (String descricao){
        this.descricao=descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
