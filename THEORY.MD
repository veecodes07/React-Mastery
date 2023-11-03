is Virtual DOM still used today? NO

What is reconciliation?
reconciliation
=> The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Update
=> A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.


Reconciliation versus rendering
The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.


Scheduling
scheduling
the process of determining when work should be performed.
work
any computations that must be performed. Work is usually the result of an update (e.g. setState).



What is a fiber?
We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.


