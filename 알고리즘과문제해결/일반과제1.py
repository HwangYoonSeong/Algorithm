# 반복문을 사용하지 않고
a = int(input("거스름돈: "))


def CoinChange(a):
    c500 = 0
    c170 = 0
    c100 = 0
    c50 = 0
    c10 = 0
    c500 += int(a/500)
    print("500원: "+str(c500))
    a = a - c500*500
    c170 += int(a/170)
    print("170원: "+str(c170))
    a = a - c170*170
    c100 += int(a/100)
    print("100원: "+str(c100))
    a = a - c100*100
    c50 += int(a/50)
    print("50원: "+str(c50))
    a = a - c50*50
    c10 += int(a/10)
    print("10원: "+str(c10))
    a = a - c10*10

    cnt = c500 + c170 + c100 + c50 + c10
    print("필요한 동전 수: "+str(cnt)+"개")


CoinChange(a)
