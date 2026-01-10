import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTRm9XNvVgmP-h_7qHZyQy-dEAqnTIrY4",
    authDomain: "kameshkah-8c9ed.firebaseapp.com",
    databaseURL: "https://kameshkah-8c9ed-default-rtdb.firebaseio.com",
    projectId: "kameshkah-8c9ed",
    storageBucket: "kameshkah-8c9ed.firebasestorage.app",
    messagingSenderId: "221923589082",
    appId: "1:221923589082:web:098b2152a227e93acbdee3",
    measurementId: "G-199GK5EH3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);
const realDb = getDatabase(app);

// --- دالة اختبار (Test Function) ---
// عشان تجربها، افتح الكونسول في المتصفح واكتب:
// testFirebase("Mostafa", "test@example.com");
async function testFirebase(name, email) {
    console.log("Starting test...");
    try {
        // 1. حفظ في Firestore
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            createdAt: new Date()
        });
        console.log("✅ Data saved to Firestore with ID: ", docRef.id);

        // 2. تسجيل Log في Realtime Database
        const logRef = push(ref(realDb, 'logs'));
        await set(logRef, {
            event: "New User Test",
            userId: docRef.id,
            timestamp: new Date().toISOString()
        });
        console.log("✅ Log saved to Realtime Database");

        alert("تجربة ناجحة! البيانات اتحفظت في المكانين 🎉");
    } catch (e) {
        console.error("❌ Error adding document: ", e);
        alert("حصل خطأ: " + e.message);
    }
}

// نربط الدالة بالـ window عشان تقدر تنده عليها من الكونسول
window.testFirebase = testFirebase;

// Export instances
export { app, db, realDb };