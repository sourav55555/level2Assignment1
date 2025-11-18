## What are some differences between interfaces and types in TypeScript?
-- ইন্টারফেস এবং টাইপের মধ্যে প্রধান পার্থক্য হচ্ছে টাইপের সাথে আমরা যেকোনো ধরণের ডাটার জন্য টাইপ বানাতে পারি, প্রিমিটিভ এবং নন-প্রিমিটিভ সব ডাটার জন্য 'টাইপ' ব্যবহার করা যায়, অন্যদিকে ইন্টারফেস এর মাধ্যমে আমরা শুধু নন-প্রিমিটিভ ডাটা টাইপ যেমন আররে, অবজেক্ট সহ ফাংশন টাইপের ডাটা টাইপ তৈরি করতে পারি। এক ইন্টারফেস এর সাথে আরেক ইন্টারফেস যুক্ত করতে "extends" ব্যবহৃত হয়, এক টাইপের সাথে আরেক টাইপ যুক্ত করতে "&" ব্যবহৃত হয়.


## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
-- 'enums' হচ্ছে টাইপস্ক্রিপ্ট এর এমন একটি টাইপ যার মাধ্যমে আমরা কোন ভ্যালুর টাইপ হিসেবে কিছু নির্দিষ্ট ভ্যালু বসিয়ে দিতে পারি এবং পরবর্তীতে ওই ভ্যালু গুলোই ব্যবহৃত হবে বিভিন্ন অপারেশন এর জন্য। যেমনঃ 

        type PersonType = {
        name: string;
        mark: 10 | 9 | 8
        }
        const selectedPerson: PersonType = {
            name: 'Sourav',
            mark: 9
        }

        type FavCar = {
            name: 'Audi' | 'Toyota' | 'BMW'
        }

        const needCar: FavCar = {
            name: "Audi"
        }