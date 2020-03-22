<div class="problem-statement-string"><h3>Problem</h3> <p>
  Tambourine has prepared a fitness program so that she can become more fit!
  The program is made of <b>N</b> sessions.
  During the i-th session, Tambourine will exercise for <b>M<sub>i</sub></b> minutes.
  The number of minutes she exercises in each session are <i>strictly increasing</i>.
</p><p></p><p>
  The <i>difficulty</i> of her fitness program is equal to the maximum difference in the number of
  minutes between any two consecutive training sessions.
</p><p>
  To make her program less difficult, Tambourine has decided to add up to <b>K</b> additional training sessions to her fitness program.
  She can add these sessions anywhere in her fitness program, and exercise any positive integer number of minutes in each of them.
  After the additional training session are added, the number of minutes she exercises in each session must still be strictly increasing.
  What is the minimum difficulty possible?
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>. <b>T</b> test cases follow.
  Each test case begins with a line containing the two integers <b>N</b> and <b>K</b>.
  The second line contains <b>N</b> integers, the i-th of these is <b>M<sub>i</sub></b>, the number
  of minutes she will exercise in the i-th session.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where <code>x</code> is the test case number (starting from 1) and <code>y</code> is
  the minimum difficulty possible after up to <b>K</b> additional training sessions are added.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br>
  For at most 10 test cases, 2 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
  For all other test cases, 2 ≤ <b>N</b> ≤ 300.<br>
  1 ≤ <b>M<sub>i</sub></b> ≤ 10<sup>9</sup>.<br> <b>M<sub>i</sub></b> &lt; <b>M<sub>i+1</sub></b> for all i.<br></p> <h4>Test set 1</h4> <p><b>K</b> = 1.
</p> <h4>Test set 2</h4> <p>
  1 ≤ <b>K</b> ≤ 10<sup>5</sup>.<br></p> <h3>Samples</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input 1</span> <br>&nbsp;
         </td> <td><br> <span class="io-table-header">Output 1</span> <br>&nbsp;
         </td></tr> <tr><td><pre class="io-content">1
3 1
100 200 230
  </pre></td> <td><pre class="io-content">Case #1: 50
  </pre></td></tr></table> <table><tr><td><br> <span class="io-table-header">Input 2</span> <br>&nbsp;
         </td> <td><br> <span class="io-table-header">Output 2</span> <br>&nbsp;
         </td></tr> <tr><td><pre class="io-content">3
5 2
10 13 15 16 17
5 6
9 10 20 26 30
8 3
1 2 3 4 5 6 7 10
  </pre></td> <td><pre class="io-content">Case #1: 2
Case #2: 3
Case #3: 1
  </pre></td></tr></table></div> <h4>
   Sample #1
</h4> <p>
In Case #1: Tambourine can add up to one session. The added sessions are marked in bold:
  100 <b>150</b> 200 230.
  The difficulty is now 50.
</p> <p></p><h4>
   Sample #2
</h4> <p>
In Case #1: Tambourine can add up to six sessions. The added sessions are marked in bold:
  9 10 <b>12 14 16 18</b> 20 <b>23</b> 26 <b>29</b> 30.
  The difficulty is now 3.
</p> <p>
  In Case #2: Tambourine can add up to three sessions. The added sessions are marked in bold:
  1 2 3 4 5 6 7 <b>8 9</b> 10.
  The difficulty is now 1. Note that Tambourine only added two sessions.
</p> <p><ul><li><b>Note #1:</b> Only Sample #1 is a valid input for Test set 1. Consequently, Sample #1 will be
  used as a sample test set for your submissions.</li> <li><b>Note #2:</b> Unlike previous editions, in Kick Start 2020, all test sets are visible verdict test sets, meaning you receive instant feedback upon submission.</li></ul></p></div>
