#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

vector<int> solution(vector<int> arr, int divisor) {
	vector<int> answer;
	int count=0;
	for (int i = 0; i < arr.size();i++) {
		if (arr[i] % divisor != 0)
			arr[i] = -1;
	}
	 

	for (int eter : arr) {
		if (eter != -1) {
			//cout << eter << " ";
			answer.push_back(eter);
			
		}else count++;
	}
	sort(answer.begin(), answer.end());

	if (count == arr.size())answer.push_back(-1);
		
		
	return answer;
}

void main() {
	vector<int> arr = { 2,36,1,3 };
	int divisor=1;
	for (int eter : solution(arr, divisor))
		cout << eter << " ";
}