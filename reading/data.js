const READING_WEEKS = [
{
  id: 1,
  label: "Unit 1 · Week 1",
  days: [
    {
      day: 1,
      title: "What Do You Eat for Breakfast?",
      asYouRead: "Identify a cause-effect relationship. Circle the cause. Underline the effect.",
      passage: `Eating breakfast is an important part of staying healthy and active. This is because people's bodies require energy to function. People get energy by eating food. Bodies use that energy to help people grow, move, and think. When someone eats a healthy breakfast, their brain works better. They can learn more and do better in school. Eating a healthy breakfast can also help people avoid feeling hungry a couple hours later. Plus, eating a healthy breakfast gives a person more energy. Certain food choices will give a person more energy than others. This way, they can enjoy doing more things.

Even though it may be easy to skip breakfast, don't do it! Breakfast is an important meal. It has many benefits.`,
      questions: [
        {type:"mc", q:"Which type of image would tell a reader more about this text?", options:["a picture of a hand","a picture of a healthy breakfast","a fast-food menu","a daily schedule"], correct:1},
        {type:"mc", q:"Which prepositional phrase best completes this sentence?\nA healthy breakfast is an important part _____ everyone's day.", options:["by","for","from","of"], correct:3},
        {type:"mc", q:"Why is eating breakfast important?", options:["Your body gets the energy it needs if you eat breakfast.","Your brain does not work well if you eat breakfast.","You get very hungry if you eat breakfast.","It is hard to make good food choices if you eat breakfast."], correct:0},
        {type:"mc", q:"What does it mean to avoid something?", options:["buy it","you may like it","try to make it","stay away from it"], correct:3},
      ]
    },
    {
      day: 2,
      title: "Healthy Breakfast Choices",
      asYouRead: "Underline three important points the author makes.",
      passage: `There are many healthy choices for foods to eat at breakfast. One good choice is eggs. Eggs have a lot of protein, and protein helps bodies grow. Protein is also important for making muscles strong. Protein helps to stop hunger, so a person can feel more satisfied when they eat a meal with protein. Some people prefer to eat fresh fruit for breakfast. This can be a good choice as well, but fruit does not have as much protein as eggs. Including fruit is a good way to balance your breakfast. For example, a banana can be paired with high-protein yogurt.

It is best to avoid eating only high-fat foods for breakfast, such as doughnuts or cinnamon rolls. Of course, it is fine to have one of these treats occasionally. However, these sweet treats do not satisfy hunger for very long. Pairing them with a protein can help. But they are not recommended to eat every day.

In everyday life, it is wise to choose a breakfast that has whole grains, fruit, and protein. What will you have for breakfast tomorrow?`,
      questions: [
        {type:"mc", q:"How are eggs and fresh fruit different?", options:["Eggs have more protein.","Eggs are high in fat.","Fresh fruit has protein.","Fresh fruit is high in fat."], correct:0},
        {type:"mc", q:"Why is it best to avoid high-fat breakfast foods?", options:["They have a lot of protein.","They include whole grains.","They are too expensive.","They do not satisfy hunger."], correct:3},
        {type:"mc", q:"Which means the opposite of wise?", options:["better","foolish","smaller","smarter"], correct:1},
        {type:"mc", q:"What does it mean if something satisfies your hunger?", options:["It tastes delicious.","It stops your hunger.","It takes a long time to eat.","It makes you feel hungrier."], correct:1},
      ]
    },
    {
      day: 3,
      title: "Cereal: A Popular Food Choice",
      asYouRead: "Place a plus sign (+) by important information about cereal.",
      passage: `One very popular food choice for breakfast is cereal. Cereal is convenient because it is effortless to make, and it does not take long to eat. Some kinds of cereal are very good for you. For example, cereals made with whole grains help keep people's hearts healthy. Whole grains give people's bodies energy. Some cereals have dried fruit and nuts in them, and those are also good choices.

Choosing a cereal carefully is important. Some cereals have lots of sugar, but they do not have many whole grains. Those cereals are not good for you. It is best to choose a cereal that does not have a lot of sugar. Eating too much sugar can be bad for a person's health, and sugar does not provide long-lasting energy.

There are so many options to choose from in stores. You may end up having a hard time deciding which one to choose because they all look tasty!`,
      questions: [
        {type:"mc", q:"How can cereals with whole grains help your body?", options:["They help you to see better.","They help you to hear better.","They help your bones grow.","They help keep your heart healthy."], correct:3},
        {type:"mc", q:"How does the word effortless apply to the text?", options:["Cereal is healthy.","Cereal tastes good.","Cereal is easy to make.","Cereal has fruits and nuts."], correct:2},
        {type:"open", q:"How can cereal be part of a healthy breakfast?", lines:1},
        {type:"open", q:"Would the author find your favorite cereal to be healthy or not very healthy? Use evidence from the text to explain why.", lines:4},
      ]
    },
    {
      day: 4,
      title: "The Cereal Man",
      asYouRead: "Circle the problem that Kellogg solved. Underline the solution to the problem.",
      passage: `Did you have cereal for breakfast this morning? If you did, you're not alone. Millions of people eat cereal for breakfast every day. In fact, cereal is popular all over the world. It all started with one man, William Keith Kellogg.

Kellogg was born on April 7, 1860, in Battle Creek, Michigan. His first job was stocking shelves at the Battle Creek Sanitarium. A sanitarium is similar to a hospital. People who have been ill for a long time or people who are getting over a serious illness stay there. When Kellogg grew up, he became the manager of the sanitarium. His brother, John, was the chief doctor there.

One big problem at the sanitarium was the patients' diets. The patients needed healthy diets, but it was also important for their food to taste good. Kellogg tried to find a good food choice to take the place of bread. But he was having a hard time finding a replacement.

By accident, Kellogg found something even better than bread. He left some wheat cooking too long. When it was rolled out, it formed large, thin flakes. He decided to give it a try. He asked his brother to serve it to the patients, and they loved it! In fact, they liked it so much that they wanted breakfast flakes sent to them even after they left the sanitarium. So, Kellogg started a new business in 1884. He sold packaged breakfast flakes. And before long, Kellogg's breakfast cereal was popular in other countries, too.

Kellogg did more than just create breakfast flakes. His company made a lot of money. Kellogg used most of it to help children. He also used his money to help several other charities.

Kellogg died in 1951. But his most famous invention is as popular as ever. Kellogg would probably be surprised to see how many kinds of breakfast cereals there are today!`,
      questions: [
        {type:"mc", q:"What did Kellogg do before he became manager of the sanitarium?", options:["He stocked shelves.","He started a new company.","He invented breakfast flakes.","He used his money to help children."], correct:0},
        {type:"mc", q:"How did Kellogg “hit the nail on the head” with his invention?", options:["He was able to quit his job at the sanitarium.","He was able to make more bread at the sanitarium.","He solved a problem for people in the sanitarium.","He could go back to stocking shelves at the sanitarium."], correct:2},
        {type:"mc", q:"Why was it so important for the patients' food to taste good?", options:["People needed to eat more food.","People could not find healthy food.","People did not want to eat food that was healthy.","People would not eat healthy food that didn't taste good."], correct:3},
        {type:"mc", q:"Why might the author describe Kellogg as generous?", options:["He gave money to people.","He made a lot of money making cereal.","He invented something others needed.","He discovered breakfast flakes by mistake."], correct:0},
        {type:"open-table", q:"Write four major events in Kellogg's life. Write them in the order they occurred.", rows:[
          {label:"Event 1", given:"Kellogg was born on April 7, 1860, in Battle Creek, Michigan."},
          {label:"Event 2"},
          {label:"Event 3"},
          {label:"Event 4"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “The Cereal Man” and the earlier texts from this week. Then, respond to the prompt.",
      prompt: "Write to explain what you think is the best breakfast option that anyone can make. Use details and evidence from one or more texts to support your ideas.",
    },
  ]
},
{
  id: 2,
  label: "Unit 1 · Week 2",
  days: [
    {
      day: 1,
      title: "The Cereal Box Competition",
      asYouRead: "Write and circle words that describe Henry based on his thoughts and actions.",
      passage: `Henry usually read the back of the cereal box as he ate breakfast in the mornings. He enjoyed the fun puzzles and word searches. But he had never felt so drawn to the text on the back until this morning.

The box read: Create a custom cereal box, and enter for your chance to win a video game console. Henry had never entered a competition like this before. Nothing had motivated him to enter one before. However, Henry really wanted a new gaming console, and his dad always said they were too hard to find. So, maybe he would give this competition a shot. He was pretty sure he wouldn't win, but he wanted to try anyway.

After school, Henry drew up some quick ideas for a cereal box. Then, he filled out his information on the back of the box, cut it out, and put it in an envelope. He wrote his address, included a stamp, and placed the envelope in the mailbox. Now, all he had to do was wait.`,
      questions: [
        {type:"mc", q:"Why does Henry never enter a competition?", options:["His dad discourages it.","He is not creative enough.","He never has a reason to.","He is certain he would not win."], correct:3},
        {type:"mc", q:"How does Henry feel about the chance of winning a video game console?", options:["confident","doubtful","enthusiastic","humbled"], correct:1},
        {type:"mc", q:"What is something that may be custom-made?", options:["jewelry","pet dog","movie","stapler"], correct:0},
        {type:"mc", q:"What is an antonym for motivate?", options:["create","discourage","inspire","try"], correct:1},
      ]
    },
    {
      day: 2,
      title: "Henry's Luck",
      asYouRead: "Underline a problem or conflict in the story. Circle the solution.",
      passage: `Four months had passed since Henry mailed in his envelope. A lot had happened since then! He was in the second half of his fifth-grade year, he got a new dog, and his dad had started a new job.

He didn't tell anyone about it, but he got into a weird habit of wearing his lucky socks as often as he could. They had four-leaf clovers on them, and he hoped they would bring him luck in winning the competition.

One of Henry's chores was to check the mail every day. He never received anything for himself—until today. When he grabbed the mail after dinner, he saw his name on one of the envelopes. He looked at the return address, and his eyes went wide when he realized it was for the cereal box competition.`,
      questions: [
        {type:"mc", q:"How might Henry feel about the mail he receives?", options:["annoyed","heartbroken","hopeful","miserable"], correct:2},
        {type:"mc", q:"What makes Henry's habit strange?", options:["Henry's friends never wear the same socks twice.","Most people do not wear the same socks every day.","Henry's dog is fond of chewing on his socks.","Henry's dad wears his lucky socks to his new job, too."], correct:1},
        {type:"mc", q:"How does Henry feel about winning the competition?", options:["He is cautiously optimistic.","He doesn't feel confident.","He doesn't think he should have entered.","He knows he will win without a doubt."], correct:0},
        {type:"mc", q:"Which word best describes Henry's habit?", options:["customary","forgiving","normal","superstitious"], correct:3},
      ]
    },
    {
      day: 3,
      title: "Siblings",
      asYouRead: "Circle a cause. Underline its effect.",
      passage: `Henry was too nervous to open the envelope and read the letter himself.

"Why, are you afraid of it?" his sister asked.

"I'm just too nervous!" Henry exclaimed, waving the envelope. She sighed and held out her palm, so Henry gave it to her with shaking hands.

He felt like time had stopped as he watched her tear into the envelope. He watched her face for signs of excitement, but she didn't show any. In fact, she actually looked disappointed! She frowned and shook her head slowly.

Henry's face fell, and he took the letter from her so he could confirm the devastating loss for himself. Dear Henry, the letter began, Congratulations for winning the cereal box competition!

"I don't believe it!" Henry yelled in excitement.

His sister smirked and gave Henry a fist bump. Not only had he won the gaming console, but the letter stated he had also won a tour of the local cereal factory, a year's worth of cereal, and a chance to create his own cereal!`,
      questions: [
        {type:"mc", q:"How does Henry's sister trick him?", options:["She tells him he did not win.","She hides the letter.","She says the letter is blank.","She fakes disappointment."], correct:3},
        {type:"mc", q:"What is an antonym for frowned?", options:["grinned","opened","scowled","wrinkled"], correct:0},
        {type:"open", q:"What surprises Henry?", lines:2},
        {type:"open", q:"What would you hope to win in a competition? Why?", lines:2},
      ]
    },
    {
      day: 4,
      title: "Henry's Gummy Flakes",
      asYouRead: "Circle words that indicate time-order events.",
      passage: `The day of the tour had arrived! An employee named Samantha greeted them. She took them to a room upstairs with a custom cereal selection screen.

Henry pressed the button to select his base ingredients. First, he began reading over all the possible main ingredients: cornflakes, rice, and wheat squares. He selected cornflakes. The next screen that popped up allowed him to choose from the following additional ingredients: pecans, walnuts, assorted berries, strawberries, raisins, dried bananas, marshmallows, chocolate chips, and gummy worms! Henry had so many ideas. But first, he chose marshmallows. Then, he decided to add chocolate chips and gummy worms. Finally, he selected walnuts and assorted berries.

Henry watched his custom cereal being made. There were three machines connected to a conveyor belt. The largest machine had a series of three tubes connected to the back of it. At the front, a single tube came out of the machine.

Henry asked, "Is that where the main ingredients are added?"

"That's correct!" Samantha replied. "Each of the three tubes connects to one of the main ingredients. To start, each tube brings a separate main ingredient forward. Some people like to mix the main ingredients. This machine can mix them together. Then, the cereal slides down the tube in the front and into a container. The conveyor belt moves it to the next machine in line."

Then, Samantha pointed to the center machine. "This is where the additional ingredients are added and mixed in."

Samantha pointed to the last machine. She said, "The smallest one is used to give the cereal a final mixing. Finally, it goes into the custom-made cereal box you sent in for the competition."

Henry and his parents watched as the cereal was mixed and transported into the smaller machine. After a few moments, the bottom of the machine opened up. They went to retrieve a box of Henry's custom-made cereal.

At home, Henry poured everyone a bowl of cereal. Henry loved every bite he took. It seemed like Henry's parents enjoyed it, too—as long as they ate around the gummy worms.`,
      questions: [
        {type:"mc", q:"How does Henry feel as his custom cereal is being made?", options:["concerned","excited","grateful","perplexed"], correct:1},
        {type:"mc", q:"What do Henry's parents think of his cereal?", options:["They like everything but the gummy worms.","They are surprised the berries taste good.","They do not like the cereal very much.","They wish he had used rice as the base ingredient."], correct:0},
        {type:"mc", q:"Which word uses the prefix the same way as in the word transport?", options:["entranced","export","strands","transmit"], correct:3},
        {type:"mc", q:"What does a conveyor belt do?", options:["empties objects from one bin to another","heats objects to prepare them for baking","cools objects to prepare them for mixing","transports objects from one place to another"], correct:3},
        {type:"open-table", q:"Write events that occur at the cereal factory in the order they happened.", rows:[
          {label:"Challenge or Task", given:"Henry has to design his own cereal."},
          {label:"Event 1"},
          {label:"Event 2"},
          {label:"Event 3"},
          {label:"Resolution"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “Henry's Gummy Flakes.” Then, respond to the prompt.",
      prompt: "Write a story about a time when you made something for breakfast or another meal. Use a variety of transitional words, phrases, and clauses to write about the sequence of events.",
    },
  ]
},
{
  id: 3,
  label: "Unit 1 · Week 3",
  days: [
    {
      day: 1,
      title: "Back of the Cereal Box",
      asYouRead: null,
      passageImage: "assets/week3/day1-passage.png",
      questions: [
        {type:"mc", q:"What inspires Henry's cereal?", options:["He wants it to be fun and unique.","He wants it to be chewy and crunchy.","He wants it to be sweet and sour.","He wants it to have fruit and rice."], correct:0},
        {type:"mc", q:"How is Henry's point of view shown in the note?", options:["He is excited for others to try his cereal.","He wants to motivate others to make their own cereal.","He hopes to inspire cereal makers to make his cereal.","He tries to convince readers that his cereal is the best."], correct:0},
        {type:"mc", q:"Which of the following is an example of an opportunity?", options:["sleeping","visiting close relatives","attending a cool science camp","going to the dentist"], correct:2},
        {type:"mc", q:"Which ingredient is most likely Henry's favorite?", options:["almonds","marshmallows","rice","berries"], correct:1},
        {type:"open", q:"Would you like to try Henry's cereal? Explain why or why not.", lines:3},
      ]
    },
    {
      day: 2,
      type: "reference",
      title: "Build a Better Breakfast",
      instructions: "Closely read these texts (“Healthy Breakfast Choices” and “Back of the Cereal Box”). Draw additional items to build a more complete breakfast for Henry. Label the items and explain why you included them.",
      pageImage: "assets/week3/day2-reference.png",
    },
    {
      day: 3,
      title: "Is Henry's Cereal Healthy?",
      asYouRead: null,
      passage: `Close-Reading Texts — reread "Cereal: A Popular Food Choice" and "Healthy Breakfast Choices" from earlier this week, plus "Back of the Cereal Box."

From "Cereal: A Popular Food Choice": Some cereals have lots of sugar, but they do not have many whole grains. Those cereals are not good for you. It is best to choose a cereal that does not have a lot of sugar. Eating too much sugar can be bad for a person's health, and sugar does not provide long-lasting energy for their body.

From "Healthy Breakfast Choices": There are many healthy choices for foods to eat at breakfast. One good choice is eggs. Eggs have a lot of protein, and protein helps bodies grow. Protein is also important for making muscles strong. Protein helps to stop hunger, so a person can feel more satisfied when they eat a meal with protein. Some people prefer to eat fresh fruit for breakfast. This can be a good choice as well, but fruit does not have as much protein as eggs. Including fruit is a good way to balance your breakfast.`,
      questions: [
        {type:"open", q:"List the ingredients in healthy cereals.", lines:2},
        {type:"open", q:"List the ingredients in unhealthy cereals.", lines:2},
        {type:"open", q:"Is Henry's cereal healthy? Explain.", lines:3},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Think about the texts from this unit. Then, respond to the prompt.",
      prompt: "Imagine one of your friends often skips breakfast. Write a story in which you motivate your friend to eat a healthy breakfast that the two of you create together. Use narrative techniques, such as dialogue and description, to tell your story.",
    },
    {
      day: 5,
      type: "reference",
      title: "Design a Cereal Box",
      instructions: "Think about what you would put into your own custom-made cereal. Make a cereal box cover for it. Be sure to name your cereal and describe the ingredients.",
      pageImage: "assets/week3/day5-reference.png",
    },
  ]
},
{
  id: 4,
  label: "Unit 2 · Week 1",
  days: [
    {
      day: 1,
      title: "Ocean Ecosystems",
      asYouRead: "Underline one main idea. Number the details that support it.",
      passage: `Oceans cover 71 percent of Earth's surface. Many different ecosystems are found in oceans. An ecosystem is made of living things, including plants and animals. It is also made of nonliving things. These include things such as weather, sunlight, water, and soil.

There are many types of ocean ecosystems. Coral reefs are one example. They are made of dead and living coral. Living corals look like plants. They are actually tiny animals. The reefs provide food and shelter to many organisms. Another ecosystem is the open ocean. This is the top layer of an ocean that is away from the coast. It gets a lot of sunlight. Very large and very small animals live in the open ocean. A final example is the deep-sea layer of the ocean. At this level, there is no sunlight. Not many creatures can live in this bottom layer because it is very cold and dark.`,
      questions: [
        {type:"mc", q:"Which evidence supports the idea that an ecosystem has nonliving things?", options:["They have plants.","They have bugs.","They have animals.","They have weather."], correct:3},
        {type:"mc", q:"What is an organism?", options:["a tiny plant","a large animal","any living thing","anything that swims"], correct:2},
        {type:"mc", q:"Which statement about corals is true?", options:["They are tiny plants.","They are tiny animals.","They harm organisms.","They are only in fresh water."], correct:1},
        {type:"mc", q:"Which word uses the same prefix as percent?", options:["perk","pert","perilous","perennial"], correct:3},
      ]
    },
    {
      day: 2,
      title: "Ocean Chemistry",
      asYouRead: "Number the reasons that support the idea that oceans are important.",
      passage: `The chemistry of oceans is important. There are many things that make up oceans besides water. They are nutrients, salts, and gasses. These all support life in oceans. They are essential to many ocean cycles.

The carbon cycle is one of the ocean's cycles. In it, the surface water absorbs carbon dioxide from the atmosphere. Plants in the water use this carbon dioxide to make food for themselves. And animals in oceans eat those plants. Eventually, the plants and animals die. They sink to the ocean floor. The carbon they had in their bodies goes with them. Places where this occurs are called carbon sinks. A carbon sink is anything that absorbs more carbon from the atmosphere than it releases. Carbon sinks are important on Earth. They keep some carbon out of the air, which stops it from making the planet warmer.`,
      questions: [
        {type:"mc", q:"Why is the ocean's chemistry important?", options:["It supports life.","It provides salt.","It uses sunlight.","It needs nutrients."], correct:0},
        {type:"mc", q:"What is a carbon sink?", options:["A place that stores excess carbon.","A basin where people can get carbon.","An area in the atmosphere that releases carbon.","An area of Earth where animals take in carbon."], correct:0},
        {type:"mc", q:"Which word uses the same root word as atmosphere?", options:["atomic","hemisphere","shepherd","spearhead"], correct:1},
        {type:"mc", q:"How do carbon sinks help Earth?", options:["They store salt and minerals.","They keep land and water plants alive.","They help the planet maintain its temperature.","They provide nutrients to land and water animals."], correct:2},
      ]
    },
    {
      day: 3,
      title: "Ocean Physics",
      asYouRead: "Circle the two ways oceans are always moving. Underline details that describe the movements.",
      passage: `Currents and waves are two types of ocean movement. Currents happen at the surface. Surface currents bring warm water from the equator toward Earth's poles. These currents are caused by the wind blowing over the top of the water. Currents can also be in deeper water. Deeper currents are slower. These currents start at the poles. There, fresh water from ice and glaciers melt into ocean water. Cold, fresh water is denser than salt water, so it sinks. Once the water sinks, it slowly flows away from the poles into ocean basins. Eventually, this deep water rises. The circulation of currents continues.

Waves are another form of ocean movement. Wind creates waves. Friction from the wind blows against the water's surface, creating waves. Some waves can be caused by storms or earthquakes. Waves created by earthquakes are called tsunamis.`,
      questions: [
        {type:"mc", q:"What is one main idea of the text?", options:["Currents are caused by wind.","Currents are one way oceans move.","Deep-water currents are slow-moving.","Fresh, cold water from the poles sinks."], correct:1},
        {type:"mc", q:"What do both currents and waves have in common?", options:["They involve storms.","They are caused by wind.","They can cause natural disasters.","They only happen during certain times of the year."], correct:1},
        {type:"open", q:"How do surface and deep-water currents work?", lines:3},
        {type:"open", q:"How can the ocean be both helpful and harmful?", lines:3},
      ]
    },
    {
      day: 4,
      title: "Ocean Life: Plankton",
      asYouRead: "Put a star beside information that describes how algae blooms can be harmful.",
      passage: `Oceans are home to 94 percent of all wildlife on Earth. Of the life in oceans, 90 percent is plankton. The term plankton refers to the thousands of small species that are carried by tides and currents. Most of them are microscopically small. There are two types of plankton. The first is phytoplankton. These are plants. The second is zooplankton. These are animals.

Plankton are important to the health of the planet. Phytoplankton are one of the primary producers of oxygen. They produce over half of all the oxygen on Earth. They form the base of the largest food web in the world. Plankton are necessary for other animals to survive. For example, zooplankton, such as krill, feed on phytoplankton. Larger animals, such as blue whales, feed on krill.

Too much plankton is a bad thing. This is especially true for phytoplankton, which makes up algae. An algal bloom can occur when a large number of algae are produced very quickly. There may be too many nutrients in the water for the phytoplankton. The excess nutrients often come from runoff of stormwater and wastewater. The nutrients could come from agricultural runoff as well, such as fertilizers. Or there may be too much warmth or sunlight hitting the water. Phytoplankton uses photosynthesis, just like plants on land. So, having too much sun and warmth can cause them to grow too quickly.

Algal blooms can be harmful. Sometimes, they block too much sunlight for the water below. This causes the plants and algae below to produce less oxygen. So, there is less oxygen available for animals in the water. The lack of sunlight can also cause plants and algae below the bloom to die. Less plant life in the water means less food for much of the animal life. Animals can begin to die off due to a lack of food and oxygen. If this happens, then nothing in the water usually survives. An area like this, with a lack of life, is known as a dead zone.

Some algae also produce deadly toxins. This act is a defense mechanism. Some algae use this when there are too many algae in an area. These toxins spread into the surrounding area. Animals in the water can get sick. People who consume this water can also get sick. To be safe, people should not go in the water when there is an algal bloom.`,
      questions: [
        {type:"mc", q:"Why is phytoplankton important?", options:["They feed most of the ocean's animals.","They use up excess nutrients in the oceans.","They produce a majority of Earth's oxygen.","They use photosynthesis to get rid of excess carbon dioxide."], correct:2},
        {type:"mc", q:"Which is an example of zooplankton?", options:["algae","blue whales","krill","phytoplankton"], correct:2},
        {type:"mc", q:"What is a defense mechanism?", options:["a way to fend off attackers","an instinct to attack oneself","a machine that protects living things","the ability to fight with great strength"], correct:0},
        {type:"mc", q:"Which of the following words uses the Greek affix photo- similar to its meaning in photosynthesis?", options:["elephoto","photograph","photoreg","synthephoto"], correct:1},
        {type:"open-table", q:"Write an effect for each cause.", rows:[
          {label:"Cause 1", given:"A large number of algae are produced very quickly."},
          {label:"Effect 1"},
          {label:"Cause 2", given:"Algal blooms block too much sunlight."},
          {label:"Effect 2"},
          {label:"Cause 3", given:"Algae toxins can spread into surrounding waters."},
          {label:"Effect 3"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread the text from this week. Then, respond to the prompt.",
      prompt: "Explain how oceans are an important part of Earth. Use facts, definitions, details, quotations, or other examples from the texts to support your ideas.",
    },
  ]
},
{
  id: 5,
  label: "Unit 2 · Week 2",
  days: [
    {
      day: 1,
      title: "World Traveler",
      asYouRead: "Place a star beside reasons that explain why being a fish is advantageous.",
      passage: `Traveling around the world was Steve's favorite thing to do. He had seen it all: Europe, South America, even the icebergs in Antarctica. He could go nearly anywhere he wanted, whenever he wanted.

Steve loved the freedom of being a sardine. Of course, he had never been anything else, so he wasn't sure how it measured up to being a shark. He sometimes wished he had their ferocious teeth and aloof attitude. But whenever he felt jealous, he returned to thoughts of his extraordinary travels. His small size and strong fins had allowed him to travel more than most other fish. He had seen plankton, whales, shipwrecks, and even some deep sea creatures. He wished he could go to some of the dead zones, but it was too hard to breathe there.

Steve made many friends during his travels. Sometimes, he would go years without seeing his friends and then pop up out of nowhere for a visit. In fact, that's exactly what he was heading to Australia to do.`,
      questions: [
        {type:"mc", q:"Which statement is true about Steve?", options:["He is a shark.","He is a fish.","He is a whale.","He is a fisherman."], correct:1},
        {type:"mc", q:"Why can't Steve go to dead zones?", options:["They don't have water.","They don't have plankton.","They don't have creatures.","They don't have much oxygen."], correct:3},
        {type:"mc", q:"What is an antonym for extraordinary?", options:["adventurous","fascinating","normal","odd"], correct:2},
        {type:"mc", q:"Which prepositional phrase explains when Steve traveled?", options:["out of nowhere","around the world","during his travels","whenever he wanted"], correct:2},
      ]
    },
    {
      day: 2,
      title: "Greeting an Old Friend",
      asYouRead: "Underline ways Steve and Tom are alike. Circle ways they are different.",
      passage: `Once Steve began seeing green turtles floating through the water, he knew. Australia was close, and so was Tom, Steve's best friend! Tom was a laid-back Australian sardine who loved science. Tom didn't travel far, but he really knew his way around the Great Barrier Reef. It was Steve's favorite place to visit in Australia.

Steve always knew where to find Tom because of his sedentary nature. He was usually hanging around the clownfish in a shallow part of the reef.

"Steve!" Tom yelled as soon as he spotted him. "How was the journey?"
"Beautiful as always," Steve said, shaking Tom's fin.
"You're just in time," Tom said, swimming excitedly. "The clownfish are going to listen to my jokes and tell me if I'm sharp enough to hit the comedy scene yet." Steve laughed and happily settled into the audience to listen.`,
      questions: [
        {type:"mc", q:"How are Steve and Tom different?", options:["Steve stays in one place, but Tom does not.","Steve lives in Australia, but Tom does not.","Steve travels around a lot, but Tom does not.","Tom interacted with other bubbles, but Steve did not."], correct:2},
        {type:"mc", q:"What is the meaning of sedentary?", options:["friendly","inactive","mindful","social"], correct:1},
        {type:"mc", q:"How are Steve and Tom alike?", options:["They both like the Great Barrier Reef.","They both like being social.","They both live at the Great Barrier Reef.","They both travel a lot."], correct:0},
        {type:"mc", q:"Which best describes Steve and Tom's relationship?", options:["brothers","new friends","enemies","great friends"], correct:3},
      ]
    },
    {
      day: 3,
      title: "Trouble in Paradise",
      asYouRead: "Underline facts about the Great Barrier Reef.",
      passage: `As Steve listened to Tom speak from his coral stage, he looked around the ocean at the Great Barrier Reef. It had always been one of the world's largest underwater capitals. The hustle and bustle of big cities always astounded him.

But then, Steve began to realize something—the corals had changed quite a lot. In his youth, they were stunning, and they contained all the colors you could imagine. But now, the corals on the reef seemed faded. A lot of them were white, and he could tell there weren't as many fish as there used to be.

Steve was finding it hard to laugh at Tom's jokes. He saw a family of hermit crabs loading their supply of shells onto a sea turtle's back and zooming away. Everywhere he looked, he saw families of fish leaving the reef. Steve wasn't sure what was going on, but he was determined to find out.`,
      questions: [
        {type:"mc", q:"What makes Steve worry?", options:["the jokes that Tom tells aren't funny","the changes to the Great Barrier Reef","the city disappearing","he misses his family"], correct:1},
        {type:"mc", q:"What does Steve intend to learn?", options:["how the Great Barrier Reef has changed and why","how coral reefs are related","how crabs use shells","how the reef compares with the other places he's visited"], correct:0},
        {type:"open", q:"How have the corals changed?", lines:2},
        {type:"open", q:"What do you think Steve will find out about the coral reef?", lines:2},
      ]
    },
    {
      day: 4,
      title: "Steve's Big Experiment",
      asYouRead: "Place a star beside the steps to the experiment.",
      passage: `"Tom, have you noticed any changes around here?" Steve asked later.

"It's just not how it used to be, mate," Tom sighed. "It's been hotter every year. Some of us are finding it easier to breathe down south, where it's cooler."

"I'll do some research and collect some data," Steve told Tom.

Steve swam around to various parts of the reef to test the water temperatures. He measured the amount of bubbles in the water. He also tested the oxygen levels and took pictures.

It took about a month for him to record all his data. Tom worked with him to summarize his conclusions.

Overall Impressions:
Higher water temperatures were found with fewer healthy coral.
Fewer organisms were found in places with higher temperatures.
Bubble count remained normal in places with higher temperatures.
High temperatures and low oxygen were found with algal blooms.

"This is super detailed," Tom said. "You should share this with my cousin. He works for the National Academy of Bubble Science."

Steve pondered it for a moment and then decided it was a good idea. Something was happening to the Great Barrier Reef. Clearly, they needed to take protective measures before it was too late!

A couple weeks after submitting his paper to the academy, Steve was called in for an appointment. They thanked him for his extensive research and said they were aware of the problem, but they hadn't come up with a solution yet.

"Why not?" Steve asked in surprise.

"Humans are part of the problem," the advisory board told him. "So far, we have not been successful in our communication efforts. We have translation experts, but it has been difficult."

Steve was crestfallen. But then he realized that this was a new research opportunity right in front of him. He was great at communicating.

"I think I may be able to help with that—if you're willing to recruit me," Steve said with a grin.`,
      questions: [
        {type:"mc", q:"What is Steve's goal?", options:["to collect data on water temperatures and oxygen levels","to find ocean water with suitable oxygen levels","to find new ways to bring more oxygen to the ocean","to add bubbles to the water around the Great Barrier Reef"], correct:0},
        {type:"mc", q:"Why is it important that Steve shares the findings of the experiment?", options:["so that Steve can boast about his discovery","so that Tom knows what Steve discovered","so that other scientists can expand on Steve's work","so that Steve can explain a complicated idea clearly"], correct:2},
        {type:"mc", q:"What is the meaning of recruit?", options:["hire someone","provide expertise","replace workers","write down"], correct:0},
        {type:"mc", q:"How does Tom react to Steve's findings?", options:["He is anxious about them.","He is excited about them.","He is indifferent about them.","He is upset about them."], correct:1},
        {type:"open-table", q:"Explain how Steve followed steps of the scientific process.", rows:[
          {label:"Research Goal"},
          {label:"Experimental Plan"},
          {label:"Results"},
          {label:"Sharing Data"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “Steve's Big Experiment.” Then, respond to the prompt.",
      prompt: "Write a story about an animal who discovers something unusual about their habitat. Use descriptive details and develop a clear sequence of events.",
    },
  ]
},
];
