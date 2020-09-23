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
	/*answer.append("김서방은 " );
	answer.append(to_string(idx));
	answer.append("에 있다.");*/
	answer.append("김서방은 "+to_string(idx)+ "에 있다.");

	return answer;
}

void main() {
	vector<string> seoul = { "Kim" };
	std::cout<<solution(seoul);
}