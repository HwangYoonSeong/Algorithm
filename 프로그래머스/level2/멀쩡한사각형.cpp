#include <iostream>
using namespace std;


long long solution(int w, int h) {
	long long answer;
	int a = w;
	int b = h;
	int c;

	while (b != 0) {//��Ŭ���� ȣ����
		c = a % b;
		a = b;
		b = c;
	}
	// a�� �ִ� ����� 
	answer = w * h - (w + h - a);
	return answer;
}

void main() {
	cout << solution(8, 12)<<endl;
}