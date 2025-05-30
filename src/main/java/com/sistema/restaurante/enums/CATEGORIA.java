package com.sistema.restaurante.enums;

public enum CATEGORIA {

    ENTRADA ("Entrada"),
    PRATOPRINCIPAL ("Prato Principal"),
    SOBREMESA ("Sobremesa"),
    BEBIDA ("Bebida");

    private final String descricao;

    CATEGORIA (String descricao){
        this.descricao=descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
