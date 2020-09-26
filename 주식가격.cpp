#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
#include <stack>
using namespace std;

vector<int> solution(vector<int> prices) {
	//vector<int> answer;
	//vector<int> sortIdx = prices;
	// 

	////cout << sortIdx.back() << endl;
	////sortIdx.pop_back();
	//sort(sortIdx.begin(), sortIdx.end());
	//for (int i = prices.size() - 1, j=0; i > -1;j++, i--) {
	//	
	//	 
	//	if (j > 1) {
	//		if (prices[i] > prices[i + 1]) {//가격이 떨어진 경우 
	//			answer.push_back(1);
	//		}
	//		else {//가격이 떨어지지 않았지만 이후에 떨어진 경우를 확인 
	//			int sidx = find(sortIdx.begin(), sortIdx.end(), prices[i]) - sortIdx.begin();//정렬된 vector에서의 idx
	//			if (sidx != 0) {
	//				int pidx = find(prices.begin(), prices.end(), sortIdx[sidx - 1]) - prices.begin(); //기존 vector에서의 idx 

	//				if (pidx >  i) { //값이 떨어진 경우가 뒤에 존재 
	//					answer.push_back(pidx-i);
	//				}
	//				else  answer.push_back(j);
	//			}
	//			else  answer.push_back(j);//가장 작은 경우 이후에 값이 떨어질 수 없으므로 
	//			
	//			//answer.push_back(find(prices.begin(), prices.end(), sortIdx[i - 1]) - prices.begin());//앞에 있었는지 뒤에 있었는지 확인해야한다 
	//			
	//		}
	//	}else answer.push_back(j);
	//
	//}

	//reverse(answer.begin(), answer.end());
	// 
	//
	//return answer;

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	int size = prices.size();
	vector<int> answer(size); 
	stack<int> s; //이 stack의 의미 index를 저장한다. 
				  //전과정과 비교하는 용도
				
	for (int i = 0; i < size; i++) {
		while (!s.empty() && prices[s.top()] > prices[i]) { //감소하는 부분 탐색 
															//감소하는 부분을 찾았을 경우 
			answer[s.top()] = i - s.top();//감소한 위치와 감소하기 시작한 위치의 차이 
			s.pop();
		}
		s.push(i);
	} while (!s.empty()) {
		answer[s.top()] = size - s.top() - 1; //감소하지 않은 부분에 대해서 index 입력 
		s.pop();
	}
	return answer;
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*vector<int> answer;
	for (int i = 0; i < prices.size(); i++) {
		int price = 0;
		for (int j = i + 1; j < prices.size(); j++) {
			if (prices[j] >= prices[i]) price++;
			else {
				price++;
				break;
			}
		}
		answer.push_back(price);
	}
	return answer;*/
}

void main() {
	vector<int> prices = {1,1,0,0,5,1};
	for (int eter : solution(prices))cout << eter << endl;
	 
}