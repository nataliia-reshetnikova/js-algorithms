<h1>Graph traversal</h1>
<h4>DEPTH FIRST TRAVERSAL Pseudocode</h4>
<p>recursive depth first search</p>
<ul>
<li>DFS(vertex):</li>
    <li>if vertex is empty</li>
        <li>return (this is base case)</li>
    <li>add vertex to results list</li>
    <li>mark vertex as visited</li>
    <li>for each neighbor in vertex's neighbors:</li>
       <li>if neighbor is not visited:</li>
          <li>recursively call DFS on neighbor</li>
</ul>

<h4>Iterative</h4>
<ul>
<li>The function should accept a starting node</li>

<li>Create a stack to help use keep track of vertices (use a list/array)</li>

<li>Create a list to store the end result, to be returned at the very end</li>

<li>Create an object to store visited vertices</li>

<li>Add the starting vertex to the stack, and mark it visited</li>

<li>While the stack has something in it:</li>

<li>Pop the next vertex from the stack</li>

<li>If that vertex hasn't been visited yet:</li>

<li>​Mark it as visited</li>

<li>Add it to the result list</li>

<li>Push all of its neighbors into the stack</li>

<li>Return the result array</li>
</ul>

<h4>BREADTH FIRST</h4>
<ul>
<li>This function should accept a starting vertex</li>
<li>Create a queue (you can use an array) and place the starting vertex in it</li>
<li>Create an array to store the nodes visited</li>
<li>Create an object to store nodes visited</li>
<li>Mark the starting vertex as visited</li>
<li>Loop as long as there is anything in the queue</li>
<li>Remove the first vertex from the queue and push it into the array that stores nodes visited</li>
<li>Loop over each vertex in the adjacency list for the vertex you are visiting.</li>
<li>If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex</li>
<li>Once you have finished looping, return the array of visited nodes</li>
</ul>
