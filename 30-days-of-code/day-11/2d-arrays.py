#!/bin/python3

def hourGlassesSum(arr):
    numRows = len(arr)
    numCols = len(arr[0])
    for i in range(numRows - 2):
        for j in range(numCols - 2):
            yield (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                   arr[i + 1][j + 1] +
                   arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])

def maxHourGlasses(arr):
    return max(hourGlassesSum(arr))

if __name__ == '__main__':
    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    print(maxHourGlasses(arr))
