#include <string>
#include <vector>
#include<iostream>
#include<algorithm>
using namespace std;

vector<int> solution(vector<int> answers) {

	vector<int> answer(3);
	vector<int> result;
	int one[5] = { 1,2,3,4,5 };
	int two[8] = { 2,1,2,3,2,4,2,5 };
	int three[10] = { 3,3,1,1,2,2,4,4,5,5 };
	
	 
	for (int i = 0; i < answers.size();i++) {
		if (answers[i] == one[i%5]) {
			answer[0]++;
		}

		if (answers[i] == two[i % 8]) {
			answer[1]++;
		}

		if (answers[i] == three[i % 10]) {
			answer[2]++;
		}
	}
	int max = 0;

	for (int i = 1; i < 3; i++) {
		if (answer[i] > answer[max])  
			max = i;
	}

	
	for (int i = 0; i < 3; i++) {
		if (answer[i] == answer[max])
			result.push_back(i+1);
	}
	 
	return result;
	
}


int main() {
	vector<int> answers = {1,2,3,4,5 };
	 
	 solution(answers);
}