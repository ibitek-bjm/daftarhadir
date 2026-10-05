const firebaseConfig = {
  apiKey: "AIzaSyARF88zhkjygBeRErfVkXhrkMVKZh8KTdw",
  authDomain: "materi-kuliah-574a7.firebaseapp.com",
  databaseURL: "https://materi-kuliah-574a7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "materi-kuliah-574a7",
  storageBucket: "materi-kuliah-574a7.firebasestorage.app",
  messagingSenderId: "292121429363",
  appId: "1:292121429363:web:205be154df903cde35b106",
  measurementId: "G-LRETT0MPCD"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtTanggal = t => new Date(t + 'T00:00:00').toLocaleDateString('id-ID', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
