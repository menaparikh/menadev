# # in react, loops were usually done using the map function

# # while loops 
# i = 0 # counter variable 
# while i < 10:
#     print(i)
#     i = i + 1 # if you don't inclde this, the condition is always true, so the loop goes on forever
# print("--------------------")
# # for loops 
# for i in range(10):
#     print(i)

# print("--------------------")
# for i in range(0, 11, 1): # (start, final index + 1, step by) - for example, len(x) = last position in x + 1 because of the zero offset
#     print(i)

# print("--------------------")
# for i in range(1, 10, 2):
#     print(i)

# # while True: 
# #     break
    
# name = input("what is your name")
# for i in range(0,len(name), 2):
#     print(name[i])
# name = input("what is your name")

# for i in range(len(name)-1,-1,-1):
#     print(name[i])

# i=0
# name = input("what is your name")
# while i < len(name):
#     print(name[i])
#     i= i+1

# # using a while loop, print out every other letter in the name
# i=0
# name = input("what is your name")
# while i < len(name):
#     print(name[i])
#     i = i+2
    
# # using a while loop, print out every letter in the name backward
    
i = len(name) - 1
name = input("what is your name")
while i >= 0:
    print(name[i])
    i = i- 1
    
# ask the user to type in a number of days. The program should print out the number of years, months, weeks, and days this is equal to. 
# hint: think of modulo %
    
# numberofdays = int(input("enter a number of days"))

# years = numberofdays // 365 # years = 1.0
# print("y", years)
# remainingdays = numberofdays % 365 # remdays = 0
# print("remainingdays before months:", remainingdays)
# months = remainingdays // 30 # months = 0
# print("months:", months)
# remainingdays %= 30 # remainingdays = remainingdays % 30 = 0
# print("remainingdays before weeks:", remainingdays)
# weeks = remainingdays // 7 # 0.0
# print("weeks:", weeks)
# remainingdays %= 7 # 0
# print("remainingdays:", remainingdays)

# numberofdays_str = str(numberofdays)
# years_str = str(years)
# months_str = str(months)
# remainingdays_str = str(remainingdays)

# print(numberofdays_str + " is equal to " + years_str + " years, " + months_str + " months, and " + remainingdays_str + " days.")

# for i in range(5):
#     for j in range(1, 6 -i, 1):
#         print(j, end="")
#     print("")

# print out the possible combinations to multiply the numbers between 1 and 12 together, (using loops)
# following the format:
    
"""
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
...

12 x 11 = 132
12 x 12 = 144
"""
# for i in range(1, 13):
#     for j in range(1, 13):
#         result = i * j
#         print(str(i) + " x " + str(j) + " = " + str(result))
#         print(f"{i} x {j} = {result}")