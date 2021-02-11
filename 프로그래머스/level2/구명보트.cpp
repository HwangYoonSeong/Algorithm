#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int solution(vector<int> people, int limit) {
	int answer = 0;
	sort(people.begin(), people.end(), greater<int>());
 
	int i = 0;
	int j = people.size() - 1;
	int sum = people[i] + people[j];

	// 100 80 70 50 40 
	while (i< j) {

		if (sum > limit) {
			answer++;
			i++;
			sum = people[i] + people[j];
		}
		else {
			j--;
			sum += people[j];
		}

	}
	if (i == j)answer++;

	
	
	return answer;
}

void main() {
	vector<int> people = { 100,70,80,50,40 };
	int limit = 200;
	cout<<solution(people, limit);
}