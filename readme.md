Напишите утилиту, которая превращает любую функцию в функцию, которая при вызове отложит свое выполнение и выполнится не раньше чем через определенное время с момента последнего вызова (или завершения) этой же функции.

  

Попробуйте реализовать следующие параметры для конфигурации утилиты:

  

- delay: время которое должно пройти с последнего вызова\завершения прежде чем запустится новый вызов. Другими словами, следующий вызов функции запустит ее не раньше чем через delay миллисекунд с последнего запуска\завершения этой функции.

- delaySinceCompletion:

true - считать время от последнего завершения функции;

false - считать время от последнего вызова функции.

- waitForPrevious: нужно ли ждать завершения предыдущего вызова функции, если на очереди следующий вызов этой функции, а время ожидания уже истекло.

- queueLimit: максимальный размер очереди функций.
