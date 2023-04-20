//your JS code here. If required.
const promises = [
  new Promise(resolve => setTimeout(() => resolve('Promise 1'), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 2'), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 3'), Math.floor(Math.random() * 3000) + 1000))
];

// Add loading text to table
const table = document.getElementById('output');
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

Promise.all(promises)
  .then(results => {
    // Remove loading text
    table.deleteRow(0);

    // Add rows for each Promise result
    results.forEach((result, index) => {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      const timeCell = row.insertCell();

      nameCell.textContent = result;
      timeCell.textContent = ((Date.now() - startTime) / 1000).toFixed(3);
    });

    // Add total row
    const totalRow = table.insertRow();
    const totalNameCell = totalRow.insertCell();
    const totalTimeCell = totalRow.insertCell();

    totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = ((Date.now() - startTime) / 1000).toFixed(3);
  })
  .catch(error => console.log(error));
