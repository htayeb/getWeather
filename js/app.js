// $(document).foundation()
$(function(){
    var cities = 
[ 
"100 Mile House, BC", 
"Abbotsford, BC", 
"Agassiz, BC", 
"Airdrie, AB", 
"Aklavik, NT", 
"Akulivik, QC", 
"Alert, NU", 
"Alexandria, ON", 
"Algonquin Park (Brent), ON", 
"Algonquin Park (Lake of Two Rivers), ON", 
"Alliston, ON", 
"Alma, QC", 
"Altona, MB", 
"Amherst, NS", 
"Amos, QC", 
"Amqui, QC", 
"Annapolis Royal, NS", 
"Antigonish, NS", 
"Apsley, ON", 
"Arctic Bay, NU", 
"Armstrong, ON", 
"Arnes, MB", 
"Arviat, NU", 
"Asbestos, QC", 
"Assiniboia, SK", 
"Athabasca, AB", 
"Atikokan, ON", 
"Atlin, BC", 
"Attawapiskat, ON", 
"Aupaluk, QC", 
"Baccaro Point, NS", 
"Bachelors Island, MB", 
"Baddeck, NS", 
"Badger, NL", 
"Bagotville, QC", 
"Baie-Comeau, QC", 
"Baie-James, QC", 
"Baie-Saint-Paul, QC", 
"Baker Lake, NU", 
"Bancroft, ON", 
"Banff, AB", 
"Barrhead, AB", 
"Barrie, ON", 
"Barry's Bay, ON", 
"Bas-Caraquet, NB", 
"Bathurst, NB", 
"Bay Roberts, NL", 
"Beauceville, QC", 
"Beauharnois, QC", 
"Beaver Creek, YT", 
"Beaver Island, NS", 
"Beaverlodge, AB", 
"B√©cancour, QC", 
"Bella Bella, BC", 
"Bella Coola, BC", 
"Belleville, ON", 
"Berens River, MB", 
"Berni√®res, QC", 
"Berthierville, QC", 
"Big Trout Lake, ON", 
"Biggar, SK", 
"Bissett, MB", 
"Blainville, QC", 
"Blanc-Sablon, QC", 
"Blind River, ON", 
"Bloodvein, MB", 
"Blue River, BC", 
"Boisbriand, QC", 
"Bonaventure, QC", 
"Bonavista, NL", 
"Bouctouche, NB", 
"Bow Island, AB", 
"Bow Valley (Provincial Park), AB", 
"Bracebridge, ON", 
"Brampton, ON", 
"Brandon, MB", 
"Brantford, ON", 
"Breton, AB", 
"Bridgetown, NS", 
"Bridgewater, NS", 
"Brier Island, NS", 
"Broadview, SK", 
"Brochet, MB", 
"Brockville, ON", 
"Brooks, AB", 
"Buchans, NL", 
"Buffalo Narrows, SK", 
"Burgeo, NL", 
"Burk's Falls, ON", 
"Burlington, ON", 
"Burns Lake, BC", 
"Burwash Landing, YT", 
"Cache Creek, BC", 
"Caledon, ON", 
"Calgary, AB", 
"Calgary (Olympic Park), AB", 
"Cambridge, ON", 
"Cambridge Bay, NU", 
"Campbell River, BC", 
"Campbellton, NL", 
"Campbellton, NB", 
"Camrose, AB", 
"Candiac, QC", 
"Canmore, AB", 
"Canora, SK", 
"Cap Chat, QC", 
"Cape Dorset, NU", 
"Cape George, NS", 
"Cape Race, NL", 
"Carberry, MB", 
"Carcross, YT", 
"Cardston, AB", 
"Caribou, NS", 
"Carignan, QC", 
"Carleton-sur-Mer, QC", 
"Carlyle, SK", 
"Carmacks, YT", 
"Carman, MB", 
"Cartwright, NL", 
"Cartwright Junction (Trans-Labrador Hwy), NL", 
"Cassiar, BC", 
"Castlegar, BC", 
"Chambly, QC", 
"Chandler, QC", 
"Channel-Port aux Basques, NL", 
"Chapleau, ON", 
"Charlevoix, QC", 
"Charlo, NB", 
"Charlottetown, PE", 
"Chatham-Kent, ON", 
"Chelsea, QC", 
"Chesterfield, NU", 
"Ch√©ticamp, NS", 
"Chetwynd, BC", 
"Chevery, QC", 
"Chibougamau, QC", 
"Chilliwack, BC", 
"Chipman, NB", 
"Churchill, MB", 
"Churchill Falls, NL", 
"Clarenville, NL", 
"Claresholm, AB", 
"Clearwater, BC", 
"Clinton, BC", 
"Clyde River, NU", 
"Coaticook, QC", 
"Cobourg, ON", 
"Cochrane, ON", 
"Cochrane, AB", 
"Cold Lake, AB", 
"Collingwood, ON", 
"Collins Bay, SK", 
"Colville Lake, NT", 
"Comox, BC", 
"Contrecoeur, QC", 
"Coquihalla Highway - Hope to Merritt, HEF", 
"Coquihalla Highway - Merritt to Kamloops, HEF", 
"Coral Harbour, NU", 
"Corner Brook, NL", 
"Cornwall, ON", 
"Coronach, SK", 
"Coronation, AB", 
"Courtenay, BC", 
"Cowansville, QC", 
"Cranbrook, BC", 
"Creston, BC", 
"Crowsnest, AB", 
"Cummins Lakes (Provincial Park), BC", 
"Cypress Hills (Provincial Park), SK", 
"Dalhousie, NB", 
"Daniel's Harbour, NL", 
"Dauphin, MB", 
"Dawson, YT", 
"Dawson Creek, BC", 
"Dease Lake, BC", 
"Deep River, ON", 
"Deer Lake, NL", 
"Deerwood, MB", 
"Deline, NT", 
"Delson, QC", 
"Delta, MB", 
"Dempster (Highway), YT", 
"Detah, NT", 
"Deux-Montagnes, QC", 
"Digby, NS", 
"Doaktown, NB", 
"Dolbeau-Mistassini, QC", 
"Dome Creek, BC", 
"Dominion City, MB", 
"Donnacona, QC", 
"Dorion, ON", 
"Drayton Valley, AB", 
"Drumheller, AB", 
"Drummondville, QC", 
"Dryden, ON", 
"Dunchurch, ON", 
"Dundalk, ON", 
"Ear Falls, ON", 
"Earlton, ON", 
"East Point, PE", 
"Eastend, SK", 
"Economy, NS", 
"Edmonton, AB", 
"Edmonton (Int'l Aprt), AB", 
"Edmundston, NB", 
"Edson, AB", 
"Ekati (Lac de Gras), NT", 
"Elbow, SK", 
"Elk Island (National Park), AB", 
"Elliot Lake, ON", 
"Emerson, MB", 
"Englee, NL", 
"Ennadai, NU", 
"Enterprise, NT", 
"Escoumins, QC", 
"Eskasoni, NS", 
"Esquimalt, BC", 
"Estevan, SK", 
"Estevan Point, BC", 
"Esther, AB", 
"Eureka, NU", 
"Farnham, QC", 
"Faro, YT", 
"Fermont, QC", 
"Fisher Branch, MB", 
"Flin Flon, MB", 
"Forestville, QC", 
"Forillon, QC", 
"Forillon (National Park), QC", 
"Fort Albany, ON", 
"Fort Chipewyan, AB", 
"Fort Erie, ON", 
"Fort Frances, ON", 
"Fort Good Hope, NT", 
"Fort Liard, NT", 
"Fort McMurray, AB", 
"Fort McPherson, NT", 
"Fort Nelson, BC", 
"Fort Providence, NT", 
"Fort Qu'Appelle, SK", 
"Fort Resolution, NT", 
"Fort Severn, ON", 
"Fort Simpson, NT", 
"Fort Smith, NT", 
"Fort St. John, BC", 
"Fourchu Head, NS", 
"Fredericton, NB", 
"Fundy (National Park), NB", 
"Gameti, NT", 
"Gananoque, ON", 
"Gander, NL", 
"Garden Creek, AB", 
"Gasp√©, QC", 
"Gasp√©sie (Parc national), QC", 
"Gatineau, QC", 
"Gibsons, BC", 
"Gillam, MB", 
"Gimli, MB", 
"Gjoa Haven, NU", 
"Goderich, ON", 
"Gods Lake, MB", 
"Gogama, ON", 
"Golden, BC", 
"Gonzales Point, BC", 
"Good Hope Lake, BC", 
"Gore Bay, ON", 
"Gouin (R√©servoir), QC", 
"Granby, QC", 
"Grand Bank, NL", 
"Grand Beach, MB", 
"Grand √âtang, NS", 
"Grand Falls, NB", 
"Grand Falls-Windsor, NL", 
"Grand Forks, BC", 
"Grand Manan, NB", 
"Grand Rapids, MB", 
"Grande Cache, AB", 
"Grande Prairie, AB", 
"Grande-Vall√©e, QC", 
"Gravenhurst, ON", 
"Greater Napanee, ON", 
"Greater Sudbury, ON", 
"Greenstone (Beardmore), ON", 
"Greenstone (Geraldton), ON", 
"Greenstone (Nakina), ON", 
"Greenwood, NS", 
"Gretna, MB", 
"Grise Fiord, NU", 
"Gros Morne, NL", 
"Guelph, ON", 
"Gulf Islands (Southern), BC", 
"Gull Bay, ON", 
"Gull Island Rapids (Trans-Labrador Hwy), NL", 
"Guysborough, NS", 
"Haines Junction, YT", 
"Haldimand County, ON", 
"Haliburton, ON", 
"Halifax, NS", 
"Halifax (Shearwater), NS", 
"Hall Beach, NU", 
"Halton Hills, ON", 
"Hamilton, ON", 
"Happy Valley-Goose Bay, NL", 
"Hart Island, NS", 
"Havre St-Pierre, QC", 
"Hawkesbury, ON", 
"Hay River, NT", 
"Hearst, ON", 
"Hendrickson Creek, AB", 
"High Level, AB", 
"High River, AB", 
"Highvale, AB", 
"Highway 16 - Smithers to Terrace, HEF", 
"Highway 3 - Hope to Princeton via Allison Pass, HEF", 
"Highway 3 - Paulson Summit to Kootenay Pass, HEF", 
"Highway 97 - Clinton to 100 Mile House via Begbie Summit, HEF", 
"Highway 97 - Pine Pass, HEF", 
"Hinton, AB", 
"Hope, BC", 
"Hope Slide, BC", 
"Hopedale, NL", 
"Hopewell, NB", 
"Hornepayne, ON", 
"Hudson Bay, SK", 
"Humboldt, SK", 
"Hunters Point, MB", 
"Huntingdon, QC", 
"Huntsville, ON", 
"Igloolik, NU", 
"Ignace, ON", 
"√éles-de-la-Madeleine, QC", 
"Indian Head, SK", 
"Indin River, NT", 
"Ingonish, NS", 
"Inukjuak, QC", 
"Inuvik, NT", 
"Invermere, BC", 
"Iqaluit, NU", 
"Island Lake, MB", 
"Ivujivik, QC", 
"Jasper, AB", 
"Joliette, QC", 
"Kakabeka Falls, ON", 
"Kaladar, ON", 
"Kamloops, BC", 
"Kamouraska, QC", 
"Kamsack, SK", 
"Kananaskis (Nakiska Ridgetop), AB", 
"Kangiqsualujjuaq, QC", 
"Kangiqsujuaq, QC", 
"Kangirsuk, QC", 
"Kapuskasing, ON", 
"Kawartha Lakes (Fenelon Falls), ON", 
"Kawartha Lakes (Lindsay), ON", 
"Kejimkujik (National Park), NS", 
"Kelowna, BC", 
"Kemptville, ON", 
"Kenora, ON", 
"Kentville, NS", 
"Key Lake, SK", 
"Killarney, ON", 
"Kimmirut, NU", 
"Kincardine, ON", 
"Kindersley, SK", 
"Kingston, ON", 
"Kirkland Lake, ON", 
"Kitchener-Waterloo, ON", 
"Kitimat, BC", 
"Kluane Lake, YT", 
"Kootenay (National Park), BC", 
"Kouchibouguac, NB", 
"Kugaaruk, NU", 
"Kugluktuk, NU", 
"Kuujjuaq, QC", 
"Kuujjuarapik, QC", 
"L'Anse-au-Loup, NL", 
"L'Assomption, QC", 
"L'Islet, QC", 
"La Grande Rivi√®re, QC", 
"La Grande-Quatre, QC", 
"La Loche, SK", 
"La Malbaie, QC", 
"La Prairie, QC", 
"La Ronge, SK", 
"La Sarre, QC", 
"La Scie, NL", 
"La Tuque, QC", 
"La V√©rendrye (R√©serve faunique), QC", 
"Labrador City, NL", 
"Lac La Biche, AB", 
"Lac Raglan, QC", 
"Lac-M√©gantic, QC", 
"Lac-Saint-Jean, QC", 
"Lachute, QC", 
"Lacombe, AB", 
"Lake Superior (Provincial Park), ON", 
"Lambton Shores, ON", 
"Lanaudi√®re, QC", 
"Lansdowne House, ON", 
"Last Mountain Lake (Sanctuary), SK", 
"Laurentides (R√©serve faunique), QC", 
"Laval, QC", 
"Le Gardeur, QC", 
"Leader, SK", 
"Leaf Rapids, MB", 
"Leamington, ON", 
"Lethbridge, AB", 
"L√©vis, QC", 
"Lewisporte, NL", 
"Liard River, BC", 
"Lillooet, BC", 
"Lincoln, ON", 
"Little Grand Rapids, MB", 
"Liverpool, NS", 
"Lloydminster, SK", 
"Lloydminster, AB", 
"London, ON", 
"Longueuil, QC", 
"Lorraine, QC", 
"Louiseville, QC", 
"Lucky Lake, SK", 
"Lunenburg, NS", 
"Lutselke, NT", 
"Lynn Lake, MB", 
"Lytton, BC", 
"Mackenzie, BC", 
"Magog, QC", 
"Makkovik, NL", 
"Malahat, BC", 
"Malay Falls, NS", 
"Manicouagan, QC", 
"Maniwaki, QC", 
"Maple Creek, SK", 
"Maple Plains, PE", 
"Marathon, ON", 
"Marble Mountain, NL", 
"Marieville, QC", 
"Markham, ON", 
"Mary's Harbour, NL", 
"Marystown, NL", 
"Mascouche, QC", 
"Masset, BC", 
"Matagami, QC", 
"Matane, QC", 
"Matapedia, QC", 
"Mauricie, QC", 
"Mayo, YT", 
"McBride, BC", 
"McCreary, MB", 
"Meadow Lake, SK", 
"Medicine Hat, AB", 
"Melfort, SK", 
"Melita, MB", 
"Melville, SK", 
"Merritt, BC", 
"Midland, ON", 
"Mildred Lake, AB", 
"Milk River, AB", 
"Mine Centre, ON", 
"Mingan, QC", 
"Minnedosa, MB", 
"Mirabel, QC", 
"Miramichi, NB", 
"Miscou Island, NB", 
"Mississauga, ON", 
"Moncton, NB", 
"Mont Saint-Hilaire, QC", 
"Mont-Joli, QC", 
"Mont-Laurier, QC", 
"Mont-Tremblant, QC", 
"Montmagny, QC", 
"Montr√©al, QC", 
"Montreal River Harbour, ON", 
"Moose Jaw, SK", 
"Moosomin, SK", 
"Moosonee, ON", 
"Morden, MB", 
"Morris, MB", 
"Morrisburg, ON", 
"Mount Carleton (Provincial Park), NB", 
"Mount Forest, ON", 
"Muncho Lake, BC", 
"Murdochville, QC", 
"Musgrave Harbour, NL", 
"Muskoka, ON", 
"Nahanni Butte, NT", 
"Nain, NL", 
"Nakusp, BC", 
"Nanaimo, BC", 
"Nanisivik, NU", 
"Natashquan, QC", 
"Naujaat, NU", 
"Nelson, BC", 
"New Carlisle, QC", 
"New Glasgow, NS", 
"New Tecumseth, ON", 
"New-Wes-Valley, NL", 
"Newmarket, ON", 
"Niagara Falls, ON", 
"Nicolet, QC", 
"Nipawin, SK", 
"Nipigon, ON", 
"Nordegg, AB", 
"Norfolk, ON", 
"Norman Wells, NT", 
"North Battleford, SK", 
"North Bay, ON", 
"North Cape, PE", 
"North East Margaree, NS", 
"North Mountain (Cape Breton), NS", 
"North Perth, ON", 
"Norway House, MB", 
"Oak Point, MB", 
"Oakville, ON", 
"Ogoki, ON", 
"Okanagan Connector - Merritt to Kelowna, HEF", 
"Okotoks, AB", 
"Old Crow, YT", 
"Onefour, AB", 
"Orangeville, ON", 
"Orillia, ON", 
"Oromocto, NB", 
"Oshawa, ON", 
"Osoyoos, BC", 
"Ottawa (Kanata - Orl√©ans), ON", 
"Ottawa (Richmond - Metcalfe), ON", 
"Otterburn Park, QC", 
"Outlook, SK", 
"Owen Sound, ON", 
"Oxbow, SK", 
"Oxford House, MB", 
"Oxtongue Lake, ON", 
"Pangnirtung, NU", 
"Papineau, QC", 
"Parent, QC", 
"Parrsboro, NS", 
"Parry Sound, ON", 
"Paulatuk, NT", 
"Peace River, AB", 
"Peawanuck, ON", 
"Pelican Narrows, SK", 
"Pemberton, BC", 
"Pembroke, ON", 
"Penticton, BC", 
"Perc√©, QC", 
"Petawawa, ON", 
"Peterborough, ON", 
"Pickering, ON", 
"Pickle Lake, ON", 
"Pikangikum, ON", 
"Pilot Mound, MB", 
"Pinawa, MB", 
"Pincher Creek, AB", 
"Pincourt, QC", 
"Pine Falls, MB", 
"Pitt Meadows, BC", 
"Placentia, NL", 
"Point Escuminac, NB", 
"Point Lepreau, NB", 
"Pointe-√†-la-Croix, QC", 
"Pond Inlet, NU", 
"Pontiac, QC", 
"Poplar River, MB", 
"Port Alberni, BC", 
"Port au Choix, NL", 
"Port Carling, ON", 
"Port Colborne, ON", 
"Port Elgin, ON", 
"Port Hardy, BC", 
"Port Hawkesbury, NS", 
"Port Perry, ON", 
"Port-Cartier, QC", 
"Port-Menier, QC", 
"Portage la Prairie, MB", 
"Powell River, BC", 
"Pr√©vost, QC", 
"Prince Albert, SK", 
"Prince Edward (Picton), ON", 
"Prince George, BC", 
"Prince Rupert, BC", 
"Princeton, BC", 
"Pukatawagan, MB", 
"Puntzi Mountain, BC", 
"Puvirnituq, QC", 
"Qikiqtarjuaq, NU", 
"Quaqtaq, QC", 
"Qu√©bec, QC", 
"Quesnel, BC", 
"Quinte West, ON", 
"Quispamsis, NB", 
"Rainbow Lake, AB", 
"Rancheria, YT", 
"Rankin Inlet, NU", 
"Red Deer, AB", 
"Red Earth Creek, AB", 
"Red Lake, ON", 
"Regina, SK", 
"Renfrew, ON", 
"Repentigny, QC", 
"Resolute, NU", 
"Revelstoke, BC", 
"Richelieu, QC", 
"Richer, MB", 
"Richibucto, NB", 
"Richmond Hill, ON", 
"Rigaud, QC", 
"Rigolet, NL", 
"Rimouski, QC", 
"Rivi√®re-du-Loup, QC", 
"Roberval, QC", 
"Roblin, MB", 
"Rock Creek, BC", 
"Rock River, YT", 
"Rockglen, SK", 
"Rocky Harbour, NL", 
"Rocky Mountain House, AB", 
"Rodney, ON", 
"Rogersville, NB", 
"Rondeau (Provincial Park), ON", 
"Rosem√®re, QC", 
"Rosetown, SK", 
"Ross River, YT", 
"Rosthern, SK", 
"Rouyn-Noranda, QC", 
"Sachigo Lake, ON", 
"Sachs Harbour, NT", 
"Sackville, NB", 
"Saguenay, QC", 
"Saint Andrews, NB", 
"Saint John, NB", 
"Saint-Amable, QC", 
"Saint-Basile Le Grand, QC", 
"Saint-Constant, QC", 
"Saint-Eustache, QC", 
"Saint-F√©licien, QC", 
"Saint-Georges, QC", 
"Saint-Hyacinthe, QC", 
"Saint-Jean-sur-Richelieu, QC", 
"Saint-J√©r√¥me, QC", 
"Saint-Lazare, QC", 
"Saint-Lin-Laurentides, QC", 
"Saint-Luc, QC", 
"Saint-Michel-des-Saints, QC", 
"Saint-Nic√©phore, QC", 
"Saint-Quentin, NB", 
"Saint-R√©mi, QC", 
"Saint-Sauveur, QC", 
"Saint-Timoth√©e, QC", 
"Sainte-Agathe, QC", 
"Sainte-Anne-Des-Monts, QC", 
"Sainte-Anne-Des-Plaines, QC", 
"Sainte-Catherine, QC", 
"Sainte-Julie, QC", 
"Sainte-Sophie, QC", 
"Sainte-Th√©r√®se, QC", 
"Salaberry-de-Valleyfield, QC", 
"Salluit, QC", 
"Salmon Arm, BC", 
"Sambaa K'e, NT", 
"Sandspit, BC", 
"Sandy Lake, ON", 
"Sanikiluaq, NU", 
"Sarnia, ON", 
"Saskatoon, SK", 
"Saugeen Shores, ON", 
"Sault Ste. Marie, ON", 
"Savant Lake, ON", 
"Schefferville, QC", 
"Scott, SK", 
"Sea to Sky - Squamish to Whistler, HEF", 
"Sea to Sky - West Vancouver Upper Levels to Squamish, HEF", 
"Sechelt, BC", 
"Sept-√éles, QC", 
"Shamattawa, MB", 
"Sharbot Lake, ON", 
"Shaunavon, SK", 
"Shawinigan, QC", 
"Shediac, NB", 
"Sheet Harbour, NS", 
"Shelburne, NS", 
"Shelburne, ON", 
"Sherbrooke, QC", 
"Shilo, MB", 
"Shoal Lake, MB", 
"Simcoe, ON", 
"Sioux Lookout, ON", 
"Sioux Narrows, ON", 
"Slave Lake, AB", 
"Smithers, BC", 
"Smiths Falls, ON", 
"Snow Lake, MB", 
"Sorel-Tracy, QC", 
"Souris, MB", 
"South Bruce Peninsula, ON", 
"Southend Reindeer, SK", 
"Sparwood, BC", 
"Spiritwood, SK", 
"Sprague, MB", 
"Squamish, BC", 
"St. Alban's, NL", 
"St. Anthony, NL", 
"St. Catharines, ON", 
"St. John's, NL", 
"St. Lawrence, NL", 
"St. Leonard, NB", 
"St. Peter's, NS", 
"St. Peters Bay, PE", 
"St. Stephen, NB", 
"St. Thomas, ON", 
"Stavely, AB", 
"Steinbach, MB", 
"Stephenville, NL", 
"Stettler, AB", 
"Stewart, BC", 
"Stirling, ON", 
"Stony Plain, AB", 
"Stony Rapids, SK", 
"Stratford, ON", 
"Strathmore, AB", 
"Strathroy, ON", 
"Sudbury (Greater), ON", 
"Suffield, AB", 
"Summerland, BC", 
"Summerside, PE", 
"Sundre, AB", 
"Sussex, NB", 
"Sutton, QC", 
"Swan River, MB", 
"Swift Current, SK", 
"Sydenham, ON", 
"Sydney, NS", 
"Taber, AB", 
"Tadoule Lake, MB", 
"Tadoussac, QC", 
"Taloyoak, NU", 
"Tasiujaq, QC", 
"Tatamagouche, NS", 
"Tatlayoko Lake, BC", 
"T√©miscamingue, QC", 
"Temiscouata, QC", 
"Temiskaming Shores, ON", 
"Terra Nova (National Park), NL", 
"Terrace, BC", 
"Terrace Bay, ON", 
"Terrebonne, QC", 
"Teslin, YT", 
"Tetsa River (Provincial Park), BC", 
"The Pas, MB", 
"Thetford Mines, QC", 
"Thompson, MB", 
"Three Hills, AB", 
"Thunder Bay, ON", 
"Tillsonburg, ON", 
"Timmins, ON", 
"Tisdale, SK", 
"Tobermory, ON", 
"Tofino, BC", 
"Toronto, ON", 
"Toronto Island, ON", 
"Tracadie, NS", 
"Tracadie-Sheila, NB", 
"Tracy, QC", 
"Trail, BC", 
"Trans-Canada Highway - Eagle Pass to Rogers Pass, HEF", 
"Trenton, ON", 
"Trois-Pistoles, QC", 
"Trois-Rivi√®res, QC", 
"Truro, NS", 
"Tuktoyaktuk, NT", 
"Tulita, NT", 
"Turtle Mountain (Provincial Park), MB", 
"Twillingate, NL", 
"Ucluelet, BC", 
"Ulukhaktok, NT", 
"Umiujaq, QC", 
"Upsala, ON", 
"Uranium City, SK", 
"Val Marie, SK", 
"Val-d'Or, QC", 
"Val-des-Monts, QC", 
"Valemount, BC", 
"Vall√©e de la Matap√©dia, QC", 
"Vancouver, BC", 
"Vanderhoof, BC", 
"Vanier, QC", 
"Varennes, QC", 
"Vaudreuil-Dorion, QC", 
"Vaughan, ON", 
"Vauxhall, AB", 
"Vegreville, AB", 
"Vernon, BC", 
"Victoria, BC", 
"Victoria (Hartland), BC", 
"Victoria (University of), BC", 
"Victoria Beach, MB", 
"Victoria Harbour, BC", 
"Victoriaville, QC", 
"Vineland, ON", 
"Virden, MB", 
"Vita, MB", 
"Wabush Lake, NL", 
"Wainwright, AB", 
"Walkerton, ON", 
"Wasagaming, MB", 
"Waskaganish, QC", 
"Waskesiu Lake, SK", 
"Waterton Park, AB", 
"Watrous, SK", 
"Watson Lake, YT", 
"Wawa, ON", 
"Webequie, ON", 
"Wekweeti, NT", 
"Welland, ON", 
"West Nipissing, ON", 
"Western Head, NS", 
"Westlock, AB", 
"Westport, ON", 
"Wetaskiwin, AB", 
"Weyburn, SK", 
"Whale Cove, NU", 
"Whati, NT", 
"Whistler, BC", 
"Whitby, ON", 
"White River, ON", 
"White Rock, BC", 
"Whitecourt, AB", 
"Whitehorse, YT", 
"Whiteshell, MB", 
"Wiarton, ON", 
"Williams Lake, BC", 
"Willow Creek (Provincial Park), AB", 
"Winchester, ON", 
"Windsor, ON", 
"Windsor, NS", 
"Wingham, ON", 
"Winkler, MB", 
"Winnipeg, MB", 
"Winnipeg (The Forks), MB", 
"Winterland, NL", 
"Woodstock, ON", 
"Woodstock, NB", 
"Wreckhouse, NL", 
"Wrigley, NT", 
"Wunnummin Lake, ON", 
"Wynyard, SK", 
"Yarmouth, NS", 
"Yellowknife, NT", 
"Yoho (National Park), BC", 
"York Factory, MB", 
"Yorkton, SK"
];

    // Autocomplete to find the city and pro.
    $('#cityName').autocomplete({ 
        maxHeight: 200, 
        source: cities
    });

});








