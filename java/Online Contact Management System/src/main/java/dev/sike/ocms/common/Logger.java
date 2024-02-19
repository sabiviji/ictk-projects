package dev.sike.ocms.common;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class Logger {

    @Pointcut("execution(* dev.sike.controller.*.*(..))")
    private void requestLogger() {}

    @Pointcut("execution(* dev.sike.*.get*(..))")
    private void getters() {}

    @Before("requestLogger()")
    public void beforeRequestLogger(JoinPoint joinPoint) {
        System.out.print("Executing the method: ");
        System.out.println(joinPoint.getSignature());
    }

    @After("requestLogger()")
    public void afterRequestLogger(JoinPoint jpa) {
        System.out.println(jpa.getArgs().toString());
    }

    @AfterReturning(pointcut = "getters()", returning = "retVal")
    public void afterReturningAdvice(Object retVal) {
        System.out.println("Returning: " + retVal.toString());
    }
}
