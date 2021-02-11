#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#include<iostream>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
bool solution(const char* s) {
	
	if (!(strlen(s) == 4 || strlen(s) == 6))return false;
	char* dest = (char*)malloc(strlen(s) );
	strcpy(dest, s);
	
	int count = 0;
	for (int i = 0; i < strlen(s); i++) {
		if(!isdigit(dest[i]))count++;
	}

	if (count != 0) return false;
	else return true;
	 
}

void main() {
	const char* s = "1234223";
	std::cout<< solution(s);
}