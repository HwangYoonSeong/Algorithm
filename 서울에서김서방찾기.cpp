#include <string>
#include <vector>
#include <iostream>
using namespace std;

string solution(vector<string> seoul) {
	string answer = "";
	int idx = 0;
	for (int i = 0; i < seoul.size(); i++) {
		if (seoul[i] == "Kim")idx = i;
	}
	/*answer.append("�輭���� " );
	answer.append(to_string(idx));
	answer.append("�� �ִ�.");*/
	answer.append("�輭���� "+to_string(idx)+ "�� �ִ�.");

	return answer;
}

void main() {
	vector<string> seoul = { "Kim" };
	std::cout<<solution(seoul);
}