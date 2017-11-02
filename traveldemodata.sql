
CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `order` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name_slug` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `posturl_slug` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(550) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `icon` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `disabled` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `main` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `lang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `order`, `name`, `name_slug`, `posturl_slug`, `description`, `type`, `icon`, `disabled`, `main`, `lang`, `created_at`, `updated_at`) VALUES
(1, '1', 'Destinations', 'destinations', 'destinations', '', 'news', '', '0', '2', 'en', '0000-00-00 00:00:00', '2017-11-07 21:10:46'),
(3, '', 'Cultural Tours', 'culture', '', '', '1', '', '0', '0', 'en', '2017-09-18 06:19:49', '2017-09-25 20:37:26'),
(11, '2', 'Contact us', 'contact', 'contact', '', 'Холбоо барих', '', '0', '2', 'en', '2017-09-18 06:43:57', '2017-11-07 21:13:06'),
(12, '', 'City Tours', 'citytour', '', '', '1', '', '0', '0', 'en', '2017-09-25 20:38:03', '2017-09-25 20:38:03'),
(13, '', 'Nature & Wildlife Tours', 'nature', '', '', '1', '', '0', '0', 'en', '2017-09-25 20:38:58', '2017-09-25 20:38:58'),
(14, '', 'Private Sightseeing Tours', 'private', '', '', '1', '', '0', '0', 'en', '2017-09-25 20:39:39', '2017-09-25 20:39:39'),
(15, '', 'Bus & Minivan Tours', 'minivan', '', '', '1', '', '0', '0', 'en', '2017-09-25 20:40:15', '2017-09-25 20:40:15'),
(20, '2', 'Холбоо барих', 'contact', 'contact', '', 'contact', '', '0', '2', 'mn', '2017-10-18 21:01:48', '2017-11-07 21:01:03'),
(21, '1', 'Аялалын чиглэл', 'destinations', 'destinations', '', 'tours', '', '0', '2', 'mn', '2017-10-18 21:03:44', '2017-11-07 21:12:19'),
(22, '', 'Altai tavan bogd', 'tavanbogd', '', '', '1', '', '0', '0', 'en', '2017-10-24 03:35:13', '2017-10-24 03:35:37'),
(23, '', 'Gallery', 'Gallery', '', '', '1', '', '0', '0', 'en', '2017-10-24 03:53:11', '2017-10-24 03:53:11'),
(24, '1', 'Аялалын хэлбэр', 'travel-type', 'travel-type', '', 'desctinations', '', '0', '2', 'mn', '2017-11-07 21:02:28', '2017-11-07 21:04:26'),
(25, '1', 'Аялалын төлөвлөгөө', 'travel-planner', 'travel-planner', '', 'travel-planner', '', '0', '2', 'mn', '2017-11-07 21:06:17', '2017-11-07 21:06:17'),
(26, '1', 'Үйлчилгээ', 'service', 'service', '', 'service', '', '0', '2', 'mn', '2017-11-07 21:06:43', '2017-11-07 21:06:43'),
(28, '1', 'Travel types', 'travel-type', 'travel-type', '', 'travel-type', '', '0', '2', 'en', '2017-11-07 21:09:18', '2017-11-07 21:09:18'),
(29, '1', 'Travel planner', 'travel-planner', 'travel-planner', '', 'travel-planner', '', '0', '2', 'en', '2017-11-07 21:09:38', '2017-11-07 21:09:38'),
(30, '1', 'Service', 'service', 'service', '', 'service', '', '0', '2', 'en', '2017-11-07 21:11:44', '2017-11-07 21:11:44');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `label_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(155) COLLATE utf8_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `read` tinyint(1) NOT NULL,
  `stared` tinyint(1) NOT NULL,
  `important` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `entrys`
--

CREATE TABLE `entrys` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `video` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `source` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `entrys`
--

INSERT INTO `entrys` (`id`, `post_id`, `user_id`, `order`, `type`, `title`, `body`, `image`, `lang`, `video`, `source`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 5, 1, 0, 'text', '', '<p>Experience Ulaanbaatar like a local as you follow your expert English-speaking local guide through the city streets. Enjoy the comfort of your own private vehicle as you make your way to iconic attractions, VIP clubs and more. Customize this tour to meet your needs and interests and feel what it\'s like to be a citizen in the largest city in the least-densely populated country on earth.</p><p> </p><p>What to Expect</p><p> </p><p>All in one day, see as much as you can in a 6-hour private tour of Ulaanbaatar and its top attractions. Your private tour guide will meet you at your hotel lobby at 8:50 am for an exciting and unforgettable experience. The choice of attraction sites you will be visiting and the length of time you spend at each location fully depend on your preference. As a choice, you can follow the basic itinerary that we provide. Although this tour will include more local lifestyle and cultural scenes than any other regular city sightseeing tours, you won\'t leave Ulaanbaatar without visiting the iconic attractions such as The Last King’s Palace, Migjid Janraisig Sum, National History Museum, Genghis Khan Square, Bogd Khan Uul National Park, and Gandantegchenling Monastery.</p><p> </p><p>In addition to showing you beautiful Ulaanbaatar, your knowledgeable private guide could converse with you about anything from culture to culinary art and from politics to quantum physics. Get your camera ready for an awesome photo at the city’s hidden gems and famous landmarks.<br><br>After a taste of Ulaanbaatar, you will be transferred back to the location of your choice in the city.</p><a>Read More</a><p> </p><p>Important Information</p><p> Departure Point</p><p>Your choice of location in Ulaanbaatar City</p><p>Departure Time</p><p>9:00 AM</p><p>Return Details</p><p>Your choice of location in Ulaanbaatar City.</p><p>Inclusions</p><ul><li>All taxes, fees and handling charges</li><li>Entrance fees</li><li>Environmental Management Charge (Reef Tax)</li><li>Fuel surcharge</li><li>National Park fees</li><li>Lunch</li><li>All activities</li><li>Professional guide</li><li>Hotel pickup and drop-off</li><li>Private tour</li><li>Transport by private vehicle</li></ul><p>Exclusions</p><ul><li>Personal expense</li><li>Souvenir photos (available to purchase)</li><li>Gratuities (optional)</li></ul><a>Read More</a><p> </p><p>Additional Info</p><p> </p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Children (ages 0-12) are free with an accompanied adult</li><li>Please advise any specific dietary requirements at time of booking</li><li>Operates in all weather conditions, please dress appropriately</li></ul><p> </p><p>Cancellation Policy</p><p> If you cancel at least 7 day(s) in advance of the scheduled departure, there is no cancellation fee. If you cancel between 3 and 6 day(s) in advance of the scheduled departure, there is a 50 percent cancellation fee. If you cancel within 2 day(s) of the scheduled departure, there is a 100 percent cancellation fee.</p>', NULL, 'en', NULL, '', '2017-09-25 23:10:28', '2017-09-25 23:10:28', NULL),
(8, 6, 1, 0, 'text', '', '<p>This full-day tour showcases the major sights of Ulaanbaatar including the Gandan Monastery, the Museum of Ethnology, Bogd Khan Palace, and Zaisan Hill. A cycle tour through the lanes and stalls of the lively Naran Tuul market, also known as the “Black Market,” is also a highlight. The tour ends with a stop at a local cashmere and wool factory outlet where you may purchase garments knit from the fine fibers of Mongolian goats. Lunch, bottled water, and hotel pickup and drop-off are included. &nbsp;&nbsp;</p><a>Read More</a><p>What to Expect</p><p>Your tour of Mongolia\'s capital&nbsp;begins with a pickup at your centrally located hotel. The first stop is Chingghis Khan Square, the city’s geographic and social center, with its famous statue of the founder of the Mongolian Empire mounted on his horse. Fronting the square are the Parliament Palace and mausoleum. Moving on to the National Museum of Mongolia, you\'ll survey the country’s ancient past and storied empire, founded by Chingghis Khan in the year 1206, as well as life during the 20th-century Soviet era.</p><p>The next stop is Gandan Monastery, Mongolia’s most important Buddhist site, where you may see monks observing ceremonial rituals. Then, wander the grounds of the ornate Bogd Khan palace, one of Mongolia’s most important architectural monuments. Constructed at the end of the 19th century, this residence of Mongolia’s last king was turned into a museum on his death in 1924. Chinese-style pagodas and courtyards retain their original splendor and the palace museum preserves more than 8,000 artifacts spanning 400 years of history, including Buddhist sculptures, intricately painted thangkas, a yurt lined with the hides of 150 snow leopards, and elaborate fur and pearl-adored brocade royal garments.</p><p>In the afternoon,&nbsp;a journey by 3-wheeled cyclo through Ulaanbaatar’s famous Black Market is an exhilarating experience for any visitor. Not a black market in the sense of illegal activity, this hub of local commerce is a place to buy everything from North Face knockoffs to horse saddles, handcrafted fur hats, and traditional Mongolian clothing. Enjoy watching the locals bargain as you are pedaled through the narrow lanes, with a chance to make purchases if you wish. If your tour falls on a Tuesday when the Black Market is closed, you will visit the Kharkhorin market instead. At midday, stop for a traditional Mongolian lunch with a choice of buuz (dumplings) or khuushuur (beef patties).</p><p>Then, it’s on to the cashmere and wool factory outlet located in the Khan-Uul district. Learn how the fine underwool of Mongolia’s cashmere goats is made into exceptionally soft, lightweight garments and browse a broad selection of items for purchase including sweaters, scarves, and socks.</p><p>The final event of the day is a one-hour cyclo tour through the city center, where you may disembark along the way to comb through more cashmere and wool shops if you wish. Your tour concludes with hotel drop-off.&nbsp;</p><a>Read More</a><p>Important Information</p><p>Departure Point</p><p>Your centrally located Ulaanbaatar hotel</p><p>Departure Time</p><p>9am</p><p>Return Details</p><p>Your centrally located Ulaanbaatar hotel</p><p>Inclusions</p><ul><li>English-speaking Local guide</li><li>Hotel/port pickup and drop-off</li><li>Driver/guide</li><li>Entrance fees</li><li>Transportation</li><li>Bottled water</li><li>Lunch</li></ul><p>Exclusions</p><ul><li>Alcoholic drinks (available to purchase)</li><li>Optional activity cost&nbsp;&nbsp;</li><li>Travel Insurance</li><li>Gratuities (optional)</li></ul><a>Read More</a><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Children must be accompanied by an adult</li><li>Minimum drinking age is 18 years</li><li>Dress code is smart casual</li></ul><p>Cancellation Policy</p><p>If you cancel at least 7 day(s) in advance of the scheduled departure, there is no cancellation fee. If you cancel between 3 and 6 day(s) in advance of the scheduled departure, there is a 50 percent cancellation fee. If you cancel within 2 day(s) of the scheduled departure, there is a 100 percent cancellation fee.</p>', NULL, '', NULL, '', '2017-09-25 23:16:49', '2017-09-25 23:16:49', NULL),
(9, 6, 1, 1, 'image', '', '', '2017-09/26/6-1-2d007717a1c3d66a891c3dd8c29f19d3.jpg', '', NULL, '', '2017-09-25 23:16:49', '2017-09-25 23:16:49', NULL),
(10, 6, 1, 2, 'image', '', '', '2017-09/26/6-2-2d007717a1c3d66a891c3dd8c29f19d3.jpg', '', NULL, '', '2017-09-25 23:16:49', '2017-09-25 23:16:49', NULL),
(11, 6, 1, 3, 'image', '', '', '2017-09/26/6-3-2d007717a1c3d66a891c3dd8c29f19d3.jpg', '', NULL, '', '2017-09-25 23:16:49', '2017-09-25 23:16:49', NULL),
(12, 7, 1, 0, 'text', '', '<p>Spend the day beyond the urban streets of Ulaanbaatar on this private day trip to Terelj National Park. First, get an up close look at the largest equestrian statue on earth as you follow your guide to the iconic landmark in Genghis Khan Square. Next, travel into stunning landscapes as you learn about Mongolia\'s ancient history and explore one of the nation\'s most dynamic national parks. This popular tour option includes an English-speaking guide, driver, entrance fees and comfortable transport.</p><p>What to Expect</p><p>Visit Chinggis Khan Equestrian Statue Complex (34 miles/54 km - 1.5 hours)</p><p>At 9:00am, your guide will pick you up at your hotel in Ulaanbaatar and drive to the Genghis Khan Equestrian Statue Complex, 131 feet (40 meter) tall statue of Genghis Khan on horseback. Visit two small museums displaying a private collection of archaeologist’s findings from Bronze age and 13th century. Have a fascinating panoramic view on the horseback.</p><p>Immerse in nomad culture and traditional meal (34 miles/55 km - 1.5 hour)</p><p>Take a scenic drive through magnificent alpine in Terelj National Park and arrive at a nomad family. Savor a traditional meal for lunch offered by the hospitable nomad family.&nbsp;</p><p>Short horseback riding over the mountains (1 hour ride)</p><p>Experience riding Mongolian pony with a local guide and soak in breathtaking scenery.&nbsp;</p><p>Witness nature made Turtle Rock and hiking&nbsp;</p><p>Traverse through iconic Turtle Rock and drive to Buddhist Meditation center in the mountain. Explore the center with a stunning hike from crossing the short trail bridge to stepping 108 stairs.&nbsp;</p><p>Take in every last bit of the unique scenery before ending this active adventure at your hotel in Ulaanbaatar.</p><p>Important Information</p><p>Departure Point</p><p>Your hotel in Ulaanbaatar</p><p>Departure Time</p><p>9:00am</p><p>Return Details</p><p>Returns to original departure point</p><p>Inclusions</p><ul><li>English-speaking tour guide and driver</li><li>National Park fees ( Genghis Khan’s Statue Complex, Terelj National Park, Ariyabal Meditation Temple in Terelj N.P.)</li><li>Horseback riding fee</li><li>Bottled water</li><li>Traditional meal for lunch</li><li>Hotel pickup and drop-off</li></ul><p>Exclusions</p><ul><li>Gratuities (optional)</li></ul><a>Read More</a><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Infant seats are available on request if advised at time of booking</li></ul><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-09-25 23:35:17', '2017-09-25 23:35:17', NULL),
(13, 8, 1, 0, 'text', '', '<p>Experience life like a nomad during this small group horseback riding tour in Terelj National Park. Travel two hours outside the capital city of Ulaanbaatar to the stunning rural landscapes and rolling hills of the Mongolian countryside. Follow a highly-qualified guide through the vast open space, then sit down for a traditional Mongolian meal that includes local beer, chums and meat. Tour is limited to four people to ensure a truly personal experience.</p><p>What to Expect</p><p>In a country with an equal number of horses to people, a quintessential activity in Mongolia is to go horseback riding through the stunning Mongolian landscape in a traditional nomadic setting. Perfectly situated a couple of hours drive from the City of Ulaanbaatar, Gorkhi-Terelj National Park is one of Mongolia’s most scenic and the country’s third largest protected area.&nbsp;<br><br>Your private English-speaking tour guide will meet you at the location of your choice in Ulaanbaatar at 8:50am. Your day will start with a brief city tour, followed by a car trip to Terelj, where the horseback riding will take place. Your thrilling horseback riding experience will be 3-hours long and led by a highly experienced trainer as well as your tour guide. Throughout the horseback riding tour, you will explore the beautiful and breathtaking landscapes of magnificent mountains in the backdrop with eternal blue skies.&nbsp;<br><br>This trip is a truly unique experience to step back in a time of a simpler way of life: the Mongolian Nomad. During the tour, you will explore the wilderness, Turtle Rock (gigantic eighty feet tall boulder in the shape of a turtle), Tuul River, and visit local households and nomad families for lunch. At the end of the horseback riding tour, you will enjoy a flavorful traditional Mongolian meal. After an eventful day, you will be returned back to the location of your choice in Ulaanbaatar where this adventure concludes.</p><p>Important Information</p><p>Departure Point</p><p>Your choice of location in Ulaanbaatar</p><p>Departure Time</p><p>8:50 am</p><p>Return Details</p><p>Returns to original departure point</p><p>Inclusions</p><ul><li>Hotel pickup and drop-off</li><li>National Park fees</li><li>Traditional lunch</li><li>Afternoon tea</li><li>Driver/guide</li><li>Fuel surcharge</li><li>Horseback riding equipment</li><li>Cow carriage</li></ul><p>Exclusions</p><ul><li>Souvenir photos (available to purchase)</li><li>Alcoholic drinks (available to purchase)</li><li>Personal expense</li><li>Travel and medical insurance</li><li>Optional activities &amp; additional services</li><li>Gratuities (optional)</li></ul><a>Read More</a><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Children from 0-12 years old are free of charge</li><li>Children must be accompanied by an adult</li><li>Please advise any specific dietary requirements at time of booking</li><li>Not recommended for pregnant women</li><li>Not recommended for participants with back problems</li><li>Operates in all weather conditions, please dress appropriately</li><li>A maximum of 7 people per booking</li><li>Minimum drinking age is 21 years</li></ul><a>Read More</a><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-09-25 23:40:43', '2017-09-25 23:40:43', NULL),
(14, 9, 1, 0, 'text', '', '<p>Visit Hustai National Park, home to the Takhi (Przewalski wild horses), to see the endangered horse species roaming freely on rolling hills of beautiful Mongolia along with other wildlife animals. The Park covers a vast area providing visitors a variety of outdoor activities to enjoy, including Takhi and bird watching, hiking, horseback riding, photography, and ancient ruin sight-seeing...etc.</p><p>What to Expect</p><p>At 9 o\'clock in the morning, your guide and driver will pick you up from your downtown Ulaanbaatar hotel and drive to Hustai National Park which is located approximately 95 kilometers (60 miles) west of Ulaanbaatar. You will travel on better conditioned asphalt roads for a couple of hours before reaching your destination. Along the way, see nomadic tents sprawling on beautiful landscape outside of Ulaanbaatar and get a first glimpse of nomadic lifestyle.</p><p>After arriving at Hustai National Park, take your time to explore extraordinary scenic spots where Asian wild horses graze, which is a result of the conservation program reintroduced by a group from the Netherlands in the framework of an international project. Later, a simple lunch will be provided. After lunch at the park, you will visit a local horseman family. There, you could experience their way of life, their culture, and traditions. A free trial of horseback riding is included. Afterwards, you will be transferred back to your Ulaanbaatar hotel where this loving day trip ends.</p><p>Important Information</p><p>Departure Point</p><p>Your downtown Ulaanbaatar hotel</p><p>Departure Time</p><p>9am</p><p>Return Details</p><p>Returns to original departure point</p><p>Inclusions</p><ul><li>English-speaking Local guide</li><li>Driver/guide</li><li>Lunch</li><li>Entrance fees</li><li>Ground transportation Included</li></ul><p>Exclusions</p><ul><li>Personal expense</li><li>Optional activity cost&nbsp;&nbsp;</li><li>Travel Insurance</li><li>Gratuities (optional)</li></ul><a>Read More</a><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Adult pricing applies to all travelers</li><li>Children must be accompanied by an adult</li><li>Minimum drinking age is 18 years</li><li>Dress code is smart casual</li></ul><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-09-25 23:45:01', '2017-09-25 23:45:01', NULL),
(15, 10, 1, 0, 'text', '', '<p>The Gobi desert is far away for a short weekend or a day\'s visit; therefore, this \"semi-Gobi\" in central Mongolia is your chance to experience desert life. Imagine a picture that consists of the Rocky Mountains in the back, sand dunes extending over dunes, green trees in and by the dunes, and a river flowing along the dunes. That is what Semi-Gobi looks like! Camel riding or horse riding is also included in this tour.</p><p>What to Expect</p><p>After you are picked up in the morning from your hotel in Ulaanbaatar, you will be driven to Elsen Tasarkhai sand dunes, a semi-desert type beautiful landscape with big sand dunes. Your lunch will be served at a suitable spot on the way. The mountain is home to hundreds of birds, deer and gazelle. You will be able to go hiking around the area or ride a camel for a couple of hours to the small sand dunes nearby called “Elsen Tasarkhai\".</p><p>Later, you will visit a local nomad family where you will have an opportunity to experience their way of life, their culture and traditions. Afterward, you will be transferred back to Ulaanbaatar where this tour concludes.</p><p>Important Information</p><p>Departure Point</p><p>Your centrally located Ulaanbaatar hotel or within the city</p><p>Departure Time</p><p>9am</p><p>Return Details</p><p>Your centrally located Ulaanbaatar hotel or within the city</p><p>Inclusions</p><ul><li>Local guide</li><li>Driver/guide</li><li>Lunch</li><li>Entrance fees</li><li>Camel/horse ride</li><li>Transportation</li></ul><p>Exclusions</p><ul><li>Personal expense</li><li>Optional activity cost&nbsp;&nbsp;</li><li>Travel Insurance</li><li>Gratuities (optional)</li></ul><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Adult pricing applies to all travelers</li><li>Children must be accompanied by an adult</li><li>Operates in all weather conditions, please dress appropriately</li></ul><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-09-25 23:46:27', '2017-09-25 23:46:27', NULL),
(16, 11, 1, 0, 'text', '', '<p>Mongolian shamanism is an all-encompassing system of belief that includes medicine, religion, a cult of nature, and a cult of ancestor worship. In 13th century, the leading shaman declared Genghis Khan the representative of Mongke Koko Tengri (the \"Eternal Blue Sky\"), the supreme god of the Mongols. With this declaration of divine status, it was accepted that his destiny was to rule the world. Religious tolerance was practiced in the Mongol Empire; however, to defy the Great Khan was equivalent of defying the will of God. Central&nbsp;to the system were the activities of male and female intercessors between the human world and the spirit world, Shamans (<i>böö</i>) and Shamanesses (<i>udgan</i>). Yet, they were not the only ones who could communicate with the spirit world. Nobles and clan leaders also performed spiritual functions and so did commoners. The hierarchy of Mongolian clan-based society was reflected in the manner of worship.&nbsp;<br><br></p><p>What to Expect</p><p>Mongolian and southern Siberian shamanism were originally developed by Stone Age hunters and Bronze Age herdsmen and later evolved into the psyche of the Mongols today. The steppe dwelling peoples of Eurasia worship Eternal Heaven (Munkh Tenger) above and Mother Earth (Etugan) below as well as the ancestral and natural spirits. The cosmology of Mongolian shamanism and its eight customary rituals are based on the concept that there are many invisible worlds in addition to the visible one. The shaman interacts with many other worlds or universes, and that interaction with spirits is an important part of shamans’ work. Each day, month, and year, shamans constantly perform their work with poetic invocations, musics, dances, and creative arts. A shaman is an intermediary between this world and the spirit world. They act on behalf of the community conducting ceremonial rituals, healing the people, and helping to guide others on the shamanic path. A shaman’s life belongs to the village and it is their responsibility to ensure the well being of the family, the community, and all of creation. In this way the shaman helps to maintain balance and harmony on both a personal and planetary level. &nbsp;</p><p>In&nbsp;the morning at 10am, you will embark for the tour to Shaman. This trip allows you to visit a wide assortments of interesting and divine&nbsp;experiences in your life.&nbsp;He or she will answer all the questions you have ever been wondered and puzzled. It is important for you to open up yourself fully and to express yourself freely. It is also important to follow your tour guide\'s advice on how to handle your questions throughout the event. The activity should be completed by late afternoon or early evening depending on your questions and your requests. You will be transferred back to your hotel where this tour concludes.</p><p>Important Information</p><p>Departure Point</p><p>Your Ulaanbaatar hotel</p><p>Departure Time</p><p>9am</p><p>Return Details</p><p>Your Ulaanbaatar hotel or any location in Ulaanbaatar</p><p>Inclusions</p><ul><li>Local guide</li><li>Driver</li><li>Meals as per itinerary&nbsp;</li><li>Entrance fees</li><li>Transportation Included</li></ul><p>Exclusions</p><ul><li>Alcoholic drinks (available to purchase)</li><li>Personal expense</li><li>Optional activity cost&nbsp;&nbsp;</li><li>Travel Insurance</li><li>Gratuities (optional)</li></ul><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Dress code is smart casual</li><li>Children must be accompanied by an adult</li><li>Adult pricing applies to all travelers</li></ul><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-09-25 23:47:26', '2017-09-25 23:47:26', NULL),
(17, 12, 1, 0, 'text', '', '<p>This private and bespoke excursion throughout Ulaanbaatar is lead by a dedicated and professional guide who is specially tailored for you. You will be fully immersed into Ulaanbaatar and be introduced to areas and places less traveled by tourist in Ulaanbaatar because there is so much more to Ulaanbaatar than Chinggis Khan (Genghis Khan).</p><p>What to Expect</p><p>See Ulaanbaatar in style as you cruise the street with an experienced and knowledgeable native Ulaanbaatar expert who will show you the most unusual as well as interesting sites of Ulaanbaatar. Your itinerary can be customized to suit your wants and needs. The choice of attractions you will be visiting and the length of time you will spend at each location fully depends on your preference</p><p>Food, arts, shopping, history, and music - everything will be taken into consideration. Your tour leader/guide is an Ulaanbaatar native and has excellent relationships with many of the industries and subcultures of the city who will tailor this excursion according to your personal needs to ensure you first-hand experience on how citizens of Ulaanbaatar live, eat, and play.</p><p>Throughout the day, you shall experience the Ulaanbaatar’s iconic attractions such as the National Museum, Bogd Khan Palace Museum, the National Art Gallery, Gandantegchilen Monastery, and Genghis Khan Square. Of course, food is essential so will be taken to one of the popular places for a lunch in Ulaanbaatar. Boasting some of the simplest yet tastiest dishes in the country, you can enjoy dishes ranging from the meatiest of what Mongolia offers to that Burger that you miss.</p><p>Important Information</p><p>Departure Point</p><p>Location of your choice within city of Ulaanbaatar</p><p>Departure Time</p><p>9:00am</p><p>Return Details</p><p>Location of your choice within city of Ulaanbaatar</p><p>Inclusions</p><ul><li>All taxes, fees and handling charges</li><li>Lunch</li><li>Driver/guide</li><li>Hotel pickup and drop-off</li></ul><p>Exclusions</p><ul><li>Personal expense</li><li>Additional services at restaurants</li><li>Dinner</li><li>Gratuities (optional)</li></ul><a>Read More</a><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>Please advise any specific dietary requirements at time of booking</li><li>Free airport transportation if you write a review</li></ul><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-09-25 23:49:58', '2017-09-25 23:49:58', NULL),
(19, 13, 1, 0, 'text', '', '<p>If you come to Ulaanbaatar, you should not miss Genghis Khan Statue Complex which is currently the biggest (131ft/40m tall) equestrian statue in the world. It is connected to Ulaanbaatar by a paved road of 34mi/54km. The complex includes a recreation area, restaurants, and souvenir shops occupying the base of the structure. From here, you could use an elevator or walk to the head of the horse through chest and back of the horse neck where you will have a fantastic panorama view over the nearby area.  <br></p><p>What to Expect</p><p>You will be leaving the city early in the morning to take advantage of the better asphalt road to arrive at Chonjinboldog area where Chinggis Khan Monument is located within an hour. You will see true nomadic lifestyle as soon as you travel outside of the city of Ulaanbaatar. Chinggis Khan Monument is an extremely tall stainless steel statue of Ghengiis Khaan approximately 1 hour drive away from Ulaanbaatar. You may take an elevator ride up to the horse neck with spectacular view of the surrounding countryside. There is also a small archaeology museum in the base of the statue as well as a decent restaurant along with ubiquitous souvenir shops. You may try on traditional Mongolian costumes at the museum. </p><p>After Chinggis Khan Monument, you will head to Terelj National Park which is the most accessible natural attraction from Ulaanbaatar. Hiking, horseback riding, and rafting are the most popular activities in the park. Terelj National Park has many excellent rock formations for rock including two famous formations named for things they resemble: \"Turtle Rock\" or \"Melkhii Khad\" in Mongolian and \"the Old Man Reading a Book\" or \"Praying Lama Rock.\"  You will enjoy lunch at Turtle Rock. After lunch, hike to Aryabal Monastery via a decent path and enjoy beautiful scenery along the way. In the evening, you will visit a nomad family to experience Mongolian life stye and hospitality before returning to Ulaanbaatar.</p><a>Read More</a><p>Important Information</p><p>Departure Point</p><p>Your centrally located Ulaanbaatar hotel</p><p>Departure Time</p><p>9am</p><p>Return Details</p><p>Any place in Ulaanbaatar you wished to be dropped off</p><p>Inclusions</p><ul><li>Local guide</li><li>Driver/guide</li><li>Lunch</li><li>Entrance fees</li><li>Transportation</li></ul><p>Exclusions</p><ul><li>Personal expense</li><li>Optional activity </li><li>Travel Insurance</li><li>Gratuities (optional)</li></ul><a>Read More</a><p>Additional Info</p><ul><li>Confirmation will be received at time of booking</li></ul><ul><li>All tours and transfers are all based in English Speaking local guides.</li><li>Children must be accompanied by an adult</li></ul><p>Cancellation Policy</p>', NULL, '', NULL, '', '2017-10-01 06:40:33', '2017-10-01 06:40:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `followed_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ltm_translations`
--

CREATE TABLE `ltm_translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `group` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `footer` tinyint(1) NOT NULL,
  `lang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `slug`, `description`, `text`, `footer`, `lang`, `created_at`, `updated_at`) VALUES
(1, 'About us', 'about', 'About us', '<p>Since 2016, we have been helping people the world over to enjoy unforgettable adventures to our homeland, and we do it all with expertise and passion.</p>\r\n\r\n<p>Because we&rsquo;re so keen on helping people see the real Mongolia and benefit from all of our professional and personal experience, we recently made the decision to rebrand our business to better reflect what it is we do.</p>\r\n\r\n<p>Thanks to feedback from our customers, we are now trading as Trip to Mongolia! (formerly Black Ibex Expeditions), because that&rsquo;s what we do. We take tourists on a journey of discovery, and while we may have a new name, we still offer the same unrivalled service and beautifully bespoke tours of a breathtaking nation.</p>\r\n\r\n<p>But we do more than just organise tours and bespoke trips to Mongolia, we help people to experience the true beauty of a country which is steeped in history and culture and one which thrives on a more simple way of life. We want each and every visitor to leave having experienced a truly unforgettable journey and we do that every single time thanks to our focus on quality and service.</p>\r\n\r\n<p>From our base in Ulaanbaatar, our experienced team of travel specialists knows exactly what works when it comes to the perfect Mongolian travel experience and we expect nothing but the very best from the partner companies we choose to work with.</p>\r\n\r\n<p>From hotels and restaurants to tourist camps, we carefully select and monitor third party providers who share our passion and who, like us, strive for the very best standards, because that&rsquo;s the only way we can guarantee that the entire Mongolian experience from start to finish is an entirely positive one.</p>\r\n\r\n<p>Trust Trip to Mongolia! to deliver the trip of a lifetime. Our knowledge, experience and passion is, afterall, why we&rsquo;re now the leading name in Mongolian travel.</p>\r\n', 0, 'en', '2017-09-28 20:29:03', '2017-11-07 20:59:16'),
(2, 'Бидний тухай', 'биднийтухай', 'Бид дэлхийд хамгийн өргөн хэрэглэгддэг хэлээр та бүхэнд үйлчлэх болно', '<p>dsvdsfv</p>\r\n', 0, 'en', '2017-10-24 03:46:16', '2017-11-07 20:59:29');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('admin@admin.com', 'eba9f7c80292f5ab17236c50387c5635881957ada1ee3248f0e8b4ca243b8164', '2017-10-06 03:57:45');

-- --------------------------------------------------------

--
-- Table structure for table `poll_votes`
--

CREATE TABLE `poll_votes` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `option_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `popularity_stats`
--

