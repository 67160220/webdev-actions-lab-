// ปุ่มเปลี่ยนข้อความแสดงสถานะ
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages! (สวัสดีครับคุณนนทวัฒน์)';
});

// Exercise 3: ปุ่ม Toggle Theme (Light/Dark Mode)
document.querySelector('#themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});