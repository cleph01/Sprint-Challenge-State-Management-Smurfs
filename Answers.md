1. What problem does the context API help solve?

`Context API` provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Actions` are objects that contain properties related to some action that happens in our apps. Every action object is required to have a type property, which will “inform” the reducer of what action just happened in the app.

`Reducers` ... Dispatched actions are processed by a `reducer` that accepts the previous state and the action and returns the next state of your application.

`Store` Redux has a single immutable state tree (referred to as the store) where all state changes are explicitly handled by dispatching actions. 

The store is known as a 'single source of truth' in Redux because it holds all of the state before and after any changes are made.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Application State` is the paradigm of holding your state at the application level, a.k.a the `store`.  Application State is immutable.  When changes are made to our application state we never write to our store object. We simply clone the state object, modify the clone, and replace the original state with the new copy. We never mutate the original object.

`Component State` ... Most components should simply take in props and render. But, components also offer state, and it is used to store information about the component that can change over time. It usually does this by setState(). In this case, A state change merges new data with old data that is already contained in the state (i.e., this.state).


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is a middleware for Redux. It stands between the `action` and the `reducer` and provides the ability to handle asynchronous operations inside our Action Creators.  Using redux-thunk changes up the action creators to perform async API calls. We can do this because we know that Redux middleware can intercept the normal Redux flow, and do something before actions make it to the reducer



1. What is your favorite state management system you've learned and this sprint? Please explain why!

`Redux` is my favorite state management because it is so Robust, despite the new syntax to learn.
