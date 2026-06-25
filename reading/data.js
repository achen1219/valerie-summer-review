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
];
