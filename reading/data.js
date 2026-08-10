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
{
  id: 6,
  label: "Unit 2 · Week 3",
  days: [
    {
      day: 1,
      title: "Phytoplankton Journal",
      asYouRead: null,
      passage: `June 11

Things have been exciting around here lately! It's the beginning of summer, and that means something really awesome has been happening for the last few weeks—it's upwelling time! Water from deep in the ocean has been rising up to the surface and bringing a bunch of nutrients with it. My family and I LOVE nutrients. They are almost all we talk about. Honestly, without nutrients, I wouldn't be here writing this.

With all these nutrients hanging around, and knowing that summer is bringing extra sunlight, we have the perfect setup to form a bloom! I'm so excited because this will be my first time participating in a bloom. My parents have told me what to expect, but I'm still a little nervous. With all the new phytoplankton, what if I get separated from my parents and can't find them? I think I will end up being okay, though.

The coolest part of being part of the bloom is that we can be seen from SPACE! How neat is that? I think I'm going to try to wave at an astronaut. Maybe they'll see me and tell all their friends about it. That would be so cool. Anyway, it's time for me to get some rest in case tomorrow is the big bloom day!

—Al`,
      questions: [
        {type:"mc", q:"What summer event is causing good bloom conditions?", options:["colder water","new phytoplankton","less sunlight","upwelling"], correct:3},
        {type:"mc", q:"How are the journal writer's emotions reflected in the entry?", options:["They use language to express gratitude.","The entry is written with formal language.","Many sentences end with exclamation points.","They describe the sequence of events in great detail."], correct:2},
        {type:"mc", q:"What are nutrients?", options:["flavors added to foods","grasses that grow in the ocean","the white and yellow parts of plants","things needed for growth and health"], correct:3},
        {type:"mc", q:"What is an antonym for separated?", options:["apart","broken","mixed up","united"], correct:3},
        {type:"open", q:"Would you say the journal writer is more excited or nervous? Explain.", lines:3},
      ]
    },
    {
      day: 2,
      title: "Which Text Supports This Fact?",
      asYouRead: null,
      passage: `Close-Reading Texts — reread "Phytoplankton Journal" on page 41, plus these excerpts:

From "Ocean Life: Plankton": An algal bloom can occur when a large number of algae are produced very quickly. There may be too many nutrients in the water for the phytoplankton. The excess nutrients often come from runoff of stormwater and wastewater. The nutrients could come from agricultural runoff as well, such as fertilizers. Or there may be too much warmth or sunlight hitting the water. Phytoplankton uses photosynthesis, just like plants on land. So, having too much sun and warmth can cause them to grow too quickly.

From "World Traveler": But whenever he felt jealous, he returned to thoughts of his extraordinary travels. His small size and strong fins had allowed him to travel more than most other fish. He had seen plankton, whales, shipwrecks, and even some deep sea creatures. He wished he could go to some of the dead zones, but it was too hard to breathe there.

Directions: For each fact below, check (or write) which text — "Ocean Life: Plankton," "World Traveler," and/or "Phytoplankton Journal" — has information that supports it.`,
      questions: [
        {type:"open-table", q:"Which text(s) support each fact?", rows:[
          {label:"Fact 1", given:"Phytoplankton need sunlight to grow."},
          {label:"Text(s)"},
          {label:"Fact 2", given:"Plankton live in the ocean."},
          {label:"Text(s)"},
          {label:"Fact 3", given:"Phytoplankton need nutrients to create an algal bloom."},
          {label:"Text(s)"},
          {label:"Fact 4", given:"Algal blooms can be seen from space."},
          {label:"Text(s)"},
          {label:"Fact 5", given:"Dead zones have little oxygen."},
          {label:"Text(s)"},
        ]},
      ]
    },
    {
      day: 3,
      title: "Comparing Characters",
      asYouRead: null,
      passage: `Close-Reading Texts — compare each character's thoughts or emotions in response to the events that take place. Explain how you know.

From "Steve's Big Experiment": "This is super detailed," Tom said, clapping a fin on Steve's back. "You should share this with my cousin. He works for the National Academy of Bubble Science." Steve pondered it for a moment and then decided it was a good idea. Something was happening to the Great Barrier Reef. Clearly, they needed to take protective measures before it was too late!

From "Phytoplankton Journal": Things have been exciting around here lately! It's the beginning of summer, and that means something really awesome has been happening for the last few weeks—it's upwelling time! Water from deep in the ocean has been rising up to the surface and bringing a bunch of nutrients with it. My family and I LOVE nutrients. They are almost all we talk about. Honestly, without nutrients, I wouldn't be here writing this.`,
      questions: [
        {type:"open-table", q:"Compare each character's response to events, and explain the evidence.", rows:[
          {label:"Steve"},
          {label:"Tom"},
          {label:"Phytoplankton"},
        ]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Reread the texts about oceans. Then, respond to the prompt.",
      prompt: "Explain why you agree or disagree that people should be mindful of ocean pollution. Introduce the topic, state an opinion, and support your opinion with ideas and facts that support your ideas.",
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Use what you learned this week.",
      prompt: "Write the phytoplankton's next journal entry. Describe what happens during the bloom. Use descriptive words and phrases and sensory details to explain the events.",
    },
  ]
},
{
  id: 7,
  label: "Unit 3 · Week 1",
  days: [
    {
      day: 1,
      title: "All about Malls",
      asYouRead: "Underline different types of stores you may find in malls. Place a star by your favorite one.",
      passage: `Malls are large, convenient areas with a variety of stores. People can purchase clothes, shoes, books, and computers all in the same place. Malls often have many interesting restaurants, too.

Most malls have large department stores called anchor stores. These anchor stores are typically the main stores in a mall. Malls also have smaller stores that sell different types of products. For example, jewelry stores, video game stores, and gift shops are a few of the types of stores that can be found in malls.

Malls have other places that sell items and services, too. One example is kiosks (KEE-ahsks). Kiosks are small stands that are placed around the mall. Kiosks sell many different things, including hats, stuffed animals, watches, and T-shirts. Many malls also have beauty salons, barbers, and eyeglasses stores. Plus, you can't forget the food court! Most malls have one area for fast-food options. Kiosks can sell food, such as cookies or hot dogs, too.`,
      questions: [
        {type:"mc", q:"What is the main idea?", options:["Anchor stores are large department stores.","Gift shops are smaller stores.","Kiosks are small stands.","Malls are convenient places where people can shop."], correct:3},
        {type:"mc", q:"What are the main stores in many malls called?", options:["anchor stores","gift shops","kiosks","malls"], correct:0},
        {type:"mc", q:"How does a kiosk compare to an anchor store?", options:["A kiosk is bigger.","A kiosk is smaller.","A kiosk is an anchor store.","A kiosk sells expensive items."], correct:1},
        {type:"mc", q:"What could be described as convenient?", options:["a six-page menu","a line at the post office","a commercial on television","a drive-through window at a restaurant"], correct:3},
      ]
    },
    {
      day: 2,
      title: "The History of Malls",
      asYouRead: "Place a star beside facts that explain why people built malls.",
      passage: `There are many malls in the United States today, but this wasn't always true. Many years ago, most stores were in downtown areas in the main part of a city. But in the early 1950s, many people began to move out of cities. They moved to suburbs, which are smaller towns near cities. Those people wanted to have stores near them, and they did not want to take long trips into the city to go shopping. Many malls were built so that people could shop near their homes. The idea of a mall was to have many stores under one roof so that people would want to spend more time shopping. And because malls were covered, people could get their shopping done even if it was cold or raining. By the 1980s, malls were so popular that they became social gathering places for people.`,
      questions: [
        {type:"mc", q:"According to this text, why were malls built?", options:["so people could go to the movies","so people could move out of the cities","so people could go downtown to shop","so people could shop near their homes"], correct:3},
        {type:"mc", q:"In which of the following words does the Latin root sub- have a similar meaning to suburb?", options:["subject","submarine","substance","subtle"], correct:1},
        {type:"mc", q:"According to this text, how have malls changed since they were first built?", options:["Malls now have food courts.","Stores in malls are larger.","People use them as places to get together.","Construction materials have become stronger."], correct:2},
        {type:"mc", q:"What does the phrase under one roof mean?", options:["a flat roof","more than one building","a roof made of one material","different things in one place"], correct:3},
      ]
    },
    {
      day: 3,
      title: "Modern Malls",
      asYouRead: "Circle key words that tell how malls are different today.",
      passage: `Malls are still popular, but they may not be as busy as they once were. This is because people now have other ways to shop. People don't have to go to malls to find what they want because they can shop online.

So, malls try to offer things that people cannot find online. Many malls offer entertainment or fun activities for people to do. For example, some malls have movie theaters and bowling alleys. Many malls have play areas for children, and some malls even have roller coasters! Other malls offer fitness centers and doctors' offices. Some malls were designed to be outdoor malls. This allows people to have more options for shopping, eating, and gathering.

Malls have changed a great deal since they were first built in the 1950s. But they are still important parts of many people's lives. They can be good places to shop for almost anything and meet with friends.`,
      questions: [
        {type:"mc", q:"Which is one reason why malls have changed?", options:["People can meet with friends.","Malls have movie theaters.","People can find what they want online.","Malls have gotten busier."], correct:2},
        {type:"mc", q:"Which of these means fun things to do?", options:["gathering","bowling","entertainment","fitness centers"], correct:2},
        {type:"open", q:"What is one main idea of this text?", lines:2},
        {type:"open", q:"Do you think malls have improved over time? Explain your opinion.", lines:3},
      ]
    },
    {
      day: 4,
      title: "A World of Shopping",
      asYouRead: "Circle three facts about the Mall of America. Underline three facts about the Dubai Mall.",
      passage: `Some malls are much larger than other malls. A few malls are so big that they almost seem like cities. The largest mall in the world is in Dubai, which is a city in the United Arab Emirates. Another large mall is the Mall of America near St. Paul, Minnesota. About 32 large airplanes could fit inside! Both of these malls have many things for people to see and do.

The Mall of America has many fun attractions for people. There is a flight simulator, a mirror maze, and a miniature golf course. This mall has a huge aquarium, too. And it even has a full-size theme park. You'll find a movie theater there, too. It has 14 screens.

Of course, people can also shop at the Mall of America. There are more than 520 stores at the mall. They sell everything from clothes and jewelry to groceries. At one store, you can make your own stuffed bear! If you spent just 10 minutes at each store at the Mall of America, it would take you 86 hours to see each one. That's more than three days!

The Dubai Mall has twice as many stores as the Mall of America. In total, it has over 1,200 stores. It also has a skating rink and a large movie theater. There is an aquarium, too!

If you're hungry, the Dubai Mall has over 200 restaurants. Some are fast-food restaurants, and some are fancy restaurants. There are family restaurants at the mall, too. After you eat, you can shop for anything you might want.

The Dubai Mall is so big that you cannot visit the whole mall in one day. So, there is a hotel connected to the mall. People who want to spend several days visiting the mall can stay at that hotel.

There are countless options for shopping and entertainment at malls around the world. Some of the largest malls, including the Mall of America and the Dubai Mall, provide even more fun for everyone!`,
      questions: [
        {type:"mc", q:"Why did the author write this text?", options:["to give directions to the Mall of America","to tell about two of the world's largest malls","to tell readers how to be safe when shopping at the mall","to get readers to visit the aquarium at the Mall of America"], correct:1},
        {type:"mc", q:"Which of these similes may be best used to describe both malls?", options:["bright as a button","busy as a bee","cold as ice","quiet as a mouse"], correct:1},
        {type:"mc", q:"What can you do in a flight simulator?", options:["pretend to fly an airplane","build and fly paper airplanes","see replicas of famous airplanes","feel the wind against an airplane in flight"], correct:0},
        {type:"mc", q:"Which pair of words correctly compares the structure of this text to “The History of Malls”?", options:["compare-contrast; problem-solution","chronological order; compare-contrast","cause-effect; chronological order","problem-solution; cause-effect"], correct:0},
        {type:"compare3", q:"Compare and contrast the Mall of America to the Dubai Mall.", columns:["The Mall of America","The Dubai Mall","Both"]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “A World of Shopping.” Then, respond to the prompt.",
      prompt: "Imagine you are at one of these two malls for one day. Make a plan for your day. What would you do? Write about how you would spend your day.",
    },
  ]
},
{
  id: 8,
  label: "Unit 3 · Week 2",
  days: [
    {
      day: 1,
      title: "Mystery Box",
      asYouRead: "Place exclamation points (!) beside events that surprise you.",
      passage: `Jazmine and her sister Elizabeth were going back-to-school shopping at the mall with their mom. They both wanted to be browsing the shelves of new video games at Game On, not looking for new clothes. After hitting two stores, they convinced their mom to let them have a 15-minute break. Their mom went to find a pretzel, and they went to find something more exciting to do.

After walking toward the end of one side of the mall, Elizabeth pointed at a large, black box in the middle of the walking path.

"What is that?" she asked. "I've never seen anything like that before."

The box was about the size of a kiosk, and at the front, there was a door with a QR code on it. Jasmine scanned the QR code, and it took her to a website that simply read, Enter. The girls shrugged at each other and went inside the box.

Inside, a huge white screen was mounted on the wall in front of the couch. The lights dimmed. The word welcome slowly appeared across the screen.`,
      questions: [
        {type:"mc", q:"Jazmine and Elizabeth are both _____.", options:["boring","curious","scared","friendly"], correct:1},
        {type:"mc", q:"Why do Jazmine and Elizabeth leave their mom?", options:["They do not like to shop for clothes.","They want to find an adventure.","They are meeting friends.","They are heading toward the food court."], correct:0},
        {type:"mc", q:"What might Jazmine most likely use to scan the QR code?", options:["a laptop","her cell phone","a digital camera","an instant camera"], correct:1},
        {type:"mc", q:"What happens to the lights inside the room?", options:["They brighten.","They flicker.","They lower.","They go out."], correct:2},
      ]
    },
    {
      day: 2,
      title: "A Strange Introduction",
      asYouRead: "Circle words that describe how the girls feel.",
      passage: `Jazmine and Elizabeth continued to watch the screen. Then, something began to happen. A deep, atmospheric hum was the only sound they could initially hear. The sounds became lighter, and the screen filled with images of bright stars and galaxies.

They soon started to feel mesmerized and excited as the swirling galaxies began to race by faster and faster. The music was picking up speed, too. Soon, the screen was a blur of colorful light.

"It's going at warp speed or something," Elizabeth said, in awe of the screen. Both girls stared at the rushing colors, starting to feel dizzy.

The box began to shake. Jazmine and Elizbeth looked toward each other, unsure of what was happening or what to do.`,
      questions: [
        {type:"mc", q:"How do the girls' feelings change?", options:["first curious, then excited, then unsure","first excited, then unsure, then curious","first curious, then unsure, then excited","first unsure, then curious, then excited"], correct:0},
        {type:"mc", q:"How do the galaxies change when the music changes?", options:["They move more quickly.","They vibrate and move.","They disappear from the screen.","They move in a square."], correct:0},
        {type:"mc", q:"What might the atmospheric hum sound like?", options:["a crash like musical cymbals","a high-pitched squeal like a whale call","a car squealing to a halt","the rumbling of a jet engine"], correct:3},
        {type:"mc", q:"What is a synonym for mesmerized?", options:["bewildered","entranced","indifferent","steady"], correct:1},
      ]
    },
    {
      day: 3,
      title: "A Stranger End",
      asYouRead: "Underline the part(s) of the text that explain when the girls' feelings change.",
      passage: `The box continued shaking, and the music got even louder. It almost hurt Elizabeth's ears! Then, the galaxies on the screen stopped rushing by. Six of them appeared on screen. They began to flash in a pattern of rainbow colors, and the music slowed down to a ticking clock noise.

"What's happening now?" Elizabeth asked.

"Oh, maybe I can check the QR code," Jazmine said. She pulled up the webpage again and saw that a countdown had appeared, and it was counting down from 30 seconds. She showed Elizabeth the screen and smiled with relief.

"I guess that means it's almost over," she said, happily. "I wanted an adventure, but I'm not sure how I felt about that."

"Yeah, it was weird—but kind of cool too though, right?" Elizabeth asked.`,
      questions: [
        {type:"mc", q:"How does the music change?", options:["It gets softer and turns into a clock noise.","It gets louder and turns into a clock noise.","It gets louder and faster.","It gets lower-pitched."], correct:1},
        {type:"mc", q:"Why does Jazmine go to the website again?", options:["She thinks it will explain things.","She thinks it will show cool images.","She thinks it will allow her to send a message.","She thinks it will let her report where they were."], correct:0},
        {type:"open", q:"Why is Jazmine relieved when she sees a countdown?", lines:2},
        {type:"open", q:"Why do you think the girls laugh?", lines:2},
      ]
    },
    {
      day: 4,
      title: "Quite a Trip",
      asYouRead: "Underline words or phrases that tell about what the girls think or feel.",
      passage: `Jazmine and Elizabeth were relieved to step outside the box. They immediately hurried toward the food court to find their mom, but they soon realized that the mall they were in was completely different. They didn't even see the food court!

Jazmine decided they should go back to the box to investigate. Next to the box was an information panel with these words printed at the top: The Florence Mall. "Where is the Florence Mall?" Elizabeth asked.

"No idea," Jazmine answered. "I think we should get back in the box."

The girls sat on the couch and thought for a moment. Jazmine decided to go back to the website the QR code had taken her to. After she tapped the bottom right corner, a settings menu popped up.

"Nice job!" Elizabeth said. Jazmine scrolled down and clicked on the word destination.

A voice said, "Welcome to the Magic Mall Box. Please select a destination."

Both girls gasped. They looked at Jazmine's phone and saw a list of malls. Jazmine selected the mall they came from. The box shook, and then it stopped.

The girls stepped outside the box and realized they were at the right place. They ran to the food court and saw their mom just sitting down to eat a pretzel.

"You're done already?" she asked. "I was thinking of getting a lemonade, but if you're ready, I can—"

"Oh no, we just wanted to say..." Elizabeth said, trailing off.

"Thanks for taking us to the mall!" Jazmine said. The girls waved at their mom and quickly ran back to the black box. They nodded at each other and Jazmine selected another destination from her screen.

The girls visited the Dubai Mall and the Mall of America. They saw a mall in Alberta, Canada, and one mall in Doha, Qatar. They rode rollercoasters and saw a beautiful aquarium. When they were exhausted, they finally went back home.

They found their mom at the food court, enjoying her lemonade and pretzel.

"Did you find anything exciting?" their mom asked them.

The girls smiled at each other and laughed. They could only hope that next year's back-to-school shopping trip would be this fun!`,
      questions: [
        {type:"mc", q:"How do the girls begin to know they are in a different mall?", options:["The box disappears.","The stores are different.","Their friends aren't there.","The food court is in a different place."], correct:3},
        {type:"mc", q:"What is the best reason to explain why the girls return to the box so quickly?", options:["They feel safe there.","They want to hide.","They need time to plan their escape.","They do not feel like exploring a new place."], correct:0},
        {type:"mc", q:"What is something a person might investigate?", options:["a family recipe","a home computer","a new walking trail","a well-planned travel route"], correct:2},
        {type:"mc", q:"Why do the girls go to all those other malls?", options:["to be adventurous","to be creative","to be stubborn","to be troublemakers"], correct:0},
        {type:"open-table", q:"Explain how the characters show each trait.", rows:[
          {label:"clever"},
          {label:"adventurous"},
          {label:"hopeful"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “Quite a Trip.” Then, respond to the prompt.",
      prompt: "Write a story about a time when you found something strange at a mall. Use descriptive words and phrases and sensory details to tell your story.",
    },
  ]
},
{
  id: 9,
  label: "Unit 3 · Week 3",
  days: [
    {
      day: 1,
      title: "Malls Around the World",
      asYouRead: null,
      passage: `Mall of America
Location: Bloomington, Minnesota
Facts: opened in 1992 • largest mall in the United States • has over 520 stores • houses an indoor theme park that includes roller coasters and a miniature golf course • has been used as a filming location for numerous movies and TV shows

Iran Mall
Location: Tehran, Iran
Facts: largest shopping mall in the world in terms of area • houses over 700 shops • contains a hotel, a multiplex cinema, an ice rink, and a bowling alley

Dubai Mall
Location: Dubai, United Arab Emirates
Facts: second-largest mall in the world by land area after the Iran Mall • the most visited building on Earth in 2011 with 54 million visitors • houses the Dubai Aquarium, the world's largest indoor aquarium

Albrook Mall
Location: Panama City, Panama
Facts: largest mall in Latin America • 25th largest mall in the world • has around 700 stores

Morocco Mall
Location: Casablanca, Morocco
Facts: largest mall in Africa • home to a large aquarium called Aquadream with more than 40 different species of fish • The aquarium is a cylinder with an open center. Visitors are able to take an elevator ride through the center that allows for a 360-degree view of the fish.`,
      questions: [
        {type:"mc", q:"How are the sections of the text related?", options:["They describe malls around the world.","They tell how malls around the world are safe.","They explain how many people visit malls around the world each year.","They describe how malls around the world were built."], correct:0},
        {type:"mc", q:"How does the map support the information in the text?", options:["It shows the location of each mall.","It shows how far away the malls are from each other.","It shows where the malls are on each of the seven continents.","It shows how people can travel to get to the malls around the world."], correct:0},
        {type:"mc", q:"What can you infer about the Dubai Mall?", options:["It took longer to build than any other mall.","People come from all over the world to see it.","It is located in an area far away from a big city.","People have to pay to park in the mall parking lot."], correct:1},
        {type:"mc", q:"What is unique about the aquarium in the Morocco Mall?", options:["It is free.","It has more species of fish than any other aquarium.","It allows visitors to feed the fish.","It is shaped like a soup can."], correct:3},
        {type:"open", q:"Which mall seems the most interesting to you? Explain why.", lines:3},
      ]
    },
    {
      day: 2,
      title: "Supporting the Main Ideas",
      asYouRead: null,
      passage: `Close-Reading Texts — reread "Malls Around the World" on page 59, plus these excerpts:

From "A World of Shopping": If you're hungry, the Dubai Mall has over 200 restaurants. Some are fast-food restaurants, and some are fancy restaurants. There are family restaurants at the mall, too. After you eat, you can shop for anything you might want.

From "Quite a Trip": It was a whirlwind of an afternoon. The girls visited the Dubai Mall and the Mall of America. They even went outside of the United States and saw a mall in Alberta, Canada, and one mall in Doha, Qatar. They rode rollercoasters and saw a beautiful aquarium. When they were exhausted, they finally went back home.

Directions: Integrate information from all three texts to list details that support each main idea below.`,
      questions: [
        {type:"open-table", q:"List details from the texts that support each main idea.", rows:[
          {label:"Main Idea 1", given:"Malls are not just for shopping anymore."},
          {label:"Supporting Details"},
          {label:"Main Idea 2", given:"There is a little something for everyone at malls."},
          {label:"Supporting Details"},
        ]},
      ]
    },
    {
      day: 3,
      title: "Before and After Malls",
      asYouRead: null,
      passage: `Close-Reading Texts — compare and contrast shopping before and after malls were built.

From "History of Malls": There are many malls in the United States today, but this wasn't always true. Many years ago, most stores were in downtown areas in the main part of a city. But in the early 1950s, many people began to move out of cities. They moved to suburbs, which are smaller towns near cities. Those people wanted to have stores near them, and they did not want to take long trips into the city to go shopping.

From "Malls": Most malls have large department stores called anchor stores. These anchor stores are typically the main stores in a mall. Malls also have smaller stores that usually sell different types of products. For example, jewelry stores, video game stores, and gift shops are just a few of the types of stores that can be found in malls. Malls have other places that sell items and services, too. One example is kiosks (KEE-ahsks). Kiosks are small stands that are often placed in the middle of a mall.`,
      questions: [
        {type:"compare3", q:"Compare and contrast shopping before and after malls were built.", columns:["Before Malls Were Built","After Malls Were Built","Both"]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Think about the texts from this unit. Then, respond to the prompt.",
      prompt: "Choose a mall you would like to visit. Write a letter to convince your family that they should take a trip to this mall. Provide logically ordered reasons that are supported by facts and details.",
    },
    {
      day: 5,
      title: "Make a Fact Sheet",
      asYouRead: null,
      passage: `Directions: Use what you learned about malls. Learn about a mall near you (ask a family member, or look one up). Make a fact sheet about it.`,
      questions: [
        {type:"open", q:"Name of the mall", lines:1},
        {type:"open", q:"Location", lines:1},
        {type:"open", q:"Facts (list a few interesting things about it)", lines:4},
      ]
    },
  ]
},
{
  id: 10,
  label: "Unit 4 · Week 1",
  days: [
    {
      day: 1,
      title: "Pizza Is Popular!",
      asYouRead: "Underline and number the reasons the author gives for why people like pizza.",
      passage: `Is pizza one of your favorite foods? If it is, you're not alone. Every year, about three billion pizzas are sold in the United States. And data shows that children like pizza more than any other type of food. For lunch or dinner, children would rather eat pizza than anything else.

There are many reasons why people love pizza so much. One reason is that pizza is easy to eat. It doesn't require a knife or fork; you can simply eat it with your hands. There are also many options for types of pizza. The base ingredients are a crust, sauce, and toppings, and the sky's the limit when it comes to what you can have on it! Some people are happy to enjoy a plain cheese pizza, while other people love adding as many veggies as possible on top. There is also a popular debate: does pineapple belong on pizza? Finally, pizza is also inexpensive. You can have a very tasty meal without spending a lot of money!`,
      questions: [
        {type:"mc", q:"According to the author, what is one reason people love pizza?", options:["Pizza is easy to eat.","Pizza is healthy.","Pizza is small.","Pizza is spicy."], correct:0},
        {type:"mc", q:"Some people may describe pizza as scrumptious. What does scrumptious mean?", options:["inexpensive","popular","round","tasty"], correct:3},
        {type:"mc", q:"What is one main idea of the text?", options:["Pizza is inexpensive.","Pizza is loved by children.","Pizza is popular for many reasons.","Pizza can be eaten without a knife or fork."], correct:2},
        {type:"mc", q:"Which simile best describes the topic of this text?", options:["as long as a snake","as tasty as pie","wet like the rain","as dry as the desert"], correct:1},
      ]
    },
    {
      day: 2,
      title: "The History of Pizza",
      asYouRead: "Circle the names of different groups of people who are part of the history of pizza making.",
      passage: `Pizza has been around for longer than you might think. People in ancient Egypt and Greece used to eat flat bread covered with olive oil and other toppings. In Italy, people in the past baked bread under hot stones. Then, they topped the bread with spices and other ingredients.

The pizza people eat today was created in 1889. It was made by Raffaele Esposito in Naples, Italy. He made a pizza to honor a visiting king and queen.

It took a while for pizza to become popular in the United States. Some Italians moved to the United States in the late 1800s. They brought pizza with them. But most people did not know about it. Pizza became popular in the United States after World War II. American soldiers ate pizza in Italy. When they came home from the war, they wanted pizza at home. More and more people started eating pizza!`,
      questions: [
        {type:"mc", q:"Which event happened first?", options:["Pizza came to the United States.","Early Italians baked bread under hot stones.","Pizza became popular all over the United States.","Raffaele Esposito made pizza for a king and queen."], correct:1},
        {type:"mc", q:"Which phrase describes when pizza became popular in the U.S.?", options:["after World War II","during the 1800s","for a long time","under hot stones"], correct:0},
        {type:"mc", q:"What does ancient mean?", options:["tropical","present-day","very nervous","long, long ago"], correct:3},
        {type:"mc", q:"Which idea is supported in this text and in “Pizza Is Popular!”?", options:["People enjoy eating pizza.","Pizza is the food of royalty.","People don't put different toppings on pizza.","Pizza is more popular in Italy than in the United States."], correct:0},
      ]
    },
    {
      day: 3,
      title: "How to Make Pizza",
      asYouRead: "Circle words that indicate time-order events.",
      passage: `A chef will follow several steps while making pizza. First, the chef will begin by mixing the ingredients for pizza dough, such as flour, yeast, and water. After the dough is mixed, the chef lets the dough rise. Then, it is rolled flat. Most pizzas are circular, but some pizzas look like squares or rectangles. Then, the chef spreads some sauce on the dough. There are several different kinds of sauce options, such as tomato sauce, garlic sauce, or barbecue sauce. Next, the chef adds the toppings and the cheese. When the ingredients have been put together, the chef puts the pizza into a special pan. Then, the chef uses a tool called a paddle to put the pizza into an oven. When the pizza is cooked through, the chef pulls it out, and they set it on a counter. They use a pizza cutter to make slices in the pizza, and the pizza is now ready for people to enjoy!`,
      questions: [
        {type:"mc", q:"What does a chef do right after adding the toppings and cheese?", options:["adds more toppings","put the pizza into a special pizza pan","mixes ingredients for the pizza dough","spreads some tomato sauce on the dough"], correct:1},
        {type:"mc", q:"Which of the following is not listed as an ingredient of pizza?", options:["baking soda","flour","water","yeast"], correct:0},
        {type:"open", q:"Which tools do chefs use to make pizza?", lines:2},
        {type:"open", q:"Which toppings do you like on your pizza?", lines:2},
      ]
    },
    {
      day: 4,
      title: "We Love Pizza!",
      asYouRead: "Underline or circle ingredients found on different pizzas around the world.",
      passage: `Pizza is very popular all around the world. People from many different countries love to eat it. And in each country, the pizza is slightly different.

In Japan, for instance, there are two main styles of pizza. One kind looks like the pizza you can get in the United States, but it often has seafood on it. The other kind of Japanese pizza looks more like a pancake. The ingredients in that pizza are mixed up into the batter. Then, the batter is cooked like a pancake. Finally, the pizza is cut into slices and served hot and fresh.

Many people in India also eat pizza. Pizza crust in India is often served on a type of bread called naan (NAHN). It is a thin, chewy dough that is often brushed with butter and garlic. In India, you can get pizza with pepperoni on it. You can also get pizza topped with tandoori chicken. This is a special type of grilled chicken. Or you can get your pizza with tofu on it, too. Some Indians also add chili flakes and ketchup to their pizza.

Australians also love pizza. If you go to Australia, you can get a pizza with pepperoni. But you can also get a pizza with lamb or eggs on it. Just like in the United States, you can get a pizza with ham and pineapple. Pineapple is the most popular pizza topping in Australia. Some Australians also like cut-up pumpkin on their pizza. Other Australians like shrimp on their pizza.

Around the world, the options are limitless for what people can put on their pizzas. If you can imagine a pizza, you can probably create it! What toppings do you like on your pizza? Chances are, someone else in the world also likes that type of pizza!`,
      questions: [
        {type:"mc", q:"What is one main idea of this text?", options:["Pizza is a popular food choice in the United States.","People of different countries make pizza differently.","Pizza is an unhealthy food choice around the world.","People in different parts of the world do not eat pizza."], correct:1},
        {type:"mc", q:"What is true about pizza in both India and Australia?", options:["You can get pizza with lamb.","You can get pizza with pumpkin.","You can get pizza with pepperoni.","You can get pizza with tandoori chicken."], correct:2},
        {type:"mc", q:"The author writes, “If you can imagine a pizza, you can probably create it!” Why did the author most likely end this statement with an exclamation point?", options:["to show anxiety","to show excitement","to show confusion","to show thankfulness"], correct:1},
        {type:"mc", q:"Which pair of words correctly compares the structure of this text to “How to Make Pizza”?", options:["cause-effect; problem-solution","problem-solution; cause-effect","compare-contrast; chronological order","chronological order; compare-contrast"], correct:3},
        {type:"open-table", q:"List unique ingredients found on pizza from each country.", rows:[
          {label:"Japan"},
          {label:"India"},
          {label:"Australia"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “We Love Pizza!” Then, respond to the prompt.",
      prompt: "Which pizza from the text would you be most interested in eating? State your opinion and support your idea using reasons, facts, and details.",
    },
  ]
},
{
  id: 11,
  label: "Unit 4 · Week 2",
  days: [
    {
      day: 1,
      title: "When I Grow Up",
      asYouRead: "Number the ideas Kevin shares about his future jobs.",
      passage: `At school, Kevin's teacher handed out papers. Kevin slid down in his chair. Writing was one of his least favorite parts of school. But when he turned his paper over and saw the prompt on the front, he got excited.

The prompt read: What do you want to do when you grow up?

He put his pencil to the paper, and the words came to him easily:

When I grow up, I mostly want to be a chef, and I would like to be chef who makes delicious pizzas. My family and I have always loved pizza, and there are so many kinds to make. Sometimes, I also think it would be cool to be an astronaut because I love space. Another thing I would like to be is an actor. I love going to see movies with my dad, and sometimes I even like to do my own impressions.`,
      questions: [
        {type:"mc", q:"What reason does Kevin give for wanting to be an actor?", options:["He wants to be famous.","He likes to read lines.","He wants his dad to be proud of him.","He enjoys movies and acting like the actors."], correct:3},
        {type:"mc", q:"How does Kevin feel about pizza?", options:["He wants to make anything but pizza.","He loves the variety pizza can have.","He does not like it.","He thinks it's just okay."], correct:1},
        {type:"mc", q:"What are impressions?", options:["people's personalities","made-up stories","imitating someone else","feelings people have"], correct:2},
        {type:"mc", q:"Why is there a comma after the phrase, When I grow up,?", options:["It tells the reader that someone is speaking.","It tells the reader that the sentence is complete.","It separates an introductory clause from the sentence.","It gives the reader time to breathe when reading a long sentence."], correct:2},
      ]
    },
    {
      day: 2,
      title: "A Family Tradition",
      asYouRead: "Circle the item that piques Kevin's interest. Underline details about the item.",
      passage: `The next morning, Kevin told his dad about the journal prompt from school.

"I'm going to let you in on a little family secret," he said, walking over to one of the kitchen cabinets. He grabbed a large binder and set it down on the counter.

"What is that?" Kevin asked, staring at the massive binder.

"It's our trusty family recipe book," his dad said. "You know how we make pizzas for our family dinner every month? All the recipes we use come from this."

"But you never look at the book," Kevin said, confused. His dad laughed and explained that he'd been using them for so long that he'd memorized them.

Kevin looked through the recipe book while he finished eating his breakfast. He noticed that some recipes were half-finished and some recipes were so tattered that they were barely readable. Then, he saw a pizza recipe that really caught his eye.

"Dad, I think I have an idea for the next family pizza," Kevin said.

"We'll make whichever pizza you've picked!" his dad exclaimed.`,
      questions: [
        {type:"mc", q:"Where does this part of the story take place?", options:["at Kevin's house in the den","in Kevin's classroom","at a pizza restaurant","in Kevin's kitchen"], correct:3},
        {type:"mc", q:"What is wrong with some of the family recipes?", options:["They aren't exactly complete.","They list the wrong ingredients.","They haven't been tried in many years.","They are removed from the recipe book."], correct:0},
        {type:"mc", q:"What is an antonym for massive?", options:["bulky","immense","thorough","tiny"], correct:3},
        {type:"mc", q:"What do Kevin and his dad have in common?", options:["They both enjoy pizza.","They both enjoy coffee.","They both enjoy journals.","They both enjoy writing recipes."], correct:0},
      ]
    },
    {
      day: 3,
      title: "Kevin's Pizzeria",
      asYouRead: "Place a star beside the challenge Kevin gives himself.",
      passage: `Kevin wanted to get some practice making pizza before he had to make it for his whole family. So, he decided to keep trying different recipes. First, he had to figure out how to make a pizza dough. It took him several attempts and a lot of help from his dad, but Kevin finally got it. He also added a secret ingredient to the dough, which was a few shakes of Italian seasoning.

After Kevin's mom and dad raved about his practice pizza, he decided to make a plan. He wanted to make every pizza recipe in the book. He even wanted to make the ones that had missing parts.

The kitchen became a pizza parlor over the next week. His dad started to call the kitchen "Kevin's Pizzeria." Kevin's mom customized a sign for it. She printed the words and hung it up across the kitchen door. Kevin loved it!`,
      questions: [
        {type:"mc", q:"What does Kevin challenge himself to do?", options:["turn his kitchen into a pizza parlor","improve the recipes","make every pizza recipe in the family recipe book","write down more recipes in the family recipe book"], correct:2},
        {type:"mc", q:"What is something that may be customized?", options:["a blender","a coffee mug","a pack of lined paper","a puppy"], correct:1},
        {type:"open", q:"How does Kevin's whole family get involved in his pizza-making?", lines:2},
        {type:"open", q:"What character traits does Kevin reveal through his actions?", lines:2},
      ]
    },
    {
      day: 4,
      title: "Cooking Competition",
      asYouRead: "Place a C beside one or more causes. Place an E beside the effect(s) of the cause(s).",
      passage: `Kevin continued to work on his pizza-making skills. When it came time for the family pizza night, he knocked it out of the park! After that night, he kept making pizzas. He was having so much fun with the family recipe book. For dessert one night, he made sweet cinnamon knots out of leftover pizza dough. Then, he made a breakfast pizza with ham, spinach, and a fried egg on top!

"Kevin, this is amazing," his dad said, finishing up a slice. "Have you ever thought about entering a cooking competition?"

"I've thought about opening a pizza restaurant," Kevin told his parents. "But I guess entering a competition seems like a better first step."

Kevin and his parents found a kids-only cooking competition. Everyone had to make a "comfort food" dish. Kevin was excited to enter, but he also felt nervous.

Kevin decided to focus on his pizza recipe instead of worrying. It was one of the recipes that was half-finished, so Kevin had to fill in the gaps. He made some mistakes each time he practiced, but he felt it turned out great each time.

The morning of the competition, Kevin headed to the center with his dad. Every child who was entering had to have an adult with them. The adult could help with tasks, such as chopping vegetables, but they couldn't participate in the actual cooking.

Kevin and his dad set to work making the pizza. His dad chopped basil for him, and Kevin pulled the sauce and dough together. Measuring out the ingredients for the sauce was the most complicated part. It involved using a variety of fresh garlic, basil, and crushed tomatoes. He also had to use extra virgin olive oil, some salt and pepper, and oregano. He put everything into a bowl and mixed it well.

His pizza came out of the oven with a crisp crust. And it was perfectly gooey and cheesy. At tasting time, the judges praised him for taking a simple recipe and making it well. Some judges even said it was the best dish they had eaten all night!

"It would be perfect in my eyes," said the last judge, "but I think the sauce has a bit too much garlic."

Kevin smiled and made a mental note to update the recipe book when he got home. He was proud of how well he had done, and he was happy to be one step closer to his dreams!`,
      questions: [
        {type:"mc", q:"What is one challenge in preparing for the cooking competition?", options:["Kevin's recipe is too simple.","Kevin keeps making some mistakes.","Chefs cannot make whatever they like.","Adults assist in the kitchen with their kids."], correct:1},
        {type:"mc", q:"Why might Kevin's recipe receive such high praise?", options:["He uses quality ingredients.","The judges are big fans of pizza.","The recipe uses just a few ingredients.","He uses a sauce that does not need to be cooked."], correct:0},
        {type:"mc", q:"What is Kevin's craft?", options:["cooking","painting","sculpting","writing"], correct:0},
        {type:"mc", q:"What is an antonym for complicated?", options:["confusing","difficult","messy","simple"], correct:3},
        {type:"open-table", q:"List three events that support the lesson or theme. Lesson/Theme: Overcoming challenges can lead to satisfying outcomes.", rows:[
          {label:"1."},
          {label:"2."},
          {label:"3."},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread “Cooking Competition.” Then, respond to the prompt.",
      prompt: "Pretend you are a judge at the cooking competition. Write to explain criteria you would be looking for to choose a winning dish. Then, describe a favorite food of yours that meets these criteria.",
    },
  ]
},
{
  id: 12,
  label: "Unit 4 · Week 3",
  days: [
    {
      day: 1,
      title: "Kevin's Pizzeria Review",
      asYouRead: null,
      passage: `DAILY TIMES — Kevin's Pizzeria Review

Kevin's Pizzeria is the newest restaurant in town. It's also the tastiest restaurant in town. The menu options allowed me to customize my pizza as much as I wanted. Even the picky eaters in my family were able to find something they liked.

The star of the show at Kevin's is the stone oven style pizza. These pizzas are baked in large stone ovens. The base of each pizza is a thick, crisp dough that will make your mouth water. It's handcrafted and made fresh each morning. Apparently, the dough recipe is a family favorite. It was passed down from Kevin's great grandmother. Layered on the crust is a fresh sauce made of perfectly roasted tomatoes. And on top of the sauce is a layer of fresh mozzarella cheese. You can add various toppings of your choice.

For my meal, I sampled three separate options in stone oven style: classic cheese, pepperoni, and veggie special. Each pizza was delightful. Each one had the perfect amount of toasted cheese, sauce, and toppings. It made for an incredible pizza experience.

Kevin makes sure that only the best ingredients are used in his pizzas. That's why most of the vegetables are grown in his own garden. For the cheese, he works with a local dairy farm. Because they are local, he is able to get it delivered fresh three times a week.

The pizzeria is also dedicated to reducing food waste. Any food left over at the end of the night is given out for free to anyone that needs or wants it.

I highly recommend trying Kevin's Pizzeria if you're on the lookout for new and exciting versions of a classic dish. Your taste buds will not be disappointed!`,
      questions: [
        {type:"mc", q:"What does the author mean when they write that the dough is handcrafted?", options:["made with many hands","made carefully by hand","made to look like a craft project","made following a special recipe"], correct:1},
        {type:"mc", q:"Where do most of the ingredients come from?", options:["the store","the garden","a dairy farm","a farmer's market"], correct:1},
        {type:"mc", q:"What does on the lookout mean?", options:["to see things clearly","to keep a careful eye on","to search for something","to look from a tall height"], correct:2},
        {type:"mc", q:"How does the author feel about the food at Kevin's Pizzeria?", options:["It is just okay.","It is not worth your time.","It is definitely worth trying.","It is good, but could be better."], correct:2},
        {type:"open", q:"Explain how the author's descriptions of the food helped you answer Question 4.", lines:3},
      ]
    },
    {
      day: 2,
      title: "Design Your Own Pizza",
      asYouRead: null,
      passage: `Close-Reading Texts — reread the pizzeria review on page 77, plus these excerpts:

From "We Love Pizza!": Australians also love pizza. If you go to Australia, you can get a pizza with pepperoni. But you can also get a pizza with lamb or eggs on it. Just like in the United States, you can get a pizza with ham and pineapple. Pineapple is the most popular pizza topping in Australia. Some Australians also like cut-up pumpkin on their pizza. Other Australians like shrimp on their pizza.

From "Cooking Competition": Measuring out the ingredients for the sauce was the most complicated part. It involved using a variety of fresh garlic, basil, and crushed tomatoes. He also had to use extra virgin olive oil, some salt and pepper, and oregano. He put everything into a bowl and mixed it well.

Directions: Write your own pizza recipe. Include your favorite ingredients.`,
      questions: [
        {type:"open-table", q:"Design your own pizza.", rows:[
          {label:"Name of Pizza"},
          {label:"Crust"},
          {label:"Sauce"},
          {label:"Toppings"},
        ]},
      ]
    },
    {
      day: 3,
      title: "Chefs vs. Kevin",
      asYouRead: null,
      passage: `Close-Reading Texts — compare how chefs in general compare to Kevin when making pizza.

From "How to Make Pizza": First, the chef will begin by mixing the ingredients for pizza dough, such as flour, yeast, and water. After the dough is mixed, the chef lets the dough rise. Then, it is rolled flat. Most pizzas are circular, but some pizzas look like squares or rectangles. Then, the chef spreads some sauce on the dough. There are several different kinds of sauce options, such as tomato sauce, garlic sauce, or barbecue sauce. Next, the chef adds the toppings and the cheese.

From "Kevin's Pizzeria Review": The base of each pizza is a thick, crisp dough that will make your mouth water. It's handcrafted and made fresh each morning. Apparently, the dough recipe is a family favorite. It was passed down from Kevin's great grandmother. Layered on the crust is a fresh sauce made of perfectly roasted tomatoes. And on top of the sauce is a layer of fresh mozzarella cheese. You can add various toppings of your choice.`,
      questions: [
        {type:"compare3", q:"Compare the dough.", columns:["Chefs","Kevin"]},
        {type:"compare3", q:"Compare the sauce.", columns:["Chefs","Kevin"]},
        {type:"compare3", q:"Compare the toppings.", columns:["Chefs","Kevin"]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Think about the texts from this unit. Then, respond to the prompt.",
      prompt: "Making pizza seems pretty simple. But anything can go wrong at any moment! Write a story about having a challenging experience making pizza. Use dialogue and descriptive language in your story.",
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Think about a favorite food at a restaurant you visit, or your favorite meal.",
      prompt: "Write a review of the food. Introduce the topic clearly, state an opinion, and support your opinion with reasons. Link your opinion and reasons using words, phrases, and clauses.",
    },
  ]
},
{
  id: 13,
  label: "Unit 5 · Week 1",
  days: [
    {
      day: 1,
      title: "The Kalahari Desert: A Special Place",
      asYouRead: null,
      passage: `The Kalahari Desert is a vast desert in southern Africa. It covers parts of Botswana, Namibia, and South Africa. It is not like most deserts. While other deserts are mostly sand dunes with little life, the Kalahari has grasses, bushes, and trees that support many animals.

The Kalahari is considered a desert because it has very little rainfall, but it is not as dry as deserts like the Sahara. Some parts of the Kalahari get just enough rain each year to support plant life. This makes the Kalahari a unique kind of desert, sometimes called a "semi-desert."

Many unique animals make their home in the Kalahari Desert. Lions, gemsboks, and meerkats are just a few examples. These animals have adapted special ways to survive in this harsh, dry environment. They have found ways to stay cool during the hot days and get enough water even when it does not rain very often.

The Kalahari Desert is a special place because it shows how life can thrive even in tough conditions. Scientists continue to study the plants and animals there to learn more about how living things adapt to their environments.`,
      questions: [
        {type:"mc", q:"What makes the Kalahari Desert different from most other deserts?", options:["It has more sand dunes than other deserts.","It has grasses, bushes, and trees that support life.","It never gets any rain at all.","It is located in Asia."], correct:1},
        {type:"mc", q:"What is another name for the kind of desert the Kalahari is?", options:["rainforest","semi-desert","tundra","oasis"], correct:1},
        {type:"mc", q:"Why do scientists study the plants and animals of the Kalahari?", options:["To find new places to build cities","To learn how living things adapt to their environments","To plan vacations there","To grow more crops in the desert"], correct:1},
        {type:"mc", q:"Which animals are mentioned as living in the Kalahari Desert?", options:["polar bears, penguins, and seals","lions, gemsboks, and meerkats","elephants, giraffes, and zebras only","wolves, foxes, and rabbits"], correct:1},
      ]
    },
    {
      day: 2,
      title: "The Climate in the Kalahari Desert",
      asYouRead: null,
      passage: `The climate of the Kalahari Desert is hot during the day and cold at night. Daytime temperatures can soar above 100 degrees Fahrenheit, but once the sun sets, temperatures can drop dramatically, sometimes close to freezing. This big swing in temperature is common in many deserts because there is little moisture in the air to hold in heat.

Rainfall in the Kalahari is unpredictable. Some areas receive a small amount of rain each year, mostly during the summer months. Other areas may go a long time without any rain at all. The plants and animals that live there have adapted to survive long dry spells.

Despite the harsh climate, the Kalahari supports a surprising amount of life. Grasses and shrubs grow in places where rain collects, and these plants provide food for many animals. Some animals get the water they need from the plants they eat, rather than drinking water directly.

The unpredictable climate makes survival a challenge, but the plants and animals of the Kalahari have found remarkable ways to adapt over time.`,
      questions: [
        {type:"mc", q:"What happens to temperatures at night in the Kalahari Desert?", options:["They stay the same as during the day.","They rise even higher than during the day.","They can drop dramatically, sometimes close to freezing.","They become extremely humid."], correct:2},
        {type:"mc", q:"Why do desert temperatures swing so much between day and night?", options:["There is little moisture in the air to hold in heat.","The sun is closer to the desert at night.","Deserts have more clouds than other places.","The wind blows colder air in from the ocean."], correct:0},
        {type:"mc", q:"How do some animals get the water they need?", options:["By digging deep wells","By drinking from rivers","From the plants they eat","By traveling to other countries"], correct:2},
        {type:"mc", q:"What is the author's main purpose in this passage?", options:["To explain how the Kalahari's climate affects its plants and animals","To compare the Kalahari to the Sahara Desert","To describe a vacation to the Kalahari Desert","To argue that deserts should be protected"], correct:0},
      ]
    },
    {
      day: 3,
      title: "Kalahari Plants and Animals",
      asYouRead: null,
      passage: `The plants and animals of the Kalahari Desert have developed amazing adaptations to survive the harsh climate. Many plants have long roots that reach deep underground to find water. Some plants, like certain melons, store water inside themselves so they can survive long periods without rain.

Animals have adapted in their own ways. Many Kalahari animals are most active during the cooler parts of the day, like early morning or evening, resting in shade during the hottest hours. Some animals, like the meerkat, live in underground burrows that stay cooler than the surface.

Many animals have also adapted to get water without drinking it directly. They eat juicy plants, roots, or insects that contain water. This adaptation is critical, since water sources can be rare and far apart in the desert.

Together, these adaptations allow a surprising variety of life to flourish in one of the harshest environments on Earth.`,
      questions: [
        {type:"mc", q:"How do some desert plants survive long periods without rain?", options:["They grow very quickly after each rainfall.","They store water inside themselves.","They change color to reflect sunlight.","They grow only during winter."], correct:1},
        {type:"mc", q:"Why do many Kalahari animals stay in burrows or shade during the hottest hours?", options:["To find more food","To avoid other animals","To stay cool","To sleep through the entire year"], correct:2},
        {type:"open", q:"Based on the passage, explain how animals in the Kalahari can survive without drinking water directly very often.", lines:3},
        {type:"open", q:"Would you like to visit the Kalahari Desert? Why or why not?", lines:3},
      ]
    },
    {
      day: 4,
      title: "Marvelous Meerkats",
      asYouRead: null,
      passage: `Meerkats are small mammals that live in the Kalahari Desert in groups called mobs. They are well adapted to survive the harsh desert environment in several remarkable ways.

One of the meerkat's most noticeable adaptations is the dark circles of fur around its eyes. These dark patches act like sunglasses, reducing the glare from the bright desert sun and helping meerkats see predators from far away. Meerkats also have special patches of skin on their bellies that are thin and dark, allowing them to absorb sunlight and warm up quickly on cool desert mornings.

Meerkats have long, sharp claws that are perfect for digging. They use these claws to dig burrows underground, where the temperature stays much cooler than on the surface. These burrows have multiple entrances and tunnels, giving meerkats quick escape routes if a predator approaches. The claws are also useful for digging up insects, roots, and small animals to eat.

Living in a mob also helps meerkats survive. While most of the group searches for food, one or more meerkats stand guard, watching the sky and horizon for predators like eagles and jackals. If a sentry spots danger, it lets out a warning call, and the whole mob quickly rushes to the safety of their burrows.`,
      questions: [
        {type:"mc", q:"What is the purpose of the dark circles of fur around a meerkat's eyes?", options:["To help them look fierce to predators","To reduce sun glare and help them spot predators","To attract mates","To keep insects out of their eyes"], correct:1},
        {type:"mc", q:"How do meerkats warm up quickly on cool desert mornings?", options:["By huddling together in large piles","Through thin, dark belly skin that absorbs sunlight","By running in circles","By digging deeper burrows"], correct:1},
        {type:"mc", q:"What is one use of a meerkat's sharp claws?", options:["Climbing trees","Digging burrows and finding food","Swimming across rivers","Building nests above ground"], correct:1},
        {type:"mc", q:"What happens when a sentry meerkat spots danger?", options:["It hides alone in the nearest hole.","It lets out a warning call so the mob can take cover.","It attacks the predator.","It ignores it unless the danger gets close."], correct:1},
        {type:"open-table", q:"List three details from the passage that support this main idea: Meerkats are well adapted to live in the Kalahari Desert.", rows:[
          {label:"Detail 1"},
          {label:"Detail 2"},
          {label:"Detail 3"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Think about what you learned about meerkats this week.",
      prompt: "Pretend you are a meerkat living in the Kalahari Desert. What is your day like? Use descriptive language to tell about your day, including where you sleep, what you eat, and how you stay safe from predators.",
    },
  ]
},
{
  id: 14,
  label: "Unit 5 · Week 2",
  days: [
    {
      day: 1,
      title: "When I Grow Up",
      asYouRead: null,
      passage: `Miles was a young meerkat pup. He was small, with soft fur and bright, curious eyes. Every day, Miles watched the older meerkats in his mob and wondered what it would be like to grow up.

He watched the sentries standing tall on their back legs, scanning the sky for eagles and the ground for jackals. "When I grow up," Miles thought, "I want to be a sentry. I want to keep my whole mob safe."

He watched the diggers, using their long claws to dig new tunnels and entrances to the burrow. "When I grow up," Miles thought, "I want to dig the biggest, safest burrow in the whole desert."

He watched the foragers heading out each morning to search for insects, roots, and eggs. "When I grow up," Miles thought, "I want to find the best food for my family."

Miles's mother nuzzled him gently. "You can do all of these things," she said. "Every meerkat in the mob learns to be a sentry, a digger, and a forager. That is how we survive together."

Miles smiled. He could not wait to grow up and help his mob in every way he could.`,
      questions: [
        {type:"mc", q:"What does Miles want to be when he watches the sentries?", options:["A digger","A forager","A sentry","A leader"], correct:2},
        {type:"mc", q:"What do the diggers in the mob do?", options:["Search for food","Watch for predators","Dig tunnels and entrances to the burrow","Take care of the pups"], correct:2},
        {type:"mc", q:"What does Miles's mother tell him?", options:["Only some meerkats get to learn every job.","Every meerkat learns to be a sentry, a digger, and a forager.","Meerkats work alone, not together.","He should choose only one job."], correct:1},
        {type:"mc", q:"What is the theme of this story?", options:["It is important to compete with others.","Working together helps everyone survive.","Only the strongest meerkats survive.","Growing up is the hardest part of life."], correct:1},
      ]
    },
    {
      day: 2,
      title: "Miles and Mort",
      asYouRead: null,
      passage: `As Miles grew older, he became close friends with another meerkat pup named Mort. The two pups spent their days playing, wrestling, and exploring near the edge of the burrow.

One afternoon, Miles wandered a little too far from the group while chasing a beetle. He did not notice a snake slithering through the grass nearby. Mort, who was standing watch like he had seen the sentries do, spotted the snake first.

"Miles, look out!" Mort shouted, and he dashed toward his friend. Mort's warning gave Miles just enough time to scurry back toward the burrow. The snake gave chase, but the meerkats reached their tunnel and ducked safely inside before it could catch them.

After they were safely underground, Miles caught his breath and thanked Mort. "You saved my life," Miles said.

Mort shrugged. "That's what friends do," he said. "We watch out for each other, just like the whole mob does."

From that day on, Miles and Mort always stayed close to one another, whether they were playing or exploring.`,
      questions: [
        {type:"mc", q:"What was Miles doing when he wandered away from the group?", options:["Digging a new tunnel","Chasing a beetle","Looking for water","Searching for his mother"], correct:1},
        {type:"mc", q:"Who noticed the snake first?", options:["Miles","Mort","Miles's mother","A sentry meerkat"], correct:1},
        {type:"mc", q:"What does Mort's statement \"That's what friends do\" suggest about meerkats?", options:["Meerkats compete with each other for food.","Meerkats look out for and protect each other.","Meerkats live alone most of the time.","Meerkats are usually afraid of snakes."], correct:1},
        {type:"mc", q:"What is most likely to happen the next time Miles and Mort explore together?", options:["They will avoid each other.","They will stay close and watch out for each other.","They will stop playing outside.","They will ask an adult to always join them."], correct:1},
      ]
    },
    {
      day: 3,
      title: "A Lovely Meerkat Morning",
      asYouRead: null,
      passage: `The sun rose slowly over the Kalahari Desert, painting the sky in shades of orange and pink. Miles poked his head out of the burrow entrance, sniffing the cool morning air. It was his favorite time of day.

One by one, the other meerkats in the mob emerged from the burrow, stretching and yawning in the early light. A sentry took its place on a termite mound, standing tall to scan for danger while the rest of the mob began their morning routine.

Miles and Mort joined a group of foragers heading out to search for breakfast. They dug through the sandy soil, uncovering beetles and grubs. Miles found a particularly large beetle and shared it with Mort, just as they always shared with each other.

As the morning went on, the desert grew warmer, and the meerkats took turns resting in the shade and continuing their search for food. It was, Miles thought, a truly lovely meerkat morning.`,
      questions: [
        {type:"mc", q:"What is the setting of this passage?", options:["A forest at night","The Kalahari Desert in the early morning","A zoo enclosure","A riverbank at sunset"], correct:1},
        {type:"mc", q:"What does the sentry do at the start of the mob's morning routine?", options:["Searches for food","Digs a new burrow","Stands on a termite mound to scan for danger","Plays with the pups"], correct:2},
        {type:"open", q:"List the predators or dangers mentioned or implied that the meerkats must watch for in this passage and others this week.", lines:3},
        {type:"open", q:"Based on this week's stories, do you think Miles will stick by Mort as they grow older? Use evidence from the stories to support your answer.", lines:4},
      ]
    },
    {
      day: 4,
      title: "Hidden Danger",
      asYouRead: null,
      passage: `The meerkat mob had dug several escape holes close to the grass line, just in case danger ever came too near. These extra holes meant the meerkats would never be too far from safety, no matter where they were foraging.

One morning, Miles was digging near the edge of the burrow when he found a clutch of eggs hidden in the sand. Excited, he called Mort over to see his discovery. As the two pups examined the eggs, neither noticed the long shadow sliding closer through the grass.

It was a snake, drawn by the scent of the eggs. When a sentry spotted it and barked the alarm, the entire mob joined in, barking loudly and standing together to look as large and threatening as possible.

Startled by the noisy, unified mob, the snake slithered away into the grass, choosing not to risk a fight against so many meerkats at once.

Miles and Mort, safe thanks to their mob's quick thinking and the escape holes they had dug earlier, breathed a sigh of relief.`,
      questions: [
        {type:"mc", q:"What did Miles find while digging near the burrow?", options:["A buried beetle","A clutch of eggs","A new tunnel entrance","A sleeping snake"], correct:1},
        {type:"mc", q:"What did the mob do when the sentry spotted the snake?", options:["They ran away individually.","They barked loudly and stood together to look threatening.","They ignored it and kept foraging.","They dug a new burrow immediately."], correct:1},
        {type:"mc", q:"Why did the snake slithered away?", options:["It found better food elsewhere.","It was startled by the noisy, unified mob.","A sentry attacked it.","It got tired of waiting."], correct:1},
        {type:"mc", q:"What is the effect of the meerkats having dug escape holes close to the grass line?", options:["They could never be too far from safety.","They could store more food underground.","They could see predators more easily.","They could grow more grass for shade."], correct:0},
        {type:"open-table", q:"Write an effect for each cause.", rows:[
          {label:"Cause 1", given:"The meerkats had dug a few escape holes close to the grass line."},
          {label:"Effect 1"},
          {label:"Cause 2", given:"Miles found some eggs."},
          {label:"Effect 2"},
          {label:"Cause 3", given:"All the meerkats barked at the snake."},
          {label:"Effect 3"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Think about the story \"Hidden Danger\" from this week.",
      prompt: "Rewrite the story from the point of view of the snake. Use a variety of transitional words, phrases, and clauses to manage the sequence of events.",
    },
  ]
},
{
  id: 15,
  label: "Unit 5 · Week 3",
  days: [
    {
      day: 1,
      title: "Meerkat Zoo Panel",
      asYouRead: null,
      passage: `MEERKAT
(Suricata suricatta)

Size: 10 inches long, plus a 7-9 inch tail
Weight: 1.5 to 2.2 pounds
Diet: Insects, small reptiles, eggs, roots, and bulbs
Habitat: Desert and grassland regions of southern Africa, including the Kalahari Desert
Lifespan: 8 to 12 years in the wild
Predators: Eagles, jackals, and snakes
Fun fact: Meerkats live in groups called mobs and take turns standing guard while others forage for food.`,
      questions: [
        {type:"mc", q:"According to the zoo panel, how long can a meerkat's tail be?", options:["1-2 inches","3-5 inches","7-9 inches","10-12 inches"], correct:2},
        {type:"mc", q:"What is part of a meerkat's diet?", options:["Only plants","Insects, small reptiles, eggs, roots, and bulbs","Large mammals","Fish"], correct:1},
        {type:"mc", q:"How long can a meerkat live in the wild?", options:["1 to 3 years","4 to 7 years","8 to 12 years","20 to 25 years"], correct:2},
        {type:"mc", q:"What is the fun fact on this zoo panel about?", options:["How meerkats dig burrows","How meerkats live in mobs and take turns standing guard","How meerkats find water","How meerkats raise their young"], correct:1},
        {type:"open", q:"What do you find most interesting about meerkats? Explain your answer.", lines:3},
      ]
    },
    {
      day: 2,
      title: "Ways Meerkats Are Adapted to Live in the Desert",
      asYouRead: "Close-Reading Task: Reread the passages from this week and unit. As you read, think about the physical traits and behaviors that help meerkats survive in the desert.",
      passage: `Close-Reading Texts — reread "Marvelous Meerkats," "When I Grow Up," "Hidden Danger," and the Meerkat Zoo Panel.

Directions: Sort the ways meerkats are adapted to live in the desert into two categories: Physical Traits (things about their bodies) and Behaviors (things they do).`,
      questions: [
        {type:"compare3", q:"List the physical traits and behaviors that help meerkats survive in the desert.", columns:["Physical Traits","Behaviors"]},
      ]
    },
    {
      day: 3,
      title: "Comparing Desert Animals",
      asYouRead: "Close-Reading Task: Reread passages from this unit about lions, gemsboks, and meerkats. As you read, think about how each animal is adapted to live in the desert, and what they have in common.",
      passage: `Close-Reading Texts — reread passages from this unit that mention lions, gemsboks, and meerkats living in the Kalahari Desert.

Directions: Describe how each animal is adapted to desert life, then identify what the three animals have in common.`,
      questions: [
        {type:"compare3", q:"Describe each animal's adaptations to desert life.", columns:["Lion","Gemsbok","Meerkat"]},
        {type:"open", q:"What do these three animals have in common?", lines:2},
      ]
    },
    {
      day: 4,
      title: "Plan a Documentary",
      asYouRead: null,
      passage: `Directions: Imagine you are making a documentary about meerkats. Plan four scenes for your documentary. For each scene, describe what video footage you would show and what the narrator would say.`,
      questions: [
        {type:"compare3", q:"Scene 1", columns:["Video","Narration"]},
        {type:"compare3", q:"Scene 2", columns:["Video","Narration"]},
        {type:"compare3", q:"Scene 3", columns:["Video","Narration"]},
        {type:"compare3", q:"Scene 4", columns:["Video","Narration"]},
      ]
    },
    {
      day: 5,
      title: "Design a Zoo Panel",
      asYouRead: null,
      passage: `Directions: Find out about another animal that lives in the Kalahari Desert (other than the meerkat). Research the animal, then write a zoo panel for it, just like the Meerkat Zoo Panel from Day 1.`,
      questions: [
        {type:"open-table", q:"Write a zoo panel for an animal that lives in the Kalahari Desert.", rows:[
          {label:"Animal Name"},
          {label:"Size"},
          {label:"Weight"},
          {label:"Diet"},
          {label:"Habitat"},
          {label:"Lifespan"},
          {label:"Predators"},
          {label:"Fun Fact"},
        ]},
      ]
    },
  ]
},
{
  id: 16,
  label: "Unit 6 · Week 1",
  days: [
    {
      day: 1,
      title: "Habitable Planets",
      asYouRead: "Circle words that indicate comparisons. Underline what is being compared.",
      passage: `Earth can support a variety of life because of where it is in the solar system. Earth doesn't get too much or too little of the sun's heat. This spot in the solar system is known as the habitable zone. So, plants, animals, and people can all thrive on the planet.

There are seven other planets in the solar system. But only two others lie in the habitable zone. They are Venus and Mars. Yet these planets lack some of the life-supporting factors that Earth has. For example, the atmosphere on Mars is too thin to allow for liquid water to stay on the surface of the planet. The atmosphere on Venus is too thick and does not have enough oxygen.`,
      questions: [
        {type:"mc", q:"What is the main idea of this text?", options:["Earth is one of eight planets.","Earth is in the right spot in the solar system to support life.","The atmosphere on Mars is too thin.","Three planets are in the habitable zone with Earth."], correct:1},
        {type:"mc", q:"Why can Venus and Mars not support life?", options:["They are too hot.","They are not in the habitable zone.","Their atmospheres are not suitable.","They are too far away from the sun."], correct:2},
        {type:"mc", q:"How is yet used in the text?", options:["as an adverb to describe time","as a conjunction to show contrast","as a noun to show something is unclear","as an adjective to describe the habitable zone"], correct:1},
        {type:"mc", q:"What is another word for habitable?", options:["liquid","greatest","centered","livable"], correct:3},
      ]
    },
    {
      day: 2,
      title: "Earth and Its Cosmic Address",
      asYouRead: "Underline new or interesting words related to space.",
      passage: `Earth has a precise location in the universe. It is somewhat similar to how you have an address at your home. Some scientists refer to Earth's location as its cosmic address. This address tells people where Earth is located.

Earth orbits a star in a solar system. This solar system sits inside the Milky Way Galaxy. A galaxy is a very large group of stars, planets, and other matter. Outside the Milky Way is a group of about 30 other galaxies. Together, these galaxies make up a local group. And even more galaxies are outside this group. Combined, they make up a local supercluster. A supercluster is another word for a massive group of galaxies. And outside of that are even more superclusters. All these groups of stars and planets exist in the universe.

To get a planet's cosmic address, you would start with the name of the planet, the solar system, and the galaxy. Then, you would add the name of the local group and the local supercluster. You would end with the universe!`,
      questions: [
        {type:"mc", q:"How are planets in distant galaxies related to Earth?", options:["They are inside the universe.","They have the same address.","They are in the same solar system.","They are within the Milky Way Galaxy."], correct:0},
        {type:"mc", q:"What is meant by cosmic?", options:["far away","in the universe","at an address","linear"], correct:1},
        {type:"mc", q:"About how many galaxies make up a local group with the Milky Way?", options:["three","thirteen","thirty","three hundred"], correct:2},
        {type:"mc", q:"What is the name of Earth's galaxy?", options:["Local Group","Local Supercluster","Milky Way","Universe"], correct:2},
      ]
    },
    {
      day: 3,
      title: "Gravity",
      asYouRead: "Write clarifying questions you have about the text in the margin.",
      passage: `The same force that causes a ball to fall to the ground is what causes Earth to continue orbiting the sun. This force is gravity. It is dependent on how much mass an object has. The mass of an object is a measurement of how much weight it has. Objects with more mass have more gravity, and objects with less mass have less gravity.

Sometimes, objects in space have too much mass. These objects can form black holes. A black hole is a point in space where gravity is so great that not even light can escape. Some black holes are bigger than others. Large black holes are at the center of every galaxy. They are supermassive black holes. The supermassive black hole at the center of the Milky Way is known as Sagittarius A. The mass of this black hole is equal to about four million suns!`,
      questions: [
        {type:"mc", q:"How is mass related to gravity?", options:["Objects with greater mass have less gravity.","Objects with greater mass have greater gravity.","Objects with less mass have greater gravity.","Mass is not related to gravity."], correct:1},
        {type:"mc", q:"Which force keeps Earth in orbit?", options:["black hole","light","mass","gravity"], correct:3},
        {type:"open", q:"How does a black hole form?", lines:3},
        {type:"open", q:"Do you think scientists will discover more black holes? Explain your thinking.", lines:3},
      ]
    },
    {
      day: 4,
      title: "A Brief History of Space Telescopes",
      asYouRead: "Circle facts about Hubble. Underline facts about the James Webb Space Telescope.",
      passage: `Telescopes have come a long way through time. Galileo Galilei was the first person to use a telescope to look at objects in space. He looked at Jupiter's moons. Science has improved a lot since Galilei's time. We even have telescopes set up in outer space! These are known as space telescopes.

Space telescopes are set up in special ways. They are placed far away from any source of light on Earth. This way, they do not have to deal with light from large cities or countries. Astronomers call this light noise. Space telescopes are great because they deal with less noise. This way, the images that they can show are more clear and defined.

The Hubble Space Telescope (HST) was the fourth space telescope to be put into space. It was the first one that looked at objects in outer space through the visible spectrum. This is a fancy way of saying that it sees things the same way people on Earth see things. The Hubble led to a lot of discoveries.

An even more powerful space telescope was launched. It is the James Webb Space Telescope (JWST). The National Aeronautics and Space Administration (NASA) launched this telescope on December 25, 2021. One of the main differences between the JWST and Hubble is the size of their mirrors. The mirror on a telescope is also called an eye. The mirror on the JWST is almost three times wider than Hubble's. This bigger mirror allows the JWST to see objects that are fainter and farther away.

There are more differences between the two telescopes that make the JWST stronger. The JWST sees light in the infrared range. This is light that is outside the visible spectrum. Anything that gives off heat can be seen in the infrared range. But the Hubble primarily sees things that are in the visible range of light. So, JWST can see things that the Hubble cannot. One example is the atmosphere of a planet. This can be seen in the infrared range. Another difference is that the Hubble has problems seeing through space dust. But space dust is mostly seen in the visible spectrum. Since the JWST uses infrared, it can see what is beyond the dust.

Space telescopes have improved a lot in the past few decades. There are exciting things to see in space in the future!`,
      questions: [
        {type:"mc", q:"How many space telescopes came before Hubble?", options:["one","two","three","four"], correct:2},
        {type:"mc", q:"Why are space telescopes beneficial?", options:["They have fewer mirrors.","They do not send information back quickly.","Light does not interfere with them.","They deal with more noise."], correct:2},
        {type:"mc", q:"What is a limitation of Hubble?", options:["It does not take clear images.","It cannot see through space dust.","It sees objects in infrared light.","It cannot travel as far as others."], correct:1},
        {type:"mc", q:"What does an astronomer do?", options:["make space telescopes","study zodiac signs","travel to space","study space"], correct:3},
        {type:"compare3", q:"Compare Hubble to the James Webb Space Telescope.", columns:["Hubble","James Webb","Both"]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread \"A Brief History of Space Telescopes\" and the other texts from this week.",
      prompt: "What lies in space beyond Earth? Write a topic sentence. Develop the topic with facts, definitions, and concrete details, from one or more texts.",
    },
  ]
},
{
  id: 17,
  label: "Unit 6 · Week 2",
  days: [
    {
      day: 1,
      title: "Star Stuff",
      asYouRead: "Circle words that describe people's feelings.",
      passage: `Normally, Naomi would be excited to start a new school year. But she had moved to a new town a few weeks before, and she was feeling anxious. "Whenever you feel nervous, take a deep breath," her dad told her. "Then think about how—"

"You and I are made out of the same stuff stars are made of," Naomi said, finishing her father's favorite phrase. They both loved Carl Sagan, and her father often told her how his work was informative and inspirational.

Naomi hoped she would be able to tell the class what she had done over the summer. For the past few months, Naomi had been going to space camp. She had learned about stars, planets, astronauts, and space technology. She even got to go on a ride that simulated what it felt like to be in space!

Naomi hoped that the rest of the class would be as interested in space as she was.`,
      questions: [
        {type:"mc", q:"What was Carl Sagan most likely interested in?", options:["camps","family events","school","space"], correct:3},
        {type:"mc", q:"Why does Naomi's dad begin to say an inspirational quote?", options:["She is excited to learn about space.","She is nervous about starting school.","She is excited about her summer camp.","She is nervous about the space simulator."], correct:1},
        {type:"mc", q:"How does Naomi feel about space camp?", options:["She loves it.","She hates it.","She finds it boring.","She thinks it is okay."], correct:0},
        {type:"mc", q:"What is the meaning of simulated?", options:["acted like","forbid","raced around","tried"], correct:0},
      ]
    },
    {
      day: 2,
      title: "Ms. Findelton",
      asYouRead: "Make notes in the margins about connections you can make to Naomi's first day at school.",
      passage: `Ms. Findelton went to the front of the room and greeted everyone. "Hello! Welcome! My name is Ms. Findelton. I'd like us to go around the room and introduce ourselves. I'll start by telling you a little bit about myself. I've been teaching for five years, I have two cats, and my favorite subject is science. I'd like everyone to start thinking of their favorite subject in school."

Naomi grinned at her. The entire class began to mumble amongst themselves. Ms. Findelton broke the chatter with a question.

"Okay, let's see…whose favorite subject is science?"

Naomi's hand shot up immediately. Ms. Findelton chuckled.

"Um, Hi, I'm Naomi," Naomi said shyly. "I just moved here. I love learning about the stuff around us. That includes Earth, space, plants, and oceans."`,
      questions: [
        {type:"mc", q:"What is the class likely mumbling about?", options:["going to recess","their favorite subjects","the classroom decorations","the lunch menu"], correct:1},
        {type:"mc", q:"What does this sentence from the text tell readers about Naomi? Naomi's hand shot up immediately.", options:["She is excited to share.","She is nervous.","She is not sure what to share.","She does not want to be called on."], correct:0},
        {type:"mc", q:"Which of the following is the best description of chatter?", options:["smiling","talking","whispering","yelling"], correct:1},
        {type:"mc", q:"Why does Naomi like science?", options:["She likes using scientific equipment.","She likes experiments.","She likes learning about the world.","She likes to work with lab partners."], correct:2},
      ]
    },
    {
      day: 3,
      title: "Let's Talk Science",
      asYouRead: "Write comments or questions you have about the events in the text.",
      passage: `"Would you like to share anything fun you did over the summer?" Ms. Findelton asked Naomi. Naomi smiled and nodded.

"I went to space camp over the summer," she said. A few of her classmates said Wow! or Ooh! out loud. "I got to eat some freeze-dried ice cream just like astronauts eat in space, and I even got to see the shuttles at the space center."

Ms. Findelton went around the room so every student could introduce themselves. Naomi was relieved to hear that there were a few other students who also loved space, and she couldn't wait to talk with them at recess.

"Space is actually our first science topic this year. I want you to write everything you know about space on a sheet of notebook paper."

Naomi began writing frantically in her notebook. After a few minutes, Ms. Findelton gave new directions. They were going to watch a short video about the universe. Naomi quickly flipped to a new page in her notebook.`,
      questions: [
        {type:"mc", q:"What is another way to say frantically?", options:["with care","with caution","with disinterest","with enthusiasm"], correct:3},
        {type:"mc", q:"Who does Naomi hope to talk with at recess?", options:["her classmates who don't know much about space","her classmates from camp","students in a different class","her classmates who also love space"], correct:3},
        {type:"open", q:"How do you know Naomi is excited about school?", lines:3},
        {type:"open", q:"Does space camp sound exciting to you? Why or why not?", lines:3},
      ]
    },
    {
      day: 4,
      title: "A Strange Trip to Europa",
      asYouRead: "Underline events that seem unrealistic. Write comments or questions you have about the events in the text.",
      passage: `"This is the surface of Jupiter's icy moon, Europa. The ice on the surface is around 10 to 15 miles or 15 to 25 kilometers thick," the narrator of the video said. Naomi struggled to keep up with the narrator as she took notes furiously. She was starting to feel tired and it didn't help that Ms. Findelton dimmed the lights.

Maybe I can close my eyes for just one moment, Naomi thought to herself.

When she opened her eyes again, the classroom had faded. It seemed like she was alone on an ice-covered moon! She saw a large, spinning ball of gas hanging in the blackness of the sky. She had learned a lot about the planets, and it seemed like she was looking at Jupiter. Am I on Europa?

"Jupiter is held in orbit by the sun's gravity," a faraway voice echoed.

Naomi spun around, trying to figure out where the voice was coming from. Then, she started to feel vibrations coming from the ground beneath her. The ice beneath her feet was beginning to splinter and form cracks. An earthquake! Naomi thought to herself, her heart pounding. She turned to run, but her shoes seemed like they were glued to the ice.

"This part is very important, so please pay attention," another voice echoed.

Naomi looked down at her feet. They were now off the ground—she was floating! Large chunks of ice were floating up around her. When Naomi looked back up into the sky, she saw she was being pulled toward a large black hole.

A sharp plink noise woke Naomi up from her dream. She blinked and realized she had fallen asleep. Her pencil had fallen to the floor, and she leaned over in her chair to grab it.

Whew! That was just a dream, Naomi thought to herself, shuddering as she recalled the ice. Then, she looked down at her page of notes. It was only half-filled, and the video was nearly over!

When the video ended, Ms. Findelton turned on the lights and asked everyone to get into groups to share what they had learned. A student sitting a few chairs away from Naomi startled himself awake. Naomi grinned and headed over to him, sure that they would have plenty of things to talk about.`,
      questions: [
        {type:"mc", q:"What is Europa?", options:["a planet in our solar system","one of Jupiter's moons","one of Mars' moons","a made up planet"], correct:1},
        {type:"mc", q:"How does Naomi feel about the vibration underground?", options:["excited","annoyed","frightened","indifferent"], correct:2},
        {type:"mc", q:"What is a synonym for shuddering?", options:["breaking","floating","dancing","quivering"], correct:3},
        {type:"mc", q:"Why is Naomi concerned when she wakes up?", options:["She misses information in the video.","She worries her teacher would be angry.","She is sure her classmates will laugh at her.","She worries that she will not get to sleep that night."], correct:0},
        {type:"open-table", q:"Describe different parts of Naomi's dream-space adventure.", rows:[
          {label:"Europa"},
          {label:"Jupiter"},
          {label:"earthquake"},
          {label:"gravity"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread \"A Strange Trip to Europa.\"",
      prompt: "Imagine that you have the chance to go to space for a day. Write a story about your day and the things you see. Orient the reader by introducing the setting, a situation or problem, and a narrator and/or characters. Organize the events to unfold naturally.",
    },
  ]
},
{
  id: 18,
  label: "Unit 6 · Week 3",
  days: [
    {
      day: 1,
      title: "Naomi's Adventure Comic",
      asYouRead: null,
      passageImage: "assets/week18/naomis-adventure-comic.png",
      passage: `Naomi is preparing for her first trip into space. In just half an hour, her team will be on their way to Europa. They will be the first humans to explore the icy moon of Jupiter! The comic above shows her liftoff and journey to leave Earth.`,
      questions: [
        {type:"mc", q:"Why is Naomi's space mission important?", options:["It's the first mission beyond Mars.","It's the first mission where people explore space.","It's the first time people will encounter aliens.","It's the first time people will go to Jupiter's moon."], correct:3},
        {type:"mc", q:"Why do you think they are going to be gone for seven years?", options:["They think that seven is a lucky number.","It takes a long time to go anywhere in space.","They will go around Europa seven times.","All missions to space take exactly seven years."], correct:1},
        {type:"mc", q:"How does Naomi feel about leaving Earth?", options:["scared and annoyed","sad but excited","confused and sad","nervous but disappointed"], correct:1},
        {type:"mc", q:"What is another word for an expedition?", options:["journey","travel bags","travel group","vehicle"], correct:0},
        {type:"open", q:"What do you envision Naomi and her crew will do on their way to Europa? What do you think they will do when they arrive?", lines:4},
      ]
    },
    {
      day: 2,
      title: "Interjections in the Texts",
      asYouRead: "Closely read these texts. Then, reread the comic from Day 1. Write an interjection from each passage. Explain why the author used it.",
      passage: `Close-Reading Texts

From "Let's Talk Science": "I went to space camp over the summer," she said. A few of her classmates said Wow! or Ooh! out loud. "I got to eat some freeze-dried ice cream just like astronauts eat in space, and I even got to see the shuttles at the space center."

From "A Strange Trip to Europa": Whew! That was just a dream, Naomi thought to herself, shuddering as she recalled the ice. Then she looked down at her page of notes. It was only half-filled, and the video was nearly over!

Directions: For each text (including "Naomi's Adventure Comic" from Day 1), write the interjection used and explain its purpose or meaning.`,
      questions: [
        {type:"compare3", q:"Let's Talk Science", columns:["Interjection","Purpose or Meaning"]},
        {type:"compare3", q:"A Strange Trip to Europa", columns:["Interjection","Purpose or Meaning"]},
        {type:"compare3", q:"Naomi's Adventure Comic", columns:["Interjection","Purpose or Meaning"]},
      ]
    },
    {
      day: 3,
      title: "Naomi's Feelings",
      asYouRead: "Closely read these texts. Then, reread the comic from Day 1. Record Naomi's feelings. Describe her actions or story events that reveal her feelings.",
      passage: `Close-Reading Texts

From "Star Stuff": Normally, Naomi would be excited to start a new school year. But she had moved to a new town a few weeks before, and she was feeling anxious. "Whenever you feel nervous, take a deep breath," her dad told her. "Then think about how—" "You and I are made out of the same stuff stars are made of," Naomi said, finishing her father's favorite phrase.

From "Let's Talk Science": Naomi was relieved to hear that there were a few other students who also loved space, and she couldn't wait to talk with them at recess. "Space is actually our first science topic this year. I want you to write everything you know—or think you know—about space on a sheet of notebook paper." Naomi began writing frantically in her notebook.

Directions: For each text (including "Naomi's Adventure Comic" from Day 1), record Naomi's feelings and describe the actions or events that reveal them.`,
      questions: [
        {type:"compare3", q:"Star Stuff", columns:["Naomi's Feelings","Story Support"]},
        {type:"compare3", q:"Let's Talk Science", columns:["Naomi's Feelings","Story Support"]},
        {type:"compare3", q:"Naomi's Adventure Comic", columns:["Naomi's Feelings","Story Support"]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Reread the texts in this unit.",
      prompt: "Explain why you would or would not want to be an astronaut when you grow up. Link your opinion and reasons using words, phrases, and clauses.",
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Galactic Travel Tours has a special on a space flight.",
      prompt: "Make a comic in which you join a flight. Describe where you go and what you see and do. Use speech bubbles to show dialogue.",
    },
  ]
},
{
  id: 19,
  label: "Unit 7 · Week 1",
  days: [
    {
      day: 1,
      title: "Auckland, New Zealand",
      asYouRead: "Circle things you would like to do if you visited Auckland.",
      passage: `Imagine a place where you can swim, take a boat or ferry ride, and visit a park all in the same city. If you visit Auckland, New Zealand, you can do all these things! Auckland is the biggest city in New Zealand. Auckland is sometimes called "the city of sails." That is because it is famous for its sailing and yacht races.

Auckland is also home to Sky Tower. Sky Tower is the tallest building in the Southern Hemisphere. People can go to the top of Sky Tower and see for miles around. More fun things to do around the city include going on dolphin or whale-watching tours, visiting the zoo, or following the many bike paths. Plus, there are countless stores and restaurants. So no matter what you like to do, you can find something fun to do in Auckland!`,
      questions: [
        {type:"mc", q:"Why is Auckland sometimes called 'the city of sails'?", options:["It is home to Sky Tower.","It is the largest city in New Zealand.","It is famous for sailing and yacht racing.","You can go dolphin and whale watching."], correct:2},
        {type:"mc", q:"What is a yacht?", options:["food","a boat","an animal","a shoe"], correct:1},
        {type:"mc", q:"How can you tell the author wants the reader to be excited about Auckland?", options:["They use exclamations.","They describe important sites.","They explain why Auckland is famous.","They describe their favorite thing to do."], correct:0},
        {type:"mc", q:"What is the main idea of this text?", options:["Auckland is on New Zealand's North Island.","Everyone should avoid Auckland, New Zealand.","There are fun things to do in Auckland, New Zealand.","The tallest building in the Southern Hemisphere is in Auckland."], correct:2},
      ]
    },
    {
      day: 2,
      title: "A National Sport",
      asYouRead: "Underline facts you learn about rugby.",
      passage: `Can you guess which sport this is from the following clues? This sport is played in over 100 countries. It is played with fifteen players on each team. The object of the game is to carry the ball over the opponents' goal line. Have you guessed the sport yet? It's rugby!

Rugby is extremely popular in many countries of the world. It is the national sport of New Zealand, South Africa, Wales, and other countries. Rugby is getting more popular, and it was even included in the 2016 Olympics.

Rugby is like American football in some ways. For example, in both rugby and American football, the ball has an oval shape. Players try to carry it down the field. But there are some key differences between the two sports. In each sport, there are different rules for how the ball can be moved.`,
      questions: [
        {type:"mc", q:"What is one main idea of this text?", options:["Rugby is played with 15 players on each team.","Rugby is played in over 100 countries.","Rugby is popular in many countries.","Rugby has a ball with an oval shape."], correct:2},
        {type:"mc", q:"Which prepositional phrase explains where rugby is played?", options:["in over 100 countries","down field","over the opponents' goal line","with fifteen players"], correct:0},
        {type:"mc", q:"What are opponents?", options:["players on the other team","players on the same team","the national sport of New Zealand","popular countries around the world"], correct:0},
        {type:"mc", q:"Which word reflects how the author describes rugby?", options:["limited","safe","popular","varied"], correct:2},
      ]
    },
    {
      day: 3,
      title: "The Māori",
      asYouRead: "Circle words that describe the Māori.",
      passage: `The Māori (MAU-ree) are Indigenous (in-DIH-juh-nuhs) people of New Zealand. That means they were the first people to live there. The Māori are Polynesian like the Indigenous peoples of Hawai'i. Nobody knows when Māori people first came to New Zealand. But it is known how they got there. They came to New Zealand in canoes. They came from other parts of the Pacific. The Māori were very skilled sailors.

Today, about 14 percent of New Zealand's people are Māori. The Māori people have their own culture. They have their own language, customs, and legends. They have a strong sense of community, too. Māori songs and art are famous. Their tattoos are famous as well.`,
      questions: [
        {type:"mc", q:"According to the text, what are the Māori skilled at doing?", options:["amusement parks","cooking","fishing","sailing"], correct:3},
        {type:"mc", q:"The word percent means for each one hundred. Which word has a Latin root with a similar meaning?", options:["center","century","perfect","person"], correct:1},
        {type:"open", q:"What is still uncertain about the Māori?", lines:2},
        {type:"open", q:"What image would you add to this text to give readers more information?", lines:2},
      ]
    },
    {
      day: 4,
      title: "Kia Ora! Welcome to New Zealand",
      asYouRead: "Underline information that is new or interesting.",
      passage: `Kia ora (kee OR-uh)! This is something you may hear if you visit the island country of New Zealand. Kia ora means hello in the Māori language. Māori is one language spoken in New Zealand. English is also spoken there. There is a lot more to learn about New Zealand!

First, New Zealand's geography is unique. The country is located in the Pacific Ocean. New Zealand has two main islands: North Island and South Island. Together, they are about the size of the U.S. state of Colorado. The capital of New Zealand is Wellington. Wellington is on the North Island. So is Auckland, which is the country's largest city. But most of New Zealand is not made up of very large cities. Instead, there are many smaller cities and towns.

New Zealand is in the Southern Hemisphere, so the seasons there are different from the seasons in the Northern Hemisphere. For example, when it is winter in the United States, it is summer in New Zealand. The North Island is usually a little warmer than the South Island.

Although New Zealand is not a large country, there are many things for people to see and do there. On the South Island, there are beautiful mountains where people can ski and snowboard. There are several beaches, forests, and lakes to visit. On the North Island, people can see volcanoes and hot springs. They can visit New Zealand's two largest cities, too.

Lots of animals thrive in New Zealand. Many types of fish, whales, and dolphins live in the surrounding waters. Different types of birds live across the land. The most famous bird is the kiwi. It is a flightless bird about the size of a chicken. New Zealanders are sometimes even called Kiwis.

A few sports are popular in New Zealand. The national sport of New Zealand is rugby. It is the most popular sport in the country. Rugby is similar in some ways to American football. Other popular sports in New Zealand include sailing and cricket. Cricket is similar in some ways to American baseball. Many people throughout the country play or watch these sports.

Whether you visit the North or South Island of New Zealand, there is plenty for you to see and do. With many places to visit, sports to see, and weather to enjoy, New Zealand has countless options!`,
      questions: [
        {type:"mc", q:"What are New Zealanders sometimes called?", options:["Crickets","Islanders","Kia Ora","Kiwis"], correct:3},
        {type:"mc", q:"What is one main idea of this text?", options:["Kia ora means hello in Māori.","Cricket is a game a little like baseball.","The capital of New Zealand is Wellington.","New Zealand is an island country in the Pacific Ocean."], correct:3},
        {type:"mc", q:"What is the main idea of the fifth paragraph?", options:["Auckland is the largest city in New Zealand.","People in New Zealand play cricket and rugby.","New Zealand is home to many types of animals.","A kiwi is a flightless bird about the size of a chicken."], correct:2},
        {type:"mc", q:"What do you learn about in this text and in 'The Māori'?", options:["The Māori are sailors.","The Māori children go to school.","The Māori have their own language.","The Māori came to New Zealand in canoes."], correct:0},
        {type:"open-table", q:"List details about each topic as it relates to New Zealand.", rows:[
          {label:"South Island"},
          {label:"North Island"},
          {label:"Animals"},
          {label:"Sports"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread \"Kia Ora! Welcome to New Zealand\" and the other texts from this week.",
      prompt: "How does life in New Zealand compare to where you live? Write a paragraph about the similarities and differences between life in New Zealand and your home.",
    },
  ]
},
{
  id: 20,
  label: "Unit 7 · Week 2",
  days: [
    {
      day: 1,
      title: "Preparing for the Festival",
      asYouRead: "Circle reasons for the welcoming event. Underline things that take place.",
      passage: `It was an exciting week for Kaia and her family. They were volunteering for the annual summer festival at their local community center in Auckland. Kaia's family was Māori, and they often volunteered for this event. It was a weekend filled with special introductions, music, dancing, and feasts. During this time, people in her community met with tourists from around the world, talked about their cultures, and had a good time.

This year, the event was extra special for Kaia. Her family would be bringing a guest: Kaia's pen pal, Jacob. Jacob lived in Montreal, Canada, and he had always wanted to visit New Zealand. Kaia couldn't wait for him to arrive in a couple of days!

Her family would go to the community center later to put up decorations, but for right now, she was helping her mom with some cooking. Kaia spent her day running around the kitchen, chopping vegetables, and preparing ingredients. She hoped Jacob would enjoy the meals they were making!`,
      questions: [
        {type:"mc", q:"Why does Kaia's family help with the annual summer festival?", options:["to meet new people and share their culture","to greet guests as official New Zealand greeters","to offer entertainment for visiting government officials","to show Jacob's family why New Zealand was so popular"], correct:0},
        {type:"mc", q:"What is another word for annual?", options:["daily","weekly","monthly","yearly"], correct:3},
        {type:"mc", q:"How does Kaia spend her time in this story?", options:["cleaning","cooking","setting up banners","stocking supplies"], correct:1},
        {type:"mc", q:"Which phrase best describes where Jacob lives?", options:["He is from Montreal.","He is from Auckland.","He is from New Zealand.","He is from Seattle."], correct:0},
      ]
    },
    {
      day: 2,
      title: "Arriving in Auckland",
      asYouRead: "Write questions or comments you have about the events and characters in the margins.",
      passage: `A few days later, Jacob arrived! Kaia was nervous to meet him, but within five minutes of meeting, they were joking and laughing. Kaia showed Jacob around her neighborhood, and he loved the fried whitebait fish they had for dinner.

The next day, Kaia brought Jacob to the community center. They walked up behind one of her elders, and she tapped his shoulder.

"Hey Koa, this is Jacob," Kaia said. "He's my pen pal from Montreal."

Koa turned and smiled. "Glad to meet you, Jacob," he said. "Have you been enjoying Auckland so far?"

"It's been great," Jacob said. "Everything is so new to me!"

Koa smiled at Jacob, "I'm sure you'll love the festival. We'll be having music, introductions from other tribes, and, of course, food!"`,
      questions: [
        {type:"mc", q:"How is Jacob feeling about being in Auckland?", options:["He feels excited to be learning new things.","He is scared to be there.","He is nervous to try new food.","He feels unsure about meeting Kaia."], correct:0},
        {type:"mc", q:"What words best describe Koa?", options:["timid but welcoming","friendly but harsh","formal and nice","welcoming and friendly"], correct:3},
        {type:"mc", q:"What prefix can be added to arranging to create a new word?", options:["in–","dis–","re–","un–"], correct:2},
        {type:"mc", q:"Which word is not a compound word?", options:["handshake","whitebait","neighborhood","welcoming"], correct:3},
      ]
    },
    {
      day: 3,
      title: "Learning about Legends",
      asYouRead: "Write questions or comments you have about the events and characters in the margins.",
      passage: `The first day of the festival had arrived. Kaia and Jacob were handing out programs when Jacob overheard a conversation between two friends.

"No, no, no, earth mother and sky father were pushed apart by all their children except for the god of wind and storms," one of the friends said.

"Oh, that's right! And then the god of wind and storms raged war against his siblings," the other friend said. "He went on to beat them all, except for one brother—the god of people."

"I think they were talking about a Māori legend," Jacob said to Kaia. "In school, we learned about some First Nations legends, but I had not heard any Māori legends before. Can you tell me about any others?"

"Hmm…well, my favorite legend is of the whale rider. It's a long story, but basically, this guy rode a whale from one island to another!"`,
      questions: [
        {type:"mc", q:"What are the two friends talking about?", options:["a type of Māori artwork","a Māori legend","a Māori tradition","a Māori symbol"], correct:1},
        {type:"mc", q:"Why are the words except and then italicized in the text?", options:["to show they are part of the dialogue","to show they are vocabulary words","to give them more emphasis","to give them a special accent"], correct:2},
        {type:"open", q:"What is Kaia's favorite legend about?", lines:2},
        {type:"open", q:"How do you think stories and legends contribute to a culture?", lines:3},
      ]
    },
    {
      day: 4,
      title: "Having Fun at the Festival",
      asYouRead: "Underline details about Kaia's culture. Put a star next to details about Jacob's culture.",
      passage: `Kaia and Jacob went inside and found their seats. Koa went to the stage and began speaking into a microphone.

"Kia ora! Welcome to the first day of our annual festival!" Koa said to a thunderous round of applause from the crowd. "I'll keep this short and sweet since I know everyone can smell the seafood our volunteers are grilling outside."

Kaia nudged Jacob and whispered to him, "I seriously cannot wait."

"I always love this time of year," Koa said. "I've talked to so many wonderful people from around the world, even some as far away as Canada."

Jacob's mouth fell open in surprise as Koa smiled at him from the stage. "I'd just like to say thanks to all of you for being here," Koa continued, "and I hope you have a wonderful time over the next few days. I know that there's so much we can all learn from each other."

When Koa finished speaking, they headed straight for the seafood buffet outside. Jacob filled his paper plate to the brim with a variety of fried fish, mussels, and some lobster. Kaia led Jacob to a table where one of her friends was sitting.

"Hey Manu!" Kaia said. "This is Jacob, my pen pal from Canada."

Manu's eyes went wide. Jacob almost thought he had started choking on the bit of fish he was eating, but then Manu launched into a bunch of questions.

"Canada, no way, are you serious?" Manu asked. "I have always wanted to go to Canada. Do you speak any French? Maybe we could practice together if you do. Is it true that it's winter over there right now? And do you like poutine? Oh man, I have always wanted to try poutine."

Kaia laughed and whispered to Jacob, "Manu gets a little excited sometimes, but that's why I love him."

Jacob realized that for all the things he wanted to know and learn about New Zealand, Manu and Kaia wanted to learn the same thing about Canada. After answering Manu's questions, Jacob asked Manu and Kaia more about Māori culture, particularly the legends. By the end of the first day of the festival, he had no idea how he would be able to sleep after all the excitement. He couldn't wait to do it all again tomorrow!`,
      questions: [
        {type:"mc", q:"What is the main point of Koa's speech?", options:["He hopes everyone tries all the food.","He hopes everyone will learn from one another.","He hopes people will be nice to one another.","He hopes people will ask him questions."], correct:1},
        {type:"mc", q:"How does Jacob feel about Manu's questions?", options:["He feels nervous his answers will not be interesting.","He feels annoyed by the long list of questions.","He feels happy to share things about Canada.","He wonders why Manu wants to know so much."], correct:2},
        {type:"mc", q:"What is an antonym for thunderous?", options:["audible","loud","quiet","shocking"], correct:2},
        {type:"mc", q:"What can you infer about how the three friends feel about their day?", options:["They are glad it is the last day of the festival.","They have fun at the festival but do not like the food.","They are tired and overwhelmed.","They enjoy learning about each other's cultures."], correct:3},
        {type:"open-table", q:"Summarize four events that happen in the story in the order they occur.", rows:[
          {label:"Event 1"},
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
      instructions: "Reread \"Having Fun at the Festival.\"",
      prompt: "Imagine that you have a pen pal. Write a letter to your pen pal, telling them about what life is like where you live. Use descriptive words and phrases and sensory details to tell them about your home and life.",
    },
  ]
},
{
  id: 21,
  label: "Unit 7 · Week 3",
  days: [
    {
      day: 1,
      title: "Kaia's Blog",
      asYouRead: null,
      passage: `KAIA'S BLOG

Hello faithful readers,

Growing up as an Indigenous person in New Zealand meant that I always participated in traditions. My family really strived to stay connected to Māori culture. I used to think that everyone knew about Māori practices. But after volunteering for the annual summer festival in Auckland, I realized there is so much information I can share with people.

That's why I'm here to give a brief overview of my culture! My plan is to make this into a series. I want to focus on a specific theme each week. For today, I really want to dive into artistic traditions. This will include carving, weaving, and physical performances.

First, we'll talk about visual arts. Many Māori patterns in art are inspired by nature. You might see art that features spider webs or fish scales. Or maybe you'll see the delicate curled leaves of a fern tree. These patterns can be found in wood carvings. They can also be found in pounamu stone and bone carvings.

Māori performing arts are called kapa haka. These performances include dancing. These also include chanting and singing. There are many kinds of performances. One type of performance is the haka. The haka is a ceremonial dance performed in a group. It's done this way to signify the unity of the tribe. It also shows strength and pride of the tribe. Another performance is waitata-a-ringa. Performers sing while moving their hands quickly when they perform. They do this to represent water, wind, and heat. An important part of kapa haka is the facial expressions made by the performers. These expressions are called pukana. They help bring attention to things and show passion.

The arts are an important part of Māori culture. They are meaningful and fun for people to participate in. They are also fun to watch and look at.

I hope you've enjoyed reading about my culture and that you learned something new. What topics should I focus on next week? Food, language, or legends? Let me know in the comments what you are interested in learning about!

—Kaia

(Note: The original workbook page includes photos of Māori art patterns referenced in Question 2.)`,
      questions: [
        {type:"mc", q:"How are performing arts different from visual arts?", options:["They share a rich culture.","They are done on canvases.","They include sound and movement.","They have stunning designs and patterns."], correct:2},
        {type:"mc", q:"How does the image affect the text?", options:["It gives the reader little information.","It shows the reader how to make each piece of art.","It shows Kaia's enthusiasm for her culture.","It shows examples of described patterns."], correct:3},
        {type:"mc", q:"What do you do when you dive into something?", options:["give it away","show it to others","start it with enthusiasm","believe it is true"], correct:2},
        {type:"mc", q:"What is the meaning of Indigenous?", options:["difficult","native to","regular","similar to"], correct:1},
        {type:"open", q:"What cultural or traditional artwork have you seen or learned about? Describe it.", lines:3},
      ]
    },
    {
      day: 2,
      title: "Summarizing the Texts",
      asYouRead: "Closely read these texts. Then, summarize each of the texts.",
      passage: `Close-Reading Texts

From "The Māori": The Māori (MAU-ree) are Indigenous people of New Zealand. That means they were the first people to live there. The Māori are Polynesian like the Indigenous peoples of Hawai'i. Nobody knows when Māori people first came to New Zealand. But it is known how they got there. They came to New Zealand in canoes. They came from other parts of the Pacific. The Māori were very skilled sailors.

From "Kaia's Blog": One type of performance is the haka. The haka is a ceremonial dance performed in a group. It's done this way to signify the unity of the tribe. It also shows strength and pride of the tribe. Another performance is waitata-a-ringa. Performers sing while moving their hands quickly when they perform. They do this to represent water, wind, and heat. An important part of kapa haka is the facial expressions made by the performers. These expressions are called pukana. They help bring attention to things. They can also be used to show passion.

Directions: Write a summary for each text.`,
      questions: [
        {type:"open", q:"Write a summary of \"The Māori.\"", lines:4},
        {type:"open", q:"Write a summary of \"Kaia's Blog.\"", lines:4},
      ]
    },
    {
      day: 3,
      title: "Comparing Two Texts",
      asYouRead: "Closely read these texts. Then, compare them by thinking about genre, language, structure, and purpose.",
      passage: `Close-Reading Texts

From "Preparing for the Festival": It was an exciting week for Kaia and her family. They were helping volunteer for the annual summer festival at their local community center in Auckland. Kaia's family was Māori, and they often volunteered for this event. It was a weekend filled with special introductions, music, dancing, and feasts. During this time, people in her community met with tourists from around the world, talked about their cultures, and had a good time.

From "Auckland, New Zealand": Auckland is the biggest city in New Zealand. Auckland is sometimes called "the city of sails." That is because it is famous for its sailing and yacht races. Auckland is also home to Sky Tower. Sky Tower is the tallest building in the Southern Hemisphere. People can go to the top of Sky Tower and see for miles around. More fun things to do around the city include going on dolphin or whale-watching tours, visiting the zoo, or following the many bike paths. Plus, there are countless stores and restaurants.

Directions: Compare the two texts. Think about things such as genre, language, structure, and purpose.`,
      questions: [
        {type:"compare3", q:"Compare the two texts.", columns:["Preparing for the Festival","Both","Auckland, New Zealand"]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Reread the texts from this unit.",
      prompt: "Explain what you find to be the most interesting aspect of the Māori culture. Introduce the topic clearly, state an opinion, and provide logically ordered reasons that are supported by facts and details.",
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Think about a family or cultural tradition you participate in or know about.",
      prompt: "Write a blog post about a family or cultural tradition. Be sure to describe it vividly so your readers can picture it clearly.",
    },
  ]
},
{
  id: 22,
  label: "Unit 8 · Week 1",
  days: [
    {
      day: 1,
      title: "Judo: A Martial Art",
      asYouRead: "Underline facts that explain why size does not necessarily factor into winning a judo match.",
      passage: `Judo is one of the many types of martial arts. It is a sport that does not use weapons. Instead, judo uses holds and body movements. In that way, it is a little like karate. Judo was started in 1882 by Dr. Jigoro Kano. He studied martial arts in Japan and developed judo from them. People do not have to be big and strong to learn judo because it is about timing. It is also about movement and skill. Judo experts can win competitions even when their opponents are bigger. They know that timing and skill are more important than size. Anyone can learn judo. There are classes for people of all ages and all ability levels. It is even an Olympic sport.`,
      questions: [
        {type:"mc", q:"Which reason supports that judo is a little like karate?", options:["Judo started in Japan.","People cannot take classes to learn judo.","Judo uses holds and body movements.","Timing is more important than size in judo."], correct:2},
        {type:"mc", q:"Which phrase supports that an expert is someone who is good at doing something?", options:["to be big and strong","of all ages and abilities","more important than size","even when their opponents are bigger"], correct:3},
        {type:"mc", q:"Which is the root word in competitions?", options:["compete","competitive","competitor","petition"], correct:0},
        {type:"mc", q:"Which subordinating conjunction explains why anyone can learn judo?", options:["even little children","instead of weapons","because it is about timing","even when their opponents are bigger"], correct:2},
      ]
    },
    {
      day: 2,
      title: "Fencing: An Olympic Sport",
      asYouRead: "Underline key words related to fencing.",
      passage: `Fencing is a sport in which people use a special kind of sword and wear protective clothes. Fencing started in France, so most of the words used in fencing are French. Fencing is an Olympic sport. The object of a fencing match is to touch your opponent with your weapon as many times as possible. Whoever gets the most touches is the winner. There are several fencing moves that fencers have to learn. For example, fencers learn how to try to touch their opponents and how to defend themselves against an opponent's touch. They learn how to move around, both backward and forward. Have you ever seen a movie that had a sword fight? The actors who used the swords probably learned to fence!`,
      questions: [
        {type:"mc", q:"How is fencing related to sword fighting?", options:["Both fencing and sword fighting are Olympic sports.","Actors who sword-fight likely learned fencing.","Fencing started in France, but sword fighting started in Rome.","Fencing takes a lot of practice, but sword fighting can be learned quickly."], correct:1},
        {type:"mc", q:"What do fencers have to learn?", options:["how to speak French","how to wear special clothing","how to get to matches","how to touch their opponent"], correct:3},
        {type:"mc", q:"Which example of figurative language may be used to describe fencing?", options:["to \"be on the fence\" as to when to attack","to \"go out on a limb\" when joining a fencing match","to \"be on cloud nine\" when winning a fencing match","to look to \"the other side of the fence\" for a better fencing sword"], correct:2},
        {type:"mc", q:"What is the best meaning of the word object in the text?", options:["a thing","the focus","the goal","to protest"], correct:2},
      ]
    },
    {
      day: 3,
      title: "Rowing: A Team Sport",
      asYouRead: "Place a star beside information that explains how to row.",
      passage: `If you like to be out on the water, you might enjoy the sport of rowing. Rowing is popular wherever there are large bodies of water, such as lakes, rivers and oceans. It is one of the oldest Olympic sports. In rowing, teams of people race one another in special boats. To move their boats, rowers sit facing backward on special seats in their boat. They use paddles called oars that are designed for rowing and are attached to the boat. Rowers have to have a lot of strength and work together as a team to pull their oars. Each person on the team has to row in the right direction at exactly the right time. Otherwise, the boat will not move forward smoothly. Rowing can be good exercise for people because it makes arm and back muscles strong. Rowing also helps people strengthen their leg muscles. Rowing can be a fun and fast workout!`,
      questions: [
        {type:"mc", q:"Where is rowing done?", options:["on a field","in a gymnasium","in a stadium","on waterways"], correct:3},
        {type:"mc", q:"What special paddles do rowers use?", options:["boats","seats","oars","rows"], correct:2},
        {type:"open", q:"Why do rowers have to work together as a team?", lines:2},
        {type:"open", q:"Compare rowing to another water sport.", lines:3},
      ]
    },
    {
      day: 4,
      title: "The Summer Olympic Games",
      asYouRead: "Circle time-order words that indicate a sequence of events.",
      passage: `Every four years, a special sporting event occurs in the world. Athletes from all over the world gather together. They compete against each other in their sports and try to win medals. This special event is the Summer Olympic Games. It is also called the Olympiad. Many sports are a part of the Olympics. Athletes row, fence, and ride horses. They swim, run, and play soccer. Judo and boxing are also part of the Summer Olympics. So are baseball and gymnastics.

The Olympics have a long history and have been held in many places. Nearly 3,000 years ago in Ancient Greece, people got together every four years. They raced and boxed. They competed to see who could throw a spear the farthest. They competed in other events, too. But after many years, the Greeks stopped having the games. For a long time, there were no games.

In 1896, the modern Olympics began. The first modern Olympic Games were held in Athens. Athens is the capital of Greece. Since 1900, the games have been held every four years. The one exception is 2020 due to the COVID-19 pandemic. And the games have only been cancelled three times: in 1916, 1940, and 1944. In those years, the games could not be held because of World War I and World War II.

Many locations around the world have hosted the Olympics. Each year, the games are held in a different city. Cities that want to host the Olympics have to apply to host the games. They apply to a special group of people. This group is the International Olympic Committee. The group decides which city will get the games. Some of the cities include Paris, Los Angeles, Rome, and Rio de Janeiro. Most recently, the Olympics were held in Tokyo.

People around the world look forward to the Summer Olympics. Wherever they are held, millions of people watch them!`,
      questions: [
        {type:"mc", q:"Which event happens first?", options:["The Olympic Games are held.","Cities apply to the International Olympic Committee.","Cities decide that they want to host the Olympic Games.","The committee decides where the Olympic Games will be."], correct:2},
        {type:"mc", q:"What is true of modern-day Olympics?", options:["The Games are held every six years.","The Games are always held in Greece.","The Games are held all over the world.","The Games do not include games from the first Olympics."], correct:2},
        {type:"mc", q:"How is this text different from the texts in the first three days of this week?", options:["This text compares different Olympic Games.","This text gives opinions about the Olympic Games.","This text explains how athletes prepare for the Games.","This text lists many Olympic Games instead of just one."], correct:3},
        {type:"mc", q:"Why were the first modern Olympic Games most likely held in Athens?", options:["The first Olympics were held by the Greeks.","Athens offered more site-seeing options for visitors.","People can easily travel to Athens compared to other cities.","Athens had more space to hold several competitions at one time."], correct:0},
        {type:"open-table", q:"List events related to the Olympics in chronological order.", rows:[
          {label:"Event 1", given:"The first Olympics were held in Greece nearly 3,000 years ago."},
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
      instructions: "Reread \"The Summer Olympic Games.\"",
      prompt: "Write a story as if you were a spectator at either the ancient or modern Olympics. Develop your story with descriptive details and a clear sequence of events.",
    },
  ]
},
{
  id: 23,
  label: "Unit 8 · Week 2",
  days: [
    {
      day: 1,
      title: "Saturday Swimming",
      asYouRead: "Place a plus sign (+) beside positive ideas related to the pool. Place a minus sign (–) beside negative ideas.",
      passage: `Sammy and her family went to the community pool every Saturday during the summer. It was something she looked forward to all week. She loved being outside and talking to her friends. But most importantly, she loved being in the water. She enjoyed any activity that took place in water. Whether it was floating, racing her friends, or jumping into the deep end, she always had a good time. She loved how refreshing the water felt and how it made her feel weightless. To her, being in the water was the most peaceful place.

Sammy only had one gripe with swimming, and it was that she never felt like she was great at it. She knew how to keep herself afloat, and she could kind of do a sidestroke, but that was about it. Plus, she never won any of the races against her friends, and she always felt that her form was awkward.`,
      questions: [
        {type:"mc", q:"Why is the setting important to the story?", options:["The pool is open all year long.","Saturday is the only day the pool is open.","The pool is the only place Sammy is happy.","The pool is a place to get fresh air while swimming."], correct:2},
        {type:"mc", q:"What is a synonym for gripe?", options:["complaint","fear","image","spectacle"], correct:0},
        {type:"mc", q:"What disappoints Sammy?", options:["She cannot swim in the rain.","She is not a strong swimmer.","Her friends don't want to race her.","Her muscles cramp when she swims too hard."], correct:1},
        {type:"mc", q:"What is a good metaphor for Sammy?", options:["Sammy is a fish.","Sammy is a pool.","Sammy is a snail.","Sammy is a waterfall."], correct:0},
      ]
    },
    {
      day: 2,
      title: "Sunday Swim Class",
      asYouRead: "Circle words that show how the characters are feeling.",
      passage: `Sammy's family decided to skip the pool one Saturday, and they went on Sunday instead. When they arrived, they found some chairs and put down their towels. Sammy was about to head into the water when she realized that the shallow section of the pool was closed off to the public.

"Hey Mom, what do you think they're doing?" Sammy asked.

"Oh, I think it's for a class that teaches people how to properly swim," her mom said. "It looks like they are practicing specific strokes."

Sammy gasped in excitement. "I definitely want to do that!" she exclaimed.

"Alright, we can get some details and ask about signing up," her mom said.

Sammy was already imagining herself as an amazing swimmer, winning races left and right. Before they left the pool that day, Sammy was signed up for next Sunday's class.`,
      questions: [
        {type:"mc", q:"How is the setting of this story different from \"Saturday Swimming\"?", options:["On Sunday, the pool is closed to guests.","On Sunday, the pool is open fewer hours.","On Sunday, the pool has more lifeguards.","On Sunday, the pool offers swimming classes."], correct:3},
        {type:"mc", q:"What is a synonym for intrigued?", options:["baffled","interested","open","snug"], correct:1},
        {type:"mc", q:"What does Sammy look forward to next weekend?", options:["diving","swim classes","picnicking at the pool","swimming with friends"], correct:1},
        {type:"mc", q:"What is Sammy's main goal?", options:["to learn to dive","to swim with her friends","to win swimming races","to swim longer at the pool"], correct:2},
      ]
    },
    {
      day: 3,
      title: "Sammy's First Swim Class",
      asYouRead: "Write a ∞ wherever you make connections to the text.",
      passage: `Sammy was feeling nervous about her first swimming class. She felt excited, too, but she was worried about being the only mediocre swimmer there.

"No one is going to be that great at first," her father reassured her. "The lessons are supposed to make you better. And we will be there cheering you on from the sidelines. It will be like any other day at the pool!" This was enough to calm some of Sammy's anxiety. Plus, her excitement had kicked in at this point.

At the pool, Sammy walked over toward the instructor. She almost asked her parents to come with her but decided against it at the last minute.

"Hello everyone!" the instructor greeted everyone. "We still have about five minutes until class starts, but I'll be right here if you have any questions."

Sammy smiled at the instructor and walked to the shallow end of the pool, preparing for the lesson.`,
      questions: [
        {type:"mc", q:"Why doesn't Sammy ask her parents to come with her?", options:["She wants to be brave.","She doesn't like her parents.","Her parents would yell at her.","Her parents embarrass her."], correct:0},
        {type:"mc", q:"What does mediocre mean?", options:["friendly","just okay","marvelous","terrible"], correct:1},
        {type:"open", q:"Why is Sammy both nervous and excited?", lines:3},
        {type:"open", q:"What is something you wish you were better at? Why?", lines:3},
      ]
    },
    {
      day: 4,
      title: "Great Form!",
      asYouRead: "Number the steps to performing a side stroke in swimming.",
      passage: `"Alright swimmers, let's get started," the instructor said. "For our first exercise, let's have everyone exit the pool!"

Sammy glanced at the other kids, who looked just as confused as she was. Once everyone was poolside, she continued, "Today's focus is the side stroke. We'll start with the leg movements. Everyone lie down on your left side."

Sammy was feeling unsure of herself, but she followed directions.

"Now, extend your left arm above your head, and rest your head on the upper part of your arm. And face your palm down on the ground."

"Perfect!" the instructor said. "Now, place your right hand across your chest and onto the floor in front of you for balance."

"Okay, now bend your knees to a 90-degree angle," she said. "Then, pull your knees toward your chest, and kick your legs in the opposite direction. Your top leg should kick out to the front as your bottom leg kicks back. As you straighten both legs, bring them back together to the starting position."

Sammy held her breath and tried really hard to follow the instructions. Sammy heard the instructor yell, "Great form, Sammy!"

Sammy felt proud of herself as the class continued to practice the leg movements on both sides. Then, they practiced the corresponding arm movements. Finally, they practiced working their arms and legs simultaneously.

"Nice work, everybody," the instructor said. "Now, let's add some water."

The class attempted the same techniques in the pool. Eventually, they even held some races. Sammy surprised herself by coming in first during one of the races.

"Your daughter is a natural," the instructor said to Sammy's parents. "She's like a fish!"

"That's incredible!" Sammy's mom cheered.

Later that night, the family discussed Sammy's new passion over dinner.

"So, Sammy, do you want to continue swim lessons? You could also compete in official swim meets," her mom said.

"Yes, that sounds amazing!" Sammy said. "Olympics, here I come!"

"Go for the gold!" her mom and dad yelled.`,
      questions: [
        {type:"mc", q:"How do Sammy's parents react to the idea of the Olympics?", options:["They both think it's not a good idea.","Her mom is excited, but her dad is doubtful.","They both encourage Sammy to have that dream.","Her mom is cautious, but her dad is enthusiastic."], correct:2},
        {type:"mc", q:"How does Sammy's mood change?", options:["At first she is afraid, then she becomes terrified.","At first she is nervous, then she becomes uncertain.","At first she is unsure, then she becomes confident.","At first she is excited, then she becomes less confident."], correct:2},
        {type:"mc", q:"What is another word for corresponding?", options:["communicating","matching","personalizing","rationalizing"], correct:1},
        {type:"mc", q:"Who must perform movements simultaneously?", options:["dancers","painters","sculptors","writers"], correct:0},
        {type:"open-table", q:"Summarize the steps to perform the side stroke.", rows:[
          {label:"Step 1"},
          {label:"Step 2"},
          {label:"Step 3"},
          {label:"Step 4"},
          {label:"Step 5"},
          {label:"Step 6"},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread \"Great Form!\"",
      prompt: "Think about something you can teach someone else to do. Write clear steps for another person to follow to successfully do this thing. Link ideas using words, phrases, and clauses.",
    },
  ]
},
{
  id: 24,
  label: "Unit 8 · Week 3",
  days: [
    {
      day: 1,
      title: "An Interview with Sammy",
      asYouRead: null,
      passage: `Interviewer: How old were you when you first started swimming?

Sammy: I first started to take it seriously as a sport when I was around 11 years old. That's when I joined the local swim team. That same year, I went to my first swim meet. I placed second in my main event and third in my second event. My main event is the 100-meter freestyle and my second event is the 100-meter backstroke.

Interviewer: Did you always have the Olympics in mind as your goal?

Sammy: Not always. My parents really emphasized that I do swimming for fun. My first swim instructor said I should consider it in the future. I tried to follow the idea of taking everything one step at a time. I realized that competing was good motivation to practice and get better. Then, I started winning first place more in high school. That's when the idea of going to the Olympics seemed more achievable.

Interviewer: Who helped you achieve this goal? Did you have any family members or friends who supported or encouraged you?

Sammy: Definitely! My parents were always so supportive. They would wake up early to bring me to my practices and meets, and they made sure that I had a healthy breakfast and was ready to take on the day. My siblings and friends were also very supportive. They often came to watch me compete. I'm incredibly grateful for their support over the years.

Interviewer: Tell me about the first time you qualified for the Olympics. How did it feel?

Sammy: I was ecstatic, of course! It didn't feel real until a day or two later. That's when it sunk in that my years of hard work had paid off. Even now, after attending three different Olympics, I still get overjoyed when I find out I've qualified again. It's really one of the best feelings I've ever experienced.

Interviewer: What is one piece of advice you'd like to give young athletes who are dreaming of one day going to the Olympics themselves?

Sammy: It takes determination. Sometimes, it seems like all you're doing is practicing. But the opportunity of competing in the Olympics makes it worth it. If it's something you love to do, then you should go for it!

Interviewer: Thank you for taking the time for this interview, Sammy. I really appreciate it and I know your fans will love to read your responses!`,
      questions: [
        {type:"mc", q:"How is the language Sammy uses in the interview different from that in the story \"Great Form!\"?", options:["She speaks more formally during the interview.","She speaks more informally during the interview.","She speaks more cautiously during the interview.","She speaks more solemnly during the interview."], correct:0},
        {type:"mc", q:"To whom does Sammy give credit for her support?", options:["her teachers","her swim coach","friends and family","her Olympics coach"], correct:2},
        {type:"mc", q:"Which of the following has the closest meaning to ecstatic?", options:["happy","pleased","satisfied","thrilled"], correct:3},
        {type:"mc", q:"What is a lesson from the interview?", options:["Listen to others when setting goals.","Setting unrealistic goals will motivate you to work harder.","With hard work and determination, you can achieve anything.","Rely on family and friends to get you through the tough times."], correct:2},
        {type:"open", q:"Describe a goal you have and how you might achieve it.", lines:4},
      ]
    },
    {
      day: 2,
      title: "Point of View: Two Texts",
      asYouRead: "Closely read these texts. Complete the graphic organizer comparing point of view.",
      passage: `Close-Reading Texts

From "Great Form!": "Your daughter is a natural," the instructor said to Sammy's parents after class. "She's like a fish!" "That's incredible!" Sammy's mom cheered. Later that night, the family discussed Sammy's new passion over dinner. "So, Sammy, do you want to continue swim lessons? You could also compete in official swim meets," her mom said. "Yes, that sounds amazing!" Sammy said. "Olympics, here I come!"

From "An Interview with Sammy": Interviewer: Did you always have the Olympics in mind as your goal? Sammy: Not always. My parents really emphasized that I do swimming for fun. My first swim instructor said I should consider it in the future. I tried to follow the idea of taking everything one step at a time. I realized that competing was good motivation to practice and get better. Then, I started winning first place more in high school. That's when the idea of going to the Olympics seemed more achievable.

Directions: For each text, identify the point of view (first, second, or third person), explain how you know, and describe the events.`,
      questions: [
        {type:"compare3", q:"\"Great Form!\"", columns:["Point of View","I Know This Because","Description of Events"]},
        {type:"compare3", q:"\"An Interview with Sammy\"", columns:["Point of View","I Know This Because","Description of Events"]},
      ]
    },
    {
      day: 3,
      title: "Comparing Fencing and Rowing",
      asYouRead: "Closely read these texts. Compare fencing and rowing.",
      passage: `Close-Reading Texts

From "Fencing: An Olympic Sport": The object of a fencing match is to touch your opponent with your weapon as many times as possible. Whoever gets the most touches is the winner. There are several fencing moves that fencers have to learn. For example, fencers learn how to try to touch their opponents and how to defend themselves against an opponent's touch. They learn how to move around, both backward and forward.

From "Rowing: A Team Sport": To move their boats, rowers sit facing backward on special seats in their boats. They use paddles called oars that are designed for rowing and are attached to the boat. The oars push the boat through the water. Rowers have to work together as a team. Each person on the team has to row in the right direction at exactly the right time. Otherwise, the boat will not move forward.

Directions: Compare fencing and rowing.`,
      questions: [
        {type:"compare3", q:"Compare fencing and rowing.", columns:["Fencing","Both","Rowing"]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Think about the texts from this unit.",
      prompt: "Imagine that you are Sammy from the story. You just went to your first swimming lesson. Write a diary entry about your experience. Use descriptive words and phrases and sensory details to tell about your experience.",
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Think about a famous athlete you admire.",
      prompt: "Write an interview between yourself and a famous athlete. As the interviewer, you ask the questions. The person you interview will answer them. Write your interview as a script, similar to the interview on Day 1.",
    },
  ]
},
{
  id: 25,
  label: "Unit 9 · Week 1",
  days: [
    {
      day: 1,
      title: "The Importance of Nurses",
      asYouRead: "Circle one main idea of the text. Underline the details that support this main idea.",
      passage: `Nurses are very important healthcare professionals. Nurses have a variety of tasks to perform at their jobs. They treat patients, teach people how to stay healthy, and create plans for patient care. Many nurses go to college or specialized schools to learn nursing. Then, they choose what kind of nursing they want to do. Today, they have many choices. Some places they work include hospitals, doctors' offices, clinics, and schools. Other nurses are considered to be visiting nurses. This means they go to the homes of people who cannot get to a doctor's office. Nursing is a career that takes a lot of skill, practice, and specialized learning, but it is also very rewarding.`,
      questions: [
        {type:"mc", q:"Which of the following is not listed as a reason why nurses need to know many things?", options:["They treat patients.","They build hospitals.","They create plans for patient care.","They teach people how to stay healthy."], correct:1},
        {type:"mc", q:"What does the author mean by nursing 'is also very rewarding'?", options:["Nursing is challenging.","Nurses feel pleased about their jobs.","Nurses get rewards.","Nurses can be reimbursed for the cost of college."], correct:1},
        {type:"mc", q:"What is another word for choices?", options:["options","rules","tasks","thoughts"], correct:0},
        {type:"mc", q:"What does the conjunction but in the last sentence tell you?", options:["Doctors rely on the nurses they work with.","Some types of nursing are more satisfying than others.","Some people may not find nursing rewarding.","Nursing is worth the time needed to learn it."], correct:3},
      ]
    },
    {
      day: 2,
      title: "The History of Nursing",
      asYouRead: "Place a star beside facts that describe nursing long ago. Place an exclamation point beside facts that describe nursing today.",
      passage: `The role of nurses has changed over time. Modern-day nurses are well-educated professionals who have many skills. They can be women or men. But things were not always this way. Many years ago, nurses were not skilled. They simply fed patients, helped them keep clean, and kept them warm. Nurses sometimes helped doctors, but they were not treated with respect. And only women could be nurses.

Florence Nightingale helped change nursing forever. Nightingale was an English nurse. She lived during the 1800s. In 1853, the Crimean War began. During this war, England went to war with Turkey. Nightingale took a team of nurses to Turkey. She and her team helped the British soldiers. She insisted that nurses should be respected. She wanted nurses to get an education. After the war, she set up a school just for nurses. She made an important impact on the career of nursing.`,
      questions: [
        {type:"mc", q:"What is the main difference between nursing long ago and nursing today?", options:["Nurses are respected.","Nurses are not educated.","Nurses work with doctors.","Only women can be nurses."], correct:0},
        {type:"mc", q:"What is the meaning of the word skilled?", options:["helpful and caring","smart and carefree","trained and practiced","important and reliable"], correct:2},
        {type:"mc", q:"Which prepositional phrase describes when Florence Nightingale lived?", options:["to Turkey","with respect","after the war","during the 1800s"], correct:3},
        {type:"mc", q:"What does the word insisted tell you about Florence Nightingale?", options:["She was afraid.","She was caring.","She was helpful.","She was determined."], correct:3},
      ]
    },
    {
      day: 3,
      title: "The Red Cross",
      asYouRead: "Underline information that is new to you. Put a star beside information you already knew.",
      passage: `Sometimes, large storms or earthquakes strike. Volcanoes might erupt. Or there might be floods or other natural disasters. When those things happen, many people get hurt or need help. Who helps in times of danger and disaster?

The Red Cross is an organization that exists to help people when disaster strikes. The Red Cross is a volunteer group that sends people into an area to help. Those volunteers treat people who need healthcare. Volunteers also provide food, clothes, water, and shelter. Sometimes, rescue dogs join the Red Cross volunteers.

Many countries around the world have Red Cross groups. When there is a disaster in another country, Red Cross groups can work with each other. They can send volunteers and other types of aid, such as food and water.`,
      questions: [
        {type:"mc", q:"What is true about the Red Cross?", options:["It is only in the United States.","There are many Red Cross groups around the world.","People who work for the Red Cross must work alone.","People who work for the Red Cross must rescue people."], correct:1},
        {type:"mc", q:"The Red Cross is a volunteer group. What does this mean?", options:["People hope disasters will strike.","People travel the world to help others.","People give their time without pay.","People work together to get the job done."], correct:2},
        {type:"open", q:"When are times the Red Cross may be called upon to help?", lines:3},
        {type:"open", q:"How might the Red Cross help you at some point?", lines:3},
      ]
    },
    {
      day: 4,
      title: "Clara Barton",
      asYouRead: "Identify at least one cause-and-effect relationship. Circle the cause. Underline the effect.",
      passage: `Whenever there is a disaster, there are people who may need help. The Red Cross is there to help them. The Red Cross is a group of volunteers who go to places where disasters have occurred. The group provides food, water, shelter, and medicine. The Red Cross has been responsible for saving many people's lives.

The American Red Cross was started in 1881 by Clara Barton. Barton was born on December 25, 1821. She knew she was good at being a nurse and helping people from the time she was a child. When she was 11 years old, her brother David became very ill, and Barton nursed him back to health. Later, she became a teacher and started her own school. But then the Civil War came, and everything changed for Barton. She saw that the soldiers needed blankets, clothes, food, and other supplies. So she and some other people gave them what they needed. Then, she led a team of nurses who helped the soldiers. Barton worked very hard and became very famous for everything that she did to help the soldiers.

Barton worked so hard that she became ill. Her doctors advised her to take a long trip and rest. So, Barton went to Europe. But she did not rest. Instead, she learned about the Red Cross. Some countries had groups of volunteers that assisted people who needed help. Barton wanted to have the same kind of organization in the United States. So, when she came back to America, she worked with other people and created the American Red Cross. For 23 years, she was its president.

Barton did many other things in her life, too. For example, she worked very hard to give women the right to vote. She also worked hard to create a system to find missing people. Clara Barton died in 1912, but the work she did changed the United States and has saved millions of lives.`,
      questions: [
        {type:"mc", q:"What is true about the American Red Cross?", options:["It was started in 1821.","It was founded by Clara Barton.","It was around during the American Civil War.","It was the first Red Cross organization in the world."], correct:1},
        {type:"mc", q:"Which detail supports the idea that Barton was good at nursing?", options:["She started her own school.","She fought in the American Civil War.","She helped her brother survive a terrible illness.","She worked with people in Europe to learn about the Red Cross."], correct:2},
        {type:"mc", q:"What happened as a result of Barton's trip to Europe?", options:["She learned how to be a nurse.","She won an award for her bravery.","She helped soldiers in battles there.","She started the American Red Cross."], correct:3},
        {type:"mc", q:"Which of the following is an example of a shelter?", options:["a pizza","a rainstorm","a sweater","a tent"], correct:3},
        {type:"open-table", q:"Write an effect for each cause from the text.", rows:[
          {label:"Barton saw that soldiers needed blankets, clothes, food, and more."},
          {label:"Barton worked hard to help Civil War soldiers."},
          {label:"Barton's doctors advised she take a trip when she fell ill."},
        ]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread \"The History of Nursing\" and \"Clara Barton.\" Then, respond to the prompt.",
      prompt: "Explain how nursing has changed over the years. Use information and examples from both texts to support your ideas.",
    },
  ]
},
{
  id: 26,
  label: "Unit 9 · Week 2",
  days: [
    {
      day: 1,
      title: "Emily and the Earthquake",
      asYouRead: "Circle the problem in the story. Underline the solution.",
      passage: `Emily and her dad were inside their house when an earthquake began. They dropped to the floor, darted under the kitchen table, and held on until it was over. Finally, the shaking stopped. When Emily looked around, she noticed they were surrounded by concrete and wood pieces from their collapsed house. Luckily, the table had been sturdy enough to protect them both.

"Is anyone in there?" a person's voice bellowed.

"Yes!" Emily's dad yelled. "There are two of us and we're under a table."

"Are you hurt?" the person asked.

"We're fine, we just can't seem to find a way out," Emily's dad said. The person told them to hold on for a few moments. She could hear the people above starting to use some tools and move things around. When the rescuers pulled her and her dad out of the remnants of the house, Emily thanked them. She was so grateful for the paramedics and other volunteers in her community.`,
      questions: [
        {type:"mc", q:"Why does Emily duck under a table?", options:["to tidy up","for protection","to hide from her sister","to pretend to be in a fort"], correct:1},
        {type:"mc", q:"What is the result of the earthquake?", options:["The house mostly collapses.","Some neighbors left in a hurry.","Emily's pet runs away.","The neighborhood is destroyed."], correct:0},
        {type:"mc", q:"Which word is closest in meaning to bellow?", options:["announce","say","shout","utter"], correct:2},
        {type:"mc", q:"Which word uses the Greek root para- similar to the word paramedic?", options:["parallel","paralegal","paranoid","parant"], correct:1},
      ]
    },
    {
      day: 2,
      title: "Zaharah and the Tornado",
      asYouRead: "Circle ways the Red Cross provided assistance.",
      passage: `Zaharah's family had hunkered down in their basement after hearing a tornado warning. The concrete walls of the basement kept them safe during the emergency. Once the wind had been quiet for more than 10 minutes, her parents went upstairs to check whether it was safe to come out. Her parents came back down to give the all clear. Everyone went outside to see what had happened. They were in shock as they looked at their neighborhood. They saw that house after house had been damaged! Luckily, no one was hurt, but Zaharah thought that the destruction was heartbreaking.

Soon, some cars drove up the street to help. The people inside were from the Red Cross. They brought some food, water, first aid, and other supplies with them. They provided a shelter location to everyone who needed it. Over the next few months, they even helped fix and rebuild the homes.

Zaharah's family and her neighborhood had been through a terrible ordeal, but they would be okay.`,
      questions: [
        {type:"mc", q:"What is the result of the tornado?", options:["Trees are overturned.","Many people are injured.","Cars are tossed about.","Homes are damaged."], correct:3},
        {type:"mc", q:"How does the Red Cross assist?", options:["They round up lost pets.","They help clean up debris.","They give supplies and support to families in need.","They call family and friends of those in need."], correct:2},
        {type:"mc", q:"What is an antonym for ordeal?", options:["celebration","enthusiasm","instruction","suffering"], correct:0},
        {type:"mc", q:"When is a time you might hunker down?", options:["during a blizzard","during a sporting event","during a hospital stay","during a family get-together"], correct:0},
      ]
    },
    {
      day: 3,
      title: "Kenyon and the Fire",
      asYouRead: "Underline problems that made an impact on Kenyon's family.",
      passage: `One night, Kenyon awoke to the smell of smoke and his eyes burning. Fire, he realized, another wildfire this summer! In a flash, he jumped out of bed and found his parents. They had their essentials already packed in a duffel bag. They rushed out of the house and drove away in their car as fast as they could safely go.

Kenyon and his parents weren't sure where to go at first. The fire seemed like it had spread so quickly that an evacuation center hadn't been set up yet.

"Let's just keep heading out of the mountains," Kenyon's father said.

They were starting to run low on gas, and firetrucks whizzed by them on the road. As they drove past an intersection, they noticed a sign in the ground. It had a Red Cross symbol with the words EMERGENCY SHELTER. They followed the sign to the shelter, which was set up in an elementary school gym. They were greeted, given food, water, information about the fire, and cots to rest on.

Kenyon and his family were relieved. They were grateful to have somewhere safe they could rest, eat, and figure out what to do next.`,
      questions: [
        {type:"mc", q:"How does the Red Cross help Kenyon's family?", options:["They take them to safety.","They provide medical care.","They provide shelter.","They give them fire-proof blankets."], correct:2},
        {type:"mc", q:"What is the meaning of in a flash?", options:["brightly","hurriedly","slowly","thoughtfully"], correct:1},
        {type:"open", q:"Besides the fire, what problem does Kenyon's family face?", lines:3},
        {type:"open", q:"Why is having an evacuation plan important?", lines:3},
      ]
    },
    {
      day: 4,
      title: "Survival Training and Leadership Camp",
      asYouRead: "Circle activities the campers will participate in.",
      passage: `"Alright, everyone, get in a single file line please," said a camp instructor. Emily was toward the back of the line. She heard someone say to her, "Hi! I'm Zaharah, what's your name?"

Emily turned around, smiled at her, and replied, "Hi, my name is Emily."

Zaharah continued speaking. "So, what are you most excited for at camp?"

Emily thought for a moment and then replied, "I'm excited to build a first-aid kit and try the blindfolded line activity. It's this exercise where everyone gets in a line, is blindfolded, and follows whoever is in front of them."

A boy nearby appeared to have heard Emily's response.

"Oh, that sounds like interesting team building!" he said. "I just thought we were learning survival skills."

"I think we're doing a mix of activities," Emily said. "What's your name?"

"I'm Kenyon," he said. "So, what made you guys want to come to camp?"

Each of them shared their experience in an emergency. Together, they had experienced an earthquake, a tornado, and a wildfire.

The three campers handed their papers to the leader and grabbed their identification badges. They promised to meet up the next day.

The next day, all the campers met in the grass outside the cabins. Kenyon, Emily, and Zaharah found themselves lined up next to one another, and they waved. A camp leader with a megaphone walked in front of the lines of children.

"Good morning, young campers! My name is Andy! Are we ready to have fun?"

"Yes!" one camper said from the back of the line.

Andy squinted his eyes and put his hand up to his ear as if he couldn't hear.

"I know it's early, but let's try that again," he said. "Are we ready to have fun?!"

"Yes!" the campers yelled ecstatically and in unison.

"That's great!" He paused and looked around until he had everyone's attention. "The next activity is eating breakfast, which you'll surely do well at, too! Then, we will make first aid kits, play a survival game, and then it's team building time!"

Kenyon, Emily, and Zaharah shared looks of anticipation of the week ahead.`,
      questions: [
        {type:"mc", q:"What is different about the blindfold activity?", options:["It requires special equipment.","It does not teach survival skills.","It will take place in the afternoon.","It is meant to make campers uncomfortable."], correct:1},
        {type:"mc", q:"What causes the three campers to bond?", options:["They all come from the same town.","They all enjoy challenging situations.","They all have the same number of siblings.","They all experience different but terrifying natural disasters."], correct:3},
        {type:"mc", q:"Why does the author end the instructor's statements with exclamation points?", options:["to wake up the campers","so everyone can hear them","because they are excited about camp","to show the campers they mean business"], correct:2},
        {type:"mc", q:"Which word uses the prefix mega- in a similar manner as megaphone?", options:["Megan","megastar","omega","trimegal"], correct:1},
        {type:"compare3", q:"Compare the characters from the texts this week — Disaster Experience", columns:["Emily","Zaharah","Kenyon"]},
        {type:"compare3", q:"Compare the characters from the texts this week — Response to Camp", columns:["Emily","Zaharah","Kenyon"]},
      ]
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Reread \"Survival Training and Leadership Camp.\" Then, respond to the prompt.",
      prompt: "Write a story about a camp you attend where you meet new people. Use dialogue, description, and pacing to tell about the experience.",
    },
  ]
},
{
  id: 27,
  label: "Unit 9 · Week 3",
  days: [
    {
      day: 1,
      title: "Be Prepared for a Disaster",
      asYouRead: null,
      passage: `Disasters can strike at any time. Research disasters that are common or possible in your area. To be prepared, create an emergency kit. Suggested items include but are not limited to:
• battery-powered radio and flashlight
• extra batteries
• first-aid kit
• food and water for at least three days
• hand sanitizer
• toilet paper and paper towels
• change of clothes
• necessary medications
• important documents
• pet supplies

Evacuation Plan
• In an emergency, timing is important. So, practice how long it takes you to gather your emergency supplies and leave your home.
• Designate a place for your family members to meet if you get separated.
• Have an out-of-state family member or friend as a contact to check in with.

Tips for When You Are Staying Home
• Tell someone that you are staying home.
• Use a battery-operated radio to listen for news and updates.
• Stay away from windows, glass doors, and large furniture that is not bolted in place.
• Be prepared for unexpected changes and last-minute evacuation orders.

Remember: Emergencies can be scary, but being prepared and staying calm will help you get through them.`,
      questions: [
        {type:"mc", q:"What does the infographic describe?", options:["where to go in case of an emergency","how to pack when you need to evacuate","how to be prepared in case of a natural disaster","why to trust officials when they tell you to evacuate"], correct:2},
        {type:"mc", q:"Why should you alert people if you are staying home?", options:["so they can't let others know where you are","so they know where to go in case they are evacuated","so they know your pets are being taken care of","so they can check in with you after the natural disaster"], correct:3},
        {type:"mc", q:"What is the meaning of designate?", options:["assign","find","replace","tell"], correct:0},
        {type:"mc", q:"Which idiom means unexpected?", options:["a fish out of water","adding insult to injury","out of the blue","the last straw"], correct:2},
        {type:"open", q:"What additional items might you pack in your emergency kit?", lines:3},
      ]
    },
    {
      day: 2,
      title: "Natural Disasters Word Web",
      asYouRead: "Closely read these texts. Then, list words that are closely related to natural disasters. Choose two words. Explain to a partner how they relate to natural disasters.",
      passage: `Close-Reading Texts

From "The Red Cross": Sometimes, large storms or earthquakes strike. Volcanoes might erupt. Or there might be floods or other natural disasters. When those things happen, many people get hurt or need help. Who helps in times of danger and disaster? The Red Cross is an organization that exists to help people when disaster strikes.

From "Zaharah and the Tornado": Zaharah's family had hunkered down in their basement after hearing a tornado warning. The concrete walls of the basement kept them safe during the emergency. Once the wind had been quiet for more than 10 minutes, her parents went upstairs to check whether it was safe to come out. Her parents came back down to give the all clear. Everyone went outside to see what had happened. They were in shock as they looked at their neighborhood. They saw that house after house had been damaged!`,
      questions: [
        {type:"open", q:"List words from these texts that are closely related to natural disasters.", lines:4},
        {type:"open", q:"Choose two words. Explain how each relates to natural disasters.", lines:4},
      ]
    },
    {
      day: 3,
      title: "Comparing How the Red Cross Helps",
      asYouRead: "Closely read these texts. Then, compare details about how the Red Cross helps those in need.",
      passage: `Close-Reading Texts

From "The Red Cross": The Red Cross is an organization that exists to help people when disaster strikes. The Red Cross is a volunteer group that sends people into an area to help. Those volunteers treat people who need healthcare. Volunteers also provide food, clothes, water, and shelter. Sometimes, rescue dogs join the Red Cross volunteers.

From "Zaharah and the Tornado": Soon, some cars drove up the street to help. The people inside were from the Red Cross. They brought some food, water, first aid, and other supplies with them. They provided a shelter location to everyone who needed it. Over the next few months, they even helped fix and rebuild the homes.`,
      questions: [
        {type:"compare3", q:"Compare how the Red Cross helps those in need.", columns:["The Red Cross","In Both Texts","Zaharah and the Tornado"]},
      ]
    },
    {
      day: 4,
      type: "writing",
      title: "Write About It",
      instructions: "Reread the texts about nurses, the Red Cross, and natural disasters. Then, respond to the prompt.",
      prompt: "Write a thank you letter in which you thank a nurse or Red Cross volunteer for the work they do to help others in natural disasters.",
    },
    {
      day: 5,
      type: "writing",
      title: "Write About It",
      instructions: "Make an infographic about nursing or the Red Cross. Use information from the texts to help you.",
      prompt: "Create an infographic about nursing or the Red Cross using facts and details from the texts to inform your reader.",
    },
  ]
},
];
