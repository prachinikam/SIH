const agentProfiles = {
  small: [
    { name: 'Raj Agro Traders', match: '96%', distance: '18 km', trust: '4.8', note: 'Interested in Tomato • 500kg-2 tons', action: 'Check Now' },
    { name: 'Shree Agro Traders', match: '92%', distance: '12 km', trust: '4.7', note: 'Tomato and Onion buyer • 1-5 tons', action: 'Check Now' },
    { name: 'Satara FoodLink', match: '89%', distance: '24 km', trust: '4.6', note: 'Reliable local buyer • 800kg-3 tons', action: 'Check Now' },
    { name: 'Green Valley Market', match: '87%', distance: '32 km', trust: '4.5', note: 'Strong tomato demand • 1-2 tons', action: 'Check Now' }
  ],
  large: [
    { name: 'Nashik Supply Hub', match: '94%', distance: '28 km', trust: '4.9', note: 'Bulk buyer • 5-20 tons', action: 'Check Now' },
    { name: 'Co-op Distribution', match: '91%', distance: '40 km', trust: '4.8', note: 'Large lot supply • 8-15 tons', action: 'Check Now' },
    { name: 'FreshMart', match: '88%', distance: '27 km', trust: '4.6', note: 'Processing buyer • 5-12 tons', action: 'Check Now' },
    { name: 'Agri Connect', match: '85%', distance: '36 km', trust: '4.5', note: 'Bulk and logistics support', action: 'Check Now' }
  ]
};

