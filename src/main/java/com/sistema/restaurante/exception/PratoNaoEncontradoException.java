package com.sistema.restaurante.exception;

public class PratoNaoEncontradoException extends RuntimeException {


    public PratoNaoEncontradoException (String message){
        super(message);
    }
}