CREATE TABLE `popularity_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `trackable_id` bigint(20) UNSIGNED NOT NULL,
  `trackable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `one_day_stats` int(11) NOT NULL DEFAULT '0',
  `seven_days_stats` int(11) NOT NULL DEFAULT '0',
  `thirty_days_stats` int(11) NOT NULL DEFAULT '0',
  `all_time_stats` int(11) NOT NULL DEFAULT '0',
  `raw_stats` varchar(1000) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `popularity_stats`
--

INSERT INTO `popularity_stats` (`id`, `trackable_id`, `trackable_type`, `one_day_stats`, `seven_days_stats`, `thirty_days_stats`, `all_time_stats`, `raw_stats`, `created_at`, `updated_at`) VALUES
(1, 2, 'App\\Posts', 1, 1, 1, 1, 'a:1:{s:10:\"2017-09-18\";i:1;}', '2017-09-18 06:31:12', '2017-09-18 06:31:12'),
(2, 3, 'App\\Posts', 1, 1, 1, 1, 'a:1:{s:10:\"2017-09-18\";i:1;}', '2017-09-18 06:32:44', '2017-09-18 06:32:44'),
(3, 4, 'App\\Posts', 1, 1, 2, 2, 'a:2:{s:10:\"2017-09-18\";i:1;s:10:\"2017-09-26\";i:1;}', '2017-09-18 06:34:18', '2017-09-25 22:41:32'),
(4, 5, 'App\\Posts', 1, 3, 7, 7, 'a:6:{s:10:\"2017-09-26\";i:2;s:10:\"2017-09-29\";i:1;s:10:\"2017-10-17\";i:1;s:10:\"2017-10-20\";i:1;s:10:\"2017-10-22\";i:1;s:10:\"2017-10-25\";i:1;}', '2017-09-25 22:48:57', '2017-10-25 09:27:27'),
(5, 6, 'App\\Posts', 1, 1, 2, 2, 'a:2:{s:10:\"2017-09-26\";i:1;s:10:\"2017-10-23\";i:1;}', '2017-09-25 23:16:51', '2017-10-22 19:23:41'),
(6, 7, 'App\\Posts', 1, 3, 4, 4, 'a:4:{s:10:\"2017-09-26\";i:1;s:10:\"2017-10-20\";i:1;s:10:\"2017-10-22\";i:1;s:10:\"2017-10-25\";i:1;}', '2017-09-25 23:35:19', '2017-10-25 11:42:14'),
(7, 8, 'App\\Posts', 1, 2, 4, 4, 'a:4:{s:10:\"2017-09-26\";i:1;s:10:\"2017-10-11\";i:1;s:10:\"2017-10-22\";i:1;s:10:\"2017-10-25\";i:1;}', '2017-09-25 23:40:45', '2017-10-25 10:08:37'),
(8, 9, 'App\\Posts', 1, 4, 6, 6, 'a:6:{s:10:\"2017-09-26\";i:1;s:10:\"2017-10-11\";i:1;s:10:\"2017-10-20\";i:1;s:10:\"2017-10-22\";i:1;s:10:\"2017-10-24\";i:1;s:10:\"2017-10-25\";i:1;}', '2017-09-25 23:45:02', '2017-10-25 12:09:09'),
(9, 10, 'App\\Posts', 1, 1, 4, 4, 'a:4:{s:10:\"2017-09-26\";i:1;s:10:\"2017-09-27\";i:1;s:10:\"2017-10-06\";i:1;s:10:\"2017-10-24\";i:1;}', '2017-09-25 23:46:29', '2017-10-23 19:58:10'),
(10, 11, 'App\\Posts', 1, 3, 5, 5, 'a:5:{s:10:\"2017-09-26\";i:1;s:10:\"2017-09-27\";i:1;s:10:\"2017-10-22\";i:1;s:10:\"2017-10-24\";i:1;s:10:\"2017-10-25\";i:1;}', '2017-09-25 23:47:28', '2017-10-25 12:09:09'),
(11, 12, 'App\\Posts', 1, 2, 5, 5, 'a:5:{s:10:\"2017-09-26\";i:1;s:10:\"2017-09-28\";i:1;s:10:\"2017-10-17\";i:1;s:10:\"2017-10-23\";i:1;s:10:\"2017-10-24\";i:1;}', '2017-09-25 23:49:59', '2017-10-23 21:59:45'),
(12, 13, 'App\\Posts', 1, 1, 3, 5, 'a:3:{s:10:\"2017-09-26\";i:2;s:10:\"2017-10-25\";i:2;s:10:\"2017-11-02\";i:1;}', '2017-09-25 23:50:56', '2017-11-01 22:28:44'),
(13, 14, 'App\\Posts', 1, 1, 1, 1, 'a:1:{s:10:\"2017-10-10\";i:1;}', '2017-10-09 18:44:12', '2017-10-09 18:44:13'),
(14, 15, 'App\\Posts', 1, 1, 1, 1, 'a:1:{s:10:\"2017-10-15\";i:1;}', '2017-10-15 01:11:57', '2017-10-15 01:11:57');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `ordertype` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `slug` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thumb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `approve` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `show_in_homepage` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shared` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `tags` text COLLATE utf8_unicode_ci,
  `lang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `featured_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `published_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pagination` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `category_id`, `type`, `ordertype`, `slug`, `title`, `body`, `thumb`, `approve`, `show_in_homepage`, `shared`, `tags`, `lang`, `created_at`, `updated_at`, `featured_at`, `published_at`, `deleted_at`, `pagination`) VALUES
(5, 1, 12, 'news', '', 'ulaanbaatar-private-day-tour', 'Ulaanbaatar Private Day Tour', '168,000', '2017-09/26/ulaanbaatar-private-day-tour_1506409828', 'yes', NULL, '0', 'tour,city,ulaanbaatar', 'en', '2017-09-25 22:48:56', '2017-09-25 23:10:28', NULL, '2017-09-25 22:48:56', NULL, NULL),
(6, 1, 12, 'news', '', 'full-day-tour-of-ulaanbaatar-with-museum-and-black-market', 'Full-Day Tour of Ulaanbaatar With Museum and Black-market', '180000', '2017-09/26/full-day-tour-of-ulaanbaatar-with-museum-and-black-market_1506410209', 'yes', NULL, '0', '', 'en', '2017-09-25 23:16:49', '2017-09-25 23:16:49', NULL, '2017-09-25 23:16:49', NULL, NULL),
(7, 1, 14, 'news', '', 'genghis-khan-day-tour', 'Genghis Khan Day Tour', '270000', '2017-09/26/genghis-khan-day-tour_1506411317', 'yes', NULL, '0', '', 'en', '2017-09-25 23:35:17', '2017-09-25 23:35:17', NULL, '2017-09-25 23:35:17', NULL, NULL),
(8, 1, 3, 'news', '', 'small-group-horseback-riding-day-tour', 'Small-Group Horseback Riding Day Tour', '200000', '2017-09/26/small-group-horseback-riding-day-tour_1506411643', 'yes', NULL, '0', '', 'en', '2017-09-25 23:40:43', '2017-09-25 23:40:43', NULL, '2017-09-25 23:40:43', NULL, NULL),
(9, 1, 13, 'news', '', 'day-tour-of-hustai-national-park', 'Day Tour of Hustai National Park', '218000', '2017-09/26/day-tour-of-hustai-national-park_1506411901', 'yes', 'yes', '0', '', 'en', '2017-09-25 23:45:01', '2017-09-25 23:54:40', '2017-09-25 23:54:40', '2017-09-25 23:45:01', NULL, NULL),
(10, 1, 13, 'news', '', '1-day-semi-gobi-tour-including-lunch-and-free-camel-or-horseback-ride', '1 Day Semi-Gobi Tour Including Lunch And Free Camel or Horseback Ride', '220000', '2017-09/26/1-day-semi-gobi-tour-including-lunch-and-free-camel-or-horseback-ride_1506411987', 'yes', NULL, '0', '', 'en', '2017-09-25 23:46:27', '2017-09-25 23:46:27', NULL, '2017-09-25 23:46:27', NULL, NULL),
(11, 1, 13, 'news', '', '1-day-shaman-tour-including-lunch', '1 Day Shaman Tour Including Lunch', '400000', '2017-09/26/1-day-shaman-tour-including-lunch_1506412046', 'yes', 'yes', '0', '', 'en', '2017-09-25 23:47:26', '2017-09-25 23:54:32', '2017-09-25 23:54:32', '2017-09-25 23:47:26', NULL, NULL),
(12, 1, 3, 'news', '', 'day-tour-with-a-native-creative-ulaanbaatar', 'Day Tour With A Native Creative Ulaanbaatar', '233000', '2017-09/26/day-tour-with-a-native-creative-ulaanbaatar_1506412198', 'yes', NULL, '0', '', 'en', '2017-09-25 23:49:58', '2017-09-25 23:49:58', NULL, '2017-09-25 23:49:58', NULL, NULL),
(13, 1, 3, 'news', '', 'genghis-khan-statue-complex-and-terelj-national-park-including-lunch', 'Genghis Khan Statue Complex and Terelj National Park Including Lunch', '180000', '2017-10/01/genghis-khan-statue-complex-and-terelj-national-park-including-lunch_1506868833', 'yes', 'yes', '0', '', 'en', '2017-09-25 23:50:54', '2017-10-01 06:40:33', '2017-09-25 23:52:13', '2017-09-25 23:50:54', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reactions`
--

