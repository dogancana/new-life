### Which areas did I focus?
- A proper project design/structure in my opinion
- Maintainability of the code by separation of concerns
- Latest ES6 and React features
- A clean UX design
- An authentication flow and how it'd effect the components in the app

### Decisions I made during implementation
- I left out all api/auth related implementations with mocks and timeout methods. If I would implement them, I'd probably create api calls under api folder, chain the promises, get all the data and return similar object
- In project initialization I used create-react-app. I'm not a fan of ejecting and implementing my own solutions as it's providing almost everything you'll need
- I believe typescript needs to be used in every modern frontend projects nowadays

### Would implement following if this would be a production ready project and I spent more than 4 hours
- Unit testing with jest, e2e testing with cypress (at least 90% coverage)
- CI/CD automation with Gitlab or other company solution
- Server side rendering
- Dockerizing the application
- Internationalization
- Actual api calls from different sources
- Actual authentication solution
- Monorepo structure with packaging auth, ui and features parts
- Pre commit/push hooks for testing, linting and prettier
- CMS or post processing for images
- Proper header/footer 
- Authentication for api calls (sharing token from auth provider)
- Proper error handling in view related to authentication and api calls