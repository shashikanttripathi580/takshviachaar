import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'ta-dates-01',
    slug: 'dates-achaar',
    name: 'Dates Achaar',
    hindiName: 'शाही खजूर का अचार',
    shortDescription: 'Exquisite royal dates pickle made with sweet Arabian dates, ginger juliennes, lemon juice, roasted cumin, and black rock salt.',
    description: 'A royal delicacy that surprises and delights the Indian palate. Whole pitted Arabian dates are slowly simmered with fresh ginger, zesty lemon juice, sendha namak, roasted jeera, fennel seeds, and mild Kashmiri spices. Delivering a velvety sweet, tangy, and mildly spiced burst in every bite. Handcrafted in small batches with zero artificial additives.',
    category: 'special',
    spiceLevel: 'Medium',
    rating: 5.0,
    reviewsCount: 164,
    price: 65,
    originalPrice: 79,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 65, originalPrice: 79, inStock: true },
      { weight: '325gm', price: 149, originalPrice: 179, inStock: true }
    ],
    images: [
      '/images/dates-pickle-container.jpg'
    ],
    badge: 'Royal Delicacy',
    isBestseller: true,
    ingredients: [
      'Pitted Arabian Dates (Khajoor)',
      'Fresh Lemon Juice',
      'Ginger Juliennes (Adrak)',
      'Black Rock Salt (Kala Namak)',
      'Roasted Cumin Powder (Jeera)',
      'Fennel Seeds (Saunf)',
      'Kashmiri Red Chilli',
      'Asafoetida (Hing)'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '48 kcal',
      protein: '0.5g',
      carbs: '11.8g',
      fat: '0.1g',
      sodium: '140mg'
    },
    storage: 'Store in a cool, dry place. Keep container tightly sealed with a dry spoon. Does not require refrigeration.',
    shelfLife: '12 Months from Packing Date',
    oilType: 'Oil-Free (Lemon-Infused Natural Reduction)',
    pairings: [
      { name: 'Khakhra & Thepla', desc: 'The sweet-sour dates pair divinely with spiced Gujarati flatbreads.' },
      { name: 'Stuffed Paratha', desc: 'Adds royal richness to aloo, paneer, and gobhi parathas.' },
      { name: 'Evening Mathri', desc: 'A delectable dip for crispy evening teatime snacks.' }
    ]
  },
  {
    id: 'ta-lahsun-02',
    slug: 'lahsun-ka-achaar',
    name: 'Lahsun Ka Achaar',
    hindiName: 'देसी तीखा लहसुन का अचार',
    shortDescription: 'Whole plump cloves of organic Desi garlic steeped in rich mustard oil, cracked coriander, and flaming Kashmiri deghi mirch.',
    description: 'For genuine garlic lovers who crave intense depth of flavour. We hand-peel small-clove Desi garlic, known for its high allicin content and medicinal punch. The cloves are lightly tempered in cold-pressed mustard oil, then mixed with freshly cracked fenugreek, coriander, amchur, and fiery chillies. The cloves become tender like butter while retaining their rich pungent soul.',
    category: 'special',
    spiceLevel: 'Spicy',
    rating: 4.9,
    reviewsCount: 178,
    price: 52,
    originalPrice: 65,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 52, originalPrice: 65, inStock: true },
      { weight: '325gm', price: 119, originalPrice: 145, inStock: true }
    ],
    images: [
      '/images/garlic-pickle-container.jpg'
    ],
    badge: 'Ayurvedic Immunity',
    isBestseller: true,
    ingredients: [
      'Organic Desi Garlic Cloves (Peeled)',
      'Cold-Pressed Kachi Ghani Mustard Oil',
      'Crushed Coriander Seeds',
      'Yellow Mustard Seeds (Pili Rai)',
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
    storage: 'Store in dry airtight container. Ensure garlic cloves stay coated in pure mustard oil.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Cold-Pressed Mustard Oil',
    pairings: [
      { name: 'Jowar / Bajra Bhakri', desc: 'Rustic village style dining with raw onions and garlic achar.' },
      { name: 'Steamed Rice & Dal Tadka', desc: 'A spoonful on the side turns ordinary dinner into magic.' },
      { name: 'Roti with White Butter', desc: 'Rich, warming, and comforting in all seasons.' }
    ]
  },
  {
    id: 'ta-lemon-mitha-03',
    slug: 'lemon-mitha-achaar',
    name: 'Lemon Mitha Achaar',
    hindiName: 'धूप में पका खट्टा-मीठा नींबू अचार',
    shortDescription: 'Sun-cured thin-skinned Kagzi lemons sweetened with unrefined jaggery, black rock salt, and digestive ajwain. 100% oil-free.',
    description: 'Crafted without a single drop of oil, our Lemon Mitha Achaar is cured under the golden sun for 21 days. Juicy, thin-skinned Kagzi lemons from Maharashtra orchards are cut and massaged with black rock salt, digestive ajwain, roasted cumin, and unrefined sweet syrup. The peel turns melt-in-the-mouth soft and deliciously syrupy.',
    category: 'lemon',
    spiceLevel: 'Mild',
    rating: 4.8,
    reviewsCount: 152,
    price: 48,
    originalPrice: 59,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 48, originalPrice: 59, inStock: true },
      { weight: '325gm', price: 109, originalPrice: 135, inStock: true }
    ],
    images: [
      '/images/lemon-mitha-container.jpg'
    ],
    badge: 'Zero Oil / Sweet & Tangy',
    isBestseller: true,
    ingredients: [
      'Fresh Thin-Skinned Kagzi Lemons',
      'Desi Jaggery / Unrefined Sugar',
      'Kala Namak (Black Salt)',
      'Sendha Namak (Rock Salt)',
      'Roasted Ajwain (Carom Seeds)',
      'Cracked Black Pepper',
      'Roasted Jeera Powder'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '28 kcal',
      protein: '0.2g',
      carbs: '6.4g',
      fat: '0.1g',
      sodium: '220mg'
    },
    storage: 'Store in an airtight container. Does not require refrigeration. Grows richer with age.',
    shelfLife: '18 Months (gets better with time)',
    oilType: '100% Oil-Free (Traditional Sun-Cured Jaggery Nectar)',
    pairings: [
      { name: 'Moong Dal & Chawal', desc: 'Mild steamed rice and yellow dal get an instant sweet-tangy boost.' },
      { name: 'Plain Thepla', desc: 'Travel friendly Gujarati staple that pairs divinely with sweet nimbu.' },
      { name: 'Ajwain Puri', desc: 'Crispy puffed puris dipped into sweet tangy lemon relish.' }
    ]
  },
  {
    id: 'ta-lemon-khatta-04',
    slug: 'lemon-khatta-achaar',
    name: 'Lemon Khatta Achaar',
    hindiName: 'पारंपारिक तीखा खट्टा नींबू अचार',
    shortDescription: 'Traditional sun-aged Kagzi lemons marinated with rock salt, yellow mustard, roasted fenugreek, and crushed chillies. Zero-oil.',
    description: 'A classic Indian digestive power-relish made the heirloom way. Chunky Kagzi lemon quarters are cured in Sendha Namak (Himalayan rock salt), yellow mustard seeds (rai), fenugreek, and crushed green chillies. Zero chemical preservatives, zero oil, packed with natural citrus pectin and therapeutic digestive benefits.',
    category: 'lemon',
    spiceLevel: 'Medium',
    rating: 4.8,
    reviewsCount: 139,
    price: 44,
    originalPrice: 55,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 44, originalPrice: 55, inStock: true },
      { weight: '325gm', price: 99, originalPrice: 125, inStock: true }
    ],
    images: [
      '/images/lemon-khatta-container.jpg'
    ],
    badge: 'Zero Oil / Classic Sour',
    isBestseller: false,
    ingredients: [
      'Fresh Thin-Skinned Kagzi Lemons',
      'Sendha Namak (Rock Salt)',
      'Yellow Mustard Seeds (Pili Rai)',
      'Green Chillies (Hari Mirch)',
      'Roasted Fenugreek (Methi Dana)',
      'Turmeric Powder (Haldi)',
      'Compounded Hing'
    ],
    nutrition: {
      servingSize: '15g (1 Tbsp)',
      calories: '18 kcal',
      protein: '0.2g',
      carbs: '3.8g',
      fat: '0.1g',
      sodium: '290mg'
    },
    storage: 'Keep in an airtight container. Use a dry spoon. Sunlight aging makes peel melt-in-mouth tender.',
    shelfLife: '18 Months from Manufacturing Date',
    oilType: '100% Oil-Free (Pure Lemon Juice & Salt Cured)',
    pairings: [
      { name: 'Light Khichdi', desc: 'Gentle on the stomach, soothing digestive pairing with warm ghee.' },
      { name: 'Curd Rice', desc: 'The quintessential South Indian pairing with sharp tangy lemon.' },
      { name: 'Poha & Upma', desc: 'Zesty accompaniment for healthy breakfast bowls.' }
    ]
  },
  {
    id: 'ta-aam-05',
    slug: 'aam-ka-achaar',
    name: 'Aam Ka Achaar',
    hindiName: 'पारंपारिक बनारसी आम का अचार',
    shortDescription: 'Handcrafted with raw Ramkela mangoes, cold-pressed mustard oil, and grandma’s secret roasted masala blend.',
    description: 'Our iconic Banarasi style Aam Ka Achaar is made the age-old way. Hand-plucked tart Ramkela raw mangoes are naturally sun-dried on cotton sheets, marinated in pure Kachi Ghani cold-pressed mustard oil, and slow-aged with hand-pounded fenugreek (methi), fennel (saunf), nigella seeds (kalonji), and fragrant hing.',
    category: 'mango',
    spiceLevel: 'Spicy',
    rating: 4.9,
    reviewsCount: 210,
    price: 49,
    originalPrice: 59,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 49, originalPrice: 59, inStock: true },
      { weight: '325gm', price: 115, originalPrice: 139, inStock: true }
    ],
    images: [
      '/images/mango-pickle-container.jpg'
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
    storage: 'Store in a cool, dry place. Ensure the pickle remains submerged under a thin layer of mustard oil.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Wood-Pressed Mustard Oil',
    pairings: [
      { name: 'Aloo Paratha', desc: 'The quintessential breakfast match with homemade white butter.' },
      { name: 'Dal Khichdi', desc: 'Adds that fiery, tangy punch to comforting hot khichdi.' },
      { name: 'Poori Bhaji', desc: 'Sunday family brunches are incomplete without this punchy companion.' }
    ]
  },
  {
    id: 'ta-mirchi-06',
    slug: 'mirchi-ka-achaar',
    name: 'Mirchi Ka Achaar',
    hindiName: 'बनारसी भरवा लाल मिर्च का अचार',
    shortDescription: 'Plump Banarasi red chillies painstakingly stuffed with hand-ground roasted spices and cold-pressed mustard oil.',
    description: 'The crowning jewel of Uttar Pradesh’s pickling heritage. Large, fleshy winter red chillies are carefully slit, cleaned, and hand-stuffed with a secret masala mixture of coarsely cracked yellow rai, aromatic saunf, coriander, amchur (dry mango powder), and pungent mustard oil.',
    category: 'chilli',
    spiceLevel: 'Extra Spicy',
    rating: 4.9,
    reviewsCount: 182,
    price: 49,
    originalPrice: 59,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 49, originalPrice: 59, inStock: true },
      { weight: '325gm', price: 115, originalPrice: 139, inStock: true }
    ],
    images: [
      '/images/red-chilli-container.jpg'
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
    storage: 'Keep chillies soaked under mustard oil. Use a dry spoon or fork.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: '100% Pure Cold-Pressed Mustard Oil',
    pairings: [
      { name: 'Sattu Paratha', desc: 'Bihari classic match made in culinary heaven.' },
      { name: 'Ghee-Roast Roti', desc: 'Slather hot rotis with melted cow ghee and a small piece of mirchi.' },
      { name: 'Arhar Dal Rice', desc: 'Elevates everyday yellow pigeon-pea dal to feast level.' }
    ]
  },
  {
    id: 'ta-mix-07',
    slug: 'mix-achaar',
    name: 'Mix Achaar',
    hindiName: 'शाही पचरंगा मिक्स अचार',
    shortDescription: 'Grand medley of crunchy seasonal carrots, raw mangoes, lemons, cauliflower florets, and fragrant green chillies.',
    description: 'Why pick one when you can taste them all? Our Panchranga Mix Achaar brings together crisp winter red carrots, juicy tart lemons, raw green mango chunks, firm lotus stem (kamal kakdi), and spicy green chillies. Tossed in sun-ripened spices and pungent mustard oil.',
    category: 'mixed',
    spiceLevel: 'Medium',
    rating: 4.7,
    reviewsCount: 168,
    price: 49,
    originalPrice: 59,
    defaultWeight: '125gm',
    weights: [
      { weight: '125gm', price: 49, originalPrice: 59, inStock: true },
      { weight: '325gm', price: 115, originalPrice: 139, inStock: true }
    ],
    images: [
      '/images/mixed-pickle-container.jpg'
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
    storage: 'Store in a dry airtight container. Ensure contents remain coated with aromatic mustard oil.',
    shelfLife: '12 Months from Packing Date',
    oilType: '100% Pure Kachi Ghani Mustard Oil',
    pairings: [
      { name: 'Paneer Kulcha', desc: 'Street food perfection paired with crunchy spiced pickle.' },
      { name: 'Rajma Chawal', desc: 'Creamy North Indian kidney bean curry with that vital tangy crunch.' },
      { name: 'Methi Thepla', desc: 'Travel friendly pack that stays fresh for days.' }
    ]
  },
  {
    id: 'ta-combo-08',
    slug: 'pickle-lovers-combo',
    name: 'Pickle Lovers Combo Pack',
    hindiName: 'तक्ष्वी अचार प्रेमी कॉम्बो सेट',
    shortDescription: 'Signature trio pack: Lemon Mitha, Lemon Khatta, and Royal Dates Achaar.',
    description: 'The ultimate trio pack celebrating authentic homemade flavors: Sweet Lemon (मीठा नींबू), Tangy Lemon (खट्टा नींबू), and Royal Dates Achaar (शाही खजूर). Handcrafted in small batches and packed in premium food-grade airtight containers. Special combo rate of ₹125 (Original MRP ₹165).',
    category: 'combo',
    spiceLevel: 'Medium',
    rating: 5.0,
    reviewsCount: 260,
    price: 125,
    originalPrice: 165,
    defaultWeight: 'Combo Pack (125gm x 3)',
    weights: [
      { weight: 'Combo Pack (125gm x 3)', price: 125, originalPrice: 165, inStock: true },
      { weight: 'Combo Pack (325gm x 3)', price: 285, originalPrice: 365, inStock: true }
    ],
    images: [
      '/images/combo-pickle-containers.jpg'
    ],
    badge: 'Save ₹40 (Best Value)',
    isBestseller: true,
    ingredients: [
      '1x Lemon Mitha Achaar (125gm)',
      '1x Lemon Khatta Achaar (125gm)',
      '1x Royal Dates Achaar (125gm)',
      'Airtight Tamper-Proof Food-Grade Containers'
    ],
    nutrition: {
      servingSize: '15g Average',
      calories: '38 kcal',
      protein: '0.4g',
      carbs: '2.4g',
      fat: '2.8g',
      sodium: '300mg'
    },
    storage: 'Store all containers in a cool, dry place. Keep seal intact.',
    shelfLife: '12 Months from Manufacturing Date',
    oilType: 'Lemon-Infused Natural Sun Cure & Cold-Pressed Spices',
    pairings: [
      { name: 'Grand Indian Festive Thali', desc: 'Let your guests choose their favourite flavour note.' },
      { name: 'Family Sunday Brunch', desc: 'A variety jar for every family member’s personal preference.' },
      { name: 'Gift for Foodies', desc: 'A thoughtful, authentic gift of true Indian flavors.' }
    ]
  }
];