CREATE TABLE `reactions` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `reaction_type` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reactions_icons`
--

CREATE TABLE `reactions_icons` (
  `id` int(10) UNSIGNED NOT NULL,
  `ord` int(11) NOT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `reaction_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`) VALUES
(1, 'p-buzzynews', '\"on\"'),
(2, 'p-buzzylists', '\"on\"'),
(3, 'p-buzzyvideos', '\"on\"'),
(4, 'p-buzzypolls', '\"on\"'),
(5, 'siteposturl', '\"1\"'),
(6, 'AutoInHomepage', '\"true\"'),
(7, 'languagetype', '\"en_US\"'),
(27, '_token', '\"ZSwAVRv2Wqu7RSu91nt3qGwqSPr6s0m2Nfjzusqz\"'),
(28, 'sitename', '\"Travel to Mongolia\"'),
(29, 'sitetitle', '\"Travel to Mongolia\"'),
(30, 'sitemetadesc', '\"Travel to Mongolia\"'),
(31, 'termspage', '\"\"'),
(32, 'siteemail', '\"\"'),
(33, 'sitelanguage', '\"en_EN\"'),
(34, 'googlefont', '\"Lato:400,500,500italic,600,700&subset=latin,latin-ext\"'),
(35, 'sitefontfamily', '\"\'Lato\', Helvetica, Arial, sans-serif\"'),
(36, 'facebookapp', '\"\"'),
(37, 'facebookappsecret', '\"\"'),
(38, 'googleapp', '\"\"'),
(39, 'googleappsecret', '\"\"'),
(40, 'twitterapp', '\"\"'),
(41, 'twitterappsecret', '\"\"'),
(42, 'headcode', '\"\"'),
(43, 'footercode', '\"\"');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `usertype` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username_slug` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `town` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `genre` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `icon` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `facebook_id` int(11) DEFAULT NULL,
  `about` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebookurl` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitterurl` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `weburl` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `splash` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `usertype`, `username`, `username_slug`, `name`, `town`, `genre`, `icon`, `email`, `password`, `facebook_id`, `about`, `facebookurl`, `twitterurl`, `weburl`, `remember_token`, `created_at`, `updated_at`, `splash`) VALUES