const translations = {
  en: {
    navHome: 'Home',
    navHow: 'How It Works',
    navMarket: 'Market Insights',
    navSchemes: 'Government Schemes',
    navWeather: 'Weather',
    navAbout: 'About',
    heroTag: 'Smart agriculture marketplace',
    heroTitle: 'Connecting Farmers to the Right Middle Agents',
    heroSubtitle: 'List your produce, discover suitable middle agents, compare opportunities and make smarter selling decisions.',
    heroFarmerBtn: '👨‍🌾 Login as Farmer',
    heroAgentBtn: '🤝 Login as Middle Agent',
    registerLink: 'Register / Create Account',
    marqueeLabel: '📰 Agriculture News',
    howItWorksTag: 'How it works',
    howItWorksTitle: 'Simple, transparent and farmer-first',
    processList: 'List produce',
    processListText: 'Farmer shares crop, quantity, quality and location.',
    processMatch: 'Smart match',
    processMatchText: 'KrishiSetu recommends verified agents by crop, quantity and distance.',
    processNegotiate: 'Negotiate',
    processNegotiateText: 'Compare offers, understand fair price and settle confidently.',
    processDeal: 'Confirm deal',
    processDealText: 'Schedule pickup, arrange transport and close the transaction.',
    schemesTag: 'Support',
    schemesTitle: 'Government Schemes for Farmers',
    schemeTitlePmKisan: 'PM-KISAN',
    schemeDescPmKisan: 'Income support to eligible small and marginal farmers.',
    schemeMetaPmKisan: 'Eligibility: registered farmer',
    schemeTitleFasal: 'PM Fasal Bima Yojana',
    schemeDescFasal: 'Crop insurance for losses caused by natural calamities.',
    schemeMetaFasal: 'Eligibility: insured crop',
    schemeTitleIrrigation: 'PM Krishi Sinchai Yojana',
    schemeDescIrrigation: 'Improves irrigation access and water-use efficiency.',
    schemeMetaIrrigation: 'Eligibility: farmer groups',
    schemeTitleSoil: 'Soil Health Card',
    schemeDescSoil: 'Soil test recommendations for better crop quality and yield.',
    schemeMetaSoil: 'Eligibility: all farmers',
    knowMore: 'Know More →',
    weatherTag: 'Weather',
    weatherTitle: 'Weather for Your Farm',
    weatherSearchPlaceholder: 'Search city, district or village',
    weatherSearchBtn: 'Search',
    agriUpdateTitle: 'Agri Update',
    smartAdviceLabel: '🌾 Smart Advice',
    smartAdviceText: 'Best harvest window is next 48 hours',
    waterSavingLabel: '💧 Water Saving',
    waterSavingText: 'Use drip irrigation if rainfall is below 25%',
    marketPulseLabel: '📦 Market Pulse',
    marketPulseText: 'Tomato demand remains strong in western Maharashtra',
    farmerAlertsTitle: 'Farmer Alerts',
    transportLabel: '🚜 Transport',
    transportText: 'Three local trucks available for same-day dispatch',
    agentDemandLabel: '🤝 Agent Demand',
    agentDemandText: 'Verified agents are actively buying onion and tomato',
    noticeLabel: '📣 Notice',
    noticeText: 'Government subsidy registration closes this week',
    marketInsightsTag: 'Market Insights',
    marketInsightsTitle: 'Current crop demand and price trends',
    demandHigh: 'Demand: High',
    demandModerate: 'Demand: Moderate',
    demandRising: 'Demand: Rising',
    demandStable: 'Demand: Stable',
    loginNameLabel: 'Full Name',
    loginPhoneLabel: 'Mobile Number',
    loginAddressLabel: 'Address',
    loginPasswordLabel: 'Password'
  },
  hi: {
    navHome: 'होम',
    navHow: 'यह काम कैसे करता है',
    navMarket: 'बाजार जानकारी',
    navSchemes: 'सरकारी योजनाएँ',
    navWeather: 'मौसम',
    navAbout: 'हमारे बारे में',
    heroTag: 'स्मार्ट कृषि बाज़ार',
    heroTitle: 'फसलों के लिए सही मध्यस्थ से जोड़ें',
    heroSubtitle: 'अपना उत्पाद सूचीबद्ध करें, सही मध्यस्थ खोजें, अवसर तुलना करें और बेहतर बिक्री निर्णय लें।',
    heroFarmerBtn: '👨‍🌾 किसान लॉगिन',
    heroAgentBtn: '🤝 मध्यस्थ लॉगिन',
    registerLink: 'रजिस्टर / अकाउंट बनाएं',
    marqueeLabel: '📰 कृषि समाचार',
    howItWorksTag: 'यह कैसे काम करता है',
    howItWorksTitle: 'सादा, पारदर्शी और किसान-केन्द्रित',
    processList: 'उत्पाद सूची',
    processListText: 'किसान फसल, मात्रा, गुणवत्ता और स्थान साझा करता है।',
    processMatch: 'स्मार्ट मैच',
    processMatchText: 'क्रिशिसेटु फसल, मात्रा और दूरी के आधार पर सत्यापित मध्यस्थ सुझाता है।',
    processNegotiate: 'बोल-चाल',
    processNegotiateText: 'ऑफर तुलना करें, उचित मूल्य समझें और आत्मविश्वास से सौदा करें।',
    processDeal: 'सौदा पुष्टि',
    processDealText: 'पिकअप शेड्यूल करें, परिवहन व्यवस्थित करें और लेन-देन पूरा करें।',
    schemesTag: 'सहायता',
    schemesTitle: 'किसानों के लिए सरकारी योजनाएँ',
    schemeTitlePmKisan: 'पीएम-किसान',
    schemeDescPmKisan: 'योग्य छोटे और सीमांत किसानों को आय सहायता।',
    schemeMetaPmKisan: 'योग्यता: पंजीकृत किसान',
    schemeTitleFasal: 'पीएम फसल बीमा योजना',
    schemeDescFasal: 'प्राकृतिक आपदाओं से होने वाली हानियों के लिए फसल बीमा।',
    schemeMetaFasal: 'योग्यता: बीमित फसल',
    schemeTitleIrrigation: 'पीएम कृषि सिंचाई योजना',
    schemeDescIrrigation: 'सिंचाई सुविधा और जल उपयोग दक्षता में सुधार।',
    schemeMetaIrrigation: 'योग्यता: किसान समूह',
    schemeTitleSoil: 'मृदा स्वास्थ्य कार्ड',
    schemeDescSoil: 'बेहतर फसल गुणवत्ता और उपज के लिए मिट्टी परीक्षण की सिफारिशें।',
    schemeMetaSoil: 'योग्यता: सभी किसान',
    knowMore: 'और जानें →',
    weatherTag: 'मौसम',
    weatherTitle: 'आपकी भूमि का मौसम',
    weatherSearchPlaceholder: 'शहर, जिला या गाँव खोजें',
    weatherSearchBtn: 'खोजें',
    agriUpdateTitle: 'कृषि अपडेट',
    smartAdviceLabel: '🌾 स्मार्ट सलाह',
    smartAdviceText: 'सर्वोत्तम कटाई की अवधि अगले 48 घंटे है',
    waterSavingLabel: '💧 जल बचत',
    waterSavingText: 'यदि बारिश 25% से कम हो तो ड्रिप सिंचाई का उपयोग करें',
    marketPulseLabel: '📦 बाजार गति',
    marketPulseText: 'पश्चिमी महाराष्ट्र में टमाटर की मांग मजबूत है',
    farmerAlertsTitle: 'किसान अलर्ट',
    transportLabel: '🚜 परिवहन',
    transportText: 'सामने 3 स्थानीय ट्रक उसी दिन भेजने के लिए उपलब्ध हैं',
    agentDemandLabel: '🤝 एजेंट मांग',
    agentDemandText: 'सत्यापित एजेंट सक्रिय रूप से प्याज और टमाटर खरीद रहे हैं',
    noticeLabel: '📣 सूचना',
    noticeText: 'सरकारी सब्सिडी पंजीकरण इस सप्ताह बंद होगा',
    marketInsightsTag: 'बाजार जानकारी',
    marketInsightsTitle: 'मौजूदा फसल मांग और मूल्य रुझान',
    demandHigh: 'मांग: अधिक',
    demandModerate: 'मांग: मध्यम',
    demandRising: 'मांग: बढ़ रही',
    demandStable: 'मांग: स्थिर',
    loginNameLabel: 'पूरा नाम',
    loginPhoneLabel: 'मोबाइल नंबर',
    loginAddressLabel: 'पता',
    loginPasswordLabel: 'पासवर्ड'
  },
  mr: {
    navHome: 'मुख्यपृष्ठ',
    navHow: 'हे कसे कार्य करते',
    navMarket: 'बाजार माहिती',
    navSchemes: 'सरकारी योजना',
    navWeather: 'हवामान',
    navAbout: 'आमच्या बद्दल',
    heroTag: 'स्मार्ट शेती बाजार',
    heroTitle: 'शेतकऱ्यांना योग्य मध्यस्थांशी जोडा',
    heroSubtitle: 'आपले पीक सूचीबद्ध करा, योग्य मध्यस्थ शोधा, संधी तुलना करा आणि चांगल्या विक्री निर्णय घ्या.',
    heroFarmerBtn: '👨‍🌾 शेतकरी लॉगिन',
    heroAgentBtn: '🤝 मध्यस्थ लॉगिन',
    registerLink: 'नोंदणी / खाते तयार करा',
    marqueeLabel: '📰 शेती बातम्या',
    howItWorksTag: 'हे कसे कार्य करते',
    howItWorksTitle: 'सरळ, पारदर्शक आणि शेतकरी-केंद्रित',
    processList: 'उत्पादन नोंदणी',
    processListText: 'शेतकरी फळ, प्रमाण, दर्जा आणि स्थान देतो.',
    processMatch: 'स्मार्ट मेकअप',
    processMatchText: 'क्रिशिसेटू फसल, प्रमाण आणि अंतरावरून सत्यापित मध्यस्थांची शिफारस करते.',
    processNegotiate: 'किंमत चर्चा',
    processNegotiateText: 'ऑफर तुलना करा, योग्य किंमत समजून घ्या आणि विश्वासाने व्यवहार करा.',
    processDeal: 'व्यवहार निश्चित',
    processDealText: 'पिकअप वेळापत्रक करा, वाहतूक व्यवस्था करा आणि व्यवहार पूर्ण करा.',
    schemesTag: 'साहाय्य',
    schemesTitle: 'शेतकऱ्यांसाठी सरकारी योजना',
    schemeTitlePmKisan: 'पीएम-किसान',
    schemeDescPmKisan: 'योग्य लहान व सीमांत शेतकऱ्यांना आय सहाय्य.',
    schemeMetaPmKisan: 'पात्रता: नोंदणीकृत शेतकरी',
    schemeTitleFasal: 'पीएम फसल विमा योजना',
    schemeDescFasal: 'नैसर्गिक आपत्तीमुळे झालेल्या नुकसानासाठी फसल विमा.',
    schemeMetaFasal: 'पात्रता: विमा केलेली फसल',
    schemeTitleIrrigation: 'पीएम कृषी सिंचन योजना',
    schemeDescIrrigation: 'सिंचन सुविधा आणि पाण्याचा वापर कार्यक्षमता सुधारते.',
    schemeMetaIrrigation: 'पात्रता: शेतकरी गट',
    schemeTitleSoil: 'मृदा आरोग्य कार्ड',
    schemeDescSoil: 'चांगल्या फळाच्या दर्जा व उत्पादनासाठी माती परीक्षण शिफारशी.',
    schemeMetaSoil: 'पात्रता: सर्व शेतकरी',
    knowMore: 'अधिक माहिती →',
    weatherTag: 'हवामान',
    weatherTitle: 'तुमच्या शेतासाठी हवामान',
    weatherSearchPlaceholder: 'शहर, जिल्हा किंवा गाव शोधा',
    weatherSearchBtn: 'शोधा',
    agriUpdateTitle: 'कृषि अपडेट',
    smartAdviceLabel: '🌾 स्मार्ट सल्ला',
    smartAdviceText: 'सर्वोत्कृष्ट कापणी窗口 पुढील 48 तास आहे',
    waterSavingLabel: '💧 पाणी बचत',
    waterSavingText: 'पाऊस 25% पेक्षा कमी असेल तर ड्रिप सिंचन वापरा',
    marketPulseLabel: '📦 बाजार हालचाल',
    marketPulseText: 'पश्चिम महाराष्ट्रात टोमॅटोची मागणी मजबूत आहे',
    farmerAlertsTitle: 'शेतकरी सूचना',
    transportLabel: '🚜 वाहतूक',
    transportText: 'तीन स्थानिक ट्रक आजच पाठवण्यासाठी उपलब्ध आहेत',
    agentDemandLabel: '🤝 एजंट मागणी',
    agentDemandText: 'सत्यापित एजंट सक्रियपणे कांदा आणि टोमॅटो खरेदी करत आहेत',
    noticeLabel: '📣 सूचना',
    noticeText: 'सरकारी सबसिडी नोंदणी या आठवड्यात बंद होते',
    marketInsightsTag: 'बाजार माहिती',
    marketInsightsTitle: 'सध्याची फसल मागणी आणि भाव ट्रेंड',
    demandHigh: 'मागणी: जास्त',
    demandModerate: 'मागणी: मध्यम',
    demandRising: 'मागणी: वाढत आहे',
    demandStable: 'मागणी: स्थिर',
    loginNameLabel: 'पूर्ण नाव',
    loginPhoneLabel: 'मोबाईल क्रमांक',
    loginAddressLabel: 'पत्ता',
    loginPasswordLabel: 'पासवर्ड'
  }
};

