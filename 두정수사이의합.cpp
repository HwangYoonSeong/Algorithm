#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

void solution(int a, int b) {
	long long answer = 0;
	int temp = 0;
	 
	  if (a > b) {
		temp = a;
		a = b;
		b = temp;
		
	}
	  
	while (a <= b) {
		answer += a;
		a++;
	}
	 
	//cout << a<< b;
	
	cout << answer;
	
	
	//return answer;
}

void main() {
	int a=3;
	int b=3;

	solution(a, b);
}