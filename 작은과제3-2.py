def merge(g1, g2):

    c = []
    while g1 and g2:
        if g1[0] < g2[0]:
            c.append(g1.pop(0))
        else:
            c.append(g2.pop(0))
    while g1:
        c.append(g1.pop(0))
    while g2:
        c.append(g2.pop(0))
    return c


def merge_sort(a):
    n = len(a)
    if n <= 1:
        return a
    k = n // 2  # 나누기 연산 후 소수점 이하의 수를 버리고, 정수 부분의 수만 구함(내림)
    g1 = merge_sort(a[:k])
    g2 = merge_sort(a[k:])
    return merge(g1, g2)


alist = [4, 26, 9, 3, 1, 72, 566, 43]
blist = merge_sort(alist)
print(blist)
