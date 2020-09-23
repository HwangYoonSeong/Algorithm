#define _CRT_SECURE_NO_WARNINGS
#include <string>
#include <vector>
#include <iostream>
#include <sstream>
#include <algorithm>
 
 
using namespace std;

int solution(vector<string> lines) {
	int answer = 0;
	/*for (string eter : lines) {
		cout << eter<<endl;
	}
	cout << endl;*/
	string buf;
	double finished;
	double processingT;
	vector<double> started;
	vector<double> end;
	
	for (int i = 0; i < lines.size(); i++) {
		vector<string> tokens;

		//연/월/일 분리 
		char* tok2 = new char[lines.at(i).size() + 1];
		strcpy(tok2, lines.at(i).c_str());
		tok2 = strtok(tok2, " ");
		while (tok2 != NULL) {
			string str(tok2);
			tokens.push_back(str);
			tok2 = strtok(NULL, " ");
		}
		//시간 :기준 분리 
		char* tok = new char[tokens.at(1).size() + 1];
		strcpy(tok, tokens.at(1).c_str());
		 
		tok = strtok(tok, ":");
		
		int timeCheck = 0;
		double totalSeconds = 0;

		//초로 단위 통일 
		while (tok != NULL){
			if (timeCheck == 0) {
				totalSeconds=stod(tok) * (double)3600;
				timeCheck++;
			}
			else if(timeCheck==1){
				totalSeconds += stod(tok) * (double)60;
				timeCheck++;
			}
			else if (timeCheck == 2) {
				end.push_back(totalSeconds+ stod(tok)); // 끝나는 시점
				finished = stod(tok);
				timeCheck = 0;
			}
			tok = strtok(NULL, ":");
		}

		tokens.at(2).pop_back(); 
		processingT = stod(tokens.at(2));
		started.push_back(totalSeconds + finished - processingT+0.001); //시작 시간 
		
		tokens.clear();
	}

	int count; 
	vector<int> result;
	//각각 끝나는 기준으로 +1 범위 내의 있는 트래픽 카운트 
	for (int i = 0; i <= end.size(); i++) {
		count = 1;
		for (int j = i+1; j < started.size(); j++) {
			if (started.at(j) < end.at(i) + 1  &&  end.at(i)<=end.at(j)) {
				count++;
				
			}

		} 
		result.push_back(count);
	}
	answer = *max_element(result.begin(), result.end());
	 
	
	return answer;
} 


void main() {
	vector<string> lines = {
		//"2016-09-15 23:59:59.999 0.001s"
		/*"2016-09-15 01:00:04.001 2.0s",
		"2016-09-15 01:00:07.000 2s"*/
		"2016-09-15 20:59:57.421 0.351s",
		"2016-09-15 20:59:58.233 1.181s",
		"2016-09-15 20:59:58.299 0.8s",
		"2016-09-15 20:59:58.688 1.041s",
		"2016-09-15 20:59:59.591 1.412s",
		"2016-09-15 21:00:00.464 1.466s",
		"2016-09-15 21:00:00.741 1.581s",
		"2016-09-15 21:00:00.748 2.31s",
		"2016-09-15 21:00:00.966 0.381s",
		"2016-09-15 21:00:02.066 2.62s"
	};
	 cout<<solution(lines);
		
}

 