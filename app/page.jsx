"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

const tasks = [
  {
    id: 1,
    instruction: `Leave LHR16, don’t be a Douce or a Vagabond, head towards ‘the light’ through illumino city. How many light bulbs do you pass?`,
  },
  {
    id: 2,
    instruction: `Be careful when crossing the main road. It can be heart racing. To gain access for the code who do I call?`,
  },
  {
    id: 3,
    instruction: `Keep walking towards the bridge but way before you might need internet access. Be careful what is showing on the wall that is ‘unsafe’`,
  },
  {
    id: 4,
    instruction: `Look up, beyond the bridge and see the sign for TEA… on the way see when The Super Bowl LIX live is screening.`,
  },
  {
    id: 5,
    instruction: `Stop, do not cross the road for Pizza, there is a place on street finder you will be familiar with, it’s mapping is A5, what is it:`,
  },
  {
    id: 6,
    instruction: `Now turn right and head down the Road with a colour in it’s name:`,
  },
  {
    id: 7,
    instruction: `Head to the Overground but not in it. See the signs for Bethnal Green & Liverpool Street? What is the Road called under Rich Mix?`,
  },
  {
    id: 8,
    instruction: `Ignore Braithwaite Street, head straight ahead, it’s called Sclater Street but you might not see the sign… so just go straight. Don’t be tempted by The Cocktail Club, keep moving and no need to TriYoga… Keep focused, keep going forth. What number is Brick Lane Vintage?`,
  },
  {
    id: 9,
    instruction: `Head down brick lane under the bridge. What is the future?`,
  },
  {
    id: 10,
    instruction: `Feet East.  Stand on the Thames Water man hole facing out into the street. What number is behind High Grade Coffee?`,
  },
  {
    id: 11,
    instruction: `Head in that direction then turn right towards Rough Trade... What’s above east end promise?`,
  },
  {
    id: 12,
    instruction: `Walk down this parade and stop at the end, Birkenstocks, what is in progress?`,
  },
  {
    id: 13,
    instruction: `Now at the end of the Parade, turn left and head in the direction of Gucci.  If I was a Tru Man and wanted workspace/event space/market what number do I call? `,
  },
  {
    id: 14,
    instruction: `Walk down that road and on the way (on the right) what can’t you steal? `,
  },
  {
    id: 15,
    instruction: `At the Crossroads, cross over.  Who on Lamb Street finished rebuilding the market?`,
  },
  {
    id: 16,
    instruction: `Ignore where Lambs live and get onto Commercial Street where you will pass Colourful Standard and not stop for a Wax.  And sorry, there is no time to head into Spitalfields market either. But tell me, what’s above suits redefined? `,
  },
  {
    id: 17,
    instruction: `You are so close now… Head right down Brushfield Street.  What 2 things can you exchange above the Corporation of London?`,
  },
  {
    id: 18,
    instruction: `Isy’s maiden name is in between 59 and 57- what is it?`,
  },
  {
    id: 19,
    instruction: `Keep going the clock is ticking and you are so close.  Head towards the elephants. Ignore any Benefits.  What could you discover at the Salon?`,
  },
  {
    id: 20,
    instruction: `Now find your elephant.  What’s the date of birth for Malkia?`,
  },
  {
    id: 21,
    instruction: `Last one… Head towards the goal, turn right. Where you’ll find To be ‘together forever on wheels’ who is this by?`,
  },
  // Add up to 21 tasks as needed
];

export default function Home() {
  const [answers, setAnswers] = useState({});

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

    // Add visual feedback for save
    const saveButton = document.getElementById(`save-button-${id}`);
    if (saveButton) {
      saveButton.textContent = "Saved!";
      setTimeout(() => {
        saveButton.textContent = "Save";
      }, 2000);
    }
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
                style={{ backgroundColor: "#ffffff", color: "#000000" }}
              />
              {[1, 2, 4, 5, 8, 10, 20].includes(task.id) && (
                <div className="clue-box">
                  <label>Clue</label>
                  <input
                    type="text"
                    value={answers[task.id] || ""}
                    readOnly
                    className="input"
                    style={{ backgroundColor: "#f0f0f0", color: "#000000" }}
                  />
                </div>
              )}
              <button
                id={`save-button-${task.id}`}
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
      <style jsx>{`
        .clue-box {
          margin-top: 10px;
        }
        .input {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 4px;
          width: 100%;
          margin-top: 8px;
        }
        .button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
