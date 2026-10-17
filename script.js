// เมื่อกดปุ่ม Say Hello ให้แสดงข้อความและแสดงเนื้อหาทั้งหมด
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = '> Hello from GitHub Pages! (สวัสดีครับคุณนนทวัฒน์)';
  document.querySelector('#content').classList.remove('hidden');
});

// Exercise 3: ปุ่ม Toggle Theme (Light Retro / Dark High-Contrast)
document.querySelector('#themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});