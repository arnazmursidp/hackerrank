import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    public static int[][] mul(int [][] a){
        int b[][] = {{1,1,0},{1,0,1},{1,0,0}};
        int c[][] = {{0,0,0},{0,0,0},{0,0,0}};
        for(int i=0;i<3;i++)
            for(int j=0;j<3;j++)
                for(int k=0;k<3;k++)
                    c[i][j] +=a[i][k]*b[k][j];
        return c;
    }
    public static int s(int n){
        int a[][] = {{1,1,0},{1,0,1},{1,0,0}};
        if(n==1) return 1;
        else if(n==2) return 2;
        else if(n==3) return 4;
        else
        {for(int i=0;i<n-2;i++)
            a = mul(a);
        return 4*a[0][2] +2*a[1][2] +a[2][2] ;}
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int s = in.nextInt();
        for(int a0 = 0; a0 < s; a0++){
            int n = in.nextInt();
            System.out.println(s(n)); 
        }
    }
}