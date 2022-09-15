package com.example.joboffersservices.exception;

import java.util.List;


public class ValidationException extends RuntimeException {
    private final List<String> errors;

    public ValidationException(List<String> errors) {
        this.errors = errors;
    }

    @Override
    public String toString() {
        return "ValidationException{" +
                "errors=" + errors +
                '}';
    }
}
