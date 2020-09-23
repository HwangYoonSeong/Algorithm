#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Strings {
public:
	string str;
	char comp;

	Strings(string str, char comp) :str(str), comp(comp) {}

	bool operator<(Strings str) const { //���⼭ const�� �ǹ̴� �� �Լ� ���� � ������ �ٲ� �� ������ �ǹ�
		if (this->comp == str.comp) {
			return this->str < str.str;
		}
		else {
			return this->comp < str.comp;
		}
	}
};

vector<string> solution(vector<string> strings, int n) {
	vector<string> answer;
	vector<Strings> strs;
	
	for (string eter : strings) {
		strs.push_back(Strings(eter, eter[n]));
	}
	
	sort(strs.begin(), strs.end());
	
	for (Strings eter : strs) {
		answer.push_back(eter.str);
	}

	/*for (string eter : answer) {
		cout << eter<<" ";

	}*/
	return answer;
}

void main() {
	vector<string> strings = {"abce","abcd","cdx"};
	int n = 2;
	solution(strings, n);
}


//��� ��� 
//#include <string>
//#include <vector>
//#include <algorithm>
//using namespace std;
//int i;
//
//bool compare(string a, string b) {
//	return a[i] == b[i] ? a < b : a[i] < b[i];
//}
//
//vector<string> solution(vector<string> strings, int n) {
//	i = n;
//	sort(strings.begin(), strings.end(), compare);
//	return strings;
//}