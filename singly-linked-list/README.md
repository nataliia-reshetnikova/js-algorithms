<h2>Singly linked list</h2>

<p>USAGE: Insertion and deletion in arrays can be expensive, use linked list instead!</p>

<h4>Pushing pseudocode</h4>

<ul>
<li>This function should accept a value</li>
<li>Create a new node using the value passed to the function</li>
<li>If there is no head property on the list, set the head and tail to be the newly created node</li>
<li>Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node</li>
<li>Increment the length by one</li>
<li>Return the linked list</li>
</ul>

<h4>Popping pseudocode</h4>

<ul>
<li>If there are no nodes in the list, return undefined</li>
<li>Loop through the list until you reach the tail</li>
<li>Set the next property of the 2nd to last node to be null</li>
<li>Set the tail to be the 2nd to last node</li>
<li>Decrement the length of the list by 1</li>
<li>Return the value of the node removed</li>
</ul>

<h4>Shifting pseudocode</h4>

<ul>
<li>If there are no nodes, return undefined</li>
<li>Store the current head property in a variable</li>
<li>Set the head property to be the current head's next property</li>
<li>Decrement the length by 1</li>
<li>Return the value of the node removed</li>
</ul>

<h4>Unshifting pseudocode</h4>

<ul>
<li>This function should accept a value</li>
<li>Create a new node using the value passed to the function</li>
<li>If there is no head property on the list, set the head and tail to be the newly created node</li>
<li>Otherwise set the newly created node's next property to be the current head property on the list</li>
<li>Set the head property on the list to be that newly created node</li>
<li>Increment the length of the list by 1</li>
<li>Return the linked list</li>
</ul>

<h4>Get pseudocode</h4>

<ul>
<li>This function should accept an index</li>
<li>If the index is less than zero or greater than or equal to the length of the list, return null</li>
<li>Loop through the list until you reach the index and return the node at that specific index</li>
</ul>

<h4>Set pseudocode</h4>

<ul>
<li>This function should accept a value and an index</li>
<li>Use your get function to find the specific node.</li>
<li>If the node is not found, return false</li>
<li>If the node is found, set the value of that node to be the value passed to the function and return true</li>
</ul>

<h4>Insert pseudocode</h4>

<ul>
<li>If the index is less than zero or greater than the length, return false</li>
<li>If the index is the same as the length, push a new node to the end of the list</li>
<li>If the index is 0, unshift a new node to the start of the list</li>
<li>Otherwise, using the get method, access the node at the index - 1</li>
<li>Set the next property on that node to be the new node</li>
<li>Set the next property on the new node to be the previous next</li>
<li>Increment the length</li>
<li>Return true</li>
</ul>

<h4>Remove pseudocode</h4>

<ul>
    <li>If the index is less than zero or greater than the length, return undefined</li>
    <li>If the index is the same as the length-1, pop</li>
    <li>If the index is 0, shift</li>
    <li>Otherwise, using the get method, access the node at the index - 1</li>
    <li>Set the next property on that node to be the next of the next node</li>
    <li>Decrement the length</li>
    <li>Return the value of the node removed</li>
</ul>

<h4>Reverse pseudocode</h4>
<strong>Do not create separate array</strong>
<ul>
    <li>Swap the head and tail</li>
    <li>Create a variable called next</li>
    <li>Create a variable called prev</li>
    <li>Create a variable called node and initialize it to the head property</li>
    <li>Loop through the list</li>
    <li>Set next to be the next property on whatever node is</li>
    <li>Set the next property on the node to be whatever prev is</li>
    <li>Set prev to be the value of the node variable</li>
    <li>Set the node variable to be the value of the next variable</li>
    <li>Once you have finished looping, return the list</li>
</ul>
