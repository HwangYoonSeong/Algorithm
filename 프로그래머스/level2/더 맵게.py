import heapq


def solution(scoville, K):
    answer = 0
    Flag = False
    heapq.heapify(scoville)
    while(len(scoville) > 1):
        answer += 1

        scoville.append(heapq.heappop(scoville)+heapq.heappop(scoville)*2)
        Flag = True
        for i in scoville:
            if(i < K):
                Flag = False
                break  # 한개라도 7 미만이면 loop
        if(Flag):  # 모두다 7 이상이면
            break

    if(not Flag):  # 다돌고 나왔는데도 Flag가 false면 불가능
        answer = -1
    return answer


print(solution([1, 2, 3, 9, 10, 12], 7))
