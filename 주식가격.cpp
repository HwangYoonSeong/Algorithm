#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

vector<int> solution(vector<int> prices) {
	vector<int> answer;
	vector<int> sortIdx = prices;
	 

	//cout << sortIdx.back() << endl;
	//sortIdx.pop_back();
	sort(sortIdx.begin(), sortIdx.end());
	for (int i = prices.size() - 1, j=0; i > -1;j++, i--) {
		
		 
		if (j > 1&&i>0) {
			if (prices[i] > prices[i + 1]) {//가격이 떨어진 경우 
				answer.push_back(1);
			}
			else {//가격이 떨어지지 않았지만 이후에 떨어진 경우를 확인 
				int sidx = find(sortIdx.begin(), sortIdx.end(), prices[i]) - sortIdx.begin();
				if (sidx != 0) {
					int pidx = find(prices.begin(), prices.end(), sortIdx[sidx - 1]) - prices.begin();

					if (pidx > sidx) { //값이 떨어진 경우가 뒤에 존재 
						answer.push_back(sidx);
					}
					else  answer.push_back(j);
				}
				else  answer.push_back(j);
				
				//answer.push_back(find(prices.begin(), prices.end(), sortIdx[i - 1]) - prices.begin());//앞에 있었는지 뒤에 있었는지 확인해야한다 
				
				 

			}
		}else answer.push_back(j);
	
	}

	reverse(answer.begin(), answer.end());
	 
	
	return answer;
}

void main() {
	vector<int> prices = {4,7,6,3,9,5 };
	for (int eter : solution(prices))cout << eter << endl;
	 
}