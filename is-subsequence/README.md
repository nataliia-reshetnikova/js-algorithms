<h2>Multiple Pointers - isSubsequence</h2>
<p>Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.</p>

<h3>Examples:</h3>

```
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```

<p>Your solution MUST have AT LEAST the following complexities:</p>

<p><strong>Time Complexity</strong> - O(N + M)</p>

<p><strong>Space Complexity</strong> - O(1)</p>
