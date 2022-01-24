import { Link, useHistory } from "react-router-dom";

export const Page404 = () => {
  const history = useHistory();
  const returnTop = () => history.push("/");
  return (
    <div>
      <h1>This Page is not found</h1>
      <button onClick={returnTop}>Topに戻る</button>
    </div>
  );
};
