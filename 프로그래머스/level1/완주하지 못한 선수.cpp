#include <string>
#include <vector>
#include<iostream>
#include<algorithm>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
	 

	sort(participant.begin(), participant.end());
	sort(completion.begin(), completion.end());
	for (int i = 0; i < participant.size(); i++)
		cout << participant[i] <<" ";
	cout << "\n";
	for (int i = 0; i < completion.size(); i++)
		cout << completion[i] << " ";
	cout << "\n";

	for (int i = 0; i < completion.size(); i++) {
		if (participant[i] != completion[i]) {
			return participant[i];
		}
	}
	return participant.back();
}


int main() {
	vector<string> participant = { "mislav", "stanko", "mislav" ,"ana"};
	vector<string> completion = { "stanko", "ana","mislav" };
	cout<<solution(participant, completion);
}