"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

const tasks = [
  {
    id: 1,
    instruction: `Leave LHR16, don’t be a Douce or a Vagabond, head towards ‘the light’ through illumino city. How many white bulbs do you pass?`,
  },
  {
    id: 2,
    instruction: `Be careful of the main road. It can be heart racing. To gain access for the code who do I call?`,
  },
  {
    id: 3,
    instruction: `I need internet access but be careful what is unsafe?`,
  },
  {
    id: 4,
    instruction: `Look up the sign for TEA and/or head EAST for PIZZA... on the way look out for some fun and find out who is king ...`,
  },
  {
    id: 5,
    instruction: `Before you arrive for Pizza, A5 is what on street finder?`,
  },
  {
    id: 6,
    instruction: `Head down the road with a colour in the title...`,
  },
  {
    id: 7,
    instruction: `Before you get to the overground what is under rich mix?`,
  },
  {
    id: 8,
    instruction: `Head down Sclater Street don’t stop for a cocktail or be healthy and try yoga. What number is brick lane vintage?`,
  },
  {
    id: 9,
    instruction: `Head down brick lane under the bridge. What is the future?`,
  },
  {
    id: 10,
    instruction: `Keep on going until you get to the brewery and you’re 93 feet east. If you’re stood on Thames water what number is behind high grade coffee?`,
  },
  {
    id: 11,
    instruction: `Head in that direction then turn right towards rough trade... What’s above east end promise?`,
  },
  {
    id: 12,
    instruction: `Pass rough trade and head towards the space invader - what’s in progress?`,
  },
  {
    id: 13,
    instruction: `Pass the pavilion and head in the direction of Gucci - if I want a work space/event space/market what number do I call?`,
  },
  {
    id: 14,
    instruction: `Turn right down Hanbury street - what can’t you steal?`,
  },
  {
    id: 15,
    instruction: `At the crossroads who finished rebuilding the market?`,
  },
  {
    id: 16,
    instruction: `Head down commercial street pass the colourful standard but be careful crossing the road to do so… you don’t have time to head into the market. What’s above suits redefined?`,
  },
  {
    id: 17,
    instruction: `Going down Bush Field street - what 2 things can you exchange?`,
  },
  {
    id: 18,
    instruction: `Isy’s maiden name is in between 59 and 57- what is it?`,
  },
  {
    id: 19,
    instruction: `Don’t get diverted by the traffic and keep on going towards the elephant - what could you discover?`,
  },
  {
    id: 20,
    instruction: `What’s the date of birth of Malkia?`,
  },
  {
    id: 21,
    instruction: `Almost at the end… Head towards to goat… and turn right.. where you’ll find To be ‘together forever on wheels’ who is this by?`,
  },
  // Add up to 21 tasks as needed
];

