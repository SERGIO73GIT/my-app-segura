package com.utad.my.app.segura.exception;

public class BusinessLogicException
        extends RuntimeException {

    /**
     * 
     */
    private static final long serialVersionUID = 2993569075569467527L;

    public BusinessLogicException(
            String message) {
        super(message);
    }

    public BusinessLogicException(
            String message,
            Throwable cause) {
        super(message, cause);
    }

}