const weatherData = {
  satara: { city: 'Satara, Maharashtra', temp: 28, humidity: 65, wind: 12, rain: 25, condition: 'Partly Cloudy', coords: [17.6853, 74.0067] },
  pune: { city: 'Pune, Maharashtra', temp: 30, humidity: 58, wind: 14, rain: 18, condition: 'Sunny', coords: [18.5204, 73.8567] },
  nashik: { city: 'Nashik, Maharashtra', temp: 29, humidity: 62, wind: 11, rain: 30, condition: 'Cloudy', coords: [20.0110, 73.7906] },
  solapur: { city: 'Solapur, Maharashtra', temp: 33, humidity: 49, wind: 16, rain: 12, condition: 'Warm', coords: [17.6599, 75.9064] },
  ahmednagar: { city: 'Ahmednagar, Maharashtra', temp: 31, humidity: 56, wind: 13, rain: 21, condition: 'Clear', coords: [19.0952, 74.7496] }
};

const nearbyAgents = [
  { name: 'Raj Agro Traders', coords: [17.6834, 74.0134] },
  { name: 'Shree Agro Traders', coords: [17.7002, 73.9909] },
  { name: 'Green Valley Market', coords: [17.6712, 74.0235] },
  { name: 'Nashik Supply Hub', coords: [20.0213, 73.7716] },
  { name: 'Co-op Distribution', coords: [18.5317, 73.8503] },
  { name: 'FreshMart', coords: [19.1095, 74.7371] }
];

