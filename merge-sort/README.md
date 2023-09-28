<h2>Merging Arrays Pseudocode</h2>

<ul>
<li>Create an empty array, take a look at the smallest values in each input array</li>
<li>While there are still values we haven't looked at...</li>
<li>If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array</li>
<li>If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array</li>
<li>Once we exhaust one array, push in all remaining values from the other array</li>
</ul>

<h2>mergeSort Pseudocode</h2>
<ul>
<li>Break up the array into halves until you have arrays that are empty or have one element</li>
<li>Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array</li>
<li>Once the array has been merged back together, return the merged (and sorted!) array</li>
</ul>

<h4>Complexity</h4>
<p>Time complexity O(n log n)</p>
<p>Space complexity O(n)</p>
