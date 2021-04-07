a, b = map(int, input().split())


def Euclid(a, b):

    if b == 0:
        return a

    else:
        if (a < b):
            a, b = b, a

        return Euclid(b, a % b)


print(Euclid(a, b))