const cropPriceMap = {
  Tomato: { min: 22, max: 25, best: 24 },
  Onion: { min: 24, max: 29, best: 28 },
  Potato: { min: 16, max: 20, best: 18 },
  Wheat: { min: 20, max: 24, best: 22 },
  Rice: { min: 19, max: 23, best: 21 },
  Sugarcane: { min: 15, max: 18, best: 16 },
  Grapes: { min: 28, max: 35, best: 32 },
  Maize: { min: 18, max: 22, best: 21 }
};

const state = {
  role: 'farmer',
  scale: 'small',
  lang: 'en',
  user: null
};

const weatherLocation = document.getElementById('weatherLocation');
const weatherTemp = document.getElementById('weatherTemp');
const weatherCondition = document.getElementById('weatherCondition');
const weatherHumidity = document.getElementById('weatherHumidity');
const weatherWind = document.getElementById('weatherWind');
const weatherRain = document.getElementById('weatherRain');
const weatherCityInput = document.getElementById('weatherCityInput');
const weatherSearchBtn = document.getElementById('weatherSearchBtn');
let weatherMap;
let weatherMarkerGroup;

const landingPage = document.querySelector('main');
const dashboard = document.getElementById('dashboard');
const farmerPanel = document.querySelector('.farmer-panel');
const agentPanel = document.querySelector('.agent-panel');
const authModal = document.getElementById('authModal');
const agentModal = document.getElementById('agentDetailModal');
const chatbotPanel = document.getElementById('chatbotPanel');
const matchList = document.getElementById('matchList');
const scaleButtons = document.querySelectorAll('.scale-btn');
const navLoginBtn = document.querySelector('.nav-login');
const roleLoginButtons = document.querySelectorAll('.role-login');
const dropdownRoles = document.querySelectorAll('.dropdown-role');
const logoutButtons = document.querySelectorAll('.logout-btn');
const langButtons = document.querySelectorAll('.lang-btn');
const chatbotToggle = document.getElementById('chatbotToggle');

