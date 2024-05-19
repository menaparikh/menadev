creditcardnumber = input ("what are the first four digits of your credit card number?")
total = 0
for i in range (0,4):
    currentnumberstring=creditcardnumber[i]
    currentnumber = int(currentnumberstring)
    if i == 0 or i==2:
       total = total + currentnumber * 2
    else:
        total = total + currentnumber
if total%10 == 0:
    print("valid")
else:
    print("not valid")