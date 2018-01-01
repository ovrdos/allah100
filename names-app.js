// Copyright 2018 Allah100.com
// Kamal Hakim
// names-app.js
// Functions for displaying the names of Allah on allah100.com

let names = [
"ALLAH",
"AR-RAHMAAN",
"AR-RAHEEM",
"AL-MALIK",
"AL-QUDDUS",
"AS-SALAM",
"AL-MU’MIN",
"AL-MUHAYMIN",
"AL-AZIZ",
"AL-JABBAR",
"AL-MUTAKABBIR",
"AL-KHAALIQ",
"AL-BAARI",
"AL-MUSAWWIR",
"AL-GHAFFAAR",
"AL-QAHHAAR",
"AL-WAHHAB",
"AR-RAZZAQ",
"AL-FATTAH",
"AL-ALIM",
"AL-QAABID",
"AL-BAASIT",
"AL-KHAAFID",
"AR-RAFI",
"AL-MU’IZZ",
"AL-MUZIL",
"AS-SAMI’",
"AL-BASEER",
"AL-HAKAM",
"AL-ADL",
"AL-LATEEF",
"AL-KHABEER",
"AL-HALEEM",
"AL-AZEEM",
"AL-GHAFOOR",
"ASH-SHAKOOR",
"AL-ALIYY",
"AL-KABEER",
"AL-HAFIZ",
"AL-MUQEET",
"AL-HASEEB",
"AL-JALEEL",
"AL-KAREEM",
"AR-RAQEEB",
"AL-MUJEEB",
"AL-WAASI’",
"AL-HAKEEM",
"AL-WADUD",
"AL-MAJEED",
"AL-BA’ITH",
"ASH-SHAHEED",
"AL-HAQQ",
"AL-WAKEEL",
"AL-QAWWIYY",
"AL-MATEEN",
"AL-WALIYY",
"AL-HAMEED",
"AL-MUHSEE",
"AL-MUBDI",
"AL-MUEED",
"AL-MUHYI",
"AL-MUMEET",
"AL-HAYY",
"AL-QAYYOOM",
"AL-WAAJID",
"AL-MAAJID",
"AL-WAAHID",
"AL-AHAD",
"AS-SAMAD",
"AL-QAADIR",
"AL-MUQTADIR",
"AL-MUQADDIM",
"AL-MU’AKHKHIR",
"AL-AWWAL",
"AL-AKHIR",
"AZ-ZAAHIR",
"AL-BAATIN",
"AL-WAALI",
"AL-MUTA’ALI",
"AL-BARR",
"AT-TAWWAAB",
"AL-MUNTAQIM",
"AL-AFUWW",
"AR-RA’OOF",
"MAALIK-UL-MULK",
"ZUL-JALAALI-WAL-IKRAM",
"AL-MUQSIT",
"AL-JAAMI’",
"AL-GHANIYY",
"AL-MUGHNI",
"AL-MAANI’",
"AD-DAARR",
"AN-NAAFI’",
"AN-NOOR",
"AL-HAADI",
"AL-BADI’",
"AL-BAAQI",
"AL-WAARIS",
"AR-RASHEED",
"AS-SABOOR"
];

