function generateKey() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)';
  let key = '';
  for (let i = 0; i < 50; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('key-box').textContent = key;
}

function copyKey() {
  const keyText = document.getElementById('key-box').textContent;
  if (keyText.startsWith('Click')) return alert('Please generate a key first.');
  navigator.clipboard.writeText(keyText).then(() => {
    alert('Key copied to clipboard!');
  }, () => {
    alert('Failed to copy. Please try manually.');
  });
}
