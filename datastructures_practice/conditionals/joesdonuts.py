def notify_customer(customer_number):
    if customer_number <= 12:
        print("Congratulations! You're one of the first 12 customers and receive a dozen free donuts today!")
        if customer_number == 1:
            print("You also get free donuts for a year!")
    elif 13 <= customer_number <= 200:
        print("You can purchase your first dozen donuts for $1.")
    elif customer_number == 144:
        print("Congratulations! You win free donuts for a month!")
    elif 201 <= customer_number <= 500:
        print("You can purchase your donuts for half price.")
    else:
        print("You can take advantage of our opening day offer: buy two donuts, get the third free!")

    print("Don't forget our year-round deal: buy a dozen donuts, get the 13th free!")

customer_number = int(input("Welcome to Joe's Donuts! What number customer are you? "))
notify_customer(customer_number)