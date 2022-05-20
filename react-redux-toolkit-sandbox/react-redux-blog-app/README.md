## Creating and using memoizing selector:
When using useSelector with an inline selector, a new instance of the selector is created whenever the component is rendered.
// This works as long as the selector does not maintain any state. However, memoizing selectors (e.g. created via createSelector from reselect) do have internal state, and therefore care must be taken when using them.
// https://react-redux.js.org/api/hooks#using-memoizing-selectors

// .memo() will not let the component to re-render if the prop passed into it does not change.

// We can remove .memo() and use State Normalization instead:

## Normalization State Structure:

A Recommended approach for storing items. No duplication of data. Creates an ID Lookup which means items are store in a lookup table by item ID.

State Structure: { posts: {ids:[1,2,3,..], entities:{'1':{userId:1, id:1, title:..etc}}}}
When you are using Normalized data with redux toolkit the toolkit provides a "createEntityAdapter" API.

### createEntityAdapter" API:

Makes redux slices less complicated and easier to manage. It abstracts more logic from components, has built-in CRUD methods, and has automatic selector generation.

