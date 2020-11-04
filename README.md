# Acme Project

Project link: https://acme-mu.vercel.app/

## Application setup

- Clone the application `git clone https://github.com/enodi/acme.git`

* Open a new tab on your terminal
* Navigate to the application root directory e.g `$ cd acme`
  - run `yarn install` to install project dependencies
  - run `yarn start` to start the react application
* Navigate to the app on your [browser](http://localhost:3000)
* Enjoy!

## Test

To run all tests use the command: `yarn test`

## Discussion

I used the following technologies and tools: html, scss, react, typescript, react-router-dom, node-sass, jest, enzyme-to-json, and enzyme.
I used create-react-app to generate the scaffolding for the application.

### Requirements

#### Using the wireframe, and mock data provided, build a chat screen that does the following:

- displays the users first name and last name
- allow for flagging a conversation (via toggling star icon)
- should allow searching to filter based on the full name

I built a ListItem component to display a user's firstName and lastName. The ListItem component contains other elements such as the star icon, a dummy image, and the time the last message was sent. The star icon allows users flag a conversation by toggling the icon.

The ListItem components is nested within the List component which houses all ListItems(i.e all users details).

I also built a search component that allow users search by full name. Results are filtered based on the search parameter.

### Bonuses

#### Filter based on conversation type

I built a dropdown component that filters results based on the conversation type i.e favourites conversation or all conversations

#### Added a chat environment

I also built a chat component that allows clicking on a user, to enable chatting/sending of messages.

#### Responsive application

I ensured the application is responsive by using media queries to target small and large devices

### Further Enhancements

- Ability to add new users/conversations
- Implement the follow up feature
- All users/conversations shouldn't be displayed at once on the sidebar(limit number of users/conversations to be displayed)
- Ability to remove a conversation from the sidebar
