#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <iostream>
#include <string.h>
using namespace std;

// �Ķ���ͷ� �־����� ���ڿ��� const�� �־����ϴ�. �����Ϸ��� ���ڿ��� �����ؼ� ����ϼ���.
char* solution(const char* s) {
	// return ���� malloc �� ���� �Ҵ��� ������ּ���. �Ҵ� ���̴� ��Ȳ�� �°� �������ּ���.
	
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