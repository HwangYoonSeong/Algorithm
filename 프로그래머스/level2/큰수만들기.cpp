#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

string solution(string number, int k) {

	string answer = "";
	vector<int> num;
	for (char eter : number) {
		num.push_back(eter - '0');
		 
	}


	int max, maxidx = 0;
	
	max = *max_element(num.begin(), num.begin()+num.size()-k);
	maxidx = max_element(num.begin(), num.begin() + num.size() - k) - num.begin();
		 
	/*cout << max << endl;
	cout << maxidx << endl;*/
	
	num.erase(num.begin(), num.begin() + maxidx );
	

	//900980009
	int i = 0;
	int check = 0;
	while(num.size()> number.size() - k){
		if (i == num.size() - 1) {
			if (check == 0)break;
			else {
				check = 0;
				i = 0;
			}
		}
		if (num[i] < num[i + 1]) {
			check++;
			if (num.size() - 1 >= number.size() - k) {
				num.erase(num.begin() + i);
				i--;
			}
		 }
		i++;
	}
	
	while(num.size() >number.size() - k) {
		num.pop_back();
	}

	for (int eter : num) answer.append(1, eter + '0');
		 
	return answer;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	string answer = "";

	int numSize = number.size() - k;
	int start = 0;
	for (int i = 0; i < numSize; i++) {
		char maxNum = number[start];
		int maxIdx = start;
		for (int j = start; j <= k + i; j++) {
			if (maxNum < number[j]) {
				maxNum = number[j];
				maxIdx = j;
			}
		}
		start = maxIdx + 1;
		answer += maxNum;
	}

	return answer;




}

void main() {
	string number = "100004";
	int k = 4;
 
	cout<<solution(number,k);

}

