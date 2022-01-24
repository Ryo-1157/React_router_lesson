import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  const returnTop = () => history.push("/");
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <br />
      <button onClick={onClickBack}>もどる</button>
      <button onClick={returnTop}>トップへもどる</button>
    </div>
  );
};