(1, 'Admin', 'admin', 'admin', NULL, NULL, '', NULL, 'admin@admin.com', '$2y$10$6.xxH3JerrORaecKN/8zGeNYfY7aBB9YlbERdlAcPYBPlIXmMJ0SK', NULL, NULL, NULL, NULL, NULL, 'sRMJgqx9YneaM2bscvzyqen1qPVfxUgiCS0B2ClABd4ypreCccMvPpHyYnqc', '2017-09-18 06:16:06', '2017-10-06 03:55:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `widgets`
--

CREATE TABLE `widgets` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `display` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entrys`
--
ALTER TABLE `entrys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ltm_translations`
--
ALTER TABLE `ltm_translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `poll_votes`
--
ALTER TABLE `poll_votes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popularity_stats`
--
ALTER TABLE `popularity_stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reactions`
--
ALTER TABLE `reactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reactions_icons`
--
ALTER TABLE `reactions_icons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_username_slug_unique` (`username_slug`);

--
-- Indexes for table `widgets`
--
ALTER TABLE `widgets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `entrys`
--
ALTER TABLE `entrys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ltm_translations`
--
ALTER TABLE `ltm_translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `poll_votes`
--
ALTER TABLE `poll_votes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `popularity_stats`
--
ALTER TABLE `popularity_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `reactions`
--
ALTER TABLE `reactions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `reactions_icons`
--
ALTER TABLE `reactions_icons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `widgets`
--
ALTER TABLE `widgets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
