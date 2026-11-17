export type Language = "en" | "zh";

export interface DishItem {
  id: string;
  category: "fusion" | "yakitori" | "bowls";
  name: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  badge: { en: string; zh: string };
  description: { en: string; zh: string };
  image: string;
  featured?: boolean;
}

export interface DrinkItem {
  id: string;
  name: { en: string; zh: string };
  nativeTitle?: string;
  ingredients: { en: string; zh: string };
  description: { en: string; zh: string };
  badge: { en: string; zh: string };
  image?: string;
  isSignatureSpotlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  tag: { en: string; zh: string };
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  highlights: { en: string[]; zh: string[] };
  image: string;
}

export const RESTAURANT_INFO = {
  name: "TORI-JI",
  chineseName: "Tori-Ji·托利齐·烧鸟大师小酒馆·居酒屋",
  instagramHandle: "@toriji_sh",
  instagramUrl: "https://www.instagram.com/toriji_sh/",
  facebookUrl: "https://www.facebook.com/share/17GsLTKhLh/?mibextid=wwXIfr",
  address: {
    en: "Room 1–3, No. 549 Xinhui Road, Putuo District, Shanghai",
    zh: "上海市普陀区新会路549号1-3室（近长寿路）",
  },
  metro: {
    en: "Metro Line 7 / Line 13 — Changshou Road Station (Exit 5), turn right and walk ~500m",
    zh: "地铁7号线 / 13号线 长寿路站 5号口出，右转步行约500米即达",
  },
  hours: {
    en: "Wednesday – Monday: 5:00 PM – Late (Closed Tuesdays)",
    zh: "周三至周一：17:00 至深夜（周二店休）",
  },
  contacts: [
    {
      label: { en: "WeChat / Phone Booking 1", zh: "微信 / 电话预订 1" },
      value: "131 2207 7283",
      raw: "+8613122077283",
    },
    {
      label: { en: "WeChat Booking 2", zh: "微信预订 2" },
      value: "199 0178 0521",
      raw: "+8619901780521",
    },
  ],
  coordinates: {
    lat: 31.2415,
    lng: 121.4408,
    display: "31.2415° N, 121.4408° E — PUTUO / JING'AN BORDER",
  },
};

export const MANIFESTO_LINES = [
  "WE MAKE IT HERE. BY HAND. BY FIRE.",
  "NOT RUSHED. WE TRUST THE KNIFE, THE TASTE.",
  "WE SEASON WITH PATIENCE. WE COOK WITH PRIDE. EAT SLOW.",
  "FIRE IS HONEST. SMOKE NEVER LIES.",
  "FOR THE HUNGRY, FOR THE CURIOUS, FOR THE ONES WHO CAN TASTE THE DIFFERENCE.",
  "NIGHTS HERE FEEL LIKE WARM BOWLS. LIFE IS SHORT.",
];

