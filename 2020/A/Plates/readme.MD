<div class="problem-statement-string"><h3>Problem</h3> <p>
  Dr. Patel has <b>N</b> stacks of plates. Each stack contains <b>K</b> plates.
  Each plate has a positive <i>beauty value</i>, describing how beautiful it looks.
</p><p>
  Dr. Patel would like to take exactly <b>P</b> plates to use for dinner tonight.
  If he would like to take a plate in a stack, he must also take all of the plates above it in that stack as well.
</p><p>
  Help Dr. Patel pick the <b>P</b> plates that would maximize the total sum of beauty values.
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each test case begins with a line containing the three integers <b>N</b>, <b>K</b> and <b>P</b>.
  Then, <b>N</b> lines follow. The i-th line contains <b>K</b> integers, describing the beauty values
  of each stack of plates from top to bottom.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where <code>x</code> is the test case number (starting from 1) and <code>y</code> is
  the maximum total sum of beauty values that Dr. Patel could pick.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br>
  1 ≤ <b>K</b> ≤ 30.<br>
  1 ≤ <b>P</b> ≤ <b>N</b> * <b>K</b>.<br>
  The beauty values are between 1 and 100, inclusive.
</p> <h4>Test set 1</h4> <p>
  1 ≤ <b>N</b> ≤ 3.<br></p> <h4>Test set 2</h4> <p>
  1 ≤ <b>N</b> ≤ 50.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">2
2 4 5
10 10 100 30
80 50 10 50
3 2 3
80 80
15 50
20 10

  </pre></td> <td><pre class="io-content">Case #1: 250
Case #2: 180

  </pre></td></tr></table></div> <p>
In Sample Case #1, Dr. Patel needs to pick <b>P</b> = 5 plates:
<ul><li>He can pick the top 3 plates from the first stack (10 + 10 + 100 = 120).</li> <li>He can pick the top 2 plates from the second stack (80 + 50 = 130) .</li></ul>
In total, the sum of beauty values is 250.
</p> <p>
In Sample Case #2, Dr. Patel needs to pick <b>P</b> = 3 plates:
<ul><li>He can pick the top 2 plates from the first stack (80 + 80 = 160).</li> <li>He can pick no plates from the second stack.</li> <li>He can pick the top plate from the third stack (20).</li></ul>
In total, the sum of beauty values is 180.
</p> <p><b>Note:</b> Unlike previous editions, in Kick Start 2020, all test sets are visible verdict test sets, meaning you receive instant feedback upon submission.
</p></div>
