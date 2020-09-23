#include <iostream>
using namespace std;


long long solution(int w, int h) {
	long long answer;
	int a = w;
	int b = h;
	int c;

	while (b != 0) {//유클리드 호제법
		c = a % b;
		a = b;
		b = c;
	}
	// a가 최대 공약수 
	answer = w * h - (w + h - a);
	return answer;
}

void main() {
	cout << solution(8, 12)<<endl;
}