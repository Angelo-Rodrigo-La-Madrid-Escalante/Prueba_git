package services;

public class CalculadoraS {

    public Double resultado = 0.0;

    public void calcular(Double nro1, char operador, Double nro2) {

        switch (operador) {
            case '+':
                resultado = nro1 + nro2;
                break;
            case '-':
                resultado = nro1 - nro2;
                break;
            case '*':
                resultado = nro1 * nro2;
                break;
            case '/':
                resultado = nro1 / nro2;
                break;
        }
    }
}