let values = {
0:["الله","Allah","The One and only God.",""],
1:["الرَّحْمَنُ","Ar-Rahmaan","The Beneficent","He who wills goodness and mercy for all His creatures."],
2:["الرَّحِيمُ","Ar-Raheem","The Merciful","He who acts with extreme kindness."],
3:["الْمَلِكُ","Al-Malik","The Eternal Lord","The Sovereign Lord, The One with the complete Dominion, the One Whose Dominion is clear from imperfection."],
4:["الْقُدُّوسُ","Al-Quddus","The Most Sacred","The One who is pure from any imperfection and clear from children and adversaries."],
5:["السَّلاَمُ","As-Salam","The Embodiment of Peace","The One who is free from every imperfection."],
6:["الْمُؤْمِنُ","Al-Mu’min","The Infuser of Faith","The One who witnessed for Himself that no one is God but Him. And He witnessed for His believers that they are truthful in their belief that no one is God but Him."],
7:["الْمُهَيْمِنُ","Al-Muhaymin","The Preserver of Safety","The One who witnesses the saying and deeds of His creatures."],
8:["الْعَزِيزُ","Al-Aziz","The Mighty One","The Strong, The Defeater who is not defeated."],
9:["الْجَبَّارُ","Al-Jabbar","The Omnipotent One","The One that nothing happens in His Dominion except that which He willed."],
10:["الْمُتَكَبِّرُ","Al-Mutakabbir","The Dominant One","The One who is clear from the attributes of the creatures and from resembling them."],
11:["الْخَالِقُ","Al-Khaaliq","The Creator","The One who brings everything from non-existence to existence."],
12:["الْبَارِئُ","Al-Baari","The Evolver","The Maker, The Creator who has the Power to turn the entities."],
13:["الْمُصَوِّرُ","Al-Musawwir","The Flawless Shaper","The One who forms His creatures in different pictures."],
14:["الْغَفَّارُ","Al-Ghaffaar","The Great Forgiver","The Forgiver, The One who forgives the sins of His slaves time and time again."],
15:["الْقَهَّارُ","Al-Qahhaar","The All-Prevailing One","The Dominant, The One who has the perfect Power and is not unable, over anything."],
16:["الْوَهَّابُ","Al-Wahhab","The Supreme Bestower","The One who is Generous in giving plenty without any return. He is everything that benefits whether Halal or Haram."],
17:["الرَّزَّاقُ","Ar-Razzaq","The Total Provider","The Sustainer, The Provider."],
18:["الْفَتَّاحُ","Al-Fattah","The Supreme Solver","The Opener, The Reliever, The Judge, The One who opens for His slaves the closed worldly and religious matters."],
19:["اَلْعَلِيْمُ","Al-Alim","The All-Knowing One","The Knowledgeable; The One nothing is absent from His knowledge."],
20:["الْقَابِضُ","Al-Qaabid","The Restricting One","The Constrictor, The Withholder, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy."],
21:["الْبَاسِطُ","Al-Baasit","The Extender","The Englarger, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy."],
22:["الْخَافِضُ","Al-Khaafid","The Reducer","The Abaser, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment."],
23:["الرَّافِعُ","Ar-Rafi","The Elevating One","The Exalter, The Elevator, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment."],
24:["الْمُعِزُّ","Al-Mu’izz","The Honourer-Bestower","He gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem."],
25:["المُذِلُّ","Al-Muzil","The Abaser","The Dishonourer, The Humiliator, He gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem."],
26:["السَّمِيعُ","As-Sami’","The All-Hearer","The Hearer, The One who Hears all things that are heard by His Eternal Hearing without an ear, instrument or organ."],
27:["الْبَصِيرُ","Al-Baseer","The All-Seeing","The All-Noticing, The One who Sees all things that are seen by His Eternal Seeing without a pupil or any other instrument."],
28:["الْحَكَمُ","Al-Hakam","The Impartial Judge","The Judge, He is the Ruler and His judgment is His Word."],
29:["الْعَدْلُ","Al-Adl","The Embodiment of Justice","The Just, The One who is entitled to do what He does."],
30:["اللَّطِيفُ","Al-Lateef","The Knower of Subtleties","The Subtle One, The Gracious, The One who is kind to His slaves and endows upon them."],
31:["الْخَبِيرُ","Al-Khabeer","The All-Aware One","The One who knows the truth of things."],
32:["الْحَلِيمُ","Al-Haleem","The Clement One","The Forebearing, The One who delays the punishment for those who deserve it and then He might forgive them."],
33:["الْعَظِيمُ","Al-Azeem","The Magnificent One","The Great One, The Mighty, The One deserving the attributes of Exaltment, Glory, Extolement, and Purity from all imperfection."],
34:["الْغَفُورُ","Al-Ghafoor","The Great Forgiver","The All-Forgiving, The Forgiving, The One who forgives a lot."],
35:["الشَّكُورُ","Ash-Shakoor","The Acknowledging One","The Grateful, The Appreciative, The One who gives a lot of reward for a little obedience."],
36:["الْعَلِيُّ","Al-Aliyy","The Sublime One","The Most High, The One who is clear from the attributes of the creatures."],
37:["الْكَبِيرُ","Al-Kabeer","The Great One","The Most Great, The Great, The One who is greater than everything in status."],
38:["الْحَفِيظُ","Al-Hafiz","The Guarding One","The Preserver, The Protector, The One who protects whatever and whoever He willed to protect."],
39:["المُقيِت","Al-Muqeet","The Sustaining One","The Maintainer, The Guardian, The Feeder, The One who has the Power."],
40:["الْحسِيبُ","Al-Haseeb","The Reckoning One","The Reckoner, The One who gives the satisfaction."],
41:["الْجَلِيلُ","Al-Jaleel","The Majestic One","The Sublime One, The Beneficent, The One who is attributed with greatness of Power and Glory of status."],
42:["الْكَرِيمُ","Al-Kareem","The Bountiful One","The Generous One, The Gracious, The One who is attributed with greatness of Power and Glory of status."],
43:["الرَّقِيبُ","Ar-Raqeeb","The Watchful One","The Watcher, The One that nothing is absent from Him. Hence it’s meaning is related to the attribute of Knowledge."],
44:["الْمُجِيبُ","Al-Mujeeb","The Responding One","The Responsive, The Hearkener, The One who answers the one in need if he asks Him and rescues the yearner if he calls upon Him."],
45:["الْوَاسِعُ","Al-Waasi’","The All-Pervading One","The Vast, The All-Embracing, The Knowledgeable."],
46:["الْحَكِيمُ","Al-Hakeem","The Wise One","The Wise, The Judge of Judges, The One who is correct in His doings."],
47:["الْوَدُودُ","Al-Wadud","The Loving One","The One who loves His believing slaves and His believing slaves love Him. His love to His slaves is His Will to be merciful to them and praise them"],
48:["الْمَجِيدُ","Al-Majeed","The Glorious One","The Most Glorious One, The One who is with perfect Power, High Status, Compassion, Generosity and Kindness."],
49:["الْبَاعِثُ","Al-Ba’ith","The Infuser of New Life","The Resurrector, The Raiser (from death), The One who resurrects His slaves after death for reward and/or punishment."],
50:["الشَّهِيدُ","Ash-Shaheed","The All Observing Witness","The Witness, The One who nothing is absent from Him."],
51:["الْحَقُّ","Al-Haqq","The Embodiment of Truth","The Truth, The True, The One who truly exists."],
52:["الْوَكِيلُ","Al-Wakeel","The Universal Trustee","The Trustee, The One who gives the satisfaction and is relied upon."],
53:["الْقَوِيُّ","Al-Qawwiyy","The Strong One","The Most Strong, The Strong, The One with the complete Power."],
54:["الْمَتِينُ","Al-Mateen","The Firm One","The One with extreme Power which is un-interrupted and He does not get tired."],
55:["الْوَلِيُّ","Al-Waliyy","The Protecting Associate","The Protecting Friend, The Supporter."],
56:["الْحَمِيدُ","Al-Hameed","The Sole-Laudable One","The Praiseworthy, The praised One who deserves to be praised."],
57:["الْمُحْصِي","Al-Muhsee","The All-Enumerating One","The Counter, The Reckoner, The One who the count of things are known to him."],
58:["الْمُبْدِئُ","Al-Mubdi","The Originator","The One who started the human being. That is, He created him."],
59:["الْمُعِيدُ","Al-Mueed","The Restorer","The Reproducer, The One who brings back the creatures after death"],
60:["الْمُحْيِي","Al-Muhyi","The Maintainer of life","The Restorer, The Giver of Life, The One who took out a living human from semen that does not have a soul. He gives life by giving the souls back to the worn out bodies on the resurrection day and He makes the hearts alive by the light of knowledge."],
61:["اَلْمُمِيتُ","Al-Mumeet","The Inflictor of Death","The Creator of Death, The Destroyer, The One who renders the living dead."],
62:["الْحَيُّ","Al-Hayy","The Eternally Living One","The Alive, The One attributed with a life that is unlike our life and is not that of a combination of soul, flesh or blood."],
63:["الْقَيُّومُ","Al-Qayyoom","The Self-Subsisting One","The One who remains and does not end."],
64:["الْوَاجِدُ","Al-Waajid","The Pointing One","The Perceiver, The Finder, The Rich who is never poor. Al-Wajd is Richness."],
65:["الْمَاجِدُ","Al-Maajid","The All-Noble One","The Glorious, He who is Most Glorious."],
66:["الْواحِدُ","Al-Waahid","The Only One","The Unique, The One, The One without a partner."],
67:["اَلاَحَدُ","Al-Ahad","The Sole One","The One."],
68:["الصَّمَدُ","As-Samad","The Supreme Provider","The Eternal, The Independent, The Master who is relied upon in matters and reverted to in ones needs."],
69:["الْقَادِرُ","Al-Qaadir","The Omnipotent One","The Able, The Capable, The One attributed with Power."],
70:["الْمُقْتَدِرُ","Al-Muqtadir","The All Authoritative One","The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him."],
71:["الْمُقَدِّمُ","Al-Muqaddim","The Expediting One","The Expediter, The Promoter, The One who puts things in their right places. He makes ahead what He wills and delays what He wills."],
72:["الْمُؤَخِّرُ","Al-Mu’akhkhir","The Procrastinator","The Delayer, the Retarder, The One who puts things in their right places. He makes ahead what He wills and delays what He wills."],
73:["الأوَّلُ","Al-Awwal","The Very First","The First, The One whose Existence is without a beginning."],
74:["الآخِرُ","Al-Akhir","The Infinite Last One","The Last, The One whose Existence is without an end."],
75:["الظَّاهِرُ","Az-Zaahir","The Perceptible","The Manifest, The One that nothing is above Him and nothing is underneath Him, hence He exists without a place. He, The Exalted, His Existence is obvious by proofs and He is clear from the delusions of attributes of bodies."],
76:["الْبَاطِنُ","Al-Baatin","The Imperceptible","The Hidden, The One that nothing is above Him and nothing is underneath Him, hence He exists without a place. He, The Exalted, His Existence is obvious by proofs and He is clear from the delusions of attributes of bodies."],
77:["الْوَالِي","Al-Waali","The Holder of Supreme Authority","The Governor, The One who owns things and manages them."],
78:["الْمُتَعَالِي","Al-Muta’ali","The Extremely Exalted One","The Most Exalted, The High Exalted, The One who is clear from the attributes of the creation."],
79:["الْبَرُّ","Al-Barr","The Fountain-Head of Truth","The Source of All Goodness, The Righteous, The One who is kind to His creatures, who covered them with His sustenance and specified whoever He willed among them by His support, protection, and special mercy."],
80:["التَّوَابُ","At-Tawwaab","The Ever-Acceptor of Repentance","The Relenting, The One who grants repentance to whoever He willed among His creatures and accepts his repentance."],
81:["الْمُنْتَقِمُ","Al-Muntaqim","The Retaliator","The Avenger, The One who victoriously prevails over His enemies and punishes them for their sins. It may mean the One who destroys them."],
82:["العَفُوُّ","Al-Afuww","The Supreme Pardoner","The Forgiver, The One with wide forgiveness."],
83:["الرَّؤُوفُ","Ar-Ra’oof","The Benign One","The Compassionate, The One with extreme Mercy. The Mercy of Allah is His will to endow upon whoever He willed among His creatures."],
84:["مَالِكُ الْمُلْكِ","Maalik-ul-Mulk","The Eternal Possessor of Sovereignty","The One who controls the Dominion and gives dominion to whoever He willed."],
85:["ذُوالْجَلاَلِ وَالإكْرَامِ","Zul-Jalaali-wal-Ikram","The Possessor of Majesty and Honour","The Lord of Majesty and Bounty, The One who deserves to be Exalted and not denied."],
86:["الْمُقْسِطُ","Al-Muqsit","The Just One","The Equitable, The One who is Just in His judgment."],
87:["الْجَامِعُ","Al-Jaami’","The Assembler of Scattered Creations","The Gatherer, The One who gathers the creatures on a day that there is no doubt about, that is the Day of Judgment."],
88:["الْغَنِيُّ","Al-Ghaniyy","The Self-Sufficient One","The One who does not need the creation."],
89:["الْمُغْنِي","Al-Mughni","The Bestower of Sufficiency","The Enricher, The One who satisfies the necessities of the creatures."],
90:["اَلْمَانِعُ","Al-Maani’","The Preventer","The Withholder."],
91:["الضَّارَّ","Ad-Daarr","The Distressor","The One who makes harm reach to whoever He willed and benefit to whoever He willed."],
92:["النَّافِعُ","An-Naafi’","The Bestower of Benefits","The Propitious, The One who makes harm reach to whoever He willed and benefit to whoever He willed."],
93:["النُّورُ","An-Noor","The Prime Light","The Light, The One who guides."],
94:["الْهَادِي","Al-Haadi","The Provider of Guidance","The Guide, The One whom with His Guidance His believers were guided, and with His Guidance the living beings have been guided to what is beneficial for them and protected from what is harmful to them."],
95:["الْبَدِيعُ","Al-Badi’","The Unique One","The Incomparable, The One who created the creation and formed it without any preceding example."],
96:["اَلْبَاقِي","Al-Baaqi","The Ever Surviving One","The Everlasting, The One that the state of non-existence is impossible for Him."],
97:["الْوَارِثُ","Al-Waaris","The Eternal Inheritor","The Heir, The One whose Existence remains."],
98:["الرَّشِيدُ","Ar-Rasheed","The Guide to Path of Rectitude","The Guide to the Right Path, The One who guides."],
99:["الصَّبُورُ","As-Saboor","The Extensively Enduring One","The Patient, The One who does not quickly punish the sinners."]
};