export const DISHES: DishItem[] = [
  {
    id: "yakitori-skillet",
    category: "fusion",
    name: {
      en: "Yakitori Skillet (Pinoy Sisig Style)",
      zh: "铁板烧鸟西西格 (Yakitori Skillet)",
    },
    subtitle: {
      en: "Char-grilled chicken, mushrooms & liver · Sizzling cast iron · Egg yolk",
      zh: "备长炭烤鸡肉、菌菇与鸡肝 · 铁板滋滋作响 · 生食蛋黄与美乃滋",
    },
    badge: { en: "SIGNATURE JP × PH", zh: "招牌日菲融合" },
    description: {
      en: "A cross-cultural house icon: chicken thigh, mushrooms, and buttery liver are first charred over our yakitori grill before being chopped and served sizzling on a hot cast-iron plate like Filipino sisig—finished with Kewpie mayo, crisp onions, scallions, lemon, and a rich raw egg yolk.",
      zh: "Tori-Ji 最具代表性的跨文化创意料理：先将鸡肉、菌菇与丰腴鸡肝在备长炭火上以日式烧鸟手法炙烤出焦香，再切碎盛入滚烫铸铁盘中，淋上日式美乃滋、洋丝、青葱、柠檬角与鲜嫩生蛋黄，重现菲律宾街头名菜 Sisig 的热烈灵魂。",
    },
    image: "/images/yakitori-skillet-sisig.jpg",
    featured: true,
  },
  {
    id: "palabok-tsukemen",
    category: "fusion",
    name: {
      en: "Palabok Tsukemen",
      zh: "菲式鲜虾帕拉博克沾面 (Palabok Tsukemen)",
    },
    subtitle: {
      en: "Japanese dipping ramen · Savory shrimp sauce · Chicharrón · Calamansi",
      zh: "日式粗沾面 · 浓郁菲式鲜虾红木籽浓汤 · 炸猪皮 · 四季橘",
    },
    badge: { en: "CHEF'S CREATION", zh: "主厨重磅新作" },
    description: {
      en: "Springy Japanese tsukemen dipping noodles paired with a deeply savory Filipino palabok shrimp-and-annatto dipping broth, crowned with crunchy pork chicharrón cracklings, toasted garlic bits, whole shrimp, soft-boiled egg, scallions, and fresh green calamansi limes.",
      zh: "将劲道弹牙的日式沾面（Tsukemen）与菲律宾传统节庆名菜 Palabok 完美碰撞。浓郁鲜美的虾汤融合灵魂酥脆炸猪皮（Chicharrón）、金黄蒜酥、鲜虾、溏心蛋与青葱，饮用前挤入清新四季橘汁，层次极尽丰盛。",
    },
    image: "/images/palabok-tsukemen.jpg",
    featured: true,
  },
  {
    id: "peanut-cheese-beef",
    category: "yakitori",
    name: {
      en: "Peanut Butter Cheese Beef Skewers",
      zh: "花生起司牛肉串",
    },
    subtitle: {
      en: "Char-grilled tender beef · Savory peanut glaze · Flame-torched cheddar",
      zh: "炭烤嫩牛肉 · 浓郁咸香花生酱 · 火焰炙烤切达芝士",
    },
    badge: { en: "CROWD FAVORITE", zh: "人气必点串烧" },
    description: {
      en: "Inspired by the rich, nutty flavors of Filipino kare-kare and street skewers: juicy grilled beef brushed with house savory peanut butter sauce and blanketed in melted, flame-torched cheddar cheese.",
      zh: "灵感源自菲律宾经典花生炖肉风味：多汁嫩牛肉在炭火上烤至恰到好处，刷上特调咸香花生酱，再铺满切达芝士以喷枪炙烤出焦香奶皮，浓郁口感令人惊艳。",
    },
    image: "/images/ig-peanut-cheese-beef.jpg",
    featured: true,
  },
  {
    id: "boneless-inasal",
    category: "fusion",
    name: {
      en: "Boneless Chicken Inasal (Yakinasal)",
      zh: "无骨菲式炭烤鸡腿排 (Chicken Inasal)",
    },
    subtitle: {
      en: "Calamansi, lemongrass & annatto marinade · Open charcoal grill · Garlic rice",
      zh: "四季橘香茅红木油腌制 · 炭火慢烤 · 配香蒜米饭",
    },
    badge: { en: "BEST SELLER", zh: "销量王牌" },
    description: {
      en: "One of Tori-Ji's all-time best-sellers for both Chinese and international guests. Juicy boneless chicken marinated in calamansi citrus, lemongrass, ginger, and annatto oil, grilled over open embers for a smoky, tangy glaze.",
      zh: "深受中外食客追捧的店内销量冠军。精选无骨鸡腿肉，以菲律宾四季橘、柠檬草、生姜与红木籽油秘制腌渍，在炭火上反复刷油慢烤，果酸清香与炭火烟熏感完美平衡。",
    },
    image: "/images/ig-assorted-yakitori.jpg",
    featured: true,
  },
  {
    id: "binchotan-yakitori",
    category: "yakitori",
    name: {
      en: "Master Griller's Binchotan Yakitori (Tare & Shio)",
      zh: "备长炭大师烧鸟拼盘（盐烤 / 秘制酱烤）",
    },
    subtitle: {
      en: "Thigh · Neck · Oyster · Heart · Buttery Liver · Soft Cartilage · Tsukune",
      zh: "鸡腿 · 鸡颈肉 · 鸡生蚝 · 鸡心 · 奶油鸡肝 · 鸡软骨 · 温泉蛋月见鸡肉棒",
    },
    badge: { en: "BINCHOTAN CRAFT", zh: "手工穿串 · 备长炭" },
    description: {
      en: "Skewered by hand every afternoon and grilled to order by Co-Founder & Master Griller Vené. From crispy-skinned chicken thigh and prized chicken oyster to velvety, melt-in-the-mouth chicken liver and handmade tsukune with onsen egg.",
      zh: "每日新鲜手工分切穿串，由联合创始人兼烧鸟主理人 Vené 亲自掌炉。涵盖外焦里嫩的鸡腿肉、稀有鸡生蚝、绵密如鹅肝般的招牌鸡肝、脆爽软骨，以及裹满温泉蛋液的手打月见鸡肉棒。",
    },
    image: "/images/yakitori-open-fire.jpg",
  },
  {
    id: "scallion-beef-mentaiko",
    category: "yakitori",
    name: {
      en: "Salted Scallion Beef & Stuffed Shiitake / Mentaiko Skewers",
      zh: "特制盐葱牛肉串 · 酿香菇青椒与明太子栉瓜",
    },
    subtitle: {
      en: "House negishio beef · Chicken-stuffed shiitake & shishito · Zucchini mentaiko",
      zh: "秘制盐葱牛肉 · 手工鸡肉酿香菇与甜椒 · 明太子炙烤西葫芦",
    },
    badge: { en: "IZAKAYA CLASSICS", zh: "居酒屋经典" },
    description: {
      en: "Char-grilled beef topped with aromatic salted scallion relish alongside handcrafted shiitake mushrooms and shishito peppers stuffed with seasoned chicken mince, plus crisp zucchini torched with creamy mentaiko.",
      zh: "铺满秘制麻油盐葱的炭烤牛肉串、每日在吧台手工填入鲜嫩鸡肉糜的酿香菇与青椒串，以及炙烤出咸鲜海味的明太子栉瓜（西葫芦）串，佐酒绝佳。",
    },
    image: "/images/chef-skewers-prep.jpg",
  },
  {
    id: "pinoy-bbq-liempo",
    category: "fusion",
    name: {
      en: "Pinoy Street BBQ & Charcoal Grilled Liempo",
      zh: "菲式街头烤肉串 & 炭烤五花肉 (Pinoy BBQ & Liempo)",
    },
    subtitle: {
      en: "Caramelized sweet-savory pork skewers · Smoky grilled pork belly",
      zh: "焦糖咸甜风味猪肉串 · 烟熏厚切猪五花",
    },
    badge: { en: "MANILA SOUL", zh: "马尼拉街头风味" },
    description: {
      en: "Sweet, tangy, and smoky pork skewers caramelized over white-hot coals, alongside thick-cut Filipino liempo (grilled pork belly) with crisp charred edges and savory dipping vinegar.",
      zh: "还原马尼拉夜市的灵魂香气：微甜咸香的腌汁在高温白炭上焦糖化，搭配外皮焦脆、脂香四溢的菲式厚切烤五花肉（Liempo），每一口都是热烈的街头烟火气。",
    },
    image: "/images/ig-location-toriji-ribs.jpg",
  },
  {
    id: "tori-nabe-ramen",
    category: "bowls",
    name: {
      en: "Tori Nabe (Japanese Chicken Hotpot) & Chashu Ramen",
      zh: "日式鸡肉锅 (Tori Nabe) & 豚骨叉烧拉面",
    },
    subtitle: {
      en: "Bubbling winter chicken nabe · Rich tonkotsu chashu ramen · Japanese siomai",
      zh: "咕嘟咕嘟冬日暖心鸡肉锅 · 浓汤豚骨叉烧拉面 · 日式鲜虾猪肉烧卖",
    },
    badge: { en: "LATE-NIGHT WARMERS", zh: "深夜暖胃锅物" },
    description: {
      en: "As our storefront sign says: 'Bubbling, pouring, comforting—warm winter starts here.' Share a steaming pot of Tori Nabe, slurp a bowl of chashu pork ramen, or pair your drinks with handmade pork-and-shrimp Japanese Siomai.",
      zh: "正如门口立牌所写：“咕嘟咕嘟的幸福，从这一锅开始。” 无论是寒夜里热气腾腾的日式鸡肉锅、浓郁醇厚的叉烧豚骨拉面，还是融入菲式街头灵感的手工猪肉鲜虾日式烧卖，都能抚慰深夜的胃。",
    },
    image: "/images/ig-brunch-spread.jpg",
  },
];

