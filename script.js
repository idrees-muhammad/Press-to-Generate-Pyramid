document.getElementById('generatePyramid').addEventListener('click', generatePyramid);

function generatePyramid() {
  const pyramidContainer = document.getElementById('pyramidContainer');
  pyramidContainer.innerHTML = ''; // Clear previous pyramid if any
  const rows = 8;
  let pyramid = '';

  for (let i = 1; i <= rows; i++) {
    const spaces = ' '.repeat(rows - i);
    const hashes = '#'.repeat(2 * i - 1);
    pyramid += spaces + hashes + '\n';
  }

  pyramidContainer.textContent = pyramid;
}
