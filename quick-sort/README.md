<h2>Pivot Pseudocode</h2>

<ul>
<li>It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)</li>
<li>Grab the pivot from the start of the array </li>
<li>Store the current pivot index in a variable (this will keep track of where the pivot should end up)</li>
<li>Loop through the array from the start until the end</li>
<li>If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index</li>
<li>Swap the starting element (i.e. the pivot) with the pivot index</li>
<li>Return the pivot index</li>
</ul>
