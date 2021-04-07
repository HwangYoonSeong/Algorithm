def get_optimal_value(capacity, weights, values, names):
    size = len(weights)
    vpw = [(values[i] / weights[i], weights[i], names[i])
           for i in range(size)]
    densities = sorted(vpw, reverse=True)
    finalValue = 0
    for i, v in enumerate(densities):
        a = min(capacity, densities[i][1])
        finalValue += a * densities[i][0]
        print(i+1, densities[i][2], a, "gram is taken")
        capacity -= a
    return finalValue


capacity = 186
values = [50000, 600000, 100000, 750000,
          30000, 20000, 50000, 35000, 500000, 150000]
weights = [50, 10, 25, 15, 60, 30, 35, 10, 5, 40]
names = ["주석", "백금", "은", "금", "철", "구리", "아연", "납", "티타늄", "알루미늄"]
opt_value = get_optimal_value(capacity, weights, values, names)
print("Value of the knapsack is", opt_value)