function updateProfileCard() {
  const profileName = document.getElementById('profileName');
  const profileLocation = document.getElementById('profileLocation');
  const profileType = document.getElementById('profileType');
  const profileRating = document.getElementById('profileRating');
  const profileAvatar = document.getElementById('profileAvatar');

  if (!state.user) {
    profileName.textContent = 'Your Profile';
    profileLocation.textContent = '📍 Add your address';
    profileType.textContent = 'Farmer / Agent';
    profileRating.textContent = '⭐ 0.0';
    profileAvatar.textContent = '👨‍🌾';
    return;
  }

  profileName.textContent = state.user.name;
  profileLocation.textContent = `📍 ${state.user.address}`;
  profileType.textContent = state.role === 'farmer' ? 'Small-scale Farmer' : 'Verified Agency';
  profileRating.textContent = state.role === 'farmer' ? '⭐ 4.6' : '⭐ 4.8';
  profileAvatar.textContent = state.role === 'farmer' ? '👨‍🌾' : '🤝';
}

function showLanding() {
  landingPage.classList.remove('hidden');
  dashboard.classList.add('hidden');
  authModal.classList.add('hidden');
  agentModal.classList.add('hidden');
}

function showDashboard(role) {
  landingPage.classList.add('hidden');
  dashboard.classList.remove('hidden');
  farmerPanel.classList.toggle('hidden', role !== 'farmer');
  agentPanel.classList.toggle('hidden', role !== 'agent');
  authModal.classList.add('hidden');
  updateProfileCard();
}

function getSelectedCrop() {
  const cropSelect = document.getElementById('cropSelect');
  return cropSelect ? (cropSelect.value || 'Tomato') : 'Tomato';
}

