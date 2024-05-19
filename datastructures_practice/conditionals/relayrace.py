import math
"""
A team just ran a 4x400 relay race, in which each of 4 runners ran one 400m lap around the track, and they recorded
their individual times. Write a program that prompts each member of the team for their time (in seconds). Print out 
the average time for each lap. Then, use conditionals to print out whether each runner was faster, slower, or the 
same as the average pace.
"""
person1 = 85
person2 = 90
person3 = 100
person4 = 120
average_time = (person1 + person2 + person3 + person4)/4
def findingiffasterorslowertime(time, average_time):
    if time < average_time:
        return "faster"
    elif time > average_time:
        return "slower"
    else:
        return "the same as"
print(average_time)
print(findingiffasterorslowertime(person1, average_time))
print(findingiffasterorslowertime(person2, average_time))
print(findingiffasterorslowertime(person3, average_time))
print(findingiffasterorslowertime(person4, average_time))

print("--------")

list_of_times = [100, 200, 150, 75]
# list_of_times is like x in f(x)
# here, it's f = approach_two, x = list_of_times
def approach_two(list_of_times):
    # compute the average first 
    total = 0
    for current_position in range(len(list_of_times)):
        # square brackets to get the current time 
        current_time = list_of_times[current_position]
        total = total +  current_time
    # average = sum / number of elements 
    average = total/len(list_of_times)

    print("average of the second:", average)
    
    # determine if each runner was faster or slower and print the result 
    for current_position in range(len(list_of_times)):
        # get the time from the list
        time = list_of_times[current_position]
        # compute the outcome
        if time < average:
            print("faster")
        elif time > average:
            print("slower")
        else:
            print("the same as")

approach_two(list_of_times)

# function call => when we USE the logic we wrote in the function defintiion with actual values

# # write a function to add two numbers 
# def add(a, b):
#     return a+b

# print(add(2, 3))

# def add2():
#     return 1 + 2