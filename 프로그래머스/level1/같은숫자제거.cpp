#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
//
//vector<int> solution(vector<int> arr)
//{
//	vector<int> answer;
//	int same = arr[0];
//	answer.push_back(arr[0]);
//	for (int i = 1; i < arr.size(); i++) {
//		if (arr[i] != same) {
//			same = arr[i];
//			answer.push_back(arr[i]);
//		}
//	}
//	
//
//	return answer;
//}

vector<int> solution(vector<int> arr)
{
	arr.erase(unique(arr.begin(), arr.end()), arr.end());
	//unique 중복되는 값을 맨 뒤의 쓰레기 값으로 붙인다
	//unique가 끝났으면 반환되는 값은 vetor의 쓰레기 값 첫번째 위치이므로 
	//erase로 위와 같이 지울 수 있다. 
	 
	vector<int> answer = arr;
	return answer;

 
}
void main() {
	vector<int> arr = {4,4,2,2,4,3,3};
	arr=solution(arr);
	for (int eter : arr)
		cout << eter;
}