#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

char* solution(int a, int b) {
	// 리턴할 값은 메모리를 동적 할당해주세요.
	char* answer = (char*)malloc(sizeof(char*)*3);
	char* date[7] = { "FRI","SAT","SUN","MON","TUE","WED","THU" };
	int  count = 0;
	 
		for (int i = 1; i < a; i++) {
			if (i < 8) {
				if (i % 2 == 0) {
					if (i == 2)  count += 29;
					else  count += 30;
				}
				else count += 31;
			}
			else {
				 if (i % 2 == 0) count += 31;
				 else count += 30;
			}
		}
	
	count += b;
	if (count % 7 == 0)
		answer = date[6];
	else
		answer=date[count % 7-1];
	
	return answer;
}

void main() {
	int a = 9, b = 20;
	cout<<solution(a, b);
}