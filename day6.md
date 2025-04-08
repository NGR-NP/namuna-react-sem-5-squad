# 🧑‍🏫 Day 6: React Events & Handling User Input (3 Hours)

---

## 🔹 HOUR 1: React Events Basics

---

### 1.1 What are Events in React? (10 mins)

> ❓ **What to explain:**

🗣️ **Say this**:

> "Just like in vanilla JavaScript, React also handles browser events like clicks, input changes, or form submissions. But React wraps these native events inside a system called **Synthetic Events**, which helps React handle events in a consistent way across all browsers."

🧠 Bonus analogy:

> "You can think of React events as a wrapper over regular events that makes them behave the same no matter what browser you're using."

---

### 1.2 What is `onClick`? (15 mins)

> ❓ **What does `onClick` do?**

🗣️ **Say this**:

> "`onClick` is an event handler in React that runs a function when the element is clicked. Usually, we use it with buttons to trigger an action, like updating the UI."

> ❓ **Why use arrow functions or function references?**

🗣️ **Say this**:

> "In React, we usually pass either a reference to a function or an arrow function directly in the `onClick`. If you just call the function, it runs immediately, which is not what we want."

Example:

```jsx
<button onClick={handleClick}>Click</button> ✅
<button onClick={handleClick()}>Click</button> ❌ (Runs on load)
```

---

### 1.3 Example: Click Counter (Live Code) (15 mins)

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Click Me</button>;
```

> ❓ **What does `setCount(count + 1)` do?**

🗣️ **Say this**:

> "This tells React to update the `count` value by 1, and when state updates, React re-renders the component."

> ❓ **Why use `useState` for this?**

🗣️ **Say this**:

> "Without state, the app won't know something changed. React uses `useState` to track data that changes over time and trigger UI updates."

---

### 1.4 Practice Task (10 mins)

Task:  
✅ Button to toggle "ON/OFF"  
✅ Button to show/hide a paragraph

🗣️ **While guiding:**

> "This helps you understand how clicks interact with component state. Try toggling a boolean with `setToggle(!toggle)`."

---

## 🔹 HOUR 2: Form Handling & Input Events

---

### 2.1 What is `onChange`? (10 mins)

> ❓ **What does `onChange` do?**

🗣️ **Say this**:

> "`onChange` tracks changes in input fields. Every time the user types, this event is triggered."

> ❓ **Why use `value={state}`?**

🗣️ **Say this**:

> "This turns your input into a **controlled component**, where the input's value is tied directly to your React state."

---

### 2.2 What is `e.target.value`? (5 mins)

🗣️ **Say this**:

> "`e` is the event. `e.target` refers to the HTML input element that triggered the event, and `.value` gives us the current input value."

> 🔍 Show live:

```jsx
onChange={(e) => console.log(e.target.value)}
```

---

### 2.3 What is `onSubmit` + Why use `e.preventDefault()`? (10 mins)

🗣️ **Say this**:

> "`onSubmit` runs when a form is submitted — by clicking submit or pressing Enter. But if we don’t call `e.preventDefault()`, the page will refresh — which we don’t want in a React app."

📌 Show side-by-side:

- Submit with vs. without `e.preventDefault()`

---

### 2.4 Example: Controlled Form with Input (20 mins)

```jsx
const [name, setName] = useState("");
<form
  onSubmit={(e) => {
    e.preventDefault();
    alert(name);
  }}
>
  <input value={name} onChange={(e) => setName(e.target.value)} />
</form>;
```

> ❓ **Why is this useful?**

🗣️ **Say this**:

> "We can control, validate, and use the input value however we want. React lets us build forms that feel super responsive and interactive."

---

### 2.5 Add More Inputs + Live Preview (15 mins)

🗣️ **Guide students**:

> "Add email and message inputs. Display a live preview of the data under the form. You can use `console.log()` or JSX below the form."

🧪 Tip:

```jsx
<p>Hello, {name}</p>
```

---

## 🔹 HOUR 3: Mini Project + Resetting Forms

---

### 3.1 Mini Project: Contact Form (30 mins)

Fields:

- Name
- Email
- Message
- Submit button

**Goals**:

- Use `useState`
- Handle `onChange` for each
- On submit: show alert or console log
- Reset form afterward

> ❓ **How to reset the form?**

🗣️ **Say this**:

> "If you're using state, just set the state variables to `''` after submitting. If you're using uncontrolled inputs, you can use `e.target.reset()`."

```js
setName("");
setEmail("");
setMessage("");
```

---

### 3.2 Conditional Success Message (10 mins)

🗣️ **Say this**:

> "You can show a 'Thanks for submitting' message after form submission using a flag."

```jsx
const [submitted, setSubmitted] = useState(false);
{
  submitted && <p>Thanks!</p>;
}
```

---

### 3.3 Recap & Live Q&A (10 mins)

> ❓ **What to ask your students**:

- What happens when `onClick` is triggered?
- Why is `e.preventDefault()` important?
- What’s the difference between a controlled and uncontrolled component?
- Why is form state useful?

🗣️ **Summarize**:

> "You now know how to respond to user interactions, update state, handle forms, and build interactive UI with React!"

---

### 🎯 Optional Homework

> Create a Signup form with:

- Username, Email, Password
- Submit shows data in an alert
- Inputs reset on submit

---
