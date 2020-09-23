#include <string>
#include <vector>
#include <iostream>

using namespace std;
// 1-1번문제 
//string solution(string phone_number) {
//	string answer = "";
//	for (int i = 0; i < phone_number.size(); i++) {
//		if (i < phone_number.size()-4) {
//			phone_number[i] = '*';
//		}
//	}
//	/*for (char eter : phone_number) {
//		cout << eter;
//	}*/
//	answer = phone_number;
//	return answer;
//}
//
//void main() {
//	string pn = "027778888";
//	solution(pn);
//}



////1-2번문제 
//string solution(vector<int> numbers, string hand) {
//	string answer = "";
//	int rhp;
//	int lhp;
//	for (int i = 0; i < numbers.size(); i++) {
//		if ((numbers[i] == 1)||(numbers[i] == 4)||(numbers[i] == 7)) {
//			answer.append("L");
//			lhp = numbers[i];
//		}
//		else if ((numbers[i] ==3) || (numbers[i] == 6) || (numbers[i] == 9)) {
//			answer.append("R");
//			rhp = numbers[i];
//		}
//		else if ((numbers[i] == 2) || (numbers[i] == 5) || (numbers[i] == 8) || (numbers[i] == 0)) {
//			/*if (((lhp == 1) && (rhp == 3)) || ((lhp == 4) && (rhp == 6)) || ((lhp == 7) && (rhp == 9))) {
//				if (hand[0] == 'r') { 
//					answer.append("R");
//					rhp = numbers[i];
//				}
//				else {
//					answer.append("L");
//					lhp = numbers[i];
//				}
//
//			}
//			else if ((lhp - 3 == numbers[i]) || (lhp + 1 == numbers[i]) || (lhp + 3 == numbers[i])) {
//				answer.append("L");
//				lhp = numbers[i];
//			}
//			else if ((rhp - 3 == numbers[i]) || (rhp - 1 == numbers[i]) || (rhp + 3 == numbers[i])) {
//				answer.append("R");
//				rhp = numbers[i];
//			}*/
//			if (((numbers[i] + 1 == rhp) || (numbers[i] + 3 == rhp) || (numbers[i] - 1 == rhp) || (numbers[i] - 3 == rhp))&&
//				((numbers[i] + 1 == lhp) || (numbers[i] + 3 == lhp) || (numbers[i] - 1 == lhp) || (numbers[i] - 3 == lhp))) {
//				if (hand[0] == 'r') {
//					answer.append("R");
//					rhp = numbers[i];
//				}
//				else {
//					answer.append("L");
//					lhp = numbers[i];
//				}
//			}
//			else if ((numbers[i]+1==rhp)|| (numbers[i] +3 == rhp)||(numbers[i] -1 == rhp)|| (numbers[i] -3 ==rhp)) {
//				answer.append("R");
//				rhp = numbers[i];
//			}else if ((numbers[i] + 1 ==lhp) || (numbers[i] + 3 == lhp) || (numbers[i] - 1 == lhp) || (numbers[i] - 3 == lhp)) {
//				answer.append("L");
//				lhp = numbers[i];
//			}
//		}
//	}
//	for (char eter : answer)cout << eter;
//	return answer;
//} 


//2-1
//int solution(int num) {
//	//long n = (long)num;
//	int answer = 0;
//	long long n = num; //이상한 부분 
//					//num 을 long long으로 형변환하거나
//				    //n%2==1로 명시해야만 정확한 답이 나온다
//	int count = 0;
//	while (n != 1) {
//		if (count>500) {
//			 break;
//		}
//
//		if (n % 2 == 0) {//짝수
//			n = n / 2;
//		}
//		else {//홀수 
//			n= n * 3 + 1;
//		}
//		count++;
//	}
//	if (count > 500)answer = -1;
//	else answer = count;
//	
//	
//	return answer;
//}


//3-1
//vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
//    vector<vector<int>> answer;
//	vector<int> temp;
//	 
//	for (int i = 0; i < arr1.size(); i++) {
//		for (int j = 0; j < arr1[0].size(); j++) {
//			 
//			temp.push_back(arr1[i][j]+arr2[i][j]);
//		}
//		answer.push_back(temp);
//		temp.clear();
//	}
//	 
//	for (int i = 0; i < arr1.size(); i++) {
//		for (int j = 0; j < arr1[0].size(); j++) {
//			cout << answer[i][j];
//		}
//	}
//    return answer;
//}

//3-2

string solution(vector<string> seoul) {
	string answer = "";
	int idx = 0;
	for (int i = 0; i < seoul.size();i++) {
		if (seoul[i] == "Kim")idx = i;
	}
	answer.append("김서방은 "+to_string(idx)+"에 있다");
	return answer;
}
void main() {
	vector<string> seoul = { "Jane","Kim" };
	cout<<solution(seoul);
}