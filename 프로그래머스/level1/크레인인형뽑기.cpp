#include <string>
#include <vector>
#include <iostream>
 
using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
	int answer = 0;
	vector<int> result;



	for (int i = 0; i < moves.size(); i++) {
		for (int j = 0; j < board.size(); j++) {
			if (board[j][moves[i] - 1] != 0) {
				result.push_back(board[j][moves[i] - 1]);
				board[j][moves[i] - 1] = 0;
				break;
			}
		}
	}


	/*for (int i = 0; i < result.size(); i++) {
		cout << result[i];
	}
	cout << "\n";*/
	
	int i = 0;

	vector<int>::iterator iter;
	do {
		if (result[i] == result[i + 1]) {
			answer += 2;
			iter = result.begin();
			iter += i;
			result.erase(iter);
			iter = result.begin();
			iter += i;
			result.erase(iter);
			if (result.size() == 0)
				break;
		/*	for (int i = 0; i < result.size(); i++) {
				cout << result[i];
			}
			cout << "\n";*/
			
			i = -1; //다시 처음으로 
		}
		i++;
	} while (i != result.size()-1);
		

	

		return answer;
	}

int main() {
	vector<vector<int>> board = { {0,0,0,0,0},{0,0,1,0,3},{0,2,5,0,1},{4,2,4,4,2},{3,5,1,3,1} };
	//vector<int> moves = {1,5,3,5,1,2,1,4};
	vector<int> moves = { 2,2 };

	cout<<solution(board, moves);

}
