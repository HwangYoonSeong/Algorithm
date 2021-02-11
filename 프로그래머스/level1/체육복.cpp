#include <string>
#include <vector>
#include <iostream>
using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
	int answer = 0;
	vector<int> uniform(n,1) ;
	for (int i = 0; i < lost.size(); i++) {
		uniform[lost[i] - 1] = 0;
	}
	for (int i = 0; i < reserve.size(); i++) {
		uniform[reserve[i] - 1]+=1;
	}


	for (int i = 0; i < n;i++) {
		if (uniform[i] == 2) {
			if (i == 0) {
				if(uniform[i + 1] == 0) {
					uniform[i] -= 1;
					uniform[i + 1] += 1;
					
				}
			}

			else if (i == n - 1) {
				if (uniform[i - 1] == 0) {
					uniform[i] -= 1;
					uniform[i - 1] += 1;
				}
			}
			else { 
					if (uniform[i - 1] == 0) {
						uniform[i] -= 1;
						uniform[i - 1] += 1;
					}else if (uniform[i + 1] == 0) {
						uniform[i] -= 1;
						uniform[i + 1] += 1;
					}
				}
			 
		}
		//cout << uniform[i] << " ";

	}

	for (int i = 0; i < n; i++) {
		if (uniform[i] != 0)
			answer++;
		//cout << uniform[i] << " ";

	}
	

	return answer;
}

void main() {
	int n = 5;
	vector<int> lost = {3,5};
	vector<int> reserve = {2,4};
	cout<<solution(n, lost, reserve);
}
