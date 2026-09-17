import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'ag-aam-01',
    slug: 'aam-ka-achaar',
    name: 'Aam Ka Achaar',
    hindiName: 'पारंपारिक आम का अचार',
    shortDescription: 'Handcrafted with raw Ramkela mangoes, cold-pressed mustard oil, and grandma’s secret roasted masala blend.',
    description: 'Our iconic Banarasi style Aam Ka Achaar is made the age-old way. Hand-plucked tart Ramkela raw mangoes are naturally sun-dried on cotton sheets, marinated in pure Kachi Ghani cold-pressed mustard oil, and slow-aged with hand-pounded fenugreek (methi), fennel (saunf), nigella seeds (kalonji), and fragrant hing. Every jar takes 21 days of warm Indian sunshine to achieve that unforgettable heirloom bite.',
    category: 'mango',
    spiceLevel: 'Spicy',
    rating: 4.9,
    reviewsCount: 184,
    price: 199,
    originalPrice: 249,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 199, originalPrice: 249, inStock: true },
      { weight: '500g', price: 369, originalPrice: 449, inStock: true },
      { weight: '1kg', price: 699, originalPrice: 849, inStock: true },
    ],
    images: [
      '/images/mango-pickle-container.jpg',
    ],
    badge: 'Bestseller',
    isBestseller: true,
    ingredients: [
      'Raw Green Mangoes (Ramkela)',
      '100% Cold-Pressed Mustard Oil (Kachi Ghani)',
      'Rock Salt & Black Salt',
      'Coarsely Ground Fenugreek (Methi)',
      'Fennel Seeds (Saunf)',
      'Yellow Mustard Seeds (Rai)',
      'Kashmiri Red Chilli Powder',
      'Turmeric Powder (Haldi)',
      'Nigella Seeds (Kalonji)',
      'Compounded Asafoetida (Hing)'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '42 kcal',
      protein: '0.4g',
      carbs: '2.1g',
      fat: '3.6g',
      sodium: '320mg'
    },
    storage: 'Store in a cool, dry place away from direct sunlight. Always use a clean, dry spoon. Ensure the pickle remains submerged under a thin layer of mustard oil to preserve natural freshness.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Wood-Pressed Mustard Oil',
    pairings: [
      { name: 'Aloo Paratha', desc: 'The quintessential breakfast match with homemade white butter.' },
      { name: 'Dal Khichdi', desc: 'Adds that fiery, tangy punch to comforting hot khichdi.' },
      { name: 'Curd Rice', desc: 'South Indian comfort food elevated with spicy North Indian aam ka achar.' },
      { name: 'Poori Bhaji', desc: 'Sunday family brunches are incomplete without this punchy companion.' }
    ]
  },
  {
    id: 'ag-nimbu-02',
    slug: 'nimbu-ka-achaar',
    name: 'Nimbu Ka Achaar',
    hindiName: 'धूप में पका खट्टा-मीठा नींबू अचार',
    shortDescription: 'Sun-cured thin-skinned Kagzi lemons steeped in Himalayan rock salt, ajwain, and delicate spices. Oil-free & digestive.',
    description: 'Crafted without a single drop of oil, our Nimbu Ka Achaar is seasoned with centuries of Ayurvedic kitchen wisdom. Juicy, thin-skinned Kagzi lemons from Maharashtra orchards are cut and massaged with black rock salt, digestive ajwain (carom seeds), roasted cumin, and black pepper. The glass jars sit on our sunny terrace for weeks until the lemon peels turn melt-in-the-mouth soft and deliciously syrupy.',
    category: 'lemon',
    spiceLevel: 'Medium',
    rating: 4.8,
    reviewsCount: 142,
    price: 189,
    originalPrice: 229,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 189, originalPrice: 229, inStock: true },
      { weight: '500g', price: 349, originalPrice: 419, inStock: true },
      { weight: '1kg', price: 649, originalPrice: 799, inStock: true },
    ],
    images: [
      '/images/lemon-pickle-container.jpg',
    ],
    badge: 'Zero Oil / Digestive',
    isBestseller: true,
    ingredients: [
      'Fresh Thin-Skinned Kagzi Lemons',
      'Kala Namak (Black Salt)',
      'Sendha Namak (Rock Salt)',
      'Roasted Ajwain (Carom Seeds)',
      'Cracked Black Pepper',
      'Roasted Jeera Powder',
      'Degi Kashmiri Chilli (for warm hue)'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '18 kcal',
      protein: '0.2g',
      carbs: '3.8g',
      fat: '0.1g',
      sodium: '290mg'
    },
    storage: 'Store in an airtight jar. Does not require refrigeration. With age, the lemon peel grows darker and richer in therapeutic digestive benefits.',
    shelfLife: '18 Months (gets better with time)',
    oilType: '100% Oil-Free (Traditional Water & Lemon Juice Cure)',
    pairings: [
      { name: 'Moong Dal & Chawal', desc: 'Mild steamed rice and yellow dal get an instant zest boost.' },
      { name: 'Plain Thepla', desc: 'Travel friendly Gujarati staple that pairs divinely with sweet-sour nimbu.' },
      { name: 'Ajwain Puri', desc: 'Crispy puffed puris dipped into spicy tangy lemon relish.' },
      { name: 'Light Khichdi', desc: 'Gentle on the stomach, soothing digestive pairing.' }
    ]
  },
  {
    id: 'ag-mirchi-03',
    slug: 'mirchi-ka-achaar',
    name: 'Mirchi Ka Achaar',
    hindiName: 'बनारसी भरवा लाल मिर्च का अचार',
    shortDescription: 'Plump Banarasi red chillies painstakingly stuffed with hand-ground roasted spices and cold-pressed mustard oil.',
    description: 'The crowning jewel of Uttar Pradesh’s pickling heritage. Large, fleshy winter red chillies are carefully slit, cleaned, and hand-stuffed with a secret masala mixture of coarsely cracked yellow rai, aromatic saunf, coriander, amchur (dry mango powder), and pungent mustard oil. Every bite delivers a robust crunch followed by aromatic, tingling warmth without burning your palate.',
    category: 'chilli',
    spiceLevel: 'Extra Spicy',
    rating: 4.9,
    reviewsCount: 168,
    price: 179,
    originalPrice: 219,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 179, originalPrice: 219, inStock: true },
      { weight: '500g', price: 339, originalPrice: 399, inStock: true },
      { weight: '1kg', price: 629, originalPrice: 759, inStock: true },
    ],
    images: [
      '/images/red-chilli-container.jpg',
    ],
    badge: 'Grandma’s Special',
    isBestseller: true,
    ingredients: [
      'Fresh Banarasi Red Chillies (Lal Mirch)',
      'Cold-Pressed Mustard Oil',
      'Yellow Mustard (Pili Sarson)',
      'Crushed Fennel Seeds',
      'Dry Mango Powder (Amchur)',
      'Fenugreek Seeds',
      'Kalonji',
      'Hing (Asafoetida)',
      'Rock Salt & Turmeric'
    ],
    nutrition: {
      servingSize: '15g (1 Piece)',
      calories: '45 kcal',
      protein: '0.6g',
      carbs: '2.4g',
      fat: '3.8g',
      sodium: '310mg'
    },
    storage: 'Keep chillies soaked under mustard oil. Use a dry spoon or fork to pull out individual chillies.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Cold-Pressed Mustard Oil',
    pairings: [
      { name: 'Sattu Paratha', desc: 'Bihari classic match made in culinary heaven.' },
      { name: 'Ghee-Roast Roti', desc: 'Slather hot rotis with melted cow ghee and a small piece of mirchi.' },
      { name: 'Arhar Dal Rice', desc: 'Elevates everyday yellow pigeon-pea dal to feast level.' },
      { name: 'Mathri & Chai', desc: 'Crispy evening snack companion with strong masala chai.' }
    ]
  },
  {
    id: 'ag-mix-04',
    slug: 'mix-achaar',
    name: 'Mix Achaar',
    hindiName: 'शाही पचरंगा मिक्स अचार',
    shortDescription: 'Grand medley of crunchy seasonal carrots, raw mangoes, lemons, cauliflower florets, and fragrant green chillies.',
    description: 'Why pick one when you can taste them all? Our Panchranga Mix Achaar brings together crisp winter red carrots, juicy tart lemons, raw green mango chunks, firm lotus stem (kamal kakdi), and spicy green chillies. Tossed in sun-ripened spices and pungent mustard oil, every spoonful gives you diverse textures—crunchy, tender, tangy, and boldly spiced.',
    category: 'mixed',
    spiceLevel: 'Medium',
    rating: 4.7,
    reviewsCount: 156,
    price: 199,
    originalPrice: 239,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 199, originalPrice: 239, inStock: true },
      { weight: '500g', price: 369, originalPrice: 429, inStock: true },
      { weight: '1kg', price: 689, originalPrice: 819, inStock: true },
    ],
    images: [
      '/images/mixed-pickle-container.jpg',
    ],
    badge: 'Crowd Favorite',
    isBestseller: true,
    ingredients: [
      'Raw Green Mangoes',
      'Kagzi Lemons',
      'Crunchy Delhi Carrots (Gajar)',
      'Green Chillies (Hari Mirch)',
      'Lotus Stem (Kamal Kakdi)',
      'Cold-Pressed Mustard Oil',
      'Fenugreek & Fennel Seeds',
      'Mustard Seeds',
      'Turmeric & Kashmiri Red Chilli',
      'Natural Rock Salt'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '38 kcal',
      protein: '0.5g',
      carbs: '2.5g',
      fat: '3.1g',
      sodium: '295mg'
    },
    storage: 'Store in a dry ceramic barni or glass jar. Ensure contents remain coated with aromatic mustard oil.',
    shelfLife: '12 Months from Packing Date',
    oilType: '100% Pure Kachi Ghani Mustard Oil',
    pairings: [
      { name: 'Paneer Kulcha', desc: 'Street food perfection paired with crunchy spiced pickle.' },
      { name: 'Rajma Chawal', desc: 'Creamy North Indian kidney bean curry with that vital tangy crunch.' },
      { name: 'Methi Thepla', desc: 'Travel friendly pack that stays fresh for days.' },
      { name: 'Tawa Pulao', desc: 'Spicy Mumbai street rice made complete.' }
    ]
  },
  {
    id: 'ag-launji-05',
    slug: 'aam-launji',
    name: 'Aam Launji',
    hindiName: 'राजस्थानी खट्टी-मीठी आम लौंजी',
    shortDescription: 'Traditional sweet and tangy Rajasthani raw mango chutney simmered with pure desi jaggery (gud), kalonji, and saunf.',
    description: 'An authentic royal Marwari delicacy. Chopped raw green mangoes are gently tempered with fennel (saunf), nigella seeds (kalonji), and cumin, then slow-simmered in organic dark sugarcane jaggery (desi gud) with a pinch of rock salt and Kashmiri mirch. Luscious, sweet, sour, and mildly spiced—loved by children and elders alike.',
    category: 'mango',
    spiceLevel: 'Mild',
    rating: 4.9,
    reviewsCount: 118,
    price: 219,
    originalPrice: 269,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 219, originalPrice: 269, inStock: true },
      { weight: '500g', price: 399, originalPrice: 489, inStock: true },
      { weight: '1kg', price: 749, originalPrice: 899, inStock: true },
    ],
    images: [
      '/images/mango-launji-container.jpg',
    ],
    badge: 'Sweet & Tangy',
    ingredients: [
      'Raw Green Mangoes (Kairi)',
      'Organic Desi Jaggery (Gud)',
      'Fennel Seeds (Saunf)',
      'Nigella Seeds (Kalonji)',
      'Roasted Cumin Powder',
      'Sendha Namak (Rock Salt)',
      'Kashmiri Degi Mirch',
      'Dry Ginger Powder (Saunth)'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '52 kcal',
      protein: '0.2g',
      carbs: '12.4g',
      fat: '0.2g',
      sodium: '110mg'
    },
    storage: 'Can be stored at room temperature or refrigerated. Use a dry spoon.',
    shelfLife: '9 Months from Manufacturing Date',
    oilType: 'Oil-Free (Jaggery-Infused Slow Reduction)',
    pairings: [
      { name: 'Bedmi Poori', desc: 'Crispy urad dal poori dipped into sweet tangy launji.' },
      { name: 'Plain Paratha', desc: 'Tastes like sweet childhood mornings before school.' },
      { name: 'Mathri & Khakhra', desc: 'The ultimate tea-time spread.' }
    ]
  },
  {
    id: 'ag-lahsun-06',
    slug: 'lahsun-ka-achaar',
    name: 'Lahsun Ka Achaar',
    hindiName: 'देसी तीखा लहसुन का अचार',
    shortDescription: 'Whole plump cloves of organic Desi garlic steeped in rich mustard oil, cracked coriander, and flaming Kashmiri deghi mirch.',
    description: 'For genuine garlic lovers who crave intense depth of flavour. We hand-peel small-clove Desi garlic, known for its high allicin content and medicinal punch. The cloves are lightly sauteed in cold-pressed mustard oil, then mixed with freshly cracked fenugreek, coriander, amchur, and fiery chillies. The cloves become tender like butter while retaining their rich pungent soul.',
    category: 'special',
    spiceLevel: 'Spicy',
    rating: 4.8,
    reviewsCount: 135,
    price: 229,
    originalPrice: 279,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 229, originalPrice: 279, inStock: true },
      { weight: '500g', price: 419, originalPrice: 499, inStock: true },
      { weight: '1kg', price: 799, originalPrice: 949, inStock: true },
    ],
    images: [
      '/images/garlic-pickle-container.jpg',
    ],
    badge: 'Ayurvedic Immunity',
    ingredients: [
      'Organic Desi Garlic Cloves (Peeled)',
      'Cold-Pressed Kachi Ghani Mustard Oil',
      'Crushed Coriander Seeds',
      'Yellow Mustard Seeds',
      'Amchur Powder',
      'Kashmiri Red Chilli',
      'Turmeric',
      'Rock Salt & Hing'
    ],
    nutrition: {
      servingSize: '15g (3-4 Cloves)',
      calories: '48 kcal',
      protein: '0.8g',
      carbs: '2.8g',
      fat: '3.9g',
      sodium: '280mg'
    },
    storage: 'Store in dry ceramic or glass jar. Ensure garlic cloves stay coated in mustard oil.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Cold-Pressed Mustard Oil',
    pairings: [
      { name: 'Jowar / Bajra Bhakri', desc: 'Rustic village style dining with raw onions and garlic achar.' },
      { name: 'Steamed Rice & Dal Tadka', desc: 'A spoonful on the side turns ordinary dinner into magic.' },
      { name: 'Roti with White Butter', desc: 'Rich, warming, and comforting in all seasons.' }
    ]
  },
  {
    id: 'ag-greenchilli-07',
    slug: 'green-chilli-pickle',
    name: 'Green Chilli Pickle',
    hindiName: 'चटपटा हरी मिर्च का कुट्टा / अचार',
    shortDescription: 'Crunchy slit green chillies tossed with stone-ground yellow mustard, tangy amchur, and cold-pressed mustard oil.',
    description: 'Fresh, fiery, and tantalizingly tangy. Hand-selected medium-heat green chillies are washed, pat-dried, slit, and hand-tossed with coarsely crushed yellow sarson, lemon juice, turmeric, and mustard oil. It retains a vibrant green crunch and gives that instant fresh kick that brings any Indian thali alive.',
    category: 'chilli',
    spiceLevel: 'Extra Spicy',
    rating: 4.7,
    reviewsCount: 98,
    price: 179,
    originalPrice: 209,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 179, originalPrice: 209, inStock: true },
      { weight: '500g', price: 329, originalPrice: 389, inStock: true },
      { weight: '1kg', price: 619, originalPrice: 729, inStock: true },
    ],
    images: [
      '/images/green-chilli-container.jpg',
    ],
    badge: 'Instant Favorite',
    ingredients: [
      'Crisp Fresh Green Chillies (Hari Mirch)',
      'Yellow Mustard Seeds (Pili Rai)',
      'Fresh Lemon Juice',
      'Kachi Ghani Mustard Oil',
      'Turmeric Powder',
      'Fenugreek Seeds',
      'Sendha Salt'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '34 kcal',
      protein: '0.4g',
      carbs: '1.9g',
      fat: '2.8g',
      sodium: '270mg'
    },
    storage: 'Best kept in a cool pantry or refrigerator to retain natural crisp green texture.',
    shelfLife: '6 Months from Packing Date',
    oilType: '100% Pure Cold-Pressed Mustard Oil',
    pairings: [
      { name: 'Dhokla & Khandvi', desc: 'Zesty accompaniment to light Gujarati evening snacks.' },
      { name: 'Masala Dosa', desc: 'For those who want extra fiery punch with sambar.' },
      { name: 'Stuffed Paratha', desc: 'Brings instant sizzle to paneer and gobi parathas.' }
    ]
  },
  {
    id: 'ag-punjabi-08',
    slug: 'traditional-punjabi-achaar',
    name: 'Traditional Punjabi Achaar',
    hindiName: 'अमृतसरी पारंपारिक पंजाबी अचार',
    shortDescription: 'Heritage North Indian village recipe featuring raw mango, fresh ginger juliennes, garlic, and wild roasted spices.',
    description: 'Crafted according to the heirloom recipes of Amritsari grandmothers. Thick unpeeled raw mango chunks are joined by julienned ginger, garlic pods, and whole slit green chillies, drowned in unrefined dark mustard oil and roasted whole panch-phoran spices. Hearty, robust, pungent, and intensely satisfying.',
    category: 'special',
    spiceLevel: 'Spicy',
    rating: 4.9,
    reviewsCount: 148,
    price: 249,
    originalPrice: 299,
    defaultWeight: '250g',
    weights: [
      { weight: '250g', price: 249, originalPrice: 299, inStock: true },
      { weight: '500g', price: 469, originalPrice: 549, inStock: true },
      { weight: '1kg', price: 879, originalPrice: 999, inStock: true },
    ],
    images: [
      '/images/punjabi-pickle-container.jpg',
    ],
    badge: 'Heirloom Recipe',
    ingredients: [
      'Raw Green Mangoes with Tender Skin',
      'Julienned Fresh Ginger (Adrak)',
      'Desi Garlic Pods',
      'Fresh Green Chillies',
      'Unrefined Mustard Oil (Kachi Ghani)',
      'Coarsely Roasted Fenugreek & Fennel',
      'Yellow & Black Mustard Seeds',
      'Red Chilli Flakes & Turmeric',
      'Black Rock Salt & Asafoetida'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '44 kcal',
      protein: '0.5g',
      carbs: '2.3g',
      fat: '3.7g',
      sodium: '315mg'
    },
    storage: 'Store in earthenware barni or glass jar. Ensure contents stay well under oil.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Unrefined Cold-Pressed Mustard Oil',
    pairings: [
      { name: 'Makki di Roti & Sarson Saag', desc: 'The holy grail of Punjabi winter dining.' },
      { name: 'Amritsari Stuffed Kulcha', desc: 'Pair with spicy chole, sliced onions, and robust pickle.' },
      { name: 'Moong Dal Khichdi with Ghee', desc: 'Comfort in its purest rustic form.' }
    ]
  },
  {
    id: 'ag-combo-09',
    slug: 'pickle-lovers-combo',
    name: 'Pickle Lovers Combo (Quad Pack)',
    hindiName: 'अचार प्रेमी कॉम्बो (४ जार सेट)',
    shortDescription: 'Our 4 most celebrated jars in one artisanal gift box: Aam Ka Achaar, Nimbu Ka Achaar, Mirchi Ka Achaar & Mix Achaar.',
    description: 'The ultimate culinary gift for your dining table or loved ones. The Pickle Lovers Combo brings together four handcrafted heritage recipes in 250g jars: Banarasi Aam Ka Achaar, Sun-Cured Nimbu Ka Achaar, Stuffed Banarasi Lal Mirchi, and Panchranga Mix Achaar. Packed in a beautiful festive Kraft gift box with a traditional wooden pickle spoon.',
    category: 'combo',
    spiceLevel: 'Medium',
    rating: 5.0,
    reviewsCount: 236,
    price: 699,
    originalPrice: 796,
    defaultWeight: '4 x 250g (1kg Total)',
    weights: [
      { weight: '4 x 250g (1kg Total)', price: 699, originalPrice: 796, inStock: true },
      { weight: '4 x 500g (2kg Total)', price: 1299, originalPrice: 1549, inStock: true }
    ],
    images: [
      '/images/combo-pickle-containers.jpg',
    ],
    badge: 'Save ₹97 (Best Value)',
    ingredients: [
      '1x Aam Ka Achaar (250g)',
      '1x Nimbu Ka Achaar (250g)',
      '1x Mirchi Ka Achaar (250g)',
      '1x Mix Achaar (250g)',
      'Complimentary Handcrafted Neem Wood Spoon'
    ],
    nutrition: {
      servingSize: '15g Average',
      calories: '38 kcal',
      protein: '0.4g',
      carbs: '2.4g',
      fat: '2.8g',
      sodium: '300mg'
    },
    storage: 'Store all jars in a cool, dry place. Keep oil layers intact.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: 'Pure Kachi Ghani Mustard Oil & Zero-Oil Sun Cure',
    pairings: [
      { name: 'Grand Indian Festive Thali', desc: 'Let your guests choose their favourite flavour note.' },
      { name: 'Family Sunday Brunch', desc: 'A variety jar for every family member’s personal preference.' },
      { name: 'Housewarming & Wedding Gifts', desc: 'A thoughtful, authentic gift that everyone cherishes.' }
    ]
  }
];
