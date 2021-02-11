#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
	vector<int> answer;
	vector<int> v;

	for (int i = 0; i < commands.size(); i++) {
		v = vector<int>(array.begin() + commands[i][0] - 1, array.begin() + commands[i][1]);
		sort(v.begin(), v.end());
		answer.push_back(v[commands[i][2] - 1]);
	}
	
	

	 

	
	return answer;
}
	

int main() {
	int val;
	vector<int> array = { 1, 5, 2, 6, 3, 7, 4 };
	vector<vector<int>>commands = { {2,5,3},{4,4,1},{1,7,3} };

	solution(array, commands);
	

}

//
//int main()
//{
//	vector<int> v1 = {1, 2, 3};
//	vector<int> v2;
//	v2 = vector<int>(v1.begin() + 1, v1.end());
//
//	for (int i = 0; i < v2.size(); i++) {
//		cout << v2[i] << "\n";
//	}
//	return 0;
//}