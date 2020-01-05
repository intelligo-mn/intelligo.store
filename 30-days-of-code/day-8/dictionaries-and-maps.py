# Enter your code here. Read input from STDIN. Print output to STDOUT

n = int(input())
dic = {}
for i in range(n):
    name, number = input().split()

    dic[name] = number

while True:
    try:
        name = input()
    except EOFError:
        break

    if name in dic:
        print ("{}={}".format(name,dic[name]))
    else:
        print("Not found")
