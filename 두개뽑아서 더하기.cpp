#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

vector<int> solution(vector<int> numbers) {
	vector<int> answer;
	
	for (int i = 0; i < numbers.size(); i++) {
		for (int j = i + 1; j < numbers.size(); j++) {
			answer.push_back(numbers[i] + numbers[j]);
			
		}
	}
	sort(answer.begin(), answer.end());
	answer.erase(unique(answer.begin(), answer.end()), answer.end());
	return answer;
}

void main() {
	vector<int> numbers = { 2,1,3,4,1 };
	//solution(numbers);

	
	for (int eter : solution(numbers)) {
		cout << eter << endl;
	}
	 

}

//가장 보편적인 cpp 
//malloc 