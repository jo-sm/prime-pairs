#lang racket
(require math/number-theory)

(define (is-prime-pair? seq)
  (define (iter result remaining)
    (cond
      ((= (length remaining) 0) true)
      ((= (length result) 0) (iter (cons (car remaining) result) (cdr remaining)))
      ((prime? (+ (car result) (car remaining))) (iter (cons (car remaining) result) (cdr remaining)))
      (else false)
    )
  )

  (iter '() (sequence->list seq))
)

(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2)))) ; 2
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3)))) ; 2
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4)))) ; 8
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5)))) ; 4
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6)))) ; 16
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6 7)))) ; 24
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6 7 8)))) ; 60
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6 7 8 9)))) ; 140
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6 7 8 9 10)))) ; 1328
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6 7 8 9 10 11)))) ; 2144
(sequence-length (sequence-filter is-prime-pair? (in-permutations '(1 2 3 4 5 6 7 8 9 10 11 12)))) ; 17536
