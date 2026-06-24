const READING_WEEKS = [
{
  id: 1,
  label: "Unit 1 · Week 1",
  days: [
    {
      day: 1,
      title: "What Do You Eat for Breakfast?",
      asYouRead: "Identify a cause-effect relationship. Circle the cause. Underline the effect.",
      passage: `Eating breakfast is an important part of staying healthy and active. This is because people's bodies require energy to function. People get energy by eating food. Bodies use that energy to help people grow, move, and think. When someone eats a healthy breakfast, their brain works better. They can learn more and do better in school. Eating a healthy breakfast can also help people avoid feeling hungry a couple hours later. Plus, eating a healthy breakfast gives a person more energy than others. Certain food choices will give a person more energy than others. This way, they can enjoy doing more things.

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
      passage: `There are many healthy choices for foods to eat at breakfast. One good choice is eggs. Eggs have a lot of protein, and protein helps bodies grow. Protein also helps make muscles strong. Protein helps to stop hunger, so a person can feel more satisfied when they eat a meal with protein. Some people prefer to eat fresh fruit for breakfast. This can be a good choice as well, but fruit does not have as much protein as eggs. Including fruit is a good way to balance your breakfast. For example, a banana can be paired with high-protein yogurt.

It is best to avoid eating only high-fat foods for breakfast, such as doughnuts and cinnamon rolls. Of course, it is fine to have one of these treats occasionally. However, these sweet treats do not satisfy hunger for very long. Pairing them with a protein can help. But they are not recommended to eat every day.

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

Choosing a cereal carefully is important. Some cereals have lots of sugar, but they do not have many whole grains. Those cereals are not good for you. It is best to choose a cereal that does not have a lot of sugar, and sugar does not provide long-lasting energy.

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

One big problem at the sanitarium was the patients' diets. The patients needed healthy diets, but it was also important for their food to taste good. Kellogg tried to find a good choice to take the place of bread. But he was having a hard time finding a replacement.

By accident, Kellogg found something better than bread. He left some wheat cooking too long. When it was rolled out, it formed large, thin flakes. He decided to give it a try. He asked his brother to try the patients flakes too, and they loved it! In fact, they liked it so much that they wanted breakfast flakes sent to them even after they left the sanitarium. So, Kellogg started a new business in 1884. He sold packaged breakfast flakes. And before long, Kellogg's breakfast cereal was popular in other countries, too.

Kellogg did more than just create breakfast flakes. His company made a lot of money. Kellogg used most of it to help children. He also used his money to help several other charities. Kellogg died in 1951. But his most famous invention is as popular as ever. Kellogg would probably be surprised to see how many kinds of breakfast cereals there are today!`,
      questions: [
        {type:"mc", q:"What did Kellogg do before he became manager of the sanitarium?", options:["He stocked shelves.","He started a new company.","He invented breakfast flakes.","He used his money to help children."], correct:0},
        {type:"mc", q:"How did Kellogg “hit the nail on the head” with his invention?", options:["He was able to quit his job at the sanitarium.","He was able to make more bread at the sanitarium.","He solved a problem for people in the sanitarium.","He could go back to stocking shelves at the sanitarium."], correct:2},
        {type:"mc", q:"Why was it so important for the patients' food to taste good?", options:["People needed to eat more food.","People could not find healthy food.","People did not want to eat food that was healthy.","People would not eat healthy food that didn't taste good."], correct:3},
        {type:"mc", q:"Why might the author describe Kellogg as generous?", options:["He gave money to people.","He made a lot of money making cereal.","He invented something others needed.","He discovered breakfast flakes by mistake."], correct:0},
        {type:"open-table", q:"Write major events in Kellogg's life. Write them in order they occurred.", rows:[
          {label:"Event 1", given:"Kellogg was born on April 7, 1860, in Battle Creek, Michigan."},
          {label:"Event 2"},
          {label:"Event 3"},
          {label:"Event 4"},
          {label:"Event 5"},
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
];
