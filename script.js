document.getElementById('apiForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const endpoint = document.getElementById('endpoint').value;
  const method = document.getElementById('method').value;
  const data = document.getElementById('data').value;
  
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method === 'POST' || method === 'PUT') {
    options.body = data;
  }

  try {
    const response = await fetch(endpoint, options);
    const result = await response.json();
    document.getElementById('response').textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById('response').textContent = `Error: ${error.message}`;
  }
});