$('#findWeather').click(function(){
	var theSelectedCity = $('#cityName').val();
    
    if(theSelectedCity) {
        var result = citiesID.find(function (d) {
            if(d.city!=theSelectedCity){
                $('#notFound').show();
            }else if(d.city===theSelectedCity) {
                return d.city === theSelectedCity;
            }
        }).key_site;
        
    }
    // console.log(result);
	
    var url = "http://dd.weather.gc.ca/citypage_weather/xml"+result;

/////////////////////////////////////////////////////////////////////////////

    var xmlSource = url;
   

    // build the yql query. Could be just a string 
    var yqlURL = [
        "http://query.yahooapis.com/v1/public/yql",
        "?q=" + encodeURIComponent("select * from xml where url='" + xmlSource + "'"),
        "&format=xml&callback=?"
    ].join("");

   
    $.getJSON(yqlURL, function(data){
        // console.log(data.results[0]);
        xmlContent = $(data.results[0]);
        // The City name and the region
        var location = xmlContent.find("location");
        var city = location.find("name");
        var region = location.find("region");
        var cityRegion = city[0].textContent + ' ' +region[0].textContent;
        $('#theCity').html(cityRegion)

        // Weather data from current condition
        var currentCondition = xmlContent.find("currentConditions");
        // find the time and date 
        var year = currentCondition.find("year");
        year = year[0].textContent;
        var month = currentCondition.find("month");
        month = month[0].textContent;
        var day = currentCondition.find("day");
        day = day[0].textContent;
        var theTime = year + ' - ' + month + ' - ' + day;
        // $('#theDay').html(theTime);
        var date = currentCondition.find("textSummary");
        date = date[0].textContent;
        var patDate = /.+2017/
        date = patDate.exec(date);
        $('#theDay').html(date);
        // find the general weather
        var condition = currentCondition.find("condition");

        condition = condition[0].textContent;
        // console.log(condition);
        if(condition===""){
            var tempCon = currentCondition.find("temperature");
            tempCon = tempCon[0].textContent + ' C&deg;'
            $('#theCondition').html(tempCon); 
        }else {
           $('#theCondition').html(condition); 
        }
        // Display the current condition
        var hour = xmlContent.find("dateTime").attr('zone', 'PDT');
        
        hour = hour.find('hour');
        hour = hour[1].textContent
        
        
        $('img#condition').attr('class','');  
        if((condition.search('Cloudy'))!==-1){
            if(hour >=6 && hour <=19){
                $('img#condition').addClass('conditionCloudDay')
            }else {
                $('img#condition').addClass('conditionCloudNight')
            }
        } else if((condition.search('Snow'))!==-1){
            $('img#condition').attr('class',''); 
            $('img#condition').addClass('conditionSnow');

        } else if((condition.search('Rain'))!==-1){
            $('img#condition').attr('class',''); 
            $('img#condition').addClass('conditionRain') 

        } else {
            $('img#condition').attr('class',''); 
             
            if(hour >=6 && hour <=19){
                $('img#condition').addClass('conditionDay')
            }else {
                $('img#condition').addClass('conditionNight')
            }
        }

        // find the temperature
        var temperature = currentCondition.find('temperature');
        temperature = temperature[0].textContent + ' &deg;C';
        $('#theTemp').html(temperature);
        

        // Find the winder and assign it
        var wind = currentCondition.find("wind");
        var direction = wind.find("direction");
        direction=direction[0].textContent;
        wind = wind.find('speed');
        var windText = direction+ ' '+wind[0].textContent + ' km/h';
        console.log(windText)
        $('#theWind').html(windText);

        // From forecastGroup, forecast for the next two nights and days
        var forecastGroup  = xmlContent.find("forecastGroup");
        var forcasts = forecastGroup.find('forecast');

        // First night or day
        var forecast0 = forcasts[0];
        var period0 = forcasts.find("period");
        var temp0 = forcasts.find("temperature");
        var summery0 = forcasts.find('textSummary');
        summery0 = summery0[0].textContent;
        $('#day1Name').html(period0[0].textContent);
        $('#nextDay1Deg').html(temp0[0].textContent+' &deg;C');
        // plot the condition 
        period0 = period0[0].textContent;
        if(period0.search("night")!==-1){
            if(summery0.search("rain")!==-1){
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("rainSmallNight");
                }else if(summery0.search("snow") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("snowSmallNight");
                }else if(summery0.search("cloud") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("couldSmallNight");
                }else if(summery0.search("shower") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("showerSmallNight");
                } else {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day1Icon').attr('class','');  
                if(summery0.search("rain")!==-1){
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("rainSmallDay");
                }else if(summery0.search("snow") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("snowSmallDay");
                }else if(summery0.search("cloud") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("couldSmallDay");
                }else if(summery0.search("shower") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("showerSmallDay");
                } else {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("clearSmallDay");
                }      
        }
        // Next day or night
        var forecast1 = forcasts[1];
        var period1 = forcasts.find("period");
        var temp1 = forcasts.find("temperature");
        var summery1 = forcasts.find('textSummary');
        summery1 = summery1[1].textContent;
        $('#day2Name').html(period1[1].textContent);
        $('#nextDay2Deg').html(temp1[1].textContent+' &deg;C');
        // plot the condition 
        period1 = period1[1].textContent;
        if(period1.search("night")!==-1){
            if(summery1.search("rain")!==-1){
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("rainSmallNight");
                }else if(summery1.search("snow") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("snowSmallNight");
                }else if(summery1.search("cloud") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("couldSmallNight");
                }else if(summery1.search("shower") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("showerSmallNight");
                } else {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day2Icon').attr('class','');  
                if(summery1.search("rain")!==-1){
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("rainSmallDay");
                }else if(summery1.search("snow") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("snowSmallDay");
                }else if(summery1.search("cloud") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("couldSmallDay");
                }else if(summery1.search("shower") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("showerSmallDay");
                } else {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("clearSmallDay");
                }      
        }
                var forecast2 = forcasts[2];
        var period2 = forcasts.find("period");
        var temp2 = forcasts.find("temperature");
        var summery2 = forcasts.find('textSummary');
        summery2 = summery2[2].textContent;
        $('#day3Name').html(period2[2].textContent);
        $('#nextDay3Deg').html(temp2[2].textContent+' &deg;C');
        // plot the condition 
        period2 = period2[2].textContent;
        if(period2.search("night")!==-1){
            if(summery2.search("rain")!==-1){
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("rainSmallNight");
                }else if(summery2.search("snow") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("snowSmallNight");
                }else if(summery2.search("cloud") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("couldSmallNight");
                }else if(summery2.search("shower") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("showerSmallNight");
                } else {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day3Icon').attr('class','');  
                if(summery2.search("rain")!==-1){
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("rainSmallDay");
                }else if(summery2.search("snow") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("snowSmallDay");
                }else if(summery2.search("cloud") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("couldSmallDay");
                }else if(summery2.search("shower") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("showerSmallDay");
                } else {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("clearSmallDay");
                }      
        }
        // Next day or night
                var forecast3 = forcasts[3];
        var period3 = forcasts.find("period");
        var temp3 = forcasts.find("temperature");
        var summery3 = forcasts.find('textSummary');
        summery3 = summery3[3].textContent;
        $('#day4Name').html(period3[3].textContent);
        $('#nextDay4Deg').html(temp3[3].textContent+' &deg;C');
        // plot the condition 
        period3 = period3[3].textContent;
        if(period3.search("night")!==-1){
            if(summery3.search("rain")!==-1){
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("rainSmallNight");
                }else if(summery3.search("snow") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("snowSmallNight");
                }else if(summery3.search("cloud") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("couldSmallNight");
                }else if(summery3.search("shower") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("showerSmallNight");
                } else {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day4Icon').attr('class','');  
                if(summery3.search("rain")!==-1){
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("rainSmallDay");
                }else if(summery3.search("snow") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("snowSmallDay");
                }else if(summery3.search("cloud") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("couldSmallDay");
                }else if(summery3.search("shower") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("showerSmallDay");
                } else {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("clearSmallDay");
                }      
        }



});






 })
