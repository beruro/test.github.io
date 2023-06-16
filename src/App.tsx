import { css } from "@emotion/css";
import CounterPage from "Counter_page";
const App = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <CounterPage></CounterPage>
        {/* Edit <code>src/App.tsx</code> and save to reload. */}
      </div>
    </div>
  );
};

export { App };
