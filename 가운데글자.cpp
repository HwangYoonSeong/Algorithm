#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <iostream>
#include <string.h>
using namespace std;

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* s) {
	// return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
	
	char* answer = (char*)malloc(sizeof(char)*2);

	char *dest= (char*)malloc(strlen(s) + 1);
	strcpy(dest, s);
	//string str(dest);
	int index = strlen(s) / 2;
	 
	 
	if (strlen(s) % 2 != 0) {
		answer[0] = dest[index];
		answer[1] = '\0';
	}
	else {
		answer[0] = dest[index-1];
		answer[1] = dest[index];
		answer[2] = '\0';
		//string slice=str.substr(index-1, 2);
		//strcpy(answer, slice.c_str());
	
	}
	
	return answer;
}

void main() {
	const char* s = "qwerty";
	cout<<solution(s);
}