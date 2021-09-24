# React Typing Speed test
A typing speed program created using React, Node, Express and PostgreSQL.

This Single Page Application displays a collection of 5, 20 or 30 randomised paragraphs fetched from the Express back-end API and has an option of 1, 3 or 5 minutes.

The timer starts on the users first key stroke.


## 🛠️ Built with
- Node.JS
- React
- Styled Components
- Express
- PostgreSQL


## 🎨 Designed with
- Designed on Figma
- Colour pallete from Adobe Color


## 📐 Planning
- Planned and wrote the algorithim to determine an accurate WPM and Accuracy
- Researched other typing speed games to see what features they had


## 👾 Try it out
- [On Heroku](https://enigmatic-springs-07407.herokuapp.com/)

## 📥 Or clone the repo
Clone the repo down by copying and pasting the below in your chosen directory then download it's dependencies
```
# cloning the repo:
git clone https://github.com/TypeSammy/typing_speed.git

# installing dependencies
# npm install
```

## 🐛 Bugs
- On text area auto scroll, if back spaced twice the scroll will go back up, down then up again


## 🌱  Future updates
- Add a score board feature where users can either enter their own name, or a randomly generated name from an API.
- The score board will display top 10 users with the highest WPM count.

## 📸 Screenshot
![](https://github.com/TypeSammy/typing_speed/blob/main/client/public/typing-speed.png)

***

## 💫 My experience
The biggest hurdle was the creation of the set interval timer. I found that the state variable was caching, causing the `setInterval` timer to go down by 1 or 2 and not further.

To combat this issue, a new variable was created using the state as a value, and within the `setInterval` function, I mutate that variable and setState to the new mutated value.

Example not working snippet:
```
const [state, setState] = useState(300)
const exampleFunction = () => {
    if (!isTimerOn && remainingTime > 0) {
    let id = setInterval(() => {
      setState(-1)
    }, 1000)
  }
}
```

Example working code snippet:
```
const [state, setState] = useState(300)
const exampleFunction = () => {
  let remainingTime = state
    if (!isTimerOn && remainingTime > 0) {
    let id = setInterval(() => {
      startTime--
    }, 1000)
  }
}
```

## 🌟 Show your support
Give this a star to show your support.

## 📬 Contact me on
- [LinkedIn](https://www.linkedin.com/in/samantha-gold-dev/)
- [E-mail](mailto:typesammy@gmail.com)