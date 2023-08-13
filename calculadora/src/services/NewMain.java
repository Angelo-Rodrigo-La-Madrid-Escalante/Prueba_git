/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package services;

import java.util.Random;
import java.util.Scanner;

/**
 *
 * @author ANGELO
 */
public class NewMain {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int numero, fibo1, fibo2, i;
     
        System.out.print("Introduce numero mayor que 1: ");
        numero = sc.nextInt();
        
        System.out.println("Los " + numero + " primeros términos de la serie de Fibonacci son:");

        fibo1 = 1;
        fibo2 = 1;

        System.out.print(fibo1 + " ");
        for (i = 2; i <= numero; i++) {
            System.out.print(fibo2 + " ");
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }
        System.out.println();
    }
}