let nature = [
  "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/88603cdc-a6c7-4cea-b705-3bfec8411670/nature-wallpaper2.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/106f65e0-dbfc-4bef-85e9-ad8ef0b828ce/nature-wallpaper3.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/98c16f0d-9c5d-4876-9f27-7811799a12fd/nature-wallpaper4.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/696d2396-7092-465d-82f3-cc05335bf018/nature-wallpaper5.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8538b976-1cff-42ae-9113-83798ff09a2f/nature-wallpaper6.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f1f881fc-e5ca-4597-8f95-fa484d2ca0f4/nature-wallpaper7.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b28e57d5-6ce3-487f-9a84-e9830d5297ac/nature-wallpaper8.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/af041603-7cb3-4764-b775-a834c8fd53db/nature-wallpaper9.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/60137856-c945-4d2e-8a78-45f91efcf157/nature-wallpaper10.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9cf46b62-1c25-4e87-a2c6-43a84cc57cf8/nature-wallpaper11.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/98378f4c-b873-4ad1-8990-cf757b59d296/nature-wallpaper12.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/29790374-a82f-495a-9f04-5ac94c3b4f25/nature-wallpaper13.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53a4bc56-d08f-4ee1-b542-a26a20945688/nature-wallpaper14.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a535bbdd-9599-4c9f-8be4-218f8af15862/nature-wallpaper15.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/768cbcb6-df6c-430e-80b6-f7a214b5884e/nature-wallpaper16.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/49c9b14a-2704-43cb-8ffd-513b9d9df92d/nature-wallpaper17.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/fd26e766-e7de-48d9-96aa-294adf15fc76/nature-wallpaper18.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dac42715-8462-435f-92e0-8a73d62b62da/nature-wallpaper19.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/833be8b5-9db0-4e10-b89d-737d6394ade9/nature-wallpaper20.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a85d8004-2ef4-4556-8e58-c7e575cfe459/nature-wallpaper21.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b0801554-f406-4a48-8879-1f7fa59b83d9/nature-wallpaper22.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/05799320-85bc-4654-9bad-8adbf42939b2/nature-wallpaper23.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2ee32bf0-d803-470f-bf61-9077afe287ea/nature-wallpaper24.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b419a2d4-eba1-4186-b7db-ada0bec4fa2d/nature-wallpaper25.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cc08f450-f97d-420d-aecf-62d48da4dfed/nature-wallpaper1.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6abdc20c-a9a3-4986-b3a7-19699775505d/27-3.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ed969154-bf8d-4502-b216-4aeed220baf8/3.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7ca1b422-b4a0-4fbb-9782-b381365ec283/2.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b68b6bec-d831-40f7-a5e7-47fa3fb3a755/16.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f1a7067d-9795-4dfc-8dd9-3dbcaa792b77/4.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0a2560a8-9fca-4f17-b5b0-3d8cbd0b7b43/7.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/283dd347-1ad3-4a03-a98d-acd7e0b93ed0/33-2.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/290d51d6-5c5a-4f6f-919e-2478ef66628d/33.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6d6c2289-978c-4d66-b153-d355c735f13e/9.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4e047162-0d34-4f18-9af0-d9ac0e293495/10.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6fb4dea5-c318-4de1-bb80-0eb0aa6649b6/11.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9e82862a-401c-4a28-838b-8811cad37f5a/15.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ef92f4e3-923f-4658-ae18-86359b78cd8b/20.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/fef1e648-69e6-4b0c-a4eb-c383eb89c539/28.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/790e5c0f-bde8-4a3f-ac25-d1d6a1127370/30.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cc9ed42a-ef6e-4f1f-b9f3-90d340b6e413/31.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/af6522f7-a7a9-4692-ae89-2a2c550485bc/paisajes-28.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/176c2d06-fbe4-457b-9c76-27534b3e7b98/paisajes-04.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2807c1d6-a5eb-4357-9b69-f17c8a3d8a98/paisajes-08.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/5de6ea7b-2c3b-4c65-94b7-7062830b3f7b/paisajes-09.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f5cef4bc-83ed-42c3-84df-e6f01f470376/paisajes-19.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7733b048-aadd-43b8-af91-2bef2199727f/paisajes-29.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b307e179-c5b9-499b-8014-a5a49530f390/paisajes-31.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/284f39b2-0354-4895-b417-5b2e749a1a40/paisajes-32.jpg",
"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b9979371-d71d-49d1-a0d9-ec349e285347/paisajes-33.jpg"
  ]

