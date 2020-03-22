<div class="problem-statement-string"><h3>Problem</h3> <p>
  Pip has <b>N</b> strings. Each string consists only of letters from <code>A</code> to <code>Z</code>.
  Pip would like to bundle their strings into <i>groups</i> of size <b>K</b>. Each string must belong to exactly one group.
</p><p>
  The <i>score</i> of a group is equal to the length of the longest prefix shared by all the strings in that group.
  For example:
  <ul><li>The group <code>{RAINBOW, RANK, RANDOM, RANK}</code> has a score of 2 (the longest prefix is <code>'RA'</code>).</li> <li>The group <code>{FIRE, FIREBALL, FIREFIGHTER}</code> has a score of 4 (the longest prefix is <code>'FIRE'</code>).</li> <li>The group <code>{ALLOCATION, PLATE, WORKOUT, BUNDLING}</code> has a score of 0 (the longest prefix is <code>''</code>).</li></ul></p><p>
  Please help Pip bundle their strings into groups of size <b>K</b>, such that the sum of scores of
  the groups is maximized.
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>. <b>T</b> test cases follow.
  Each test case begins with a line containing the two integers <b>N</b> and <b>K</b>.
  Then, <b>N</b> lines follow, each containing one of Pip's strings.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where <code>x</code> is the test case number (starting from 1) and <code>y</code> is
  the maximum sum of scores possible.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br>
  2 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
  2 ≤ <b>K</b> ≤ <b>N</b>.<br> <b>K</b> divides <b>N</b>.<br>
  Each of Pip's strings contain at least one character.<br>
  Each string consists only of letters from <code>A</code> to <code>Z</code>.
</p> <h4>Test set 1</h4> <p>
  Each of Pip's strings contain at most 5 characters.
</p> <h4>Test set 2</h4> <p>
  The total number of characters in Pip's strings across all test cases is at most 2 × 10<sup>6</sup>.
</p> <h3>Samples</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input 1</span> <br>&nbsp;
         </td> <td><br> <span class="io-table-header">Output 1</span> <br>&nbsp;
         </td></tr> <tr><td><pre class="io-content">2
2 2
KICK
START
8 2
G
G
GO
GO
GOO
GOO
GOOO
GOOO
  </pre></td> <td><pre class="io-content">Case #1: 0
Case #2: 10
  </pre></td></tr></table> <table><tr><td><br> <span class="io-table-header">Input 2</span> <br>&nbsp;
         </td> <td><br> <span class="io-table-header">Output 2</span> <br>&nbsp;
         </td></tr> <tr><td><pre class="io-content">1
6 3
RAINBOW
FIREBALL
RANK
RANDOM
FIREWALL
FIREFIGHTER
  </pre></td> <td><pre class="io-content">Case #1: 6
  </pre></td></tr></table></div> <h4>
   Sample #1
</h4> <p>
In Case #1, Pip can achieve a total score of 0 by make the groups:
<ul><li><code>{KICK, START}</code>, with a score of 0.</li></ul></p> <p>
In Case #2, Pip can achieve a total score of 10 by make the groups:
<ul><li><code>{G, G}</code>, with a score of 1.</li> <li><code>{GO, GO}</code>, with a score of 2.</li> <li><code>{GOO, GOO}</code>, with a score of 3.</li> <li><code>{GOOO, GOOO}</code>, with a score of 4.</li></ul></p> <h4>
   Sample #2
</h4> <p>
In Case #1, Pip can achieve a total score of 6 by make the groups:
<ul><li><code>{RAINBOW, RANK, RANDOM}</code>, with a score of 2.</li> <li><code>{FIREBALL, FIREWALL, FIREFIGHTER}</code>, with a score of 4.</li></ul></p> <p><ul><li><b>Note #1:</b> Only Sample #1 is a valid input for Test set 1. Consequently, Sample #1 will be
  used as a sample test set for your submissions.</li> <li><b>Note #2:</b> Unlike previous editions, in Kick Start 2020, all test sets are visible verdict test sets, meaning you receive instant feedback upon submission.
</li></ul></p></div>