export const DRINKS: DrinkItem[] = [
  {
    id: "koibumi",
    name: {
      en: "Koibumi · Liham",
      zh: "恋文 · Koibumi · Liham",
    },
    nativeTitle: "恋文 · Liham · KOIBUMI",
    ingredients: {
      en: "Shochu · Fresh Shiso · Lemon",
      zh: "烧酎 · 紫苏 · 柠檬",
    },
    badge: { en: "SIGNATURE COCKTAIL", zh: "镇店特调鸡尾酒" },
    description: {
      en: "Named 'Love Letter' across three languages—Koibumi in Japanese, 恋文 in Chinese, and Liham in Tagalog. A ruby-hued layered creation of Japanese shochu, bright lemon, and aromatic shiso crowned with a whole green shiso leaf and served with a miniature red envelope. 'Some things are better discovered than explained.'",
      zh: "以日语“恋文（Koibumi）”与塔加洛语“情书（Liham）”共同命名。将醇净烧酎、鲜榨柠檬与清香紫苏幻化为红宝石般的渐层冰沙质感，顶部点缀整片鲜绿紫苏叶，并随杯附上一封红色信笺——“有些事，亲自发现比解释更有意思。”",
    },
    image: "/images/koibumi-cocktail-poster.jpg",
    isSignatureSpotlight: true,
  },
  {
    id: "shiso-sour",
    name: { en: "Shiso Sour", zh: "紫苏沙瓦 (Shiso Sour)" },
    ingredients: { en: "Shiso Infusion · Citrus · Crisp Soda", zh: "鲜紫苏萃液 · 柑橘 · 强碳酸苏打" },
    badge: { en: "HOUSE SOUR", zh: "人气沙瓦" },
    description: {
      en: "Botanical, herbaceous, and vibrantly refreshing—crafted to cut through rich, smoky binchotan yakitori skewers.",
      zh: "草本紫苏的独特芬芳与柑橘酸度交织，清爽气泡瞬间化解炭火烧鸟的丰腴油脂。",
    },
    image: "/images/koibumi-shiso-sour.jpg",
  },
  {
    id: "honey-lemon-sour",
    name: { en: "Honey Lemon Sour", zh: "蜂蜜柠檬酸 (Honey Lemon Sour)" },
    ingredients: { en: "Fresh Yellow Lemons · Wildflower Honey · Shochu Fizz", zh: "新鲜黄柠檬 · 纯正蜂蜜 · 烧酎气泡" },
    badge: { en: "REIMAGINED CLASSIC", zh: "经典重塑" },
    description: {
      en: "Our bright, zesty take on the classic Tokyo izakaya lemon sour—balanced with natural honey sweetness and fresh-squeezed lemon.",
      zh: "Tori-Ji 对东京居酒屋经典柠檬沙瓦的全新演绎，鲜榨柠檬的明亮果酸与温润蜂蜜完美平衡。",
    },
    image: "/images/ig-honey-lemon-sour.jpg",
  },
  {
    id: "calamansi-gt",
    name: { en: "Gin & Tonic Calamansi", zh: "四季橘金汤力 (Calamansi G&T)" },
    ingredients: { en: "Dry Gin · Philippine Calamansi Citrus · Premium Tonic", zh: "干金酒 · 菲律宾四季橘 · 汤力水" },
    badge: { en: "FILIPINO TWIST", zh: "菲式柑橘风味" },
    description: {
      en: "A crisp, aromatic nod to Manila nights—infusing a classic highball Gin & Tonic with the unmistakable floral tartness of Filipino calamansi lime.",
      zh: "向马尼拉夜生活致敬的清爽特调，在经典金汤力中注入菲律宾四季橘独有的花香果酸，沁人心脾。",
    },
  },
  {
    id: "ume-sour",
    name: { en: "Ume Sour", zh: "梅子沙瓦 (Ume Sour)" },
    ingredients: { en: "Japanese Ume Plum · Shochu · Soda", zh: "日式青梅酒 · 烧酎 · 气泡水" },
    badge: { en: "IZAKAYA STAPLE", zh: "居酒屋必点" },
    description: {
      en: "Sweet-tart Japanese plum liqueur lengthened with chilled soda—an effortless, crowd-pleasing companion to spicy sisig and skewers.",
      zh: "酸甜馥郁的日式梅子风味融入冰爽气泡，是搭配铁板 Sisig 与炭火串烧的绝佳伴侣。",
    },
  },
  {
    id: "highballs-sake-beer",
    name: { en: "Ginger Highball, Kakubin & Curated Sake", zh: "姜味嗨棒 · 角瓶嗨棒 · 精选清酒与生啤" },
    ingredients: { en: "Kakubin Whisky · Ginger Highball · Sakura Muromachi Sake · Draft Beer", zh: "三得利角瓶 · 鲜姜嗨棒 · 樱室町/月之桂清酒 · 冰镇生啤" },
    badge: { en: "BAR PROGRAM", zh: "酒水单精选" },
    description: {
      en: "From spicy Ginger Highballs and classic Kakubin Whisky Highballs to chilled bottles of Sakura Muromachi & Tsuki no Katsura sake and frosty draft beers.",
      zh: "从辛香微辣的姜味嗨棒、经典三得利角瓶嗨棒，到吧台陈列的“樱室町”、“月之桂”等精选日本酒与冰爽生啤，满足每一场微醺聚会。",
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "filipino-feast",
    tag: { en: "INTIMATE SUPPER CLUB · 15 SEATS", zh: "15席限定 · 菲式家宴私享会" },
    title: { en: "Filipino Feast Supper Club", zh: "Filipino Feast 菲式长桌家宴" },
    subtitle: {
      en: "Communal banana-leaf dining, chef storytelling, followed by KTV & games",
      zh: "芭蕉叶长桌分享我们从小热爱的家乡菜，饭后开启 KTV、桌游与派对时光",
    },
    description: {
      en: "An intimate 15-seat shared-table supper club at Tori-Ji where we share the heirloom Filipino dishes we grew up loving—served over banana leaves with garlic shrimp, crispy chicharrón, skewers, and sisig. After dinner, the chef introduces each dish before the night transforms into KTV karaoke, board games, card games, and console gaming.",
      zh: "在 Tori-Ji 举办的 15 人私密长桌晚宴，在铺满芭蕉叶的餐桌上分享我们从小吃到大的菲律宾传统美味——蒜香大虾、酥脆炸猪皮、炭烤肉串与铁板料理。主厨会亲自讲述每道菜背后的故事，晚餐后全场无缝切换至 KTV 欢唱、桌游、纸牌与主机游戏派对。",
    },
    highlights: {
      en: [
        "Limited to ~15 seats per gathering for genuine connection",
        "Multi-course heirloom Filipino spread on banana leaves",
        "Post-dinner KTV, board games, cards & console gaming included",
      ],
      zh: [
        "每场仅限约 15 席，轻松认识新朋友的社交餐桌",
        "芭蕉叶上的多道式菲律宾传统家常盛宴",
        "餐后包含 KTV 欢唱、桌游、纸牌与电玩互动体验",
      ],
    },
    image: "/images/ig-filipino-feast-table.jpg",
  },
  {
    id: "yakitori-omakase",
    tag: { en: "CHEF'S COUNTER & MIXER", zh: "主厨定制 · 五道式烧鸟 Omakase" },
    title: { en: "5-Course Yakitori Omakase Night", zh: "五道式烧鸟 Omakase 社交晚宴" },
    subtitle: {
      en: "Curated binchotan skewer progression paired with social mingling & late-night KTV",
      zh: "主理人定制五道式炭火烧鸟体验，solo 友好，兼具美食与轻松社交",
    },
    description: {
      en: "Experience Master Griller Vené's five-course yakitori progression—combining prized Japanese cuts with bold Filipino-inspired glazes. Designed to be solo-diner and group friendly, transitioning seamlessly into Tori-Ji's signature late-night social lounge.",
      zh: "由烧鸟主理人 Vené 亲自编排的五道式烧鸟发办体验，将稀有部位日式烧鸟与创意菲式风味酱汁巧妙融合。无论是独自前往还是好友结伴都倍感自在，晚宴后还可共享店内 KTV 与深夜微醺氛围。",
    },
    highlights: {
      en: [
        "5-course chef-selected yakitori & izakaya progression",
        "Solo-friendly, welcoming international & local crowd",
        "Glass-enclosed open binchotan grill theater",
      ],
      zh: [
        "主厨严选五道式炭火烧鸟与居酒料理进程",
        "对独自用餐者极为友好，汇聚中外有趣灵魂",
        "近距离欣赏透明玻璃炭火烤台的手工炙烤美学",
      ],
    },
    image: "/images/vene-master-griller.jpg",
  },
  {
    id: "social-events-unplugged",
    tag: { en: "WEEKLY EVENTS & POP-UPS", zh: "每周主题活动与跨界工坊" },
    title: { en: "Tori-Ji Unplugged, Workshops & Nightlife", zh: "原声星期六 · 创意工坊与主题派对" },
    subtitle: {
      en: "Acoustic Saturdays, trivia nights, candle workshops & festival pop-ups",
      zh: "周六现场原声音乐、趣味问答夜、香氛蜡烛手作工坊与美食节快闪",
    },
    description: {
      en: "Tori-Ji is built as Shanghai's warmest community living room—hosting 'Tori-Ji Unplugged' live acoustic Saturdays, LAV Candles 'Craft Your Calm' scent workshops, holiday brunches with 3-hour free-flow, Halloween live-band parties, and sold-out pop-ups at Laowaijie BBQ Festival.",
      zh: "Tori-Ji 不仅是一家居酒屋，更是上海充满温度的社群客厅：从“原声星期六（Tori-Ji Unplugged）”现场不插电演出、LAV 香氛蜡烛手作工坊、五一早午餐畅饮派对、万圣节现场乐队狂欢，到老外街 BBQ 美食节连续两日售罄的人气快闪。",
    },
    highlights: {
      en: [
        "Tori-Ji Unplugged (原声星期六) live acoustic sessions",
        "Community collaborations (LAV Candles workshops, supper clubs)",
        "Holiday brunches & seasonal Buy-1-Take-1 happy hours",
      ],
      zh: [
        "原声星期六（Tori-Ji Unplugged）现场音乐演出",
        "跨界社群联名（LAV 手工香薰蜡烛工坊、主题聚会）",
        "假日限定早午餐与特定活动时段买一赠一欢乐时光",
      ],
    },
    image: "/images/ig-social-events-crowd.jpg",
  },
];

export const AWARDS_AND_PRESS = [
  {
    id: "thats-shanghai-2025",
    year: "2025 / 2026",
    organization: "23rd That's Shanghai Food & Drink Awards",
    title: {
      en: "Winner — Japanese Restaurant of the Year (People's Choice)",
      zh: "年度最佳日本料理餐厅（大众选择奖得主）",
    },
    description: {
      en: "Less than a year after opening its doors on Xinhui Road, Tori-Ji was crowned Japanese Restaurant of the Year at the 23rd That's Shanghai Food & Drink Awards—a testament to its honest binchotan yakitori, inventive Japanese-Filipino flavors, and fiercely loyal Shanghai community.",
      zh: "在新会路开业不到一年，Tori-Ji 便在第23届《That's Shanghai》餐饮大奖中斩获“年度最佳日本料理餐厅”殊荣——这不仅是对备长炭手工烧鸟与日菲融合风味的肯定，更是上海食客社群用口碑投出的真实认可。",
    },
    image: "/images/founders-award-2025.jpg",
    link: "https://www.thatsmags.com/shanghai/post/40231/who-won-what-at-the-that-s-shanghai-food-drink-awards-2025",
  },
  {
    id: "badass-women-2026",
    year: "MARCH 2026",
    organization: "That's Shanghai Editorial Feature",
    title: {
      en: "8 Badass Women of Shanghai F&B 2026 — Czarina Labagriel",
      zh: "《That's Shanghai》2026上海餐饮界八位杰出女性专题报道",
    },
    description: {
      en: "Co-founder Czarina Labagriel was profiled among Shanghai's most inspiring women in hospitality, chronicling her leap from corporate Electronics Engineer at French and Chinese firms to building an award-winning izakaya and community hub alongside her husband Vené.",
      zh: "联合创始人 Czarina Labagriel 入选《That's Shanghai》2026年上海餐饮界八位杰出女性人物特辑，深入报道了她从跨国企业电子工程师华丽转身，与丈夫 Vené 从零打造这家获奖居酒屋的创业故事。",
    },
    image: "/images/founders-fnb-awards-squad.jpg",
    link: "https://www.thatsmags.com/shanghai/post/40317/8-badass-women-of-shanghai-f-b-2026",
  },
  {
    id: "clean-water-restaurant",
    year: "DEC 2025",
    organization: "Greenwave Clean Water Restaurants (纯净水餐厅)",
    title: {
      en: "Certified Clean Water Restaurant Partner",
      zh: "Greenwave 认证纯净水合作伙伴餐厅",
    },
    description: {
      en: "Recognized by Greenwave Clean Water Restaurants across Shanghai, Beijing, Guangzhou, and Shenzhen for committing to commercial-grade purified water across all ice, broths, drinks, and kitchen preparation.",
      zh: "入选 Greenwave 新纯净水餐厅名录，店内所有制冰、高汤熬制、酒水调饮与后厨料理均采用专业级净化水标准，以严苛细节守护每一口安心品质。",
    },
    image: "/images/logo-mascot-badge.jpg",
    link: "https://www.cleanwaterrestaurant.cn/",
  },
];

export const IG_FEED_ITEMS = [
  {
    id: "ig-1",
    image: "/images/ig-founders-bund.jpg",
    caption: {
      en: "Filipino Entrepreneurs in Shanghai — 9 months running a Japanese Izakaya. Two ordinary OFWs trying to build something of our own so we don't live with 'what ifs.'",
      zh: "在上海创业的菲律宾夫妻——经营日式居酒屋的9个月。两个普通人努力打造属于自己的小店，只为人生不留“如果当初”的遗憾。",
    },
    tag: "PINNED STORY",
  },
  {
    id: "ig-2",
    image: "/images/ig-award-plaque.jpg",
    caption: {
      en: "We won!!!!!! 🥹 Japanese Restaurant of the Year — That's Shanghai Food & Drink Awards 2025.",
      zh: "我们获奖啦！！！🥹 2025 That's Shanghai 餐饮大奖“年度最佳日本料理餐厅”。",
    },
    tag: "AWARD WINNER",
  },
  {
    id: "ig-3",
    image: "/images/ig-vene-artist.jpg",
    caption: {
      en: "Be an artist... Every skewer hand-cut and grilled over open binchotan charcoal by Master Griller Vené.",
      zh: "像艺术家一样对待每一串烧鸟……由主理人 Vené 每日亲手穿串，在备长炭火上精准炙烤。",
    },
    tag: "BINCHOTAN",
  },
  {
    id: "ig-4",
    image: "/images/palabok-tsukemen.jpg",
    caption: {
      en: "YOUR NEXT CRAVING... Palabok Tsukemen — Japanese dipping noodles meet rich Filipino shrimp palabok sauce, chicharrón & calamansi.",
      zh: "你的下一道上瘾美味……菲式鲜虾帕拉博克沾面（Palabok Tsukemen），日式沾面与菲式鲜虾浓汤的惊艳碰撞。",
    },
    tag: "NEW DISH",
  },
  {
    id: "ig-5",
    image: "/images/koibumi-cocktail-poster.jpg",
    caption: {
      en: "恋文 · Liham · KOIBUMI — Shochu · Shiso · Lemon. Some things are better discovered than explained.",
      zh: "恋文 · Liham · KOIBUMI —— 烧酎 · 紫苏 · 柠檬。有些事，亲自发现比解释更有意思。",
    },
    tag: "COCKTAILS",
  },
  {
    id: "ig-6",
    image: "/images/ig-filipino-feast-banner.jpg",
    caption: {
      en: "FILIPINO FEAST — An intimate 15-seat supper-club gathering at TORI-JI, sharing the dishes we grew up loving.",
      zh: "FILIPINO FEAST 菲式家宴 —— 15席私享晚宴，在芭蕉叶餐桌上分享我们从小热爱的家乡风味。",
    },
    tag: "SUPPER CLUB",
  },
  {
    id: "ig-7",
    image: "/images/ig-peanut-cheese-beef.jpg",
    caption: {
      en: "Tender beef skewers glazed with savory peanut butter sauce and flame-torched cheddar cheese (花生起司牛肉串).",
      zh: "花生起司牛肉串 —— 浓郁咸香花生酱搭配火焰炙烤切达芝士，一口爆汁。",
    },
    tag: "SKEWERS",
  },
  {
    id: "ig-8",
    image: "/images/ig-location-toriji-ribs.jpg",
    caption: {
      en: "'Hey, where are you?' 'I'm at home.' 'Your location says you're at TORI-JI.' 'EXACTLY 🥺🥺'",
      zh: "“嘿，你在哪？” “我在家呀。” “你的定位显示你在 TORI-JI。” “没错，这里就是家 🥺🥺”",
    },
    tag: "SECOND HOME",
  },
];
