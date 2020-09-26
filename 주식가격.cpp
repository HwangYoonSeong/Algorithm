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
	//		if (prices[i] > prices[i + 1]) {//������ ������ ��� 
	//			answer.push_back(1);
	//		}
	//		else {//������ �������� �ʾ����� ���Ŀ� ������ ��츦 Ȯ�� 
	//			int sidx = find(sortIdx.begin(), sortIdx.end(), prices[i]) - sortIdx.begin();//���ĵ� vector������ idx
	//			if (sidx != 0) {
	//				int pidx = find(prices.begin(), prices.end(), sortIdx[sidx - 1]) - prices.begin(); //���� vector������ idx 

	//				if (pidx >  i) { //���� ������ ��찡 �ڿ� ���� 
	//					answer.push_back(pidx-i);
	//				}
	//				else  answer.push_back(j);
	//			}
	//			else  answer.push_back(j);//���� ���� ��� ���Ŀ� ���� ������ �� �����Ƿ� 
	//			
	//			//answer.push_back(find(prices.begin(), prices.end(), sortIdx[i - 1]) - prices.begin());//�տ� �־����� �ڿ� �־����� Ȯ���ؾ��Ѵ� 
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
	stack<int> s; //�� stack�� �ǹ� index�� �����Ѵ�. 
				  //�������� ���ϴ� �뵵
				
	for (int i = 0; i < size; i++) {
		while (!s.empty() && prices[s.top()] > prices[i]) { //�����ϴ� �κ� Ž�� 
															//�����ϴ� �κ��� ã���� ��� 
			answer[s.top()] = i - s.top();//������ ��ġ�� �����ϱ� ������ ��ġ�� ���� 
			s.pop();
		}
		s.push(i);
	} while (!s.empty()) {
		answer[s.top()] = size - s.top() - 1; //�������� ���� �κп� ���ؼ� index �Է� 
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