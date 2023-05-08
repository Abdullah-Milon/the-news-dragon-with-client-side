/* 1
AuthProvider-র পেটের মধ্যে কিছু একটা রাখতে হবে যাতে এই পেটের 
মধ্যে থেকে সব জায়গায় পাওয়া যায়...
 যেমন এখানে children কে ব্যবহার 
করা হয়েছে । সংজ্ঞা অনুযায়ী ওই component-র রিটার্নের মধ্যেও children
 নেয়া হয়েছে ।  উক্ত কম্পনেন্টকে Main.jsx-এ নিয়ে 
 তার ভিতরে router provider কে বসানো হয়েছে 
*//////

/* 2
import { getAuth } from "firebase/auth";
 সবথেকে বড় কথা হচ্ছে এটা অটো ইমপোর্ট হয় না তাই এটাকে firebase থেকে 
 নিয়ে আসা লাগে নতুবা নিজে থেকে লেখা লাগে।।।

   এতটুকুর পরে firebase.config থেকে export করা app কে 
   const auth = getAuth(app) এর অন্তর্ভুক্ত করতে হবে ।। 
*////

/* 3
AuthContext.Provider value হিসেবে যে authInfo নিয়েছি তাকে 
আবার varibale হিসেবে ডিক্লেয়ার করে, তার ভিতরে যেতাই 
  দেয়া হয়(লেখা হয়) সেটাকে এই প্রজেক্ট তাকে যে কোন 
  component থেকে পাওয়া বা এক্সেস করা যায় ।

  যে কোন কম্পনেন্ট থেকে access করার ক্ষেত্রে varibale হিসেবে ডিক্লেয়ার 
  করা authInfo এর ভিতরের উল্লেখ করা অংশটুকু কে destructure
   করে ব্যবহার করতে হবে এবং ওই component-এর যেখানে 
   দেখাতে চাই সেখানে dynamic ভাবে দিলেই হ কাজ হয়ে যাবে like......
   const {user} = useContext(AuthContext); 
 */////