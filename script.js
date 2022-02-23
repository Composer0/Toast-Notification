const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Hey there',
    'What are you doing?',
    'Finally, a friend',
    'Why are you ignoring me',
    'Where\'s is the avocado?'
    // \' allows for apostrophes to be inserted into JavaScript.
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    // null is used to set a value to message and type for later on in our code when we are trying to get specific values for our random messages. The null function states that the item does not exist so when our code tries to gather the information to decide if or else it will automatically default to our else statement in order to generate the randomMessage and randomType for the notification.
    const notif = document.createElement('div')
    notif.classList.add('toast')
// create variable notif by creating a div. Command the function to also add the class of toast to the div.
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
// set the inner text of the div class='toast' to one of the random messages. refer to line 29.
    toasts.appendChild(notif)
    // toasts is the id for the div. Append means to add on. We are using this function to add the now defined notif variable of div class='toast' with random innertext into the toasts div.

    setTimeout(() => {
        notif.remove()
    }, 3000)
// remove notification after 3 seconds.
}
function getRandomMessage () {
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType () {
    return types[Math.floor(Math.random() * types.length)]
}