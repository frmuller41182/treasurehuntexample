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
    instruction: `Head down the road with a colour in the title... (not an answer but a direction Bethnal Green)`,
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
          <h1>Treasure Hunt</h1>
          <p>
            Welcome to the Treasure Hunt! Please read the rules below, form your
            teams, and start tackling the tasks in order.
          </p>
          <h2>Rules</h2>
          <ul>
            <li>
              Winner gets 1 minute head start to get clues from the floor below.
            </li>
            <li>
              Next team leaves 1 minute after previous team has left in the lift
              to floor above, and so on until all teams have left.
            </li>
            <li>Let’s get started and have fun!</li>
          </ul>
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
            Once you’ve completed all tasks and saved all your answers, please
            head back to the starting point and report your findings to the Task
            Master!
          </p>
        </section>
      </main>
    </div>
  );
}
