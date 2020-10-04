# Prime pairs calculators

This repository contains code that is used to determine _prime pair lists_, which are more or less integer lists where each pair of elements adds up to a prime number. For example, given `[1, 2, 3, 4]`, a possible prime pair list would be `[1, 4, 3, 2]`, since `1 + 4`, `4 + 3`, and `3 + 2` are all prime.

The two included code samples are solutions to [Matt Parker's math puzzle video](https://www.youtube.com/watch?v=AXfl_e33Gt4) about this.

# Javascript

The [Javascript version](./index.js) finds a single prime pair list from a given input, and will continue until it finds a single result that satisfies the prime pair criteria.

I started with this as a proof of concept and guessed that there may be a correlation between the number of primes in the list and the number of possible prime pair lists for a given input, and so I moved onto a more exhaustive search using Racket.

# Racket

The [Racket version](./find-all-prime-pairs.rkt) checks all the permutations of a given input for _prime pair_-ness. It is very inefficient as the permutation sequence size grows, and after the list of 1-10 it takes an exponentially larger amount of time to calculate. The result of each calculation is included as a comment next to each line.

I thought that this might give some pattern but unfortunately it didn't, and so after a couple ideas (using the factorial of the largest number and dividing it by the number of prime pair lists, dividing the number of prime pair lists by the number of primes in the original set) I ran out of ideas and didn't know where to go. Looking forward to the solution video!

# License

MIT