function getSelectedQuantity() {
  const quantityInput = document.getElementById('cropQuantity');
  const raw = quantityInput ? quantityInput.value : '500 kg';
  const match = raw.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 500;
}

function updateBestPriceAlert() {
  const crop = getSelectedCrop();
  const qty = getSelectedQuantity();
  const priceData = cropPriceMap[crop] || cropPriceMap.Tomato;
  const currentRange = `₹${priceData.min}–₹${priceData.max}/kg`;
  const bestPrice = priceData.best;
  const fairPrice = Math.max(18, Math.round((bestPrice + (qty > 1000 ? 1 : 0)) * 10) / 10);

  document.getElementById('bestPriceFrom').textContent = `Offer received from ${agentProfiles[state.scale][0].name}`;
  document.getElementById('bestPriceValue').textContent = `₹${fairPrice}/kg`;
  document.getElementById('bestPriceRange').textContent = `Current estimated range: ${currentRange}`;

  const offerValue = fairPrice;
  const isBelowRange = offerValue < priceData.min || offerValue > priceData.max;

  document.getElementById('bestPriceMessage').textContent = isBelowRange
    ? `⚠️ This offer is outside the current fair market range for ${crop}.`
    : `✅ This offer is in the current fair market range for ${crop}.`;

  document.getElementById('marketPriceBox').textContent = `₹${bestPrice}/kg`;
  document.getElementById('currentRangeText').textContent = currentRange;
  document.getElementById('bestMatchText').textContent = `${Math.max(4, Math.min(9, Math.round((qty / 250) + 3)))} nearby`;
  document.getElementById('transportText').textContent = `${Math.max(2, Math.min(6, Math.round(qty / 600) + 2))} options`;
}

