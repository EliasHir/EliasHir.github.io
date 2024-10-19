# EliasHir.github.io
Web-sovellusten perusteet -24 lopputyö

HTML (25%)
1/5:
Basic HTML structure is present.

-Perus HTML rakenne index.html:ssä, riveillä 105-106 myös mm. kuva joka samalla toimii linkkinä.

Learn more about Basic HTML structure
2/5:
HTML structure with clear content differentiation (headings, paragraphs, lists).

-Index.html:ssä selkeä rakenne, ensin head, sitten body jonka sisällä section, div, header, paragraph, list ja niin edelleen.

Learn more about HTML Elements
3/5:
Use of forms, links, and media.

Learn about HTML Forms
Learn about HTML Links
Learn about HTML Media

-Index.html:ssä forms käytetty survey-sectionissa, rivi 62 eteenpäin.
-Linkkiä käytetty mm. navigointipalkissa rivi 13-19 ja kuvassa rivi 105.
-Media: rivillä 107 lisätty video.

4/5:
Tables are effectively used.

Learn about Tables (w3schools)
Learn about Tables (MDN)

-Home-sectionissa rivit 20-50 käytetty tablea. Tablesta saa vinkkiä kakkossivun quiziin.

5/5:
Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.

Learn about Semantic HTML

-Käytetty järkevin sisennyksin mm. sectioneja, jotta sivusta tulee selkeämpi ja helpompi lukea. Sivun yläosassa (rivit 13-19 on navigointipalkki ja lopussa rivi 114-116 footer jne.) Divejä on käytetty pari kertaa vain sectionien sisällä, jotta eri osiot erottuu helpommin.

CSS (25%)
1/5:
Basic CSS styling (colors, fonts).

Learn about CSS Colors
Learn about CSS Fonts

-Perus CSS juttuja kuten eri tausta- ja tekstivärejä käytetty styles.css:ssä esim. riveillä 13-14, 20-21, 46, 53, 93, 95, 105.
-Eri fontteja käytetty mm. pääotsikossa rivillä 19 ja body:ssä rivillä 10.

2/5:
Use of classes and IDs to style specific elements.

-ID:tä käytetty esim. riveillä 64, 77, 83, 115, 128, 133 ja classia rivillä 108.

Learn about CSS Selectors
3/5:
Implementation of responsive design elements.

Learn about Responsive Design

-Responsiivisuuden eteen käytetty mm. prosenttikokoja riveillä 71, 121 ja 146, ja ennenkaikkea viewport-metatagiä jotta sivu skaalautuu eri laitteille järkevästi.

4/5:
Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)

Learn about flexbox (css-trics)
Learn about flexbox (w3schools)
Learn about CSS Grid (w3schools)
Learn about CSS Grid (css-tricks)
Comparing the types

-Flexboxia ja button containeria käytetty mm. riveillä 36 ja 108-113.

5/5:
Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.

-Mielestäni sivu on selkeän ja toimivan näköinen vaikka tietyssä mielessä onkin lisätty "ylimääräisiä" asioita jotta saadaan osoitettua osaamista. Mutta esimerkiksi kyselyn tulokset tulevat näkyviin omaan laatikkoonsa vasta kun vastaukset on lähetetty.

JavaScript Basics (25%)
1/5:
Simple interactions (like alerts on button click).

Learn about JS Alerts

-Alert buttoneita index.html rivi 53 ja 54, ja javascript-toteutus surveyResults.js:ssä riveillä 25-31.

2/5:
Multiple event listeners and basic DOM manipulations.

Learn about Event Listeners

-Event listener mm. kolmannessa buttonissa index rivit 55-56 ja surveyResults rivit 33-41, sekä kyselyn tuloksien palautus index rivit 92-99 ja surveyResults rivit 1-22.

3/5:
Use of arrays, objects, and functions.

Learn about Arrays
Learn about Objects
Learn about Functions

-Arrayta käytetty kyselyn tuloksien tallentamiseen surveyResults.js:ssä riveillä 10-13.
-Funktioita kätetty mm. button funktioissa riveillä 25-41.
-DOM-manipulaatio käyttää HTML-elementeistä muodostettuja objecteja mm. riveillä 1-21 tallentaessaan niihin kyselyn tulokset. Quiz:js:ssä riveillä 7-12 luodaan objekteja (kysymyksiä) ja samalla käytetään myös arrayta vastausvaihtoehtoja varten. Rivillä 14 käytetään startQuiz() funktiota.

4/5:
Advanced logic, looping through data, and dynamic DOM updates.

Learn about Loops
Learn about DOM Manipulation

-For-looppia käytetty quiz:js:ssä rivillä 16. Rivi 11 käytetty for-each.
-Dynamic DOM updatea hyödynnetty kun kyselyn tulokset ilmestyvät näkyviin niiden lähetyksen jälkeen (surveyResults.js rivi 21). DOM-elementtejä kuten querySelector(), querySelectorAll() ja getElementById käytetty riveillä 1-22.

5/5:
Consistent use of Object-Oriented JavaScript principles.

Learn about Constructors

-quiz.js rivi 1-5 käytetty konstruktoria luomaan objecteja.

Asynchronous Operations (25%)
1/5:
Use of timers.

Learn about Timers

-Timeria käytetty muistuttamaan quiz-vinkeistä pääsivulla, rivit 49-54 quiz.js:ssä.

2/5:
Successful implementation of an AJAX call or Fetch.

Learn about AJAX
Learn about Fetch
Learn about Fetch more..

-Fetchiä käytetty Random Image Generatorin kuvien hakemiseen, quiz.js rivi 36.

3/5:
Data from the asynchronous call is displayed on the webpage.

-Generoitu kuva tuodaan näkyviin, quiz.js rivit 42-43.

4/5:
Error handling is implemented (for failed API calls, etc.).

Learn about JS Error Handling

Error handling toteutettu quiz.js rivit 34-47.

5/5:
Effective use of asynchronous data to enhance user experience (like filtering, sorting).

-Ongelma kuvan hakemisessa luo alertboxin, quiz.js rivi 46.