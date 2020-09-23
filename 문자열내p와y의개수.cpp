#include <string>
#include <iostream>
using namespace std;

bool solution(string s)
{
	 
	int count_p = 0;
	int count_y = 0;

	for (int i = 0; i < s.size();i++) {
		s[i] = tolower(s[i]);
	}
	for (char eter : s) {
		if (eter == 'p')count_p++;
		if (eter == 'y')count_y++;
	}

	if (count_p == count_y)return true;
	else return false;
	
}

void main() {
	string s = "aa";
	if (solution(s))cout << 'T';
	else cout << 'F';
}