function renderMatches() {
  const crop = getSelectedCrop();
  const qty = getSelectedQuantity();
  const list = [...agentProfiles[state.scale]]
    .map((agent) => {
      let score = Number(agent.match.replace('%', ''));
      const cropMatchBoost = crop === 'Tomato' && agent.name.includes('Raj') ? 8 : crop === 'Onion' && agent.name.includes('Shree') ? 7 : 5;
      const qtyBoost = qty > 1000 ? 4 : qty > 500 ? 2 : 0;
      const adjustedScore = Math.min(99, score + cropMatchBoost + qtyBoost);
      return { ...agent, matchValue: adjustedScore };
    })
    .sort((a, b) => b.matchValue - a.matchValue);

  const cropLabel = document.getElementById('cropSelect')?.value || 'Tomato';
  document.querySelector('.badge.success').textContent = `${cropLabel} • ${qty} kg • Satara`;

  matchList.innerHTML = list
    .map(
      (agent) => `
        <article class="agent-card">
          <div class="mini-tag">Verified</div>
          <h4>${agent.name}</h4>
          <p>📍 ${agent.distance}</p>
          <p>🍅 ${agent.note}</p>
          <p>💰 Expected Range: ₹${cropPriceMap[crop]?.min || 22}–₹${cropPriceMap[crop]?.max || 25}/kg</p>
          <p>⭐ Rating: ${agent.trust}/5</p>
          <div class="agent-meta">
            <span>Trust Score</span>
            <span class="match-score">${Math.round(agent.matchValue)}%</span>
          </div>
          <button class="check-btn" data-agent="${agent.name}">Check Now</button>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.check-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      openAgentModal(btn.dataset.agent);
    });
  });

  updateBestPriceAlert();
}

function openAuthModal(role) {
  state.role = role;
  const title = role === 'farmer' ? 'Login as Farmer' : 'Login as Middle Agent';
  const subtitle = role === 'farmer' ? 'Continue to your farmer dashboard' : 'Continue to your agency dashboard';

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalSubtitle').textContent = subtitle;
  document.getElementById('loginNameLabel').textContent = role === 'farmer' ? 'Full Name' : 'Owner Name';
  authModal.classList.remove('hidden');
  document.querySelector('.login-menu').classList.remove('open');
}

function closeAuthModal() {
  authModal.classList.add('hidden');
}

function openAgentModal(agentName) {
  agentModal.classList.remove('hidden');
}

function closeAgentModal() {
  agentModal.classList.add('hidden');
}

function toggleChatbot() {
  chatbotPanel.classList.toggle('hidden');
}

function handleChatResponse(message) {
  const lower = message.toLowerCase();
  let response = 'I can help with market prices, farmer matching, schemes, and weather.';

  if (lower.includes('sell') || lower.includes('crop')) {
    response = 'You can add your crop, quantity, location, and quality to the farmer dashboard and find middle agents instantly.';
  } else if (lower.includes('agent') || lower.includes('middle')) {
    response = 'KrishiSetu matches farmers with verified middle agents based on crop, quantity, distance, trust score, and expected price.';
  } else if (lower.includes('price') || lower.includes('market')) {
    response = 'Current estimated tomato price is around ₹22–25/kg in Satara, with increasing demand.';
  } else if (lower.includes('scheme') || lower.includes('gov')) {
    response = 'You can explore PM-KISAN, PM Fasal Bima Yojana, and Soil Health Card from the government schemes section.';
  } else if (lower.includes('weather')) {
    response = 'Today is partly cloudy with 28°C and mild wind. Rain chances are low to moderate.';
  } else if (lower.includes('how')) {
    response = 'KrishiSetu helps farmers list produce, compare offers, and connect with trustworthy middle agents transparently.';
  }

  return response;
}

function addChatMessage(text, type) {
  const chatBody = document.querySelector('.chat-body');
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text;
  chatBody.appendChild(bubble);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function initWeatherMap() {
  if (!document.getElementById('weatherMap')) return;

  if (!weatherMap) {
    weatherMap = L.map('weatherMap', { zoomControl: true }).setView([18.5204, 73.8567], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(weatherMap);
    weatherMarkerGroup = L.layerGroup().addTo(weatherMap);
  }
}

function renderNearbyAgents(centerCoords) {
  if (!weatherMap || !weatherMarkerGroup) return;

  weatherMarkerGroup.clearLayers();

  const mappedAgents = nearbyAgents
    .map((agent) => ({
      ...agent,
      distance: Math.hypot(agent.coords[0] - centerCoords[0], agent.coords[1] - centerCoords[1])
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4);

  mappedAgents.forEach((agent) => {
    const marker = L.marker(agent.coords).addTo(weatherMarkerGroup);
    marker.bindPopup(`<strong>${agent.name}</strong><br>Nearby buyer`);
  });

  const centerMarker = L.circleMarker(centerCoords, {
    radius: 9,
    color: '#1e7f45',
    fillColor: '#6ecb7a',
    fillOpacity: 0.9,
    weight: 2
  }).addTo(weatherMarkerGroup);

  centerMarker.bindPopup('Searched location');
  weatherMap.setView(centerCoords, 10);
}

function renderWeather(cityName) {
  const query = (cityName || '').trim().toLowerCase();

  initWeatherMap();

  if (!query) {
    weatherLocation.textContent = '📍 Search a city';
    weatherTemp.textContent = '--°C';
    weatherCondition.textContent = '🌤️ No data yet';
    weatherHumidity.textContent = '--';
    weatherWind.textContent = '--';
    weatherRain.textContent = '--';
    if (weatherMap) {
      weatherMap.setView([18.5204, 73.8567], 8);
    }
    return;
  }

  const data = weatherData[query] || {
    city: `${cityName.charAt(0).toUpperCase() + cityName.slice(1)}, Maharashtra`,
    temp: 28,
    humidity: 63,
    wind: 12,
    rain: 25,
    condition: 'Partly Cloudy',
    coords: [18.5204, 73.8567]
  };

  weatherLocation.textContent = `📍 ${data.city}`;
  weatherTemp.textContent = `${data.temp}°C`;
  weatherCondition.textContent = `${data.condition.includes('Sunny') ? '☀️' : data.condition.includes('Cloud') ? '☁️' : data.condition.includes('Warm') ? '🌤️' : '🌤️'} ${data.condition}`;
  weatherHumidity.textContent = `${data.humidity}%`;
  weatherWind.textContent = `${data.wind} km/h`;
  weatherRain.textContent = `${data.rain}%`;

  renderNearbyAgents(data.coords);
}

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      el.placeholder = dictionary[key];
    }
  });

  const idTextMap = {
    loginNameLabel: 'loginNameLabel',
    loginPhoneLabel: 'loginPhoneLabel',
    loginAddressLabel: 'loginAddressLabel',
    loginPasswordLabel: 'loginPasswordLabel',
    weatherSearchBtn: 'weatherSearchBtn',
    weatherCityInput: 'weatherSearchPlaceholder'
  };

  Object.entries(idTextMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el || !dictionary[key]) return;
    if (el.tagName === 'INPUT') {
      el.placeholder = dictionary[key];
    } else {
      el.textContent = dictionary[key];
    }
  });

  const nameInput = document.getElementById('loginName');
  if (nameInput) {
    nameInput.placeholder = dictionary.loginNameLabel;
  }
  const phoneInput = document.getElementById('loginPhone');
  if (phoneInput) {
    phoneInput.placeholder = dictionary.loginPhoneLabel;
  }
  const addressInput = document.getElementById('loginAddress');
  if (addressInput) {
    addressInput.placeholder = dictionary.loginAddressLabel;
  }
  const passwordInput = document.getElementById('loginPassword');
  if (passwordInput) {
    passwordInput.placeholder = dictionary.loginPasswordLabel;
  }
}

scaleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.scale = button.dataset.scale;
    scaleButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderMatches();
  });
});

navLoginBtn.addEventListener('click', () => {
  const menu = document.querySelector('.login-menu');
  menu.classList.toggle('open');
});

roleLoginButtons.forEach((button) => {
  button.addEventListener('click', () => openAuthModal(button.dataset.role));
});

dropdownRoles.forEach((button) => {
  button.addEventListener('click', () => openAuthModal(button.dataset.role));
});

document.getElementById('closeModal').addEventListener('click', closeAuthModal);
document.getElementById('closeAgentModal').addEventListener('click', closeAgentModal);

document.getElementById('authForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('loginName').value.trim();
  const phone = document.getElementById('loginPhone').value.trim();
  const address = document.getElementById('loginAddress').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!name || !phone || !address || !password) {
    alert('Please enter your name, mobile number, address and password.');
    return;
  }

  state.user = { name, phone, address, password, role: state.role };
  updateProfileCard();
  closeAuthModal();
  showDashboard(state.role);
});

logoutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.user = null;
    updateProfileCard();
    showLanding();
  });
});

document.getElementById('farmerForm').addEventListener('submit', (event) => {
  event.preventDefault();
  renderMatches();
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById('cropSelect').addEventListener('change', renderMatches);
document.getElementById('cropQuantity').addEventListener('input', renderMatches);

document.getElementById('agencyForm').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Agency Registration Submitted');
});

document.getElementById('agentRequirementForm').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Requirement posted successfully. Matching farmers are visible.');
});

document.getElementById('sendOfferBtn').addEventListener('click', () => {
  alert('Offer Sent Successfully. Waiting for Agent Response.');
  closeAgentModal();
});

chatbotToggle.addEventListener('click', toggleChatbot);
document.getElementById('chatbotClose').addEventListener('click', toggleChatbot);

document.querySelectorAll('.quick-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const text = button.textContent.trim();
    addChatMessage(text, 'user');
    addChatMessage(handleChatResponse(text), 'bot');
  });
});

document.getElementById('chatSend').addEventListener('click', () => {
  const input = document.getElementById('chatInput');
  const value = input.value.trim();
  if (!value) return;
  addChatMessage(value, 'user');
  addChatMessage(handleChatResponse(value), 'bot');
  input.value = '';
});

document.getElementById('chatInput').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('chatSend').click();
  }
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.lang = button.dataset.lang;
    langButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    applyTranslations(state.lang);
  });
});

weatherSearchBtn.addEventListener('click', () => {
  renderWeather(weatherCityInput.value);
});

weatherCityInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    weatherSearchBtn.click();
  }
});

showLanding();
updateProfileCard();
renderMatches();
renderWeather('');
applyTranslations(state.lang);