var displayName = function(name,index) {
  var obj = document.createElement('div');
  obj.id = index;
  obj.onmouseover = function(){highlight(this)};
  obj.onmouseout = function(){content(this)};
  obj.className = 'cont cover';
  obj.innerHTML = '<span>'+name+'</span>';
  var element = document.getElementById('content');
  if (element.appendChild) element.appendChild(obj);
}

var displayAttributes = function(index) {
   if (!index) return;
   var attr = values[index];
   document.getElementById('arabic').innerText=attr[0];
   document.getElementById('name').innerText=attr[1];
   document.getElementById('desc').innerText=attr[2];
   document.getElementById('detail').innerText=attr[3];
   document.getElementById('attributes').style.display='block';
   setNatureBackground();
}

var setNatureBackground = function() {
  var max = 49;
  var min = 0;
  var idx = Math.random() * (max - min) + min;
  document.getElementsByClassName('bg')[0].style.backgroundImage='url('+nature[Math.round(idx)]+')';
  curr = idx;
}
  
var highlight = function(obj) {
    displayAttributes(obj.id);
    obj.className = 'cont light';
}

var content = function(obj) {
 obj.className = 'cont cover';
 document.getElementById('attributes').style.display='none';
}

var init = function() {
  var i=0;
  for (let attr of names) {
    displayName(attr,i);
    i++;
  }
}

