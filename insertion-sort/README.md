<h2>Insertion Sort Pseudocode</h2>

<ul>
<li>Start by picking the second element in the array</li>
<li>Now compare the second element with the one before it and swap if necessary.</li>
<li>Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.</li>
<li>Repeat until the array is sorted.</li>
<ul>
<p>Worst case: O(n*n), best case: O(n)</p>
<p>Good for data is nearly sorted or when data comes in real time/streaming and need to be sorted right in</p>
