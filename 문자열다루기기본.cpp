#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#include<iostream>

// �Ķ���ͷ� �־����� ���ڿ��� const�� �־����ϴ�. �����Ϸ��� ���ڿ��� �����ؼ� ����ϼ���.
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