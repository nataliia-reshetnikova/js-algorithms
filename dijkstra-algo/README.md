<h1>Dijkstra algo</h1>
<h4>Dijkstra's Pseudocode</h4>
<ul>
<li>This function should accept a starting and ending vertex</li>
<li>Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.</li>
<li>After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.</li>
<li>Create another object called previous and set each key to be every vertex in the adjacency list with a value of null</li>
<li>Start looping as long as there is anything in the priority queue</li>
<li>dequeue a vertex from the priority queue</li>
<li>If that vertex is the same as the ending vertex - we are done!</li>
<li>Otherwise loop through each value in the adjacency list at that vertex</li>
<li>Calculate the distance to that vertex from the starting vertex</li>
<li>if the distance is less than what is currently stored in our distances object</li>
<li>update the distances object with new lower distance</li>
<li>update the previous object to contain that vertex</li>
<li>enqueue the vertex with the total distance from the start node</li>
</ul>
