import math


def dist(p1, p2):  # 두 점의 거리 계산
    return math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)


def brute(ax):
    mi = dist(ax[0], ax[1])
    p1 = ax[0]
    p2 = ax[1]
    ln_ax = len(ax)
    if ln_ax == 2:
        return p1, p2, mi
    for i in range(ln_ax-1):
        for j in range(i + 1, ln_ax):
            if i != 0 and j != 1:
                d = dist(ax[i], ax[j])
                if d < mi:  # Update min_dist and points
                    mi = d
                    p1, p2 = ax[i], ax[j]
    return p1, p2, mi


def closest_split_pair(p_x, p_y, delta, best_pair):
    ln_x = len(p_x)  # store length - quicker

    mx_x = p_x[ln_x // 2][0]  # select midpoint on x-sorted array
    # Create a subarray of points not further than delta from
    # midpoint on x-sorted array
    s_y = [x for x in p_y if mx_x - delta <= x[0] <= mx_x + delta]
    print()
    print('s_y:', end="")
    print(s_y)
    best = delta  # assign best value to delta
    ln_y = len(s_y)  # store length of subarray for quickness
    # 중간 영역에서 최근접점 쌍 찾기
    for i in range(ln_y - 1):
        for j in range(i+1, min(i + 8, ln_y)):
            p, q = s_y[i], s_y[j]
            dst = dist(p, q)
            if dst < best:
                best_pair = p, q
                best = dst
    return best_pair[0], best_pair[1], best


def closest_pair(ax, ay):
    ln_ax = len(ax)
    if ln_ax <= 3:  # 점이 3개 이하일 경우 바로 거리 계산
        return brute(ax)
    mid = ln_ax // 2  # 점들을 반으로 나눔
    # x축을 기준으로 split
    Lx = ax[:mid]
    Rx = ax[mid:]

    midpoint = ax[mid][0]  # x축 중간지점의 x좌표
    # y축을 기준으로 x축의 중간지점을 사용하여 split
    Ly = list()
    Ry = list()
    for x in ay:
        if x[0] <= midpoint:
            Ly.append(x)
        else:
            Ry.append(x)
    print()
    print('Lx:', end="")
    print(Lx)
    print('Ly:', end="")
    print(Ly)
    print()
    print('Rx:', end="")
    print(Rx)
    print('Ry:', end="")
    print(Ry)

    # 점이 3개 이하가 될 때까지 재귀적으로 split
    (p1, q1, mi1) = closest_pair(Lx, Ly)
    (p2, q2, mi2) = closest_pair(Rx, Ry)

    # 왼쪽 영역과 오른쪽 영역 중 더 짧은 거리의 점 선택
    if mi1 <= mi2:
        d = mi1
        mn = (p1, q1)
    else:
        d = mi2
        mn = (p2, q2)
    # Call function to account for points on the boundary
    (p3, q3, mi3) = closest_split_pair(ax, ay, d, mn)
    # Determine smallest distance for the array
    if d <= mi3:
        return mn[0], mn[1], d
    else:
        return p3, q3, mi3


def solution(x, y):
    a = list(zip(x, y))  # 동일한 개수로 이루어진 자료형을 tuple로 묶어주는 역할
    ax = sorted(a, key=lambda x: x[0])  # x축 기준으로 정렬
    print('ax:', end="")
    print(ax)
    ay = sorted(a, key=lambda x: x[1])  # y축 기준으로 정렬
    print('ay:', end="")
    print(ay)
    p1, p2, mi = closest_pair(ax, ay)  # 정렬된 점들의 배열을 인자로 전달
    return mi


xarr = [3, 8, 4, 11, 6, 6, 5, 1, 11, 10]
yarr = [3, 3, 6, 7, 6, 8, 1, 7, 1, 9]
dist = solution(xarr, yarr)
print()
print("The shortest distance is", dist)
