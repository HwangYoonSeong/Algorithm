#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <iostream>
#define SWAP(x,y,t) ((t)=(x),(x)=(y),(y)=(t))

using namespace std;
//
//bool compare() {
//
//}
// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* s) {
	// return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
	
	char* dest= (char*)malloc(strlen(s)+1);
	strcpy(dest, s);

	int max;
	char temp;
	
	for (int i = 0; i < strlen(dest)-1; i++) {
		max = i;
		for (int j = i + 1; j < strlen(dest); j++) {
			if (dest[j] > dest[max])max = j;

		}
		SWAP(dest[i], dest[max], temp);
	}
	
	//cout << dest;
	char* answer = (char*)malloc(strlen(dest)+1);
	answer = dest;

	
 

	return answer;
}

void main() {
	const char* s = "Zbcdefg";
	solution(s);
}