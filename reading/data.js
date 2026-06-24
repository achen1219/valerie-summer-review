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
];