export default function Home() {
  const [answers, setAnswers] = useState({});

  // Run effect only once on mount by using an empty dependency array
  useEffect(() => {
    const savedAnswers = {};
    tasks.forEach((task) => {
      const saved = localStorage.getItem(`answer-${task.id}`);
      if (saved) savedAnswers[task.id] = saved;
    });
    setAnswers(savedAnswers);
  }, []);

  const handleSave = (id, value) => {
    localStorage.setItem(`answer-${id}`, value);
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="container">
      <Head>
        <title>Treasure Hunt</title>
        <meta name="description" content="Team building Treasure Hunt" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="main">
        <section className="section">
          <h1>Welcome to the UKI Partner Treasure Hunt Adventure! 🗺️✨</h1>
          <br></br>
          <p>
            You’ve already embarked on an exciting journey with us, and now it's
            time to dive into the next thrilling chapter! The Skill Showdown has
            set the stage, putting you in either a winning position or ready to
            make a comeback. Get ready to unleash your inner explorer as you
            race toward the <b>Final Destination!</b> Here, you will face the
            ultimate challenge: <b>Crack The Code!</b> Gather your team, sharpen
            your wits, and let the hunt begin! Adventure awaits! 🌟🔍🏆
          </p>
          <br></br>
          <h2>Tenets</h2>
          <ul>
            <li>
              Team Spirit: "Together we thrive, because there's no 'I' in team!"
            </li>
            <li>
              Safety First: "Adventure safely—your well-being is our treasure!"
            </li>
            <li>
              Speed and Precision: "Race with purpose—speed plus accuracy wins
              the day!"
            </li>
            <li>
              Enjoyment: "Savor every moment—let's enjoy the ride together!"
            </li>
          </ul>
          <br></br>
          <h2>Rules</h2>
          <h3>🎉 Let the Adventure Begin! 🎉</h3>
          <ul>
            <li>
              <b>Meet-Up Spot:</b> Join us behind the reception area, the Amazon
              Music DJ booth side of the building
            </li>
            <li>
              <b>Head Start for Champions:</b> The winning team from the Skill
              Showdown will kick things off with a <b>5-minute head start!</b>
            </li>
            <li>
              <b>Timing is Key:</b> Following teams will set off every 2 minutes
              after that. Keep your eyes on the clock!
            </li>
            <li>
              <b>Emergency Help:</b> If you need assistance, you have the Task
              Master’s phone number: <b>07717 899007</b>. Use it wisely!
            </li>
            <li>
              <b>One Lifeline:</b> You can call that number <b>once</b> if
              you're stuck on a question, but remember, only the Team Leader can
              make that call!
            </li>
            <li>
              <b>Good Luck!:</b> May the best team win, and most importantly,{" "}
              <b>enjoy the ride!</b>
            </li>
          </ul>
          <br></br>
          <h2>⏰ Final Cut-Off</h2>
          <p>
            Make sure to return by <b>6:30 PM</b> at the venue.
          </p>
          <br></br>
          <h2>How to Play: The Adventure Awaits! 🚀</h2>
          <p>
            To reach the <b>Final Destination</b>, you’ll need to solve a series
            of clues that lead the way! 🕵️‍♂️🔍 But that's not all—your mission is
            to <b>Crack The Code!</b> Some of the clues will reveal important
            numbers you’ll need to collect. Once you have those numbers, you’ll
            need to perform a calculation to uncover the <b>final code!</b>{" "}
            Remember, winning isn’t just about speed or answering the clues
            correctly; it’s also about cracking that code! So gear up for an
            exhilarating challenge, and good luck! We can’t wait to see you on
            the other side! 🌟🏆
          </p>
        </section>

        <section className="section">
          <h2>Task Master: Isy</h2>
          <h3>Teams</h3>
          <div className="teams">
            <div className="team">
              <h4>Team #1</h4>
              <ul>
                <li>Carina</li>
                <li>Jaco</li>
                <li>James</li>
                <li>Victoria</li>
                <li>Lorna</li>
              </ul>
            </div>
            <div className="team">
              <h4>Team #2</h4>
              <ul>
                <li>George</li>
                <li>Nataly</li>
                <li>Simon</li>
                <li>Sophie G</li>
                <li>Dhana</li>
              </ul>
            </div>
            <div className="team">
              <h4>Team #3</h4>
              <ul>
                <li>Iain</li>
                <li>Carlos</li>
                <li>David</li>
                <li>Lucia</li>
                <li>Nishant</li>
              </ul>
            </div>
            <div className="team">
              <h4>Team #4</h4>
              <ul>
                <li>Scott</li>
                <li>Sander</li>
                <li>Helena</li>
                <li>Sophie M</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Tasks</h2>
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <p>
                <strong>Task {task.id}:</strong> {task.instruction}
              </p>
              <input
                type="text"
                value={answers[task.id] || ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [task.id]: e.target.value }))
                }
                placeholder="Your answer"
                className="input"
              />
              <button
                onClick={() => handleSave(task.id, answers[task.id] || "")}
                className="button"
              >
                Save
              </button>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>Final Instruction</h2>
          <p>
            Head to market street and let’s meet at The Players Social for
            drinks, food, music and prizes Go the photobooth and get a team
            photo!
          </p>
          <br></br>
          <p>
            {" "}
            <b>Address: 1 Crispin Place, Spitalfields, London, E1 6DW</b>
          </p>
        </section>
      </main>
    </div>
  );
}
