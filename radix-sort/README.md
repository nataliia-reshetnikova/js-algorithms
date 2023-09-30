<h2>Radix sort</h2>
<p>It works differently from comparison sorts like bubble,insertion,quick,selection sorts, because it doesn't compare two values directly.</p>
<p><strong>Note:</strong>Can work only with integer non-negative data</p>

<h4>RADIX SORT PSEUDOCODE</h4>
<ul>
<li>Define a function that accepts list of numbers</li>
<li>Figure out how many digits the largest number has</li>
<li>Loop from k = 0 up to this largest number of digits</li>
<li>For each iteration of the loop:</li>
<li>Create buckets for each digit (0 to 9)</li>
<li>place each number in the corresponding bucket based on its kth digit</li>
<li>Replace our existing array with values in our buckets, starting with 0 and going up to 9</li>
<li>return list at the end!</li>

<p>Time complexity: O(nk), n-length of array, k - number of digits(average)</p>
<p>Space complexity: O(n+k)</p>
