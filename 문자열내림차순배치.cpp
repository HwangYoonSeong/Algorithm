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
// �Ķ���ͷ� �־����� ���ڿ��� const�� �־����ϴ�. �����Ϸ��� ���ڿ��� �����ؼ� ����ϼ���.
char* solution(const char* s) {
	// return ���� malloc �� ���� �Ҵ��� ������ּ���. �Ҵ� ���̴� ��Ȳ�� �°� �������ּ���.
	
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