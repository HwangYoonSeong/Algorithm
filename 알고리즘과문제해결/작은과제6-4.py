def set_cover(universe, subsets):
    elements = set(e for s in subsets for e in s)
    # print(elements)
    if elements != universe:  # subsets의 합집합으로 universe를 구할수 있는지 확인
        return None
    covered = set()
    cover = []
    while covered != elements:
        subset = max(subsets, key=lambda s: len(s-covered))
        # s-covered는 universe와 s의 교집합을 제외한 부분을 의미
        # 교집합을 제외한 부분이 클수록 covered와 겹치는 부분이 적다는 의미
        # covered을 최대한 적게 포함하고 universe를 최대한 많이 포함하게

        # print(subset)
        cover.append(subset)
        covered |= subset
        # print(covered)
    return cover


universe = set([0, 1, 2, 3, 4, 5])
subsets = [set([0, 3, 4]),
           set([1, 2, 3]),
           set([2, 3, 4]),
           set([0, 4, 5]),
           set([1, 4, 5]),
           set([2, 4, 5])]
cover = set_cover(universe, subsets)
print(cover)